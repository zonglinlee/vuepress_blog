#!/usr/bin/env bash

# 两个参数 ： 本地文件 服务器路径
function utils_scpFile() {
  #   scp ./docs/_code/shell/importGlobalFun.sh root@82.157.198.241:/root/zonglinlee/bashScript/
  scp $1 "root@82.157.198.241:$2"
}

# 找出CPU/内存过高的进程
function utils_checkCup() {
  #  sort 默认对第一列排序
  echo ------------------------- cpu top 5 ----------------
  ps aux | awk '{print $3,$1,$2,$11}' | sort -r | head -n 5
  echo ------------------------- memory top 5 ----------------
  ps aux | awk '{print $4,$1,$2,$11}' | sort -r | head -n 5
}

# cpu 负载情况
function utils_cpuLoad() {
  #    vmstat 不需要交互， top 命令需要进行交互
  #    procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
  #     r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
  #     2  0      0 140152  98960 902608    0    0     3    16    2    0  1  1 99  0  0
  cpuPercent=$(vmstat | awk '{if(NR==3)print $13+$14}') # 打印第三行数据
  ioWaitPercent=$(vmstat | awk '{if(NR==3)print $16}')
  echo "CPU 使用率：${cpuPercent}%"
  echo "等待磁盘 IO 响应使用率：${ioWaitPercent}%"

}
# memory 负载情况
function utils_memoryLoad() {
  #                total        used        free      shared  buff/cache   available
  #  Mem:           1832         719         132          10         981         926
  #  Swap:             0           0           0
  totalMemoryGb=$(free -m | awk '{if(NR==2)printf "%.2f",$2/1024}')
  usedMemoryGb=$(free -m | awk '{if(NR==2)printf "%.2f",($2-$NF)/1024}') # $NF 代表最后一列
  availableMemoryGb=$(free -m | awk '{if(NR==2)printf "%.2f",$NF/1024}') # $NF 代表最后一列
  echo "总内存：${totalMemoryGb}GB"
  echo "已用内存：${usedMemoryGb}GB"
  echo "可用内存：${availableMemoryGb}GB"
}

# 磁盘情况
function utils_diskLoad() {
  #  Filesystem      Size  Used Avail Use% Mounted on
  #  udev            898M     0  898M   0% /dev
  #  tmpfs           184M   11M  174M   6% /run
  #  /dev/vda1        40G  8.5G   30G  23% /
  #  tmpfs           917M   24K  917M   1% /dev/shm
  #  tmpfs           5.0M     0  5.0M   0% /run/lock
  #  tmpfs           917M     0  917M   0% /sys/fs/cgroup
  #  tmpfs           184M     0  184M   0% /run/user/0
  fs=$(df -h | awk '/^\/dev/{print $1}')
  for i in $fs; do
    #    awk -v 使用变量，将 shell 变量赋值给 awk 脚本变量
    mountedPoint=$(df -h | awk -v disk=$i '{if($1==disk)print $NF}')
    diskSize=$(df -h | awk -v disk=$i '{if($1==disk)print $2}')
    used=$(df -h | awk -v disk=$i '{if($1==disk)print $3}')
    left=$(df -h | awk -v disk=$i '{if($1==disk)print $4}')
    echo "磁盘 $i 使用情况：挂载点 $mountedPoint; 大小$diskSize; 已使用$used; 可用$left"
  done
}

# Tcp 连接状态统计
function utils_tcpStatus() {
  # 定义一个 arr 关系型数组，  以第 6 列 作为数组下标进行统计，然后循环打印
  summary=$(netstat -antp | awk '{arr[$6]++}END{for (i in arr)printf i":"arr[i]" "}')
  echo "TCP 连接状态： $summary"
}

# refresh source
function utils_sourceUtils() {
  source ~/.bashrc
}
# 软件卸载之后配置文件还在，需要清除配置文件
# 软件卸载之后相应的进程还在 需要 kill -9 pid
function utils_removeLeftOverConfigFile() {
  dpkg -l | grep "^rc" | awk '{print $2}' | xargs apt -y purge
}

# test echo command
function utils_echoCommonCommand() {
  echo 'apt-get remove packageName | apt-get autoremove packageName'
  echo '卸载所有配置文件: apt-get --purge remove packageName'
  echo '添加 PPA(私人Ubuntu仓库) 源: sudo add-apt-repository ppa:user/ppa-name | sudo apt-get update'
  echo '查看nginx相关历史记录: history | grep nginx'
  echo '重新执行nginx相关历史记录中第258步操作: !258 '
  echo '查看9000端口占用情况：lsof -i:9000'
  echo '查看某个pid 为 2356的进程 打开的相关文件：lsof -p 2356'
  echo '查看fpm服务文件名称：systemctl list-unit-files |grep fpm'
  echo '解压zip文件 ：unzip -o -d ./wordpress wordpress.latest.zip'
}

# ssh
function utils_sshGenKey() {
  ssh-keygen
}
