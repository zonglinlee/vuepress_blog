---
title: wordpress部署
---

## 安装注意事项

安装 php php-fpm php-mysql,安装过程中注意有没有报错信息

- Ubuntu 18 上默认安装 php7.2, php 会默认自动安装 apache2
- php-fpm,是 PHP 对 Web Server(nginx 或者 Apache2) 提供的 FastCGI 协议的接口程序，额外还提供了相对智能一些任务管理。 Wordpress是 php 动态网站，当客户端请求后缀名为 .php
  的文件时，nginx不能直接解析，而是需要交给 php-fpm 解析后返回客户端。
- php-mysql, 这个是 php 用来连接mysql的，php安装的时候没有默认安装这个

```shell
apt list | grep php
apt install php
apt install php-fpm
apt install php-mysql
```

## 配置 php-fpm

```shell
# 查看 php-fpm 服务文件
systemctl list-unit-files |grep fpm
# 查看 php-fpm 打开的文件
systemctl status php7.2-fpm # 查看状态 并 获取 pid
lsof -p fpm-pid # 查看 fpm 服务的监听端口
# 查看配置文件有效信息（过滤注释）
grep -v ^\; /etc/php/7.2/fpm/php-fpm.conf | grep -v ^$
grep -v ^\; /etc/php/7.2/fpm/pool.d/www.conf | grep -v ^$
```

在`/etc/php/7.2/fpm/pool.d/www.conf`路径下，php-fpm 配置默认开启的是socket监听，

```shell
listen = /run/php/php7.2-fpm.sock
```

这里我们前面加分号注释掉 socket 监听，开启 tcp 监听，其他的配置无需更改

```shell
;listen = /run/php/php7.2-fpm.sock
listen = 127.0.0.1:9000
```

修改配置文件之后需要重启 php-fmp 服务，这里有坑，可以查看到 9000 端口在被 php-fpm 监听，但服务状态是 inactive，所以服务启动成功与否不能靠端口监听来判断

```shell
# 重启服务
systemctl restart php7.2-fpm
systemctl status php7.2-fpm
# 查看 9000 端口监听情况
lsof -i:9000
```

## 配置 nginx

nginx配置中可以直接将php文件交给 php-fpm 处理，或者nginx也可以代理到 Apache 服务器，由 Apache web server 交给 php-fpm 处理 php后缀的文件，我们这里直接由nginx交给
php-fpm 解析

```text
server {
    listen       8082;
    server_name  your_server_ip_address;

    access_log  /var/log/nginx/wordpress.access.log  main;
    error_log   /var/log/nginx/wordpress.error.log;

    location / {
        root   /wordpress/;
        index  index.php;
    }

    error_page   500 502 503 504  /50x.html;

#     proxy the PHP scripts to Apache listening on 127.0.0.1:80

#     location ~ \.php$ {
# 	    root /wordpress;
#         proxy_pass   http://127.0.0.1;
#     }

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    location ~ \.php$ {
	    root /wordpress;
	    include fastcgi_params;
	    # fastcgi_pass unix:/run/php/php7.2-fpm.sock;
	    fastcgi_pass 127.0.0.1:9000;
	    fastcgi_index index.php;
	    fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
        # fastcgi_param  SCRIPT_FILENAME /wordpress$fastcgi_script_name;
    }
}
```

## 安装 WordPress

在以上配置都做好之后，可以尝试访问 `http://wordpress-blog-server:8082/wp-admin/install.php`,如果页面可以正常访问，说明已经可以解析php文件了，如果页面显示 php
相关错误，可以通过以下方法来分析错误

在你的WordPress根目录下新建一个 phpinfo.php
文件，文件内容如下，然后浏览器访问`http://wordpress-blog-server:8082/phpinfo.php`，这样可以查看php相关配置信息以及所安装的模块信息

```php
<?php
phpinfo();

$link = mysqli_connect('localhost', 'mysql_username', 'mysql_login_password');
if (!$link) {
die('Could not connect: ' . mysqli_error());
}
echo 'Connected successfully';
mysqli_close($link);
?>

```

由于我安装的是 mysql8.0，默认的密码验证为 caching_sha2_password, 当前 PHP 版本中所带的 mysqlnd 无法支持这种验证 ，而 PHP 默认的是 mysql_native_password
,需要更改用户密码验证方式

```sql
use mysql;
select user,host,plugin from user;
ALTER USER 'username'@'host' IDENTIFIED WITH mysql_native_password BY 'your_new_password';
flush privileges;
```

## Wordpress相关

- [中文支持](https://cpury.com/2861.html)
- [主题安装 ftp 验证问题](https://blog.csdn.net/weixin_43059285/article/details/108013067)
- [使用WordPress站点健康工具](https://www.wbolt.com/installation-failed-could-not-create-directory.html)
- [Wordpress站点基本设置1——主题安装及配置](https://blog.csdn.net/weixin_46062398/article/details/116566840)

## reference

- [WordPress安装指南](https://codex.wordpress.org/zh-cn:%E5%AE%89%E8%A3%85_WordPress)
- [全面了解CGI、FastCGI、PHP-FPM](https://cloud.tencent.com/developer/article/1538240)
- [How to Fix “Your PHP Installation Appears to Be Missing the MySQL Extension Which Is Required by WordPress” Error](https://kinsta.com/knowledgebase/php-installation-missing-mysql-extension-required-by-wordpress/)
- [wordpress连接不上mysql8的解决方案](https://blog.csdn.net/qq_38157825/article/details/108885653)
