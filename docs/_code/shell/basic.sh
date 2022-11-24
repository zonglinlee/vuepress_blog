#!/usr/bin/env bash
# shell 变量,赋值号=的周围不能有空格
# 建议：如果变量的内容是数字，那么可以不加引号；
# 如果真的需要原样输出就加单引号；
# 其他没有特别要求的字符串等最好都加上双引号，定义变量时加双引号是最常见的使用场景
url=http://www.baidu.com
url='http://www.baidu.com'
url="http://www.baidu.com"

# 使用变量，在变量名前面加美元符号$即可； 变量名外面的花括号{ }是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界; 推荐给所有变量加上花括号{ }
echo $url
echo ${url}

# 修改变量的值 对变量赋值时不能在变量名前加$，只有在使用变量时才能加$
url=google.com
# 删除变量
unset url

# Shell 中有两种方式可以完成命令替换，一种是反引号` `，一种是$()
# 要注意的是，$() 仅在 Bash Shell 中有效，而反引号可在多种 Shell 中使用
lsResult=`ls -l`
lsResult=$(ls -l)
echo "$lsResult" # 加双引号(推荐)
echo $lsResult   # 不加双引号 换行符会被合并


# 运行 Shell 脚本文件时我们可以给它传递一些参数，这些参数在脚本文件内部可以使用$n的形式来接收，例如，$1 表示第一个参数，$2 表示第二个参数，依次类推
# 这种通过$n的形式来接收的参数，在 Shell 中称为位置参数。
# 变量的名字必须以字母或者下划线开头，不能以数字开头；但是位置参数却偏偏是数字，这和变量的命名规则是相悖的，所以我们将它们视为“特殊变量”
# 如果参数个数太多，达到或者超过了 10 个，那么就得用${n}的形式来接收了，例如 ${10}、${23}。{ }的作用是为了帮助解释器识别参数的边界
# $0	当前脚本的文件名。
# $#	传递给脚本或函数的参数个数。
# $*	传递给脚本或函数的所有参数。
# $@	传递给脚本或函数的所有参数。当被双引号" "包含时，$@ 与 $* 稍有不同
# $?	上个命令的退出状态，或函数的返回值
# $$	当前 Shell 进程 ID。对于 Shell 脚本，就是这些脚本所在的进程 ID。

# 退出状态是一个数字，一般情况下，大部分命令执行成功会返回 0，失败返回 1，这和C语言的 main() 函数是类似的


