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
- 匹配规则
```shell
# proxy_pass的url后边 带"/"会把 /system 给替换掉，新的url里面 /system不存在,
# proxy_pass的url后边 不带"/"则不会把 /system 给替换掉， 新的url里面 /system路径还存在
 location /system {
 	proxy_pass http://127.0.0.1:9000/;
 }

```
## nginx forward proxy （[nginx正向代理模块](https://github.com/chobits/ngx_http_proxy_connect_module?tab=readme-ov-file#install)）

此模块需要额外编译,先下载 `nginx` 源码和 `ngx_http_proxy_connect_module` 源码

```shell
cd /home/download
wget https://nginx.org/download/nginx-1.24.0.tar.gz
tar zxvf nginx-1.24.0.tar.gz
git clone git@github.com:chobits/ngx_http_proxy_connect_module.git
```
打补丁，然后将模块添加后源码编译安装 nginx,注意这个过程需要一次成功，如果报错则移除 nginx源码目录，重新解压nginx源码后再尝试安装
@[code shell](../_code/shell/install_nginx1.24_from_source.sh)

nginx正向代理配置 conf 文件
```shell
server {
    listen                         3127;
    server_name 127.0.0.1;	
    # dns resolver used by forward proxying
    resolver                       114.114.114.114;

    # forward proxy for CONNECT requests
    proxy_connect;
    proxy_connect_allow            443 563;
    proxy_connect_connect_timeout  10s;
    proxy_connect_data_timeout     10s;

    # defined by yourself for non-CONNECT requests
    # Example: reverse proxy for non-CONNECT requests
    location / {
        proxy_pass http://$host;
        proxy_set_header Host $host;
    }
}


server {
    listen                         3128 default;
    server_name 127.0.0.1;	
    # self signed certificate generated via openssl command
    ssl_certificate_key            /etc/nginx/cert/default.key;
    ssl_certificate                /etc/nginx/cert/default.crt;
    ssl_session_cache              shared:SSL:1m;

    # dns resolver used by forward proxying
    resolver                       114.114.114.114;

    # forward proxy for CONNECT request
    proxy_connect;
    proxy_connect_allow            443 563;
    proxy_connect_connect_timeout  10s;
    proxy_connect_data_timeout     10s;

    # defined by yourself for non-CONNECT request
    # Example: reverse proxy for non-CONNECT requests
    location / {
        proxy_pass http://$host;
        proxy_set_header Host $host;
    }
}

```

正向代理测试命令
```shell
curl http://www.baidu.com  -v -x 127.0.0.1:3127
curl https://github.com/ -v -x 127.0.0.1:3128
```



## nginx http 转 https

```shell
server
{
        listen 80;
        server_name foo.com bar.com servername.com;
        return 301 https://$host$request_uri;
}
```
## reference

- [nginx跨域配置1](https://www.cnblogs.com/fnz0/p/15803011.html)
- [nginx跨域配置2](https://www.cnblogs.com/itzgr/p/13343387.html)
- [nginx location 规则(优先级)](https://www.cnblogs.com/xiongzaiqiren/p/16968651.html)
- [nginx 负载均衡](https://www.jb51.net/article/246881.htm)
- [nginx core module](https://nginx.org/en/docs/http/ngx_http_core_module.html#var_server_port)
- [nginx 代理转发 传递真实 ip 地址](https://learnku.com/articles/69306)
- [How to Build NGINX from Source on Ubuntu 20.04 LTS](https://www.alibabacloud.com/blog/how-to-build-nginx-from-source-on-ubuntu-20-04-lts_597793)
