---
title: mysql_install
---

## ubuntu 安装MySQL

优先采用 apt 命令进行安装

执行如下命令，查找当前 apt source 中的 mysql 安装包


`sudo apt list | grep mysql-server`

如果没有就需要添加相应的 mysql source，参考 [mysql-apt-repo-quick-guide](https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/)

```shell
# 获取 mysql source 配置的可执行文件 .deb 文件，执行之后可以添加 mysql 源
wget https://dev.mysql.com/get/mysql-apt-config_0.8.22-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.22-1_all.deb
sudo apt update
```

## Reference

- [mysql-apt-repo-quick-guide](https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/)
