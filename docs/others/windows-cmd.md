--- 
title: windows CMD 常用命令
---

### 一个简单的`.bat`脚本
```cmd
@echo off
start cmd /k "http-server -c-1 --port 8888"
start http://localhost:8888
```
### 定时关机
1小时后关机：`shutdown -s -t 3600`

### 远程连接
`mstsc`

### windows C盘清理
https://baiyunju.cc/6196

### 参考链接
- [Windows 批处理 (cmd/bat) 常用命令小结](https://wsgzao.github.io/post/windows-batch/)
- [Windows 命令-微软官网](https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands)
