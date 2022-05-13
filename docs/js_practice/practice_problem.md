---
title: 前端常见问题
---

## [前端获取不到后端添加的请求头信息](https://blog.csdn.net/qq_38628046/article/details/109159401)

后端传回的 `response` 中获取不到 `Content-Disposition`,在后台代码中添加以下信息

```js
response.addHeader("Content-Disposition", "attachment;filename=" + fileName + ".xlsx");
response.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
```

## [前端打包至 Nginx 目录文件上传报跨域](https://docs.rackspace.com/support/how-to/limit-file-upload-size-in-nginx/)

By default, NGINX has a upload limit of 1 MB per file. By editing `client_max_body_size`, you adjust the file upload
size. Use the `http`, `server`, or `location` block to edit `client_max_body_size`. Changes to the http block affect all
server blocks (virtual hosts).

```shell
 http {
 client_max_body_size 10M;
 }
```

## `http-server` 启动 `https` 服务

`gitBash` 中就带有 `openssl` 命令行,打开需要执行 `http-server` 命令的目录，在当前目录中使用 `gitBash` 执行 以下命令

```shell
#生成ssl证书
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
#启动静态服务
http-server -S -C cert.pem -o
```

- [How to install OpenSSL in windows 10](https://stackoverflow.com/questions/50625283/how-to-install-openssl-in-windows-10)
- [npm http-server with SSL](https://stackoverflow.com/questions/35127383/npm-http-server-with-ssl)

## Vue2.0 使用 https 启动工程设置

在 `vueconfig.js` 中 配置 `devServer`

```text
devServer: {
    https: true
} 
```
