import axios from 'axios'
import { http } from '@/utils/http'
import Cookie from 'js-cookie'

const APPID = 'wxc3fd0a2535104a35'
const REDIRECT_URI = 'http://localhost:5173/#/home'
const SCOPE = 'snsapi_userinfo'
const STATE = 'success'
const wechatRedirectUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}&state=${STATE}#wechat_redirect`


// const TOKEN_INFO = 'TOKEN_INFO'
// export type wechatToken = {
//   access_token: string
//   expires_in: number
//   refresh_token: string
//   openid: string
//   scope: string
// } | null

const USER_INFO = 'USER_INFO'
export type wechatUserInfo = {
  openid: string
  nickname: string
  headimgurl: string
  unionid?: string
  province: string
  city: string
  country: string
  sex: number
} | null


export function saveUserInfo(data: wechatUserInfo) {
  Cookie.set(USER_INFO, JSON.stringify(data), { expires: 7 })
}
export function getUserInfo() {
  const userInfo = Cookie.get(USER_INFO) || ''
  const _userInfo: wechatUserInfo = JSON.parse(userInfo)
  if (_userInfo) return _userInfo
  return null
}

// 客户端只能调用回调服务器获取信息
export function openWechatAccessPage() {
  window.open(wechatRedirectUrl)
}

export function sendAuthCodeToCallbackServer(code: any) {
  return http.request({
    url: '/send/code',
    method: 'get',
    params: { code },
  })
}
export function getUserInfoFromCallbackServer(openid: string) {
  return http.request({
    url: '/get/userInfo',
    method: 'get',
    params: { openid },
  })
}


//判断是否是微信
export const isWeChatEnv = () => {
  const ua = navigator.userAgent.toLowerCase()
  return ua.match(/MicroMessenger/i)
}
