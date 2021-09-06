const Koa = require('koa')
const parser = require('koa-bodyparser')
const Router = require('koa-router');
const cors = require('koa2-cors');
const crypto = require('crypto')
const OSS = require('ali-oss');
const conf = require('./config');
const { STS } = require('ali-oss');
const fs = require('fs');
const path = require('path');
const catchError = require('./err/exception')
const static = require('koa-static')
const opn = require('opn');

const app = new Koa()
const router = new Router()
app.use(static(path.join(__dirname, './static')))
app.use(cors());
app.use(parser())
app.use(catchError)
const errors = require('./err/http-exception')
global.errs = errors

let client1 = new OSS({
    region: conf.region,
    accessKeyId: conf.AccessKeyId,
    accessKeySecret: conf.AccessKeySecret,
    bucket: conf.bucket
});

// 获取临时凭证
router.get('/sts', async (ctx) => {
    let policy;
    if (conf.PolicyFile) {
        policy = fs.readFileSync(path.resolve(__dirname, conf.PolicyFile)).toString('utf-8');
    }
    const client2 = new STS({
        accessKeyId: conf.AccessKeyId,
        accessKeySecret: conf.AccessKeySecret
    });
    try {
        let result = await client2.assumeRole(conf.RoleArn, policy, conf.TokenExpireTime)
        ctx.body = {
            AccessKeyId: result.credentials.AccessKeyId,
            AccessKeySecret: result.credentials.AccessKeySecret,
            SecurityToken: result.credentials.SecurityToken,
            Expiration: result.credentials.Expiration,
            region: conf.region,
            bucket: conf.bucket
        }
    } catch (e) {
        console.log(e);
        throw new global.errs.AuthFailed()
    }

});
// 下载签名url 
router.get('/oss/download', async (ctx, next) => {
    let fileName = ctx.query.fileName
    try {
        let url = client1.signatureUrl(fileName, { expires: 100 });
        ctx.body = url
    } catch (e) {
        console.log(e)
        throw new global.errs.HttpException('下载链接获取失败')
    }
})

// 上传签名
router.get('/oss/upload', async (ctx) => {
    // 注意根目录为'' 这里的dirPath表示当前bucket下的test文件夹
    console.log('/oss/upload')
    const dirPath = 'test/'
    let end = new Date().getTime() + 300000
    let expiration = new Date(end).toISOString()
    let policyString = {
        expiration,
        conditions: [
            ['content-length-range', 0, 1048576000],
            ['starts-with', '$key', dirPath]
        ]
    }
    policyString = JSON.stringify(policyString)
    const policy = Buffer.from(policyString).toString('base64')
    const signature = crypto.createHmac('sha1', conf.AccessKeySecret).update(policy).digest('base64')
    ctx.body = {
        OSSAccessKeyId: conf.AccessKeyId,
        host: conf.host,
        policy,
        signature,
        saveName: end,
        dir: dirPath
    }
})

// 文件列表
router.get('/oss/list', async (ctx, next) => {
    try {
        let result = await list();
        if (result.res.status === 200) {
            ctx.body = result.objects
        }
    } catch (e) {
        console.log(e)
        throw new global.errs.HttpException('获取文件列表失败')
    }
})
// 删除文件
router.get('/oss/delete', async (ctx, next) => {
    let fileName = ctx.query.fileName
    try {
        let result = await client1.delete(fileName);
        ctx.body = result
    } catch (e) {
        console.log(e);
        throw new global.errs.HttpException('文件删除失败')
    }
})
// 判断文件是否存在
router.get('/oss/fileExist', async (ctx, next) => {
    let fileName = ctx.query.fileName
    let res = await fileExist(fileName)
    if (res === true) {
        ctx.body = {
            statusCode: 200
        }
    } else {
        ctx.body = {
            statusCode: 404
        }
    }

})
// oss 发给 服务器的回调
router.post('/alioss/callback', async (ctx, next) => {
    console.log('/alioss/callback')
    console.log(ctx.request.body)
    ctx.body = {
        msg: 'ok'
    }
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(8080, () => {
    console.log('app is runing on 8080')
    opn("http://localhost:8080")
})


async function list() {
    try {
        // 不带任何参数，默认最多返回1000个文件。
        let list = await client1.list();
        return list
    } catch (e) {
        console.log(e);
    }
}
async function fileExist(fileName) {
    try {
        let result = await client1.get(fileName)
        if (result.res.status == 200) {
            return true
        }
    } catch (e) {
        if (e.code == 'NoSuchKey') {
            return false
        }
    }
}