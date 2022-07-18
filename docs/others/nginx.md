---
title: nginx
---

## [Nginx 报 403](https://www.cnblogs.com/kenshinobiy/p/7134120.html)

默认情况下 Nginx 的 user 配置为 `nginx`,将 `nginx` 改为 `root` ,重启 nginx 即可

```shell
# /etc/nginx/nginx.conf
user  nginx;
```
