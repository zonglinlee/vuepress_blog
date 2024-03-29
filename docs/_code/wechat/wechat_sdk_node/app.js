const request = require('request')
const axios = require('axios')
const sha1 = require('js-sha1') // 引入sha1加密算法，需要使用sha1算法生成签名
const Koa = require('koa')
var cors = require('koa2-cors')
const serve = require("koa-static");

const {appId, appSecret} = require('./wechatSetting')

const app = new Koa()

const Router = require('@koa/router')
const router = new Router()

const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
app.use(serve("./static"));
app.use(cors())
app.use(router.routes()).use(router.allowedMethods())
// 测试接口
router.get('/wechat/hello', async (ctx) => {
    ctx.body = 'Hello World'
})
// 微信 SDK 初始化
router.post('/wechat/sdkInit', async (ctx, next) => {
    ctx.body = ctx.request.body
    const url = ctx.body.url // 初始化jsdk的页面url，如果是单页应用记得截掉url的#部分
    let access_token = ''
    let ticket = ''
    console.log(url)
    try {
        let step1Res = await axios.get(
            `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${appSecret}`
        )
        if (step1Res.status === 200) {
            access_token = step1Res.data.access_token
        }
        let step2Res = await axios.get(
            `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_token}&type=jsapi`
        )
        if (step2Res.status === 200) {
            ticket = step2Res.data.ticket
        }
        const createNonceStr = () => Math.random().toString(36).substr(2, 15)
        const createTimeStamp = () => parseInt(new Date().getTime() / 1000) + ''
        const calcSignature = (ticket, nonceStr, ts, url) => {
            let str = `jsapi_ticket=${ticket}&noncestr=${nonceStr}&timestamp=${ts}&url=${url}`
            return sha1(str) //使用sha1加密算法
        }
        const nonceStr = createNonceStr() // 随机字符串
        const timestamp = createTimeStamp() // 时间戳
        const signature = calcSignature(ticket, nonceStr, timestamp, url) // 通过sha1算法得到签名
        ctx.response.status = 200
        const res = {
            result: {
                nonceStr: nonceStr,
                timestamp: timestamp,
                signature: signature,
                appId,
                code: 0,
            },
            code: 0,
            message: '签名获取成功',
        }
        ctx.response.body = res
    } catch (e) {
        console.log(e)
    }
})

// 微信授权登录接口测试
router.get('/wechat/sendCode', async (ctx) => {
    const query = ctx.request.query
    const code = query.code
    try {
        const {data} = await getAccessCodeFromCode(code)
        const {access_token, openid} = data
        const {data: userInfo} = await getUserInfoFromWechat(access_token, openid)
        ctx.response.status = 200
        const res = {
            result: userInfo,
            code: 0,
            message: '用户信息获取成功',
        }
        ctx.response.body = res
    } catch (error) {
        console.error(error)
    }
})
// 小程序获取openid
router.post('/wechat/getOpenid', async (ctx) => {
    console.log("post /wechat/getOpenid")
    const query = ctx.request.query
    const code = query.code
    try {
        const {data} = await getAccessCodeFromCodeByMiniProgram(code)
        console.log(111111, data)
        const {session_key, openid} = data
        ctx.response.status = 200
        const res = {
            result: {session_key,openid},
            code: 0,
            message: 'openid 获取成功',
        }
        ctx.response.body = res
        console.log("response:", res)
    } catch (error) {
        console.error(error)
    }
})
// 微信公众平台调用接口
function getAccessCodeFromCode(CODE) {
    const url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appId}&secret=${appSecret}&code=${CODE}&grant_type=authorization_code`
    return axios.get(url)
}
// 小程序登录调用接口 获取openid
function getAccessCodeFromCodeByMiniProgram(CODE) {
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${CODE}&grant_type=authorization_code`
    return axios.get(url)
}
function validateToken(ACCESS_TOKEN, OPENID) {
    const url = `https://api.weixin.qq.com/sns/auth?access_token=${ACCESS_TOKEN}&openid=${OPENID}`
    return axios.get(url)
}

function refreshToken(REFRESH_TOKEN) {
    const url = `https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=${appId}&grant_type=refresh_token&refresh_token=${REFRESH_TOKEN}`
    return axios.get(url)
}

function getUserInfoFromWechat(ACCESS_TOKEN, OPENID) {
    const url = `https://api.weixin.qq.com/sns/userinfo?access_token=${ACCESS_TOKEN}&openid=${OPENID}&lang=zh_CN`
    return axios.get(url)
}

app.listen(5000, () => {
    console.log("app is running in port 5000")
})
