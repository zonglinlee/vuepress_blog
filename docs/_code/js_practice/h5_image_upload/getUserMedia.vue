<template>
  <div>
    <video id="videoCamera" :width="videoWidth" :height="videoHeight" autoplay></video>
    <canvas style="display:none;" id="canvasCamera" :width="videoWidth" :height="videoHeight"></canvas>

    <button plain @click="setImage()">手动拍照</button>
    <p class="fail_tips">拍照，请正脸面向摄像头</p>
    // 给外面盒子设置宽高，可以限制拍照图片的大小位置范围
    <div class="result_img">
      <img :src="imgSrc" alt class="tx_img" width="100%"/>
    </div>
    <p class="res_tips">效果展示</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 视频调用相关数据开始
      videoWidth: 245,
      videoHeight: 326,
      imgSrc: '',
      thisCancas: null,
      thisContext: null,
      thisVideo: null,
      openVideo: false,
      //视频调用相关数据结束
      postVideoImg: ''// 图片上传后获取的url链接
    }
  },
  mounted() {
    this.getCompetence() //调用摄像头
  },
  methods: {
    postImg() {
      let formData = new FormData()
      formData.append('file', this.base64ToFile(this.imgSrc, 'png'))
      formData.append('flag', 'videoImg')// 额外参数
      // 对应的后台上传图片接口 === app/StudentVideoController/uploadFile
      this.$axios.post('app/StudentVideoController/uploadFile', formData).then(res => {
        // console.log(res);
        if (res.data.code == '00') {
          // 图片文件传至后台 == 获取到该图片的url路径
          this.postVideoImg = res.data.FilePath
          //获得图片的url后，需要做什么
          //做的事情......
        }

      }).catch(error => {
        console.log(error)
      })

    },

    // 调用权限（打开摄像头功能）
    getCompetence() {
      let _this = this
      _this.thisCancas = document.getElementById('canvasCamera')
      _this.thisContext = this.thisCancas.getContext('2d')
      _this.thisVideo = document.getElementById('videoCamera')
      _this.thisVideo.style.display = 'block'
      // 获取媒体属性，旧版本浏览器可能不支持mediaDevices，我们首先设置一个空对象
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {}
      }
      // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
      // 使用getUserMedia，因为它会覆盖现有的属性。
      // 这里，如果缺少getUserMedia属性，就添加它。
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function (constraints) {
          // 首先获取现存的getUserMedia(如果存在)
          let getUserMedia =
              navigator.webkitGetUserMedia ||
              navigator.mozGetUserMedia ||
              navigator.getUserMedia
          // 有些浏览器不支持，会返回错误信息  保持接口一致
          if (!getUserMedia) {//不存在则报错
            return Promise.reject(
                new Error('getUserMedia is not implemented in this browser')
            )
          }
          // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
          return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject)
          })
        }
      }
      const constraints = {
        audio: false,
        video: {
          width: this.videoWidth,
          height: this.videoHeight,
          transform: 'scaleX(-1)',
          facingMode: 'environment'
        }
      }
      navigator.mediaDevices
          .getUserMedia(constraints)
          .then(function (stream) {
            // 旧的浏览器可能没有srcObject
            if ('srcObject' in _this.thisVideo) {
              _this.thisVideo.srcObject = stream
            } else {
              // 避免在新的浏览器中使用它，因为它正在被弃用。
              _this.thisVideo.src = window.URL.createObjectURL(stream)
            }
            _this.thisVideo.onloadedmetadata = function (e) {
              _this.thisVideo.play()
            }
          })
          .catch(err => {
            console.log(err)
          })
    },
    setImage() {
      let _this = this
      // canvas画图
      _this.thisContext.drawImage(_this.thisVideo, 0, 0)
      // 获取图片base64链接
      let image = this.thisCancas.toDataURL('image/png')
      _this.imgSrc = image//赋值并预览图片
      this.postImg() // 绘制完图片调用图片上传接口

    },
    // 关闭摄像头
    stopNavigator() {
      this.thisVideo.srcObject.getTracks()[0].stop()
    },

    // base64 转为 file
    base64ToFile(urlData, fileName) {
      let arr = urlData.split(',')
      let mime = arr[0].match(/:(.*?);/)[1]
      let bytes = atob(arr[1]) // 解码base64
      let n = bytes.length
      let ia = new Uint8Array(n)
      while (n--) {
        ia[n] = bytes.charCodeAt(n)
      }
      return new File([ia], fileName, {type: mime})
    }
  },
  destroyed: function () { // 离开当前页面
    this.stopNavigator() // 关闭摄像头
  }
}
</script>
<style>
.result_img {
  width: 146px;
  height: 195px;
  background: #D8D8D8;
}
</style>
