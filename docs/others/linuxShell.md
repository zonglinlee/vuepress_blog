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