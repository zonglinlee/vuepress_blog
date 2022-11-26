#!/usr/bin/env bash

# 批量创建用户脚本
function batchCreateUser() {
  # 存放用户名密码的文件路径
  userPassFile=./userPasswordInfo.txt
  #  创建5个用户
  #  for user in zonglinlee{1..6}; do
  for user in $@; do # 传入用户名
    if ! id $user &>/dev/null; then
      # 随机生成密码，截取前 8 位
      password=$(echo $RANDOM | md5sum | cut -c 1-8)
      useradd -m -d /home/$user $user
      #      passwd -p $password  # 交互式创建 不支持非交互式
      # 修改密码可能更多人第一反应是使用passwd，但passwd不支持非交互模式，故改用chpasswd实现
      #      echo $user:123456 | chpasswd
      echo $user:$password | chpasswd
      echo "$user=$password" >>$userPassFile
      echo "$user 创建成功！"
    else
      echo "$user 已存在！准备删除......"
      deluser --remove-home $user
      echo "删除 $user...... 成功"
    fi

  done
  ls /home/
}

batchCreateUser zhangsan lisi wangwu
