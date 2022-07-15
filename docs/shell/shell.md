---
title: shell basic
---

## 远程登录 SSH

ssh 配置文件 `/etc/ssh/sshd.config`

### ssh启用root登录

修改配置文件之后重启ssh，`sudo service ssh restart`

```shell
# 修改配置文件
PermitRootLogin yes ##允许root登陆
PasswordAuthentication yes ##允许用密码方式登陆
```

## [Windows上的shell脚本在Linux上执行不了](https://stackoverflow.com/questions/14219092/bash-script-and-bin-bashm-bad-interpreter-no-such-file-or-directory)

problem is with dos line ending. Following will convert it for unix

`dos2unix file_name` NB: you may need to install dos2unix first with **apt install dos2unix**

another way to do it is using sed command to search and replace the dos line ending characters to unix format:

**$sed -i -e 's/\r$//' your_script.sh**

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

## Syntax

### [Array](https://wiki.bash-hackers.org/syntax/arrays)

### [Expansions and substitutions](https://wiki.bash-hackers.org/syntax/expansion/intro)

## man 命令

### [Man doesn't work on Ubuntu 18.04](https://askubuntu.com/questions/1228660/man-doesnt-work-on-ubuntu-18-04)

## Bash 中的任务管理工具

- `Ctrl+Z和Ctrl+C`:Ctrl C是强制终止程序的执行并结束进程。而Ctrl Z则只是中断任务的执行，但该任务并没有结束，它只是在进程中维持挂起的状态，用户可以使用`fg/bg`操作来继续前台/后台执行该任务
- `&`
- `fg` 将后台作业移动到前台终端运行
- `bg`  将前台终端作业移动到后台运行
- `kill` 发送信号到进程, `kill -l`列出所有信号名称,
```shell
vim 1.txt
# 按 Ctrl + Z 挂起任务
vim 2.txt
# 按 Ctrl + Z 挂起任务
jobs -l # 显示当前任务以及 pid
fg %1 # 恢复编辑1.txt
jobs -l 
kill -9 vim-pid
```
## Reference

- [linux command](https://wangchujiang.com/linux-command/)
- [https://dunwu.github.io/linux-tutorial/](https://dunwu.github.io/linux-tutorial/)
- [kjyw 快捷运维](https://github.com/aqzt/kjyw)
- [Ubuntu Post Install Scripts](https://github.com/snwh/ubuntu-post-install)
- [shell_scripts](https://github.com/mritd/shell_scripts)
- [ 运维外挂小工具](https://github.com/eryajf/magic-of-sysuse-scripts)
- [The-art-of-command-line](https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md)
- [explain-shell](https://explainshell.com/)
- [devops-exercises](https://github.com/bregman-arie/devops-exercises)
- [devops-resources | bash](https://github.com/bregman-arie/devops-resources/blob/master/resources/bash.md)
- [devops-exercises | bash](https://github.com/bregman-arie/devops-exercises/blob/master/exercises/shell/README.md)
- [devops-resources | linux](https://github.com/bregman-arie/devops-resources/blob/master/resources/linux.md)
- [devops-exercises | linux](https://github.com/bregman-arie/devops-exercises/blob/master/exercises/linux/README.md)
