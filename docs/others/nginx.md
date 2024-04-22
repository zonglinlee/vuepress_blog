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
- [`alias` vs `root`](https://blog.csdn.net/a760352276/article/details/106774599)

```shell
#如果配置文件使用root，那么nginx最终得到的路径就是  配置的文件路径 + 匹配的路径   简单的说就是root旁边的路径在加上location的路径就是nginx要访问的静态资源
#当访问 /download/1.jpg 时候， nginx 会去 /home/download/ 目录下去寻找静态资源(需要拼上 location 中的后缀)
location /download/ {
  root /home/;
}

#如果配置文件使用alias ，nginx 最终得到的路径就是  配置文件的路径，比root少一个location的路径。
#当访问 /download/1.jpg 时候， nginx 会去 /home/download/ 目录下去寻找静态资源
location /download/ {
  alias /home/download/;
}
```

## reference

- [nginx跨域配置1](https://www.cnblogs.com/fnz0/p/15803011.html)
- [nginx跨域配置2](https://www.cnblogs.com/itzgr/p/13343387.html)
- [nginx location 规则(优先级)](https://www.cnblogs.com/xiongzaiqiren/p/16968651.html)
- [nginx 负载均衡](https://www.jb51.net/article/246881.htm)
- [nginx core module](https://nginx.org/en/docs/http/ngx_http_core_module.html#var_server_port)