# 获取字符串长度 ${#string_name}
strLen="hello world!~~"
echo ${#strLen}

# Shell字符串拼接: Shell 中你不需要使用任何运算符，将两个字符串并排放在一起就能实现拼接，非常简单粗暴
name="Shell"
url="http://google.com"
str1=$name$url  # 中间不能有空格 因为当字符串不被任何一种引号包围时，遇到空格就认为字符串结束了，空格后边的内容会作为其他变量或者命令解析
str2="$name $url"  #如果被双引号包围，那么中间可以有空格

# Shell字符串截取(从左边或右边截取) ${string: start :length}   |  ${string: 0-start :length}
# http://c.biancheng.net/view/1120.html
url="c.hello.net"
echo ${url: 2: 6}
echo ${url: 2} # 省略 length，截取到字符串末尾

url="http://c.biancheng.net/index.html"
echo ${url#*:}

# Shell 数组的定义
# 用括号( )来表示数组，数组元素之间用空格来分隔
nums=(1 3 6 88)
ages=([3]=24 [5]=19 [10]=12)
arr=(44 "hello" 99)
nums[5]=77
num3=${nums[3]}
# 使用@或*可以获取数组中的所有元素
echo ${nums[*]}
echo ${nums[@]}

# Shell获取数组长度 ${#array_name[@]} | ${#array_name[*]}
echo ${#nums[*]}
echo ${#nums[@]}
# 拼接数组的思路是：先利用@或*，将数组扩展成列表，然后再合并到一起
# array_new=(${array1[@]}  ${array2[@]}) | array_new=(${array1[*]}  ${array2[*]})
array_new=(${nums[@]} ${arr[*]})

# 使用 unset 关键字来删除数组中元素
unset array_new[1]


# Shell内建命令: 由 Bash 自身提供的命令，而不是文件系统中的某个可执行文件
# 可以使用 type 来确定一个命令是否是内建命令  type cd
# 通常来说，内建命令会比外部命令执行得更快，执行外部命令时不但会触发磁盘 I/O，还需要 fork 出一个单独的进程来执行，执行完成后再退出。
# 而执行内建命令相当于调用当前 Shell 进程的一个函数


# read 是 Shell 内置命令，用来从标准输入中读取数据并赋值给变量。如果没有进行重定向，默认就是从键盘读取用户输入的数据；如果进行了重定向，那么可以从文件中读取数据。
# declare 和 typeset 都是 Shell 内建命令，它们的用法相同，都用来设置变量的属性。不过 typeset 已经被弃用了，建议使用 declare 代替。

declare -i m n result # #将多个变量声明为整数
m=10
n=10
result=$m+$n
echo $result

# Shell 和其它编程语言不同，Shell 不能直接进行算数运算，必须使用数学计算命令
# 默认情况下，Shell 不会直接进行算术运算，而是把+两边的数据（数值或者变量）当做字符串，把+当做字符串连接符，最终的结果是把两个字符串拼接在一起形成一个新的字符串
# 这是因为，在 Bash Shell 中，如果不特别指明，每一个变量的值都是字符串，无论你给变量赋值时有没有使用引号，值都会以字符串的形式存储
# 换句话说，Bash shell 在默认情况下不会区分变量类型，即使你将整数和小数赋值给变量，它们也会被视为字符串，这一点和大部分的编程语言不同


# (( ))	用于整数运算，效率很高，推荐使用。
# let	用于整数运算，和 (()) 类似。
# $[]	用于整数运算，不如 (()) 灵活。
# expr	可用于整数运算，也可以处理字符串。比较麻烦，需要注意各种细节，不推荐使用。
# bc	Linux下的一个计算器程序，可以处理整数和小数。Shell 本身只支持整数运算，想计算小数就得使用 bc 这个外部的计算器。
# declare -i	将变量定义为整数，然后再进行数学运算时就不会被当做字符串了。功能有限，仅支持最基本的数学运算（加减乘除和取余），不支持逻辑运算、自增自减等，所以在实际开发中很少使用。
# 如果大家时间有限，只学习 (()) 和 bc 即可，不用学习其它的了：(()) 可以用于整数计算，bc 可以小数计算。
#-----------
# 使用变量时不用加$前缀，(( )) 会自动解析变量名
# 可以在 (( )) 前面加上$符号获取 (( )) 命令的执行结果，也即获取整个表达式的值
((a=10+5))
b=$(( a+5 ))
((a>7 && b==c))	# (( )) 也可以进行逻辑运算，在 if 语句中常会使用逻辑运算。
((a=3+5, b=a+10)) # 对多个表达式同时进行计算。


# if 语句语法

if  1>2
then
    echo "true"
fi
# 也可以将 then 和 if 写在一行
# 请注意 condition 后边的分号;，当 if 和 then 位于同一行的时候，这个分号是必须的，否则会有语法错误。

if  1>2; then
    echo " 1>2 true"
fi

# 很多 Linux 命令其实就是一个C语言程序，熟悉C语言的读者都知道，main() 函数的最后都有一个 return 0，如果程序想在中间退出，还可以使用exit 0，这其实就是C语言程序的退出状态。
# if 语句的判断条件，从本质上讲，判断的就是命令的退出状态
# 按照惯例来说，退出状态为 0 表示“成功”
# test 是 Shell 内置命令，用来检测某个条件是否成立。test 通常和 if 语句一起使用，并且大部分 if 语句都依赖 test。
# test 命令有很多选项，可以进行数值、字符串和文件三个方面的检测; test 只能用来比较整数，小数相关的比较还得依赖 bc 命令。
# test 命令的用法为：test expression ; test 命令也可以简写为 [ expression ]
# []和 expression 之间的空格，这两个空格是必须的，否则会导致语法错误
# ==、>、< 在大部分编程语言中都用来比较数字，而在 Shell 中，它们只能用来比较字符串，不能比较数字，这是非常奇葩的，大家要习惯。
# 不管是比较数字还是字符串，Shell 都不支持 >= 和 <= 运算符，切记



#---------------------------------------------------------------------- split line -----------------------------------------------------

# 在 test 中使用变量建议用双引号包围起来
# test 和 [] 都是命令，一个命令本质上对应一个程序或者一个函数。即使是一个程序，它也有入口函数，例如C语言程序的入口函数是 main()，
# 运行C语言程序就从 main() 函数开始，所以也可以将一个程序等效为一个函数，这样我们就不用再区分函数和程序了，直接将一个命令和一个函数对应起来即可。

# 有了以上认知，就很容易看透命令的本质了：使用一个命令其实就是调用一个函数，命令后面附带的选项和参数最终都会作为实参传递给函数。

# 假设 test 命令对应的函数是 func()，使用test -z $str1命令时，会先将变量 $str1 替换成字符串：
# 如果 $str1 是一个正常的字符串，比如 abc123，那么替换后的效果就是test -z abc123，调用 func() 函数的形式就是func("-z abc123")。test 命令后面附带的所有选项和参数会被看成一个整体，并作为实参传递进函数。
# 如果 $str1 是一个空字符串，那么替换后的效果就是test -z，调用 func() 函数的形式就是func("-z ")，这就比较奇怪了，因为-z选项没有和参数成对出现，func() 在分析时就会出错。

# 如果我们给 $str1 变量加上双引号，当 $str1 是空字符串时，test -z "$str1"就会被替换为test -z ""，调用 func() 函数的形式就是func("-z \"\"")，很显然，-z选项后面跟的是一个空字符串（\"表示转义字符），这样 func() 在分析时就不会出错了。

#---------------------------------------------------------------------- end split line -----------------------------------------------------

# http://c.biancheng.net/view/2742.html
#检测字符串是否为空
str1=""
str2="123"
if [ -z "$str1" -o -z "$str2" ]  #使用 -o 选项取代之前的 ||
then
    echo "字符串不能为空"
    exit 0
fi
#比较字符串
if [ "$str1" = "$str2" ]
then
    echo "两个字符串相等"
else
    echo "两个字符串不相等"
fi


# [[ ]]是 Shell 内置关键字，它和 test 命令类似，也用来检测某个条件是否成立
# test 能做到的，[[ ]] 也能做到，而且 [[ ]] 做的更好；test 做不到的，[[ ]] 还能做到。可以认为 [[ ]] 是 test 的升级版
# [[ ]] 的用法为：[[ expression ]]
# [[ ]] 是 Shell 内置关键字，不是命令，在使用时没有给函数传递参数的过程，所以 test 命令的某些注意事项在 [[ ]] 中就不存在了，具体包括：
# 不需要把变量名用双引号""包围起来，即使变量是空值，也不会出错。
# 不需要、也不能对 >、< 进行转义，转义后会出错
# [[ ]]  支持 &&、|| 和 ! 三种逻辑运算符
# [[ ]] 支持正则表达式 ,在 Shell [[ ]] 中，可以使用=~来检测字符串是否符合某个正则表达式

#   [ -z "$str1" ] || [ -z "$str2" ]
#   [ -z "$str1" -o -z "$str2" ]
#   [[ -z $str1 ]] || [[ -z $str2 ]]
#   [[ -z $str1 || -z $str2 ]]


# case in语句详解
# ;;和*)就相当于其它编程语言中的 break 和 default。

printf "Input integer number: "
read num
case $num in
    1)
        echo "Monday"
        ;;
    2)
        echo "Tuesday"
        ;;
    *)
        echo "error"
esac


# C语言风格的 for 循环的用法如下：

#          for((exp1; exp2; exp3))
#          do
#              statements
#          done


# Python 风格的 for in 循环
# 取值列表 value_list 的形式有多种，你可以直接给出具体的值，也可以给出一个范围，还可以使用命令产生的结果，甚至使用通配符
# 我们也可以省略 value_list，省略后的效果和使用$@一样


#          for variable in value_list
#          do
#              statements
#          done



# select in 是 Shell 独有的一种循环，非常适合终端（Terminal）这样的交互场景

#          select variable in value_list
#          do
#              statements
#          done


echo "What is your favourite OS?"
select name in "Linux" "Windows" "Mac OS" "UNIX" "Android"
do
    echo "$name"
done
echo "You have selected $name"


# Shell 函数定义的语法格式如下
# 函数定义时也可以不写 function 关键字
# 如果写了 function 关键字，也可以省略函数名后面的小括号
# 调用 Shell 函数时可以给它传递参数，也可以不传递。如果不传递参数，直接给出函数名字即可
# 如果传递参数，那么多个参数之间以空格分隔：functionName param1 param2 param3

#        function name() {
#            statements
#            [return value]
#        }



# Linux Shell 重定向分为两种，一种输入重定向，一种是输出重定向；从字面上理解，输入输出重定向就是「改变输入与输出的方向」的意思
#       0	stdin	标准输入文件	键盘
#       1	stdout	标准输出文件	显示器
#       2	stderr	标准错误输出文件	显示器

# Linux 程序在执行任何形式的 I/O 操作时，都是在读取或者写入一个文件描述符。一个文件描述符只是一个和打开的文件相关联的整数，它的背后可能是一个硬盘上的普通文件、FIFO、管道、终端、键盘、显示器，甚至是一个网络连接
# stdin、stdout、stderr 默认都是打开的，在重定向的过程中，0、1、2 这三个文件描述符可以直接使用。

# 输出重定向的完整写法其实是 fd>file 或者 fd>>file，其中 fd 表示文件描述符，如果不写，默认为 1，也就是标准输出文件。
# 当文件描述符为 1 时，一般都省略不写; 当文件描述符为大于 1 的值时，比如 2，就必须写上。
# 需要重点说明的是，fd 和 > 之间不能有空格，否则 Shell 会解析失败；> 和 file 之间的空格可有可无。为了保持一致，我习惯在 > 两边都不加空格
# 如果你既不想把命令的输出结果保存到文件，也不想把命令的输出结果显示到屏幕上，干扰命令的执行，那么可以把命令的所有结果重定向到 /dev/null 文件中

# 标准输出重定向
#       command >file	以覆盖的方式，把 command 的正确输出结果输出到 file 文件中。
#       command >>file	以追加的方式，把 command 的正确输出结果输出到 file 文件中。

# 标准错误输出重定向
#       command 2>file	以覆盖的方式，把 command 的错误信息输出到 file 文件中。
#       command 2>>file	以追加的方式，把 command 的错误信息输出到 file 文件中。


# 正确输出和错误信息同时保存
#       command >file 2>&1	以覆盖的方式，把正确输出和错误信息同时保存到同一个文件（file）中。
#       command >>file 2>&1	以追加的方式，把正确输出和错误信息同时保存到同一个文件（file）中。
#       command >file1 2>file2	以覆盖的方式，把正确的输出结果输出到 file1 文件中，把错误信息输出到 file2 文件中。
#       command >>file1  2>>file2	以追加的方式，把正确的输出结果输出到 file1 文件中，把错误信息输出到 file2 文件中。

# 输入定向
#       command <file	将 file 文件中的内容作为 command 的输入。
#       command <<END	从标准输入（键盘）中读取数据，直到遇见分界符 END 才停止（分界符可以是任意的字符串，用户自己定义）。
#       command <file1 >file2	将 file1 作为 command 的输入，并将 command 的处理结果输出到 file2。



# (Here Documents)  https://linuxhint.com/bash-heredoc-tutorial/
# here document is a special-purpose code block. It uses a form of I/O redirection to feed a command list to an interactive program or a command, such as ftp, cat, or the ex text editor.

#      COMMAND <<HeredocDelimiter
#      ...
#      ...
#      ...
#      HeredocDelimiter


# Here Strings (https://www.cnblogs.com/dissipate/p/13731797.html)
# A here string can be considered as a stripped-down form of a here document.
# It consists of nothing more than COMMAND <<< $WORD, where $WORD is expanded and fed to the stdin of COMMAND.
