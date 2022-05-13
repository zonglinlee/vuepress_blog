---
title: h5照片上传
--- 

## h5 capture属性

`accept` 表示打开的系统文件目录，`capture` 表示的是系统所捕获的默认设备，`camera`：照相机；`camcorder`：摄像机；`microphone`
：录音，其中还有一个属性multiple，支持多选，当支持多选时，multiple优先级高于capture，所以只用写成：

``` html
<input type="file" accept="image/*" capture="camera">
<input type="file" accept="video/*" capture="camcorder">
<input type="file" accept="audio/*" capture="microphone">
```

### uni.chooseImage实现

@[code js](../_code/js_practice/h5_image_upload/imgSelector.js)

### 参考链接

- [uni.chooseImage](https://github.com/dcloudio/uni-app/blob/master/src/platforms/h5/service/api/media/choose-image.js)
- [HTML Media Capture Examples](http://anssiko.github.io/html-media-capture/)
- [www.w3.org](https://www.w3.org/TR/html-media-capture/#dfn-media-capture-mechanism)
- [h5-capture](https://juejin.cn/post/6844903689769975816)
- [h5拍照调用相机和选择图库同时存在ios、安卓的兼容问题](https://juejin.cn/post/6847902215546372110#heading-8)

## 浏览器 BOM api `MediaDevices.getUserMedia()`

### H5部署后navigator获取不到mediaDevices

由于浏览器的安全策略导致的，有下面三种情况是可以调起设备的，也就是 `navigator.mediaDevices` 不为 `undefined`

- 地址为 `localhost://` 访问时
- 地址为 `https://` 时
- 为文件访问 `file://`

所以本地调试需要搭建 https 环境调试

### vue 代码

@[code js](../_code/js_practice/h5_image_upload/getUserMedia.vue)

### 参考链接

- [getUserMedia (Selfie) Full Screen on Mobile](https://stackoverflow.com/questions/62538271/getusermedia-selfie-full-screen-on-mobile)
- [getUserMedia() - selecting rear camera on mobile](https://stackoverflow.com/questions/52812091/getusermedia-selecting-rear-camera-on-mobile)
- [H5部署后navigator获取不到mediaDevices](https://blog.csdn.net/zf2014122891/article/details/108753502)
