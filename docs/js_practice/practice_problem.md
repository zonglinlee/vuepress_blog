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

