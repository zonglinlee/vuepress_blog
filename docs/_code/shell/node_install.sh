#! /usr/bin/env bash

function install_node() {
  ##访问https://github.com/creationix/nvm查看
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  ##指定版本v16.15.1 node
  #  https://unix.stackexchange.com/questions/184508/nvm-command-not-available-in-bash-script
  #  nvm command is a shell function declared in ~/.nvm/nvm.sh
  #  You may source either of following scripts at the start of yours to make nvm() available
  . ~/.nvm/nvm.sh
  #  . ~/.profile
  #  . ~/.bashrc
  nvm install v16.15.1
  nvm use 16.15.1
  npm config set registry http://registry.npm.taobao.org
  npm install -g pm2
  pm2 list

  ##修改npm源地址

  ##查看npm源地址
  npm config get registry
  exit 0
}
install_node
