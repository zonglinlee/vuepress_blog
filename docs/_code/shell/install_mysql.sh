#!/usr/bin/env bash
# 安装mysql
function install_mysql() {
  # 获取 mysql source 配置的可执行文件 .deb 文件，执行之后可以添加 mysql 源
  wget https://dev.mysql.com/get/mysql-apt-config_0.8.22-1_all.deb
  sudo dpkg -i mysql-apt-config_0.8.22-1_all.deb
  sudo apt update
  apt install mysql-server
}
# 初始化 mysql
function initMysql() {
  # mysql 中root用户默认不可以远程登录，只可以用localhost登录
  # 方式一 新建同名root用户
  mysql -u root -pYourPassword -e "use mysql;select user,host from user;CREATE USER 'root'@'%' IDENTIFIED BY 'YourPassword';GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION; FLUSH PRIVILEGES;"
  # 方式二 创建新用户，赋予所有权限
  mysql -u root -pYourPassword -e "use mysql; CREATE USER 'zonglinlee'@'%' IDENTIFIED BY 'YourPassword';GRANT ALL PRIVILEGES ON *.* TO 'zonglinlee'@'%' WITH GRANT OPTION; FLUSH PRIVILEGES;"

}
# install_mysql
# initMysql
