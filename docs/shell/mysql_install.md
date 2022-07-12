---
title: mysql_install
---

## ubuntu 安装MySQL

优先采用 apt 命令进行安装

执行如下命令，查找当前 apt source 中的 mysql 安装包


`sudo apt list | grep mysql-server`

如果没有就需要添加相应的 mysql source，参考 [mysql-apt-repo-quick-guide](https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/)

@[code js](../_code/shell/install_mysql.sh)
## Reference

- [mysql-apt-repo-quick-guide](https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/)
- [How to Run SQL Query Using Bash Script and Command-Line](https://www.nitendratech.com/database/sql-query-bash-script/)
