import axios from "axios";
import { http } from "@/utils/http";
import Cookie from "js-cookie";
import "weixin-js-sdk";
import type { Ref } from "vue";
// 微信测试账号申请
// https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login
const APPID = "wxab39f38b5b26875b";
const SECRET = ""; // SECRET 客户端不允许存放
// 内网穿透工具 ngrok ; 如果需要提供 web 服务，需要登录后 设置 ngrok token
const REDIRECT_URI = "https://21df-61-133-217-141.ngrok-free.app/#/Home";
const SCOPE = "snsapi_userinfo";
const STATE = "success";
const encode_redirect_uri = encodeURIComponent(REDIRECT_URI);
const wechatRedirectUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${encode_redirect_uri}&response_type=code&scope=${SCOPE}&state=${STATE}#wechat_redirect`;

const TOKEN_INFO = "TOKEN_INFO";
const USER_INFO = "USER_INFO";
export type wechatToken = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  openid: string;
  scope: string;
} | null;

export type wechatUserInfo = {
  openid: string;
  nickname: string;
  headimgurl: string;
  unionid?: string;
  province: string;
  city: string;
  country: string;
  sex: number;
} | null;

export function saveTokenInfo(data: wechatToken) {
  window.localStorage.setItem(TOKEN_INFO, JSON.stringify(data));
}
export function getTokenInfo() {
  const tokenInfo = window.localStorage.getItem(TOKEN_INFO);
  if (tokenInfo) return JSON.parse(tokenInfo);
  return null;
}

export function saveUserInfo(data: wechatUserInfo) {
  Cookie.set(USER_INFO, JSON.stringify(data), { expires: 7 });
}
export function getUserInfo() {
  // const userInfo = window.localStorage.getItem(USER_INFO);
  const userInfo = Cookie.get(USER_INFO) || null;
  const _userInfo: wechatUserInfo = JSON.parse(userInfo!);
  return _userInfo;
}

// 客户端只能调用回调服务器获取信息
export function openWechatAccessPage() {
  window.open(wechatRedirectUrl);
}
export function sendAuthCodeToCallbackServer(code: any) {
  return http.request({
    url: "/wechat/sendCode",
    method: "get",
    params: { code }
  });
}
export function getUserInfoFromCallbackServer(openid: string) {
  return http.request({
    url: "/get/userInfo",
    method: "get",
    params: { openid }
  });
}

// getAccessCodeFromCode | validateToken | refreshToken | getUserInfoFromWechat 都应该从服务端发起
export function getAccessCodeFromCode(CODE: any) {
  const url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${APPID}&secret=${SECRET}&code=${CODE}&grant_type=authorization_code`;
  return axios(url);
}
function validateToken(ACCESS_TOKEN: string, OPENID: string) {
  const url = `https://api.weixin.qq.com/sns/auth?access_token=${ACCESS_TOKEN}&openid=${OPENID}`;
  return axios.get(url);
}
function refreshToken(REFRESH_TOKEN: string) {
  const url = `https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=${APPID}&grant_type=refresh_token&refresh_token=${REFRESH_TOKEN}`;
  return axios.get(url);
}
export function getUserInfoFromWechat(ACCESS_TOKEN: string, OPENID: string) {
  const url = `https://api.weixin.qq.com/sns/userinfo?access_token=${ACCESS_TOKEN}&openid=${OPENID}&lang=zh_CN`;
  return axios.get(url);
}

export const isWeChatEnv = () => {
  //判断是否是微信
  const ua = navigator.userAgent.toLowerCase();
  return ua.match(/MicroMessenger/i);
};

export type signatureInfo = {
  appId: string;
  timestamp: string;
  nonceStr: string;
  signature: string;
};

// init wechat sdk
export function initWechatSdk(url: string) {
  return http.request({
    url: "/wechat/sdkInit",
    method: "post",
    data: { url }
  });
}
export function configWX(data: signatureInfo, ready: Ref<Boolean>) {
  const { jWeixin: WX } = window;
  WX.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: data.appId, // 必填，公众号的唯一标识
    timestamp: data.timestamp, // 必填，生成签名的时间戳
    nonceStr: data.nonceStr, // 必填，生成签名的随机串
    signature: data.signature, // 必填，签名
    jsApiList: [
      // 必填，需要使用的JS接口列表
      "updateAppMessageShareData",
      "updateTimelineShareData",
      "checkJsApi",
      "onMenuShareTimeline",
      "onMenuShareAppMessage",
      "onMenuShareQQ",
      "onMenuShareWeibo",
      "onMenuShareQZone",
      "hideMenuItems",
      "showMenuItems",
      "hideAllNonBaseMenuItem",
      "showAllNonBaseMenuItem",
      "translateVoice",
      "startRecord",
      "stopRecord",
      "onVoiceRecordEnd",
      "playVoice",
      "onVoicePlayEnd",
      "pauseVoice",
      "stopVoice",
      "uploadVoice",
      "downloadVoice",
      "chooseImage",
      "previewImage",
      "uploadImage",
      "downloadImage",
      "getNetworkType",
      "openLocation",
      "getLocation",
      "hideOptionMenu",
      "showOptionMenu",
      "closeWindow",
      "scanQRCode",
      "chooseWXPay",
      "openProductSpecificView",
      "addCard",
      "chooseCard",
      "openCard"
    ]
  });
  /**wx.error可以返回微信config配置是否成功*/
  WX.error(function () {
    console.log("WX----error");
  });
  WX.ready(function () {
    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    console.log("WX----ready");
    ready.value = true;
  });
}

// 地理围栏算法解析（Geo-fencing）https://www.jianshu.com/p/6044dd1020a2
export function isPtInPoly(ALon: number, ALat: number, APoints: number[][]) {
  let iSum = 0,
    iCount;
  let dLon1, dLon2, dLat1, dLat2, dLon;
  if (APoints.length < 3) {
    return false;
  }
  iCount = APoints.length;
  for (let i = 0; i < iCount; i++) {
    if (i == iCount - 1) {
      dLon1 = APoints[i][0];
      dLat1 = APoints[i][1];
      dLon2 = APoints[0][0];
      dLat2 = APoints[0][1];
    } else {
      dLon1 = APoints[i][0];
      dLat1 = APoints[i][1];
      dLon2 = APoints[i + 1][0];
      dLat2 = APoints[i + 1][1];
    }
    //以下语句判断A点是否在边的两端点的水平平行线之间，在则可能有交点，开始判断交点是否在左射线上
    if ((ALat >= dLat1 && ALat < dLat2) || (ALat >= dLat2 && ALat < dLat1)) {
      if (Math.abs(dLat1 - dLat2) > 0) {
        //得到 A点向左射线与边的交点的x坐标：
        dLon = dLon1 - ((dLon1 - dLon2) * (dLat1 - ALat)) / (dLat1 - dLat2);
        if (dLon < ALon) iSum++;
      }
    }
  }
  if (iSum % 2 != 0) {
    return true;
  }
  return false;
}