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

### lockScreen

`win + L`

### windows C盘清理

https://baiyunju.cc/6196


### windows wsl
```shell
# 查看已安装的 WSL 发行版
wsl --list --verbose
# 或简写：
wsl -l -v

# 设置默认 WSL 发行版
wsl --set-default <发行版名称>
# 例如，将 Ubuntu 设置为默认发行版：
wsl --set-default Ubuntu

# 启动指定的 WSL 发行版
wsl -d <发行版名称>
# 例如，启动 Debian：
wsl -d Debian

# 停止 WSL 发行版
wsl --terminate <发行版名称>
# 例如，停止 Ubuntu：
wsl --terminate Ubuntu

# 卸载 WSL 发行版
wsl --unregister <发行版名称>
# 例如，卸载 Debian：
wsl --unregister Debian

# 设置 WSL 默认版本
wsl --set-default-version <版本号>
# 例如，设置默认版本为 WSL 2：
wsl --set-default-version 2

# 将指定发行版转换为 WSL 2
wsl --set-version <发行版名称> <版本号>
# 例如，将 Ubuntu 转换为 WSL 2：
wsl --set-version Ubuntu 2

# 关闭所有 WSL 发行版
wsl --shutdown

# 查看 WSL 状态
wsl --status

# 导出 WSL 发行版
wsl --export <发行版名称> <导出路径>.tar
# 例如，将 Ubuntu 导出到 D:\ubuntu.tar：
wsl --export Ubuntu D:\ubuntu.tar

# 导入 WSL 发行版
wsl --import <发行版名称> <安装路径> <导出路径>.tar
# 例如，将 D:\ubuntu.tar 导入到 D:\wsl\ubuntu：
wsl --import Ubuntu D:\wsl\ubuntu D:\ubuntu.tar

# 在 WSL 中运行单个命令
wsl <命令>
# 例如，在 WSL 中运行 ls 命令：
wsl ls

# 在指定发行版中运行命令
wsl -d <发行版名称> <命令>
# 例如，在 Debian 中运行 ls 命令：
wsl -d Debian ls

# 在 WSL 中访问 Windows 文件
# WSL 可以直接访问 Windows 文件系统，路径为 /mnt/。例如：
cd /mnt/c/Users/YourUsername

# 在 Windows 中访问 WSL 文件
# WSL 文件系统可以通过 \\wsl$ 访问。在文件资源管理器中输入：
\\wsl$

# 查看 WSL 帮助
wsl --help
```
### 参考链接

- [Windows 批处理 (cmd/bat) 常用命令小结](https://wsgzao.github.io/post/windows-batch/)
- [Windows 命令-微软官网](https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands)
