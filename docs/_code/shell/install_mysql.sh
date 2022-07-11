#!/usr/bin/env bash
function install_mysql() {
  sudo apt-get remove mysql
  wget https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-server_8.0.29-1ubuntu18.04_i386.deb-bundle.tar
#  MYSQL_DEB=mysql-server_8.0.29-1ubuntu18.04_amd64.deb
  tar -xvf ./mysql-server_8.0.29-1ubuntu18.04_i386.deb-bundle.tar
  dpkg -i
}
install_mysql()
