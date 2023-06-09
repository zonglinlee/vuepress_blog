---
title: 微信sdk本地测试环境搭建
---

## 申请微信测试账号

- 修改本地 host 文件：windows 路径 `C:\Windows\System32\drivers\etc`,将本地 host 改为任意域名，比如`tumbleweed.top`
- [登录微信公众平台](https://mp.weixin.qq.com/), 进入 `开发-开发者工具-公众平台测试账号` 申请测试账号
- 在 `JS接口安全域名修改` 中配置自定义的本地域名 `tumbleweed.top`
- 关注测试号二维码 （如果多人开发，都要关注这个测试账号）

## 安装手机代理软件 (废弃不用：直接使用内网穿透)

由于我们的域名是自定义的假域名，并不存在，所以需要将手机的网络代理到电脑上，由电脑端向微信服务器发送请求

### 安装 charles 并测试 (废弃不用：直接使用内网穿透)

charles 是一款收费软件，下载安装之后，在 `proxy-setting` 中查看 http 代理端口，默认是 `8888`,将手机和电脑接入统一局域网中，打开手机 WiFi 连接，配置手动代理，输入电脑的 IP 地址和代理端口 `8888`

在电脑上启动本地调试服务，注意要运行在 80 端口下面，微信 sdk 只支持(http 80 或者 https 443),比如运行在 `http://tumbleweed.top`,如果使用的是 vue 开发，需要在`vue.config.js`中配置以下字段

```text
   devServer: {
       disableHostCheck: true,
       port:80,
       host:'tumbleweed.top'
   }
```

在手机上访问 `http://tumbleweed.top`,如果能访问成功，则表明代理软件已经配置成功（注意 charles 会弹出确认代理连接操作弹框）

## 服务端代码

@[code js](../_code/wechat/wechat_sdk_node/app.js)

## 前端代码

::: tip
所有需要使用 JS-SDK 的页面必须先注入配置信息，否则将无法调用.（同一个 url 仅需调用一次，对于变化 url 的 SPA 的 web app 可在每次 url 变化时进行调用),url（当前网页的 URL，不包含#及其后面部分）

以微信扫一扫功能为例，每个需要调用扫一扫的页面需要先初始化 SDK，调用后台生成签名接口时需要传入前页面的 url
:::

@[code js](../_code/wechat/wechat_sdk_html/sdk.vue)

## 线上部署配置

### JS 接口安全域名

设置需要调用 js-sdk 的 H5 页面
![JS接口安全域名](../images/wechat/微信公众号安全域名设置.png)

### 微信 IP 白名单设置

通过开发者 ID 及密码调用获取 access_token 接口时，需要设置访问来源 IP 为白名单（初始化 js-sdk 的时候需要后台服务器与微信服务器进行交互，获取 access_token,需要添加后台服务器 ip 至微信公众号白名单中）

目的：为了提高公众平台开发者接口调用的安全性，避免一旦开发者 ID 和密码泄露后给帐号造成损失。对调用“获取 access_token”接口增加 IP 白名单校验：只有将 IP 地址设置为公众号的 IP 白名单，才能成功调用该接口
![JS接口安全域名](../images/wechat/微信SDK服务器白名单设置.png)

## 参考链接

- [微信 SDK 官方文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#1)
- [微信 SDK 官方 demo](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#67)
- [ngrok 内网穿透工具下载](https://ngrok.com/download)

```shell
# Start a tunnel,将内网 3000 端口映射到外网
ngrok http 3000
# 如果需要提供网页服务 需要设置 token
ngrok config add-authtoken <token>
```

- [微信测试账号登录地址](https://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index)
- [10 分钟带你完成微信网页授权&获取用户信息&搭建内网映射测试](https://juejin.cn/post/7012484910082441229)

```shell
# 前后端分离需要配置 nginx 将前后端都代理到 3000 端口
server {
    listen       3000;
    server_name  localhost;

    location /wechat {
        proxy_pass http://localhost:5000; # 后端接口
    }
    location / {
        proxy_pass http://localhost:4000; # 前端页面
    }
}
```
