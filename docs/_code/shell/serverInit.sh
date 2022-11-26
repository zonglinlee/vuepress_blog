#!/usr/bin/env bash
# 服务器初始化脚本

# 设置时区，同步服务器时间
function syncTime() {
  # 将时区文件   /usr/share/zoneinfo 链接到 etc  目录下
  if [[ -e /etc/localtime ]]; then
    rm /etc/localtime
    ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
  fi
  #  添加定时更新服务器时间任务
  if ! crontab -l | grep ntpdate &>/dev/null; then
    # 将echo命令输出的内容 和 crontab -l 命令输出的内容一起通过管道 作为参数输入到 crontab
    (
      echo "* 1 * * * ntpdate time.windows.com 1>/dev/null 2&>1"
      crontab -l
    ) | crontab
  fi

}

# 禁用 selinux
function disableSelinux() {
  sed -i '/SELINUX/{s/permissive/disabled/}' /etc/selinux/config
}

# 历史操作命令显示时间
function setHistoryOperationFormat() {
  if ! grep HISTTIMEFORMAT ~/.bashrc; then
    echo 'export HISTTIMEFORMAT="`whoami` %F %T "' >>~/.bashrc
    source ~/.bashrc
  fi
}

# ssh 禁止root远程登录
function sshDisableRootRemoteLogin() {
  sed -i '/#PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_confi

}

# 禁止定时任务发送邮件： 定时任务默认会将失败的消息发送给 root
function disableCrontabMsg() {
  sed -i 's/^MAILTO=root/MAILTO=""/' /etc/crontab
}

# 设置最大打开文件数
function setMaxFilesOpened() {
  if ! grep "* soft nofile 65535" /etc/security/limits.conf; then
    cat >> /etc/security/limits.conf <<EOF
* soft nofile 65535
* hard nofile 65535
EOF
  fi
}

# 减少 swap 使用

#syncTime
#setHistoryOperationFormat
#setMaxFilesOpened
