---
title: shell basic
---

## ubuntu 软件包管理

`apt` 命令是 `Debian Linux `发行版中的 APT 软件包管理工具,使用 apt-get 命令的第一步就是引入必需的软件库,`/etc/apt/sources.list` 是存放这些地址列表的配置文件

### [apt-vs-dpkg-debian](https://www.linuxfordevices.com/tutorials/debian/apt-vs-dpkg-debian)

APT stands for Advanced Packaging Tools used in Debian and its derivatives to manage packages. It is used for
installing, upgrading, configuring, removing packages, and maintaining source repositories. But, Linux has a modular
design philosophy which APT also follows Instead of doing all tasks themselves in a monolithic manner, it employs
several different applications under the hood to do those tasks. For example, it might use curl to download the .deb
source package and all its dependencies and then use dpkg to install it.

dpkg (Debian Package Manager) works under the hood of APT. While APT manages remote repositories and resolves
dependencies for you, it uses dpkg to actually make the changes of installing/removing packages. dpkg on itself cannot
retrieve/download files from remote repositories, nor can it figure out dependencies.

|  Functions   | APT  | dpkg |
|  ----  | ----  |------|
| Can download packages from remote repositories  | YES | NO   |
| Can resolve dependencies  | YES | NO   |
| Install local packages  | YES(using dpkg) | YES  |
| Install remote package  | YES (using dpkg) | NO (users need to manually download a package if they wish to use dpkg) |
| List installed packages  | YES | YES |

### 安装包格式

- `.deb` 格式: `dpkg -i <下载好的安装包>`
- `.bin` 格式: 直接在命令行中执行该文件既可
- `tar.gz` 格式: 先要通过命令将压缩包解压，然后才能进行编译，继而进行安装

```shell
# 解压
 tar -zxvf FileName.tar.gz
# 配置
 ./configure 
# 编译
 make
# 安装
 make install
```

## Reference

- [https://dunwu.github.io/linux-tutorial/](https://dunwu.github.io/linux-tutorial/)
- [kjyw 快捷运维](https://github.com/aqzt/kjyw)
- [Ubuntu Post Install Scripts](https://github.com/snwh/ubuntu-post-install)
- [shell_scripts](https://github.com/mritd/shell_scripts)
- [ 运维外挂小工具](https://github.com/eryajf/magic-of-sysuse-scripts)
- [The-art-of-command-line](https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md)
- [explain-shell](https://explainshell.com/)
