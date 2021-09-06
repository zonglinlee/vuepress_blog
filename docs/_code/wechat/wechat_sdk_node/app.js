const request = require('request');
const axios = require('axios');
const sha1 = require('js-sha1'); // 引入sha1加密算法，需要使用sha1算法生成签名
const Koa = require('koa');
var cors = require('koa2-cors');

const app = new Koa();

const Router = require('@koa/router');
const router = new Router();

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

app.use(cors());
app
    .use(router.routes())
    .use(router.allowedMethods());

router.get('/hello' ,async(ctx)=>{
    ctx.body = 'Hello World'
})

router.post('/yey/wxScan', async(ctx,next) => {
    ctx.body = ctx.request.body;
    const appId = 'wxab39f38b5b26875b';   // 测试公众号的addId
    const appSecret = '3d6a521664c695dfcbb86f404cfd7dda'  // 测试公众号的appSecret
    const url = ctx.body.url; // 初始化jsdk的页面url，如果是单页应用记得截掉url的#部分
    let access_token = ''
    let ticket = ''
    console.log(url)
    try {
        let step1Res = await axios.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${appSecret}`)
        if(step1Res.status === 200){
            access_token = step1Res.data.access_token
        }
        let step2Res = await axios.get(`https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_token}&type=jsapi`)
        if(step2Res.status === 200){
            ticket = step2Res.data.ticket
        }
        const createNonceStr = () => Math.random().toString(36).substr(2, 15);
        const createTimeStamp = () => parseInt(new Date().getTime() / 1000) + '';
        const calcSignature = (ticket, nonceStr, ts, url) => {
            let str = `jsapi_ticket=${ticket}&noncestr=${nonceStr}&timestamp=${ts}&url=${url}`;
            return sha1(str); //使用sha1加密算法
        }
        const nonceStr = createNonceStr(); // 随机字符串
        const timestamp = createTimeStamp(); // 时间戳
        const signature = calcSignature(ticket, nonceStr, timestamp, url);  // 通过sha1算法得到签名
        ctx.response.status=200
        ctx.response.body = {
            nonceStr: nonceStr,
            timestamp: timestamp,
            signature: signature,
            appId,
            code:0
        }
    }catch (e) {
        console.log(e)
    }
});


app.listen(3000);
