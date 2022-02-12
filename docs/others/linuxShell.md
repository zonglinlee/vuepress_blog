---
title: shell命令
---
## 拼接字符串
shell字符串可以用单引号，也可以用双引号，也可以不用引号。双引号的优点：`双引号里可以有变量，双引号里可以出现转义字符`
```shell
your_name="runoob"
# 使用双引号拼接
greeting="hello, "$your_name" !"
greeting_1="hello, ${your_name} !"
echo $greeting  $greeting_1
```
## shell数组
- 在 Shell 中，用`括号`来表示数组，数组元素用`空格`符号分割开,例如`array_name=(value0 value1 value2 value3)`,`Bash Shell` 只支持一维数组（不支持多维数组），初始化时不需要定义数组大小
- 读取数组元素值的一般格式是：`${数组名[下标]}`
- 使用 @ 符号可以获取数组中的所有元素,如 `echo ${array_name[@]}`
- 在执行 Shell 脚本时，向脚本传递参数，脚本内获取参数的格式为：`$n`。n 代表一个数字，1 为执行脚本的第一个参数，2 为执行脚本的第二个参数，以此类推
- 原生bash不支持简单的数学运算，但是可以通过其他命令来实现，例如 `awk 和 expr`，`expr` 最常用,`表达式和运算符之间要有空格`，例如 `2+2` 是不对的，必须写成 `2 + 2`。完整的表达式要被 `backtic`包括

```shell
#!/bin/bash
val=`expr 2 + 2`
echo "两数之和为 : $val"
```


- `$?` return value of the last executed command.

### [shell变量](https://www.runoob.com/linux/linux-shell-variable.html)
- 定义变量时，变量名不加美元符号 `your_name="runoob.com"`, **变量名和等号之间不能有空格**
- 使用一个定义过的变量，只要在变量名前面加美元符号即可 `echo $your_name` 或者 `echo ${your_name}`，变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界
### [shell字符串](https://www.runoob.com/linux/linux-shell-variable.html)
- 字符串是shell编程中最常用最有用的数据类型，字符串可以用`单引号`，也可以用`双引号`，也可以`不用引号`。
- 单引号字符串的限制：
    - 单引号里的任何字符都会原样输出，单引号字符串中的 **变量** 是无效的；
    - 单引号字串中不能出现单独一个的单引号（对单引号使用转义符后也不行），但可成对出现，作为字符串拼接使用。
- 双引号的优点：
    - 双引号里可以有变量
    - 双引号里可以出现转义字符
### 参考链接
- [shell特殊变量](https://wiki.jikexueyuan.com/project/shell-tutorial/shell-special-variable.html)



https://man.linuxde.net/
https://github.com/nodesource/distributions/blob/master/README.md#deb

### 定时任务
- [crontab](https://www.yiibai.com/linux/crontab.html)
- [一次性定时任务at](https://www.yiibai.com/linux/at.html)

### [ubuntu apt-get命令 阿里云镜像更换](https://developer.aliyun.com/article/704603)
### [jdk安装](https://www.huaweicloud.com/articles/3c4a009f8f0be4ecc9199045bc151f83.html)