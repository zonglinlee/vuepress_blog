---
title: samba
---
## 远程服务器(ubuntu)
```shell
apt-get install -y samba samba-client
vim /etc/samba/smb.conf # 445端口被屏蔽，需要更改端口
service smbd restart

# 查看端口使用情况
ps -e | grep smb
netstat -antp | grep <smb pid>

```

## 本地 window10 
添加端口映射

```shell
netsh interface portproxy add v4tov4 listenport=445 listenaddress=127.0.0.1 connectport=yourPort connectaddress=yourServerIp
netsh interface portproxy show all
```
重启电脑并在cmd中运行 `\\127.0.0.1`

## Reference

https://dunwu.github.io/linux-tutorial/linux/ops/samba.html#_1-3-%E9%85%8D%E7%BD%AE-samba
https://blog.csdn.net/Think88666/article/details/118438465
https://www.zhihu.com/question/59814912
