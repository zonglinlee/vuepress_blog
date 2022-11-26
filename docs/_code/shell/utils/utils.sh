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

# just for test
function utils_test() {
    echo this is a test ....
}
