<template>
  <div @click="menuClick">扫一扫</div>
</template>
<script>
import WX from "weixin-js-sdk"
import {getWXconfig} from "@/src/api/wx.js"

export default {
  data() {
    return {};
  },
  methods: {
    async initWx() {
      let url = window.location.href.split("#")[0]
      let res = await getWXconfig({url}) // 获取 appId timestamp nonceStr signature
      this.configWX(res)
    },
    menuClick() {
      this.initWx()
    },
    startScanCode() {
      WX.scanQRCode({
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ['qrCode'], // 可以指定扫二维码还是一维码，默认二者都有
        success: async function (res) {
          // 扫一扫返回的结果
          console.log(res)
        }
      })
    },

    configWX(data) {
      let that = this
      WX.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.nonceStr, // 必填，生成签名的随机串
        signature: data.signature, // 必填，签名
        jsApiList: [ // 必填，需要使用的JS接口列表
          'checkJsApi',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo',
          'onMenuShareQZone',
          'hideMenuItems',
          'showMenuItems',
          'hideAllNonBaseMenuItem',
          'showAllNonBaseMenuItem',
          'translateVoice',
          'startRecord',
          'stopRecord',
          'onVoiceRecordEnd',
          'playVoice',
          'onVoicePlayEnd',
          'pauseVoice',
          'stopVoice',
          'uploadVoice',
          'downloadVoice',
          'chooseImage',
          'previewImage',
          'uploadImage',
          'downloadImage',
          'getNetworkType',
          'openLocation',
          'getLocation',
          'hideOptionMenu',
          'showOptionMenu',
          'closeWindow',
          'scanQRCode',
          'chooseWXPay',
          'openProductSpecificView',
          'addCard',
          'chooseCard',
          'openCard'
        ]
      });
      /**wx.error可以返回微信config配置是否成功*/
      WX.error(function (res) {
        console.log("WX----error", arguments)
      });
      WX.ready(function () {
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        console.log("WX----ready", arguments)
        that.startScanCode()
      });
    },
  }
};
</script>

