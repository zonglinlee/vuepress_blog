---
title: 微信小程序开发
---

## 微信 vs web

- 微信中事件对象没有 `event.preventDefault` 和 `event.stopPropagation`,正常冒泡事件绑定 `bind:tap="handler"`
  ,如果要阻止事件冒泡需要 `catch:tap="handler"`
- [微信小程序本地图片在开发工具显示手机预览不显示](https://blog.csdn.net/weixin_44052055/article/details/119408920):`background-image`
  只能用网络url或者base64 . 本地图片要用image标签才行
- [小程序图片闪烁](https://blog.csdn.net/Shimeng_1989/article/details/127651522)是因为图片没有高度，加载时从最高高度变到(加载完完成，展示图片时)最适合高度。

```css
/*解决方案：全局设置图片自适应*/
image {
    height: auto
}
```

- [微信小程序中安全区域计算和适配](https://developers.weixin.qq.com/community/develop/article/doc/00008a245604d8a1a8ce322345bc13)
- 微信节点高度计算不准确:需要加延迟之后才可以计算准确，`wx.nextTick` 中也不行，不知道为啥

```js
Page({
    onReady() {
        setTimeout(() => {
            this.computeHeight()
        }, 500)
    }
})
```

- 增强滑动效果: `scroll-view` 嵌套在 `swiper` 中

```wxml

<swiper indicator-dots="{{false}}" style="height:{{listHeight}}px"
        autoplay="{{false}}" interval="{{interval}}" vertical="{{true}}" duration="{{1000}}">
    <swiper-item>
        <scroll-view class="list-wrapper" scroll-y="true" style="height: {{listHeight}}px"
                     show-scrollbar="{{false}}" lower-threshold="{{50}}"
                     enhanced="{{true}}" bindscrolltolower="scrollToLower">
        </scroll-view>
    </swiper-item>
</swiper>
```

- 滑动效果(`movable-area` 嵌套 `movable-view`)

```wxml

<movable-area class="ma"
              style="height:{{maHeight}}px;margin-top:{{-mvDistance}}px"
              catch:touchmove="noop">
    <movable-view class="mv" direction="vertical" y="{{mvDistance+(winHeight * 0.5)}}"
                  style="height:{{cardHeight}}px" inertia out-of-bounds
                  friction="{{10}}">

        <view class="content">lots of content</view>
    </movable-view>
</movable-area>
```

`movable-area` 嵌套 `movable-view` 需要给宽度

```css
  .ma {
    width: 100%;
}

.mv {
    width: 100%;
}
```

```js
const app = getApp()
Page({
    data: {
        cardHeight: 0,
        winHeight: app.globalData.sysInfo.windowHeight, // 屏幕尺寸
        maHeight: 0,
        mvDistance: 0
    },
    onReady() {
        setTimeout(() => {
            this.computeHeight()
        }, 500)
    },
    computeHeight() {
        const that = this
        const query = wx.createSelectorQuery()
        query.select('.content').boundingClientRect()
        query.selectViewport().boundingClientRect()
        query.exec(function (res) {
            const {safeArea: {bottom}, screenHeight} = app.globalData.sysInfo
            const safeBottom = screenHeight - bottom
            const [cards, viewPort] = res
            const mvDistance = res[0].bottom - viewPort.height // 隐藏的内容最大移动距离
            const winHeight = that.data.winHeight
            that.setData({
                cardHeight: res[0].height, // 内容滑块高度
                // 滑轨高度 = 内容滑块高度 + 内容滑块底部完全移动到屏幕底部所需要移动的距离 + 屏幕高度*系数(自定义系数（0-1），决定了滑块可以向下滑动多少距离)
                maHeight: res[0].height + mvDistance + winHeight * 0.7,
                mvDistance // margin-top 距离
            })
        })
    }
});

```

## 环境搭建

[webstorm 插件](https://blog.csdn.net/sinat_38184748/article/details/125519382)：WeChat mini program support
