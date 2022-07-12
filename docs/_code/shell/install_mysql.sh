#!/usr/bin/env bash
function install_mysql() {
  wget https://dev.mysql.com/get/mysql-apt-config_0.8.22-1_all.deb
  sudo dpkg -i mysql-apt-config_0.8.22-1_all.deb
  sudo apt update
  apt install mysql-server
}
install_mysql
