#!/usr/bin/env bash

CLASH_VERSION=clash-linux-amd64-v1.12.0.gz
# 截取.gz  得到 clash-linux-amd64-v1.12.0
unzipFileName="${CLASH_VERSION%.gz}"

function installClash() {
  if [[ -d ~/software ]]; then
    downloadAndGunzip
  else
    mkdir -p ~/software
    downloadAndGunzip
  fi
}

# 下载解压
function downloadAndGunzip() {
  cd ~/software
  if ! wget "https://github.com/Dreamacro/clash/releases/download/v1.12.0/$CLASH_VERSION";then
    echo "download clash fail"
    exit 1
  fi
  gunzip $unzipFileName
  mv $unzipFileName clash.bak # 改名
  chmod +x clash.bak

  # 启动clash会失败，因为没有 config.yaml 和 Country.mmdb 文件
  # 配置文件在 ~/.config/clash 目录下
  # 添加 Clash 配置订阅 到机场官网订阅中心选择复制订阅，然后在浏览器中访问【 订阅地址后面加&flag=clash 】
  # 然后右击浏览器页面，选择“另存为”保存页面 然后给保存的文件修改为config.yaml
  # ./clash  # 运行clash
}

# Clash 自启动及后台运行 /etc/systemd/system/clash.service
function createClashService() {
  touch /etc/systemd/system/clash.service
  chmod 755 /etc/systemd/system/clash.service

  # https://linuxtect.com/how-to-cat-eof-for-multi-line-string-in-linux-bash/
  cat <<EOF >/etc/systemd/system/clash.service
[Unit]
Description=Clash service
After=network.target

[Unit]
Description=Clash service
After=network.target

[Service]
Type=simple
User=root
ExecStart=/root/software/clash
Restart=on-failure
RestartPreventExitStatus=23

[Install]
WantedBy=multi-user.target
EOF

  # 重载服务
  sudo systemctl daemon-reload
  # 开机启动
  sudo systemctl enable clash
  # 启动服务
  sudo systemctl start clash
  # 查看服务状态
  sudo systemctl status clash
}

function setProxy() {
  # 配置全局代理 以下几种格式都写上
  echo 'export http_proxy="http://127.0.0.1:1081/"' >>~/.bashrc
  echo 'export HTTP_PROXY="http://127.0.0.1:1081/"' >>~/.bashrc
  echo 'export https_proxy="http://127.0.0.1:1081/"' >>~/.bashrc
  echo 'export HTTPS_PROXY="http://127.0.0.1:1081/"' >>~/.bashrc
  echo 'export all_proxy="http://127.0.0.1:1081/"' >>~/.bashrc
  echo 'export ALL_PROXY="http://127.0.0.1:1081/"' >>~/.bashrc
  echo 'export no_proxy="127.0.0.1,localhost,mirrors.tencentyun.com"' >>~/.bashrc
  echo 'export NO_PROXY="127.0.0.1,localhost,mirrors.tencentyun.com' >>~/.bashrc

  source ~/.bashrc
}

installClash
