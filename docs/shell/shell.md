---
title: shell basic
---

## [Rufus](https://rufus.ie/zh/)

轻松创建 USB 启动盘

## Terminology

- gcc: 是 GNU compiler collection 的缩写，它是 Linux 下一个编译器集合( 相当于 javac )， 是 c 或 c++程序的编译器

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

`apt` 命令是 `Debian Linux `发行版中的 APT 软件包管理工具,使用 apt-get
命令的第一步就是引入必需的软件库,`/etc/apt/sources.list` 是存放这些地址列表的配置文件

### [apt-vs-dpkg-debian](https://www.linuxfordevices.com/tutorials/debian/apt-vs-dpkg-debian)

APT stands for Advanced Packaging Tools used in Debian and its derivatives to manage packages. It is used for
installing, upgrading, configuring, removing packages, and maintaining source repositories. But, Linux has a modular
design philosophy which APT also follows Instead of doing all tasks themselves in a monolithic manner, it employs
several different applications under the hood to do those tasks. For example, it might use curl to download the .deb
source package and all its dependencies and then use dpkg to install it.

dpkg (Debian Package Manager) works under the hood of APT. While APT manages remote repositories and resolves
dependencies for you, it uses dpkg to actually make the changes of installing/removing packages. dpkg on itself cannot
retrieve/download files from remote repositories, nor can it figure out dependencies.

| Functions                                      | APT              | dpkg                                                                    |
|------------------------------------------------|------------------|-------------------------------------------------------------------------|
| Can download packages from remote repositories | YES              | NO                                                                      |
| Can resolve dependencies                       | YES              | NO                                                                      |
| Install local packages                         | YES(using dpkg)  | YES                                                                     |
| Install remote package                         | YES (using dpkg) | NO (users need to manually download a package if they wish to use dpkg) |
| List installed packages                        | YES              | YES                                                                     |

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

- `Ctrl+Z和Ctrl+C`:Ctrl C是强制终止程序的执行并结束进程。而Ctrl
  Z则只是中断任务的执行，但该任务并没有结束，它只是在进程中维持挂起的状态，用户可以使用`fg/bg`操作来继续前台/后台执行该任务
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

## debug Bash

`bash -x scriptName`

## 奇怪的bug

- [telnet命令后无法退出的解决](https://blog.51cto.com/oldboy/588574)

> ctl+] 切换 然后quit退出.

## [linux 防火墙](https://opensource.com/article/18/9/linux-iptables-firewalld)

- firewall: mA firewall is a set of rules. When a data packet moves into or out of a protected network space, its
  contents (in particular, information about its origin, target, and the protocol it plans to use) are tested against
  the firewall rules to see if it should be allowed through
- iptables: is a tool for managing firewall rules on a Linux machine.
- firewalld: is also a tool for managing firewall rules on a Linux machine.

## [ubuntu 不休眠技巧](https://www.5axxw.com/questions/simple/tf1pgm)

```shell
sudo vim /etc/systemd/logind.conf
#suspend -> ignore
#HandleLidSwitch=suspend
HandleLidSwitch=ignore
sudo systemctl restart systemd-logind.service
```

## [ubuntu 静态IP（set static ip）](https://www.freecodecamp.org/news/setting-a-static-ip-in-ubuntu-linux-ip-address-tutorial/)

```shell
cd /etc/netplan
vim 00-installer-config-wifi.yaml
```

wifi config yaml file

```yaml
network:
  version: 2
  wifis:
    wlp6s0:
      access-points:
        CMCC-xiaochenchen:
          password: t63bu9tn*
      addresses: [ 192.168.1.5/24 ]
      # gateway4: 192.168.1.1
      routes:
        - to: default
          via: 192.168.1.1
      nameservers:
        addresses: [ 8.8.8.8,8.8.8.4,114.114.114.114 ]
      dhcp4: no

```

