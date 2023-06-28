---
title: nginx
---

## [Nginx 报 403](https://www.cnblogs.com/kenshinobiy/p/7134120.html)

默认情况下 Nginx 的 user 配置为 `nginx`,将 `nginx` 改为 `root` ,重启 nginx 即可

```shell
# /etc/nginx/nginx.conf
user  nginx;
```

## You need to know

- windows 下 nginx 更改配置不生效原因（可能运行了多个nginx进程，杀掉后重启nginx）

## reference

- [nginx跨域配置1](https://www.cnblogs.com/fnz0/p/15803011.html)
- [nginx跨域配置2](https://www.cnblogs.com/itzgr/p/13343387.html)
- [nginx location 规则(优先级)](https://www.cnblogs.com/xiongzaiqiren/p/16968651.html)
- [nginx 负载均衡](https://www.jb51.net/article/246881.htm)
- [nginx core module](https://nginx.org/en/docs/http/ngx_http_core_module.html#var_server_port)
