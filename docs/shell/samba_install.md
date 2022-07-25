---
title: samba(文件共享)
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

## 本地 window 10 系统
添加端口映射

```shell
netsh interface portproxy add v4tov4 listenport=445 listenaddress=127.0.0.1 connectport=yourPort connectaddress=yourServerIp
netsh interface portproxy show all
```
重启电脑并在cmd中运行 `\\127.0.0.1`

## Reference

- [Samba 应用](https://dunwu.github.io/linux-tutorial/linux/ops/samba.html)
- [samba更改端口后用windows访问](https://blog.csdn.net/Think88666/article/details/118438465)
- [Windows 10 下如何修改 smb 连接的默认端口(445)](https://www.zhihu.com/question/59814912)