[`gateway4` has been deprecated](https://unix.stackexchange.com/questions/681220/netplan-generate-gateway4-has-been-deprecated-use-default-routes-instead)

## shell 设置变量默认值

test.sh,为`$1` 变量设置默认 tomcat 下载地址

```shell
#!/usr/bin/env bash
downloadUrl=${1:-https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.83/bin/apache-tomcat-9.0.83.tar.gz}
echo "downloadUrl is：${downloadUrl}"

```

执行 `./test.sh http://example.com`,则输出 `downloadUrl is：http://example.com`

## echo 叮咚 声音

```shell
#\a     alert (bell)
echo -e "\a Ding dong\a"
```

## 特殊字符

- `\`: You can use the backslash (\) as last character on line to continue command on next line
- `$IFS`: The Internal Field Separator (IFS)

## [printf vs echo](https://bash.cyberciti.biz/guide/Echo_Command)

## export

By default all user defined variables are local. They are not exported to new processes. Use export command to export
variables and functions to child processes.

```shell
export backup="/nas10/mysql"
echo "Backup dir $backup"
bash #  start a new shell instance, enter: bash
echo "Backup dir $backup"
```

## HERE DOCUMENTS VS HERE STRINGS

here documents:This type of redirection tells the shell to read input from the current source (`HERE`) until a line
containg only word (`HERE`) is seen. HERE word is not subjected to variable name, parameter expansion, arithmetic
expansion, pathname expansion, or command substitution. All of the lines read up to that point are then used as the
standard input for a command. Files are processed in this manner are commonly called here documents. If you do not want
variable name, parameter expansion, arithmetic expansion, pathname expansion, or command substitution quote `HERE` in a
**single quote**

```text
command <<HERE
text1
text2
testN
$varName
HERE
```

Here strings:The `$word` (a shell variable) is expanded and supplied to the command on its standard input
> command <<<$word

字符串拆分小技巧

```shell
# /etc/passwd 
pwd=zonglinlee:x:1000:1000:zonglinlee:/home/zonglinlee:/bin/bash
oldIFS="$IFS"
IFS=:
read -r login password uid gid info home shell <<< "$pwd"
printf "Your login name is %s, uid %d, gid %d, home dir set to %s with %s as login shell\n" $login $uid $gid $home $shell
IFS="$oldIFS"
```

## Bash variable existence check

syntax

```text
${varName?Error varName is not defined}
${varName:?Error varName is not defined or is empty}
```

例子

```shell
#!/usr/bin/env bash
path=${1:?Error command line argument not passed}
echo "backup path is $path"
echo "i am done if \$path is set"
```

## [shell startup Script Execution Order](https://bash.cyberciti.biz/guide/Startup_scripts)

`/etc/profile` - It contains Linux system wide environment and startup programs. This file runs first when a user logs
in to the system. This file also act as a system-wide profile file for the bash shell.
`/etc/profile.d - /etc/profile` calls `/etc/profile.d/`. It is a directory and all scripts in this directory are called
by `/etc/profile` using a `for loop`. This file runs second when a user logs in.
`~/.bash_profile` or `$HOME/.bash_profile` - Finally, the file `~/.bash_profile` is called in the users home directory (
$HOME). This file runs third when a user logs in. This file calls `~/.bashrc` in the users home directory.

## [Changing bash prompt](https://bash.cyberciti.biz/guide/Changing_bash_prompt) [参考](https://www.cyberciti.biz/faq/bash-shell-change-the-color-of-my-shell-prompt-under-linux-or-unix/)
```shell
export PS1="\e[0;31m[\e[m \e[0;33m\u\e[m@\e[0;34m\h\e[m \e[0;34m\w\e[m \e[0;31m]\e[m\$"

```


## [ssh隧道](https://www.lixueduan.com/posts/linux/07-ssh-tunnel/)
## Reference

- [linux command](https://wangchujiang.com/linux-command/)
- [Linux Bash Shell Scripting Tutorial Wiki](https://bash.cyberciti.biz/guide/Main_Page)
- [explain-shell](https://explainshell.com/)
- [https://dunwu.github.io/linux-tutorial/](https://dunwu.github.io/linux-tutorial/)
- [kjyw 快捷运维](https://github.com/aqzt/kjyw)
- [magic-of-sysuse-scripts](https://github.com/eryajf/magic-of-sysuse-scripts)
- [18个Linux Shell脚本经典案例(bilibili)](https://blog.51cto.com/lizhenliang/classify)
- [Ubuntu Post Install Scripts](https://github.com/snwh/ubuntu-post-install)
- [shell_scripts](https://github.com/mritd/shell_scripts)
- [ 运维外挂小工具](https://github.com/eryajf/magic-of-sysuse-scripts)
- [The-art-of-command-line](https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md)
- [pure-bash-bible](https://github.com/dylanaraps/pure-bash-bible)
- [Bash scripting cheatsheet](https://devhints.io/bash)
- [devops-exercises](https://github.com/bregman-arie/devops-exercises)
- [devops-resources | bash](https://github.com/bregman-arie/devops-resources/blob/master/resources/bash.md)
- [devops-exercises | bash](https://github.com/bregman-arie/devops-exercises/blob/master/exercises/shell/README.md)
- [devops-resources | linux](https://github.com/bregman-arie/devops-resources/blob/master/resources/linux.md)
- [devops-exercises | linux](https://github.com/bregman-arie/devops-exercises/blob/master/exercises/linux/README.md)
- [在 Windows 中使用 Cygwin](https://wxsm.space/2021/windows-idea-cygwin/)
- [bash-source-command](https://opensource.com/article/20/6/bash-source-command)



