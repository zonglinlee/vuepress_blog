#!/usr/bin/env bash
#used of one time install, version-2.0
ip=192.168.10.10
zabbixserver=192.168.10.11
mkdir "onetimeused-$(date +%s)" && cd onetimeused-* && dir=$(pwd)
# set color ##
echoRed() { echo $'\e[0;31m'"$1"$'\e[0m'; }
echoGreen() { echo $'\e[0;32m'"$1"$'\e[0m'; }
echoYellow() { echo $'\e[0;33m'"$1"$'\e[0m'; }

#判断一下当前用户
if [ "$(whoami)" != "root" ]; then
  echoRed "注意：当前系统用户非root用户，将无法执行安装等事宜！" && exit 1
fi
#---------------------------------------------------------------------------------------------------------------------------------------------
#               三级方法
#---------------------------------------------------------------------------------------------------------------------------------------------
S() {
  echo "-----------------------------------------------------"
  echo "运行source /etc/profile && source /etc/bashrc安装完成！"
  echo "-----------------------------------------------------"
}
#install
nginx() {
  cd $dir && wget -V &>/dev/null || apt -y install wget
  [ -d /usr/local/nginx ] && echoRed "检测到/usr/local下已安装ngixn，故而退出!" && rm -rf $dir && exit 1
  [ ! -f $dir/nginx-1.14.0.tar.gz ] && wget $ip/pack/nginx-1.14.0.tar.gz
  apt install gcc gcc-c++ pcre pcre pcre-devel zlib zlib-devel openssl openssl-devel -y
  tar -xvzf nginx-1.14.0.tar.gz && cd nginx-1.14.0
  ./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module --with-http_v2_module \
    --with-http_realip_module && make && make install
  ln -s /usr/local/nginx/sbin/nginx /usr/local/sbin
  /usr/local/nginx/sbin/nginx -V &>/dev/null && echoGreen "已完成安装，可尽情享用！" || echoYellow "可能安装有问题，请检查！"
  rm -rf $dir
}
tomcat() {
  cd $dir && wget -V &>/dev/null || apt -y install wget
  [ -d /usr/local/tomcat ] && echoRed "检测到/usr/local下已安装tomcat，故而退出！" && rm -rf $dir && exit 1
  wget https://dlcdn.apache.org/tomcat/tomcat-8/v8.5.84/bin/apache-tomcat-8.5.84.tar.gz && tar xf apache-tomcat-8.5.84.tar.gz && mv apache-tomcat-8.5.84 /usr/local/apache-tomcat-8.5.84
  /usr/local/apache-tomcat-8.5.84/bin/version.sh &>/dev/null && echoGreen "已完成安装，可尽情享用！" || echoYellow "可能安装有问题，请检查！"
  rm -rf $dir
}
jdk11() {
  cd $dir && wget -V &>/dev/null || apt -y install wget
  java -version &>/dev/null && echoRed "检测到系统中有java命令，故而退出！" && rm -rf $dir && exit 1
  #  wget https://download.oracle.com/otn/java/jdk/11.0.16+11/b8c39bd7f0064c2aa24e6002b391bd0f/jdk-11.0.16_linux-aarch64_bin.tar.gz?AuthParam=1669558670_e1a6e129e64175b024d11a100e400f77 -O jdk.tar.gz && tar xf jdk.tar.gz -C /usr/local/
  tar xf ~/zonglinlee/jdk-11.0.16.1.tar.gz -C /usr/local/
  echo 'JAVA_HOME=/usr/local/jdk-11.0.16.1' >>/etc/profile && echo 'PATH=$PATH:$JAVA_HOME/bin' >>/etc/profile && echo 'export PATH' >>/etc/profile && source /etc/profile
  /usr/local/jdk-11.0.16.1/bin/java -version &>/dev/null && echoGreen "已完成安装，可尽情享用！" || echoYellow "可能安装有问题，请检查！"
  S && rm -rf $dir
}
jdk8() {
  cd $dir && wget -V &>/dev/null || apt -y install wget
  java -version &>/dev/null && echoRed "检测到系统中有java命令，故而退出！" && rm -rf $dir && exit 1
  wget $ip/pack/jdk-8u192-linux-x64.tar.gz -O jdk.tar.gz && tar xf jdk.tar.gz -C /usr/local/
  echo 'JAVA_HOME=/usr/local/jdk1.8.0_192' >>/etc/profile && echo 'PATH=$PATH:$JAVA_HOME/bin' >>/etc/profile && echo 'export PATH' >>/etc/profile && source /etc/profile
  /usr/local/jdk1.8.0_192/bin/java -version &>/dev/null && echoGreen "已完成安装，可尽情享用！" || echoYellow "可能安装有问题，请检查！"
  S && rm -rf $dir
}
jdk7() {
  java -version &>/dev/null && echoRed "检测到系统中有java命令，故而退出！" && rm -rf $dir && exit 1
  wget $ip/pack/jdk-7u79-linux-x64.tar.gz -O jdk7.tar.gz && tar xf jdk7.tar.gz && mv jdk*/ /usr/local/jdk7
  echo 'JAVA_HOME=/usr/local/jdk7' >>/etc/profile && echo 'PATH=$PATH:$JAVA_HOME/bin' >>/etc/profile && echo 'export PATH' >>/etc/profile && source /etc/profile
  /usr/local/jdk7/bin/java -version &>/dev/null && echoGreen "已完成安装，可尽情享用！" || echoYellow "可能安装有问题，请检查！"
  S && rm -rf $dir
}
maven() {
  cd $dir && wget -V &>/dev/null || apt -y install wget
  mvn -v &>/dev/null && echoRed "检测到系统中有mvn命令，故而退出！" && rm -rf $dir && exit 1
  wget $ip/pack/maven.tar.gz && tar -xf maven.tar.gz -C /usr/local
  echo 'MAVEN_HOME=/usr/local/maven' >>/etc/profile && echo 'PATH=$PATH:$JAVA_HOME/bin:$MAVEN_HOME/bin' >>/etc/profile && source /etc/profile
  /usr/local/maven/bin/mvn -v &>/dev/null && echoGreen "已完成安装，可尽情享用！" || echoYellow "可能安装有问题，请检查！"
  S && rm -rf $dir
}
mysql() {
  cd $dir && wget -V &>/dev/null || apt -y install wget
  [ -d /usr/local/mysql ] && echoRed "检测到/usr/local下已安装mysql，故而退出！" && rm -rf $dir && exit 1
  wget $ip/pack/mysql-5.6.16.tar.gz && mqnu=$(cat /etc/passwd | grep mysql | wc -l)
  if [ $mqnu -ne 1 ]; then
    echoRed "mysql用户不存在，新建用户" && groupadd mysql && useradd -g mysql -s /sbin/nologin mysql
  else
    echoRed "mysql已经存在"
  fi
  apt install gcc gcc-c++ autoconf automake zlib* libxml* ncurses-devel libtool-ltdl-devel* make cmake -y
  [ ! -d /usr/local/mysql/data ] && mkdir -p /usr/local/mysql/data && chown -R mysql.mysql /usr/local/mysql
  echoGreen "开始编译安装！！" && tar -xf mysql-5.6.16.tar.gz && cd mysql-5.6.16 && cmake . -DCMAKE_INSTALL_PREFIX=/usr/local/mysql -DMYSQL_DATADIR=/usr/local/mysql/data -DWITH_MYISAM_STORAGE_ENGINE=1 -DWITH_INNOBASE_STORAGE_ENGINE=1 -DWITH_MEMORY_STORAGE_ENGINE=1 -DWITH_READLINE=1 -DMYSQL_UNIX_ADDR=/var/lib/mysql/mysql.sock -DMYSQL_TCP_PORT=3306 -DENABLED_LOCAL_INFILE=1 -DWITH_PARTITION_STORAGE_ENGINE=1 -DEXTRA_CHARSETS=all -DDEFAULT_CHARSET=utf8 -DDEFAULT_COLLATION=utf8_general_ci && make && make install
  echoGreen "注册为服务！！" && cd /usr/local/mysql/scripts && ./mysql_install_db --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data
  cd /usr/local/mysql/support-files && cp mysql.server /etc/rc.d/init.d/mysql && yes | cp my-default.cnf /etc/my.cnf && chkconfig --add mysql && chkconfig mysql on && service mysql start
  echo 'PATH=/usr/local/mysql/bin:$PATH' >>/etc/profile
  echo 'export PATH' >>/etc/profile && source /etc/profile
  /usr/local/mysql/bin/mysql -V &>/dev/null && echoGreen "已完成安装，可尽情享用！" || echoYellow "可能安装有问题，请检查！"
  S && rm -rf $dir
}
node() {
  cd $dir && wget -V &>/dev/null || apt -y install wget
  [ -d /usr/local/node ] && echoRed "检测到/usr/local下已安装node，故而退出！" && rm -rf $dir && exit 1
  wget $ip/pack/node-v10.6.0-linux-x64.tar.xz && tar xf node-v10.6.0-linux-x64.tar.xz -C /usr/local &>/dev/null
  echo 'NODE=/usr/local/node' >>/etc/profile && echo 'PATH=$PATH:$NODE/bin' >>/etc/profile && echo 'export PATH' >>/etc/profile && source /etc/profile
  /usr/local/node/bin/node -v &>/dev/null && echoGreen "已完成安装，可尽情享用！" || echoYellow "可能安装有问题，请检查！"
  S && rm -rf $dir
}
php() {
  cd $dir && wget -V &>/dev/null || apt -y install wget
  [ -d /usr/local/php ] && echoRed "检测到/usr/local下已安装php，故而退出！" && rm -rf $dir && exit 1
  wget $ip/pack/php-7.0.25.tar.gz && apt -y install libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel libxml2 libxml2-devel mysql pcre-devel curl-devel libxslt-devel openssl-devel
  tar -xf php-7.0.25.tar.gz && cd php-7.0.25 && ./configure --prefix=/usr/local/php --with-curl --with-freetype-dir --with-gd --with-gettext --with-iconv-dir --with-kerberos --with-libdir=lib64 --with-libxml-dir --with-mysqli --with-openssl --with-pcre-regex --with-pdo-mysql --with-pdo-sqlite --with-pear --with-png-dir --with-xmlrpc --with-xsl --with-zlib --enable-fpm --enable-bcmath --enable-libxml --enable-inline-optimization --enable-gd-native-ttf --enable-mbregex --enable-mbstring --enable-opcache --enable-pcntl --enable-shmop --enable-soap --enable-sockets --enable-sysvsem --enable-xml --enable-zip && make && make test && make install
  \cp php.ini-development /usr/local/php/etc/php.ini && \cp /usr/local/php/etc/php-fpm.conf.default /usr/local/php/etc/php-fpm.conf && \cp /usr/local/php/etc/php-fpm.d/www.conf.default /usr/local/php/etc/php-fpm.d/www.conf && \cp -R ./sapi/fpm/php-fpm /etc/init.d/php-fpm
  /etc/init.d/php-fpm && echoGreen "已完成安装，可尽情享用！" || echoYellow "可能安装有问题，请检查！"
  rm -rf $dir
}
zabbix() {
  cd $dir && wget -V &>/dev/null || apt -y install wget
  zabbix_agentd -V &>/dev/null && echoRed "检测到系统中有zabbix-agentd命令，故而退出！" && rm -rf $dir && exit 1
  wget $ip/pack/zabbix-agent-3.4.11-1.el7.x86_64.rpm && apt -y install $dir/zabbix-agent-3.4.11-1.el7.x86_64.rpm
  #修改相应的配置文件
  sed -i "s/^Server=.*/Server=$zabbixserver/g" /etc/zabbix/zabbix_agentd.conf
  sed -i "s/^ServerActive=.*/ServerActive=$zabbixserver/g" /etc/zabbix/zabbix_agentd.conf
  sed -i "s/^Hostname=.*/Hostname=$(hostname -I)/g" /etc/zabbix/zabbix_agentd.conf
  systemctl enable zabbix-agent && systemctl restart zabbix-agent
  zabbix_agentd -V &>/dev/null && echoGreen "已完成安装，可尽情享用！" || echoYellow "可能安装有问题，请检查！"
  rm -rf $dir
}
py3() {
  cd $dir && wget -V &>/dev/null || apt -y install wget
  python3.6 -V &>/dev/null && echoRed "检测到系统中有python3.6命令，故而退出！" && rm -rf $dir && exit 1
  apt -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel wget gcc gcc-c++
  wget $ip/pack/Python-3.6.3.tgz && tar -xf Python-3.6.3.tgz && mv Python-3.6.3 /usr/local/Python-3.6.3 && cd /usr/local/Python-3.6.3 && ./configure --prefix=/usr/local && make && make altinstall
  cd /usr/bin && mv python python.backup && ln -s /usr/local/bin/python3.6 /usr/bin/python && ln -s /usr/local/bin/python3.6 /usr/bin/python3 && ln -s /usr/local/bin/pip3.6 /usr/bin/pip
  sed -i '1s/python/python2/g' /usr/bin/apt && sed -i '1s/python/python2/g' /usr/libexec/urlgrabber-ext-down
  /usr/local/bin/python3.6 -V && echoGreen "已完成安装，可尽情享用！" || echoYellow "可能安装有问题，请检查！"
  rm -rf $dir
}
redis() {
  cd $dir && wget -V &>/dev/null || apt -y install wget
  redis-server -v &>/dev/null && echoRed "检测到系统中有redis-server命令，故而退出！" && rm -rf $dir && exit 1
  wget $ip/pack/redis-4.0.6.tar.gz && apt -y install gcc gcc-c++ && tar -xf redis-4.0.6.tar.gz && cd redis-4.0.6 && make && make install
  sed -i '136s/no/yes/g' redis.conf && sed -i '166s/notice/warning/g' redis.conf && mv $dir/redis-4.0.6 /usr/local/redis
  /usr/local/redis/src/redis-server /usr/local/redis/redis.conf
  /usr/local/redis/src/redis-server && echoGreen "已完成安装，可尽情享用！" || echoYellow "可能安装有问题，请检查！"
  rm -rf $dir
}
trash() {
  cd $dir && wget -V &>/dev/null || apt -y install wget
  /usr/bin/trash --version &>/dev/null && echoRed "检测到系统中有trash命令，故而退出！" && rm -rf $dir && exit 1
  wget $ip/pack/trash-cli.tar && tar xf trash-cli.tar && cd trash-cli && python setup.py install &>/dev/null
  #apt install -y python-setuptools.noarch &> /dev/null && easy_install trash-cli &> /dev/null && sleep 3
  echo "alias rm='trash-put'" >>/etc/bashrc && source /etc/bashrc
  /usr/bin/trash --version &>/dev/null && echoGreen "回收站已完成安装，可尽情享用！" || echoYellow "可能安装有问题，请检查！"

  /usr/bin/autotrash -V &>/dev/null && echoRed "检测到系统中有autotrash命令，故而退出！" && rm -rf $dir && exit 1
  wget $ip/pack/autotrash.tar.gz && tar xf autotrash.tar.gz && cd autotrash && python setup.py install
  echo "#add clean tool" >>/var/spool/cron/root
  echo "@daily /usr/bin/autotrash -d 7" >>/var/spool/cron/root
  echo "#add clean tool" >>/var/spool/cron/aladin
  echo "@daily /usr/bin/autotrash -d 7" >>/var/spool/cron/aladin
  /usr/bin/autotrash -h &>/dev/null && echoGreen "自动删除回收站七天前的内容功能已配置完成，可尽情享用！" || echoYellow "可能安装有问题，请检查！"
  S && rm -rf $dir
}

#chushihua
vmtools() {
  #安装vmware tools
  [ -d /usr/bin/vmware-toolbox-cmd ] && echo "已经安装vmwaretools $(vmware-toolbox-cmd -v)" && rm -rf $dir && exit 0
  wget $ip/pack/VMwareTools-10.1.7-5541682.tar.gz -O vmware-tools.tar.gz
  tar -xf vmware-tools.tar.gz && mv vmware-tools*/ ../vmware-tools && cd ../vmware-tools && chmod +x ./vmware-install.pl
  echo -e "\n\n请\n执\n行\n $(pwd)/vmware-install.pl\n手\n动\n完\n成\n安\n装\n\n"
  rm -rf $dir
}
allnewcentos() {
  apt install -y epel-release && mv /etc/apt.repos.d/CentOS-Base.repo /etc/apt.repos.d/CentOS-Base.repo.backup
  wget -O /etc/apt.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
  apt clean all && apt makecache fast && apt install wget curl net-tools vim lrzsz ntpdate -y
  timedatectl set-timezone Asia/Shanghai && /usr/sbin/ntpdate -u ntp1.aliyun.com &>/dev/null &
  echo "export  HISTTIMEFORMAT=\"$(whoami) : %F %T :\"" >>/etc/profile && source /etc/profile
  #防火墙
  getenforce && setenforce 0 && sed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/selinux/config
  systemctl status firewalld && systemctl stop firewalld && systemctl disable firewalld && systemctl status firewalld
  apt install iptables-services -y && systemctl stop iptables && systemctl disable iptables
  /sbin/iptables -I INPUT -p tcp --dport 10036 -j ACCEPT && /sbin/iptables -I INPUT -p tcp --dport 80 -j ACCEPT
  service iptables save && sed -i 's/\\u@\\h\ /\\u@\\H\ /g' /etc/bashrc
  echo -e "root soft nofile 65535\nroot hard nofile 65535\n* soft nofile 65535\n* hard nofile 65535\n" >>/etc/security/limits.conf
  sed -i 's#4096#65535#g' /etc/security/limits.d/20-nproc.conf
  #下载vmtools
  [ ! -d /usr/bin/vmware-toolbox-cmd ] && wget $ip/pack/VMwareTools-10.1.7-5541682.tar.gz -O vmware-tools.tar.gz
  tar -xf vmware-tools.tar.gz && mv vmware-tools*/ ../vmware-tools && chmod +x ../vmware-tools/vmware-install.pl
  echo "----------------------------------------------------"
  echo -e "\n\n\n\n\n\n\n\n"
  cd .. && echo "请重启后手动执行 $(pwd)/vmware-install.pl 安装vmtools"
  echo -e "\n\n\n\n\n\n\n\n"
  sleep 5
  #调用模板脚本
  newvitrulhost
  echo
}
newvitrulhost() {
  #VM虚拟机克隆安装配置项。
  #默认删除网卡信息，配置静态IP，更改主机名,安装zabbixagent。
  #只需配置一次，用完即可删除本文档。
  echo "----------------------------------------------------"
  [ -e /etc/sysconfig/network-scripts/ifcfg-eth0 ] && echo -e "\n请勿\n    重复执行\n" && rm -rf $dir && exit 1
  hostnameip=$(hostname -I)
  int=$(ls /etc/sysconfig/network-scripts/ifcfg-* | grep -v lo)
  eth=$(nmcli dev status | grep connected | awk '{print $1}')
  hostname=$(echo "ALD-"$(echo $hostnameip | awk -F'.' '{print $4}')"-SERVER")
  #在前面定义了zabbixserver=192.168.10.11
  rpm -ivh http://mirrors.aliyun.com/zabbix/zabbix/3.4/rhel/7/x86_64/zabbix-release-3.4-1.el7.centos.noarch.rpm
  sleep 2
  apt install zabbix-agent -y
  echo "当前IP地址： "[$hostnameip]
  echo "网卡名称：   "$eth
  echo "网络文件路径： "$int
  echo "当前主机名："$(hostname)
  echo "新主机名为："$hostname
  echo "zabbix服务器为：["$zabbixserver]
  echo "----------------------------------------------------"
  echo "即将进行："
  echo "         删除克隆的网卡信息、配置静态IP、更改主机名、修改zabbixAgent"
  echo "----------------------------------------------------"
  #read -n 1 -t 30  -p "是否进行修改?y/n" Number
  #echo
  #case $Number in
  #[Yy])
  echo "----------------------------------------------------"
  echo "    (1) 删除克隆的网卡信息"
  rm -f /etc/udev/rules.d/*.rules
  sed -i 's/UUID/#UUID/g' $int
  grep ^DEVICE $int && sed -i "s/^DEVICE.*/DEVICE=$eth/g" $int || echo "DEVICE="$eth >>$int
  cat $int | grep UUID
  cat $int | grep DEVICE
  #配置静态IP
  echo "----------------------------------------------------"
  echo "    (2) 配置静态IP"
  sed -i 's/dhcp/static/i' $int
  grep ^IPADDR $int && sed -i "s/^IPADDR=.*/IPADDR=$hostnameip/g" $int || echo "IPADDR="$hostnameip >>$int
  sed -i "s/^NETMASK=.*//g" $int
  grep ^PREFIX $int && sed -i "s/^PREFIX=.*/PREFIX=24/g" $int || echo "PREFIX=24" >>$int
  grep ^GATEWAY $int && sed -i "s/^GATEWAY=.*/GATEWAY=$(echo $hostnameip | awk -F'.' '{print $1"."$2"."$3}').254/g" $int || echo "GATEWAY="$(echo $hostnameip | awk -F'.' '{print $1"."$2"."$3}')".254" >>$int
  grep ^DNS= $int && sed -i "s/^DNS=.*//g" $int
  grep ^DNS1= $int && sed -i "s/^DNS1=.*/DNS1=100.100.2.136/g" $int || echo "DNS1=100.100.2.136" >>$int
  grep ^DNS2= $int && sed -i "s/^DNS2=.*/DNS2=100.100.2.138/g" $int || echo "DNS2=100.100.2.136" >>$int
  grep ^DNS3= $int && sed -i "s/^DNS3=.*/DNS3=114.114.114.114/g" $int || echo "DNS3=114.114.114.114" >>$int
  cat $int | grep BOOTPROTO
  cat $int | grep --color -o "\([0-9]\{1,3\}\.\)\{3\}[0-9]\{1,3\}"
  #更改主机名
  echo "----------------------------------------------------"
  echo "     (3) 更改主机名"
  hostnamectl set-hostname $hostname
  hostname
  sed -i 's/\\u@\\h\ /\\u@\\H\ /g' /etc/bashrc
  #apt -y install open-vm-tools
  echo "----------------------------------------------------"
  systemctl restart network
  echo "    (4) 修改网卡名称为eth0"
  mv $(ls /etc/sysconfig/network-scripts/ifcfg-* | grep -v lo) /etc/sysconfig/network-scripts/ifcfg-eth0 &>/dev/null
  rm -f /etc/udev/rules.d/*.rules
  #sed -i 's/UUID/#UUID/g'   $int
  sed -i 's/NAME=.*/NAME=eth0/g' /etc/sysconfig/network-scripts/ifcfg-eth0
  sed -i 's/DEVICE=.*/DEVICE=eth0/g' /etc/sysconfig/network-scripts/ifcfg-eth0
  #关闭IPV6
  grep ^IPV6INIT /etc/sysconfig/network-scripts/ifcfg-eth0 && sed -i "s/^IPV6INIT=yes/IPV6INIT=no/g" /etc/sysconfig/network-scripts/ifcfg-eth0 || echo "IPV6INIT=no" >>/etc/sysconfig/network-scripts/ifcfg-eth0
  sed -i "/^IPV6_/d" /etc/sysconfig/network-scripts/ifcfg-eth0
  systemctl disable ip6tables.service
  echo "net.ipv6.conf.all.disable_ipv6=1" >>/etc/sysctl.conf
  sed -i 's/GRUB_CMDLINE_LINUX=\"crashkernel/GRUB_CMDLINE_LINUX=\"net.ifnames=0 biosdevname=0\ crashkernel/g' /etc/default/grub
  grub2-mkconfig -o /etc/grub2.cfg &>/dev/null
  ls /etc/sysconfig/network-scripts/ifcfg-* | grep -v lo
  echo "----------------------------------------------------"
  echo "    (5) 更新zabbixAgent"
  #rpm -ivh http://mirrors.aliyun.com/zabbix/zabbix/3.4/rhel/7/x86_64/zabbix-release-3.4-1.el7.centos.noarch.rpm
  #sleep 2
  #apt install zabbix-agent  -y
  #ls /etc/zabbix/zabbix_agentd.conf
  sed -i "s/^Server=.*/Server=$zabbixserver/g" /etc/zabbix/zabbix_agentd.conf
  sed -i "s/^ServerActive=.*/ServerActive=$zabbixserver/g" /etc/zabbix/zabbix_agentd.conf
  sed -i "s/^Hostname=.*/Hostname=$hostnameip/g" /etc/zabbix/zabbix_agentd.conf
  cat /etc/zabbix/zabbix_agentd.conf | grep ^Server
  cat /etc/zabbix/zabbix_agentd.conf | grep ^Hostname
  systemctl enable zabbix-agent
  systemctl restart zabbix-agent
  systemctl status zabbix-agent
  echo "----------------------------------------------------"
  echo "    (6) 配置完成，五秒后重启"
  #read -n 1 -t 30  -p "是否重启主机reboot，y/n? " Number
  echo "----------------------------------------------------"
  echo "$(date)"
  echo "----------------------------------------------------"
  rm -rf $dir
  echo "rebooting....."
  #case $Number in
  #[Yy])
  #重启
  #   echo "" >  ./.bash_history   && history -c
  shutdown -r now && exit 0
  #;;
  #esac
  #   ;;
  #   esac
}
changeipaddress() {
  changeip=$(whiptail --title "更改IP" --inputbox "请输入新的IP地址" 10 60 $(hostname -I) 3>&1 1>&2 2>&3)
  exitstatus=$?
  if [ $exitstatus = 0 ]; then
    whiptail --title "Message" --msgbox "IP地址将由\n$(hostname -I)\n改为:\n$changeip\n" 10 60
    #判断IP是否
    if echo $changeip | grep "^\([0-9]\{1,3\}\.\)\{3\}[0-9]\{1,3\}$"; then
      #判断文件是否规范
      [ ! -e /etc/sysconfig/network-scripts/ifcfg-eth0 ] && echo -e "\n网卡配置文件不规范，请检查 ：\n  /etc/sysconfig/network-scripts/ifcfg-eth0\n" && rm -rf $dir && exit 1
      #判断IP是否可用
      ping -c 2 $changeip >/dev/null && echo -e "\n[$changeip]\n 该IP已在使用中，请检查\n" && rm -rf $dir && exit 1 || echo "该IP可用"
      #执行
      #       echo "$(hostname -I) >>> $changeip"
      sed -i 's/dhcp/static/i' /etc/sysconfig/network-scripts/ifcfg-eth0
      grep ^IPADDR /etc/sysconfig/network-scripts/ifcfg-eth0 && sed -i "s/^IPADDR=.*/IPADDR=$changeip/g" /etc/sysconfig/network-scripts/ifcfg-eth0 || echo "IPADDR="$changeip >>/etc/sysconfig/network-scripts/ifcfg-eth0
      sed -i "s/^NETMASK=.*//g" /etc/sysconfig/network-scripts/ifcfg-eth0
      grep ^PREFIX /etc/sysconfig/network-scripts/ifcfg-eth0 && sed -i "s/^PREFIX=.*/PREFIX=24/g" /etc/sysconfig/network-scripts/ifcfg-eth0 || echo "PREFIX=24" >>/etc/sysconfig/network-scripts/ifcfg-eth0
      grep ^GATEWAY /etc/sysconfig/network-scripts/ifcfg-eth0 && sed -i "s/^GATEWAY=.*/GATEWAY=$(echo $changeip | awk -F'.' '{print $1"."$2"."$3}').254/g" /etc/sysconfig/network-scripts/ifcfg-eth0 || echo "GATEWAY="$(echo $changeip | awk -F'.' '{print $1"."$2"."$3}')".254" >>/etc/sysconfig/network-scripts/ifcfg-eth0
      grep ^DNS= /etc/sysconfig/network-scripts/ifcfg-eth0 && sed -i "s/^DNS=.*//g" /etc/sysconfig/network-scripts/ifcfg-eth0
      grep ^DNS1= /etc/sysconfig/network-scripts/ifcfg-eth0 && sed -i "s/^DNS1=.*/DNS1=100.100.2.136/g" /etc/sysconfig/network-scripts/ifcfg-eth0 || echo "DNS1=100.100.2.136" >>/etc/sysconfig/network-scripts/ifcfg-eth0
      grep ^DNS2= /etc/sysconfig/network-scripts/ifcfg-eth0 && sed -i "s/^DNS2=.*/DNS2=100.100.2.138/g" /etc/sysconfig/network-scripts/ifcfg-eth0 || echo "DNS2=100.100.2.138" >>/etc/sysconfig/network-scripts/ifcfg-eth0
      grep ^DNS3= /etc/sysconfig/network-scripts/ifcfg-eth0 && sed -i "s/^DNS3=.*/DNS3=114.114.114.114/g" /etc/sysconfig/network-scripts/ifcfg-eth0 || echo "DNS3=114.114.114.114" >>/etc/sysconfig/network-scripts/ifcfg-eth0
      sed -i "s/^Hostname=.*/Hostname=$changeip/g" /etc/zabbix/zabbix_agentd.conf
      systemctl restart zabbix-agent
      echo -e "\n修改完毕，请手动重启网卡:\n    systemctl restart network\n"
      #systemctl restart network
      rm -rf $dir
    else
      echo "输入的IP不合法"
    fi
  else
    xuanxiang
  fi
}
changehostname() {
  CHANGENAME=$(whiptail --title "更改主机名" --inputbox "请输入新的主机名，用-来连接" 10 60 $(hostname) 3>&1 1>&2 2>&3)
  exitstatus=$?
  if [ $exitstatus = 0 ]; then
    whiptail --title "Message" --msgbox "主机名由\n$(hostname)\n改为:\n$CHANGENAME\n" 10 60
    # whiptail --title "Yes/No Box" --yesno "Choose between Yes and No." --msgbox "主机名将由\n$(hostname)\n改为:\n\"$NAME\"\n""asdasdasd"  10 60
    hostnamectl set-hostname $CHANGENAME
    echo "hostname :  $(hostname)"
  else
    #echo "You chose Cancel."
    xuanxiang
  fi
}

alili() {
  #root用户操作
  #root用户操作
  useradd aladin && useradd develop
  apt -y install lrzsz net-tools vim curl wget unzip gunzip git mysql expect ntpdate
  echo "export HISTTIMEFORMAT=\"$(whoami) : %F %T :\"" >>/etc/profile && source /etc/profile
  sed -i 's/HISTSIZE=1000/HISTSIZE=5000/g' /etc/profile
  sed -i 's/#Port 22/Port 10036/g' /etc/ssh/sshd_config && systemctl restart sshd
  cat >/root/.bashrc <<EOF
# .bashrc

# User specific aliases and functions

alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'
alias untar='tar xvf '
alias grep='grep --color=auto'
alias getpass="openssl rand -base64 20"

# Source global definitions
if [ -f /etc/bashrc ]; then
    . /etc/bashrc
fi
PS1="\[\e[37;40m\][\[\e[36;40m\]\u\[\e[37;40m\]@\h \[\e[35;40m\]\W\[\e[0m\]]\$"
EOF
  source /root/.bashrc
  echo "0 */2 * * *  /usr/sbin/ntpdate  -u ntp1.aliyun.com  &> /dev/null # ntpdate" >>/var/spool/cron/root
  #配置回收站
  trash
  #aladin init
  echoYellow "开始初始化aladin用户"
  cat >/home/aladin/.bashrc <<EOF
# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
        . /etc/bashrc
fi

# Uncomment the following line if you don't like systemctl's auto-paging feature:
# export SYSTEMD_PAGER=

# User specific aliases and functions
PS1="\[\e[37;40m\][\[\e[36;40m\]\u\[\e[37;40m\]@\h \[\e[35;40m\]\W\[\e[0m\]]\$"
EOF
  chown aladin.aladin /home/aladin/.bashrc

  mkdir /home/aladin/.ssh && chmod 700 /home/aladin/.ssh
  cat >/home/aladin/.ssh/authorized_keys <<EOF
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDdEw+PsiXnaM7feJ1cgpBFksWMM33QGAIB2E5fW5d85Cc/+4I0+2Som+ukV9uCxyuUs1xexqBKuT7PdQrxzHgUwnevJFFhFMagnCR00HKRjpmCC7QAK48SsvdbU/6hvGBsaTH8V0eipNgatnhFnnGGkDLtqw/aSjWbdT1dfAgHbuACzko1cnc0JjP6r+DGImWlNn+BKO2UziI5w0G1J7k2/WPFldj++2Ja6Q7clHB1FNz06mDxSfCmenrophaFjnvzwNoPITs2CTTp/yh+uvMZTaqcYfc93dy2fyvy+GsVH6+WjQVLxyGRIKxYsTh+spN9ngxHWqV7RTNHTbBEj1t3 aladin@jump
EOF
  chmod 600 /home/aladin/.ssh/authorized_keys && chown -R aladin.aladin /home/aladin/.ssh
  echoGreen "aladin用户初始化完毕！"
  #develop init
  echoYellow "开始初始化develop用户"
  mkdir /home/develop/.ssh && chmod 700 /home/develop/.ssh
  cat >/home/develop/.ssh/authorized_keys <<EOF
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC1Cy+UURmFDlxT/RQcz7m2mws82Bf5ZYFD/RwjYNqkPDlayGihSU7LBfdgDKrJuaYt62SyGveV88z6xM+NzaPH6gZAWJr1S+lUBz27TLoBenMKfMahsrqI1eQ/Lic7wOLhiP3UOuFvG+y9udRNt56FiQsmrNzpHWPHLczpei4flPaGk7/Xv6yUmuEhRaa2itorA9qnUD2ZlGyTWaCWyroEdffeypq38aBFVSyKi3c3kbokx8anN6YFzNlZBvjbGDUzK6eOs3ufOiwJHdokTkMjBW9LtAbJPAEBzcSmozgi5Eg7Yn0TBu5RZ12xBBvXU8MHGGuYmjYeJjMyUS6e/8KX develop@jump
EOF
  chmod 600 /home/develop/.ssh/authorized_keys && chown -R develop.develop /home/develop/.ssh
  echoGreen "develop用户初始化完毕！"
  echoGreen "--------------------------------------------------------------------------------------------------------"
  echoRed "服务器已初始化完毕，所做事情：1，更改默认22端口。2，更改命令提示符颜色及添加命令别名。3，更改历史命令条数与显示规则。"
  echoRed "4，安装基础软件。5，配置回收站。6，初始化aladin用户。7，初始化develop用户。8，时间同步。"
  echoGreen "--------------------------------------------------------------------------------------------------------"
}

A() {
  echo -e "\e[36m ****\n您\n选\n择\n安\n装\n的\n是\n$OPTION\n，\n现\n在\n开\n始\n安\n装\n$OPTION\n****  \e[39m"
}

#---------------------------------------------------------------------------------------------------------------------------------------------
#               二级菜单
#---------------------------------------------------------------------------------------------------------------------------------------------

anzhuang() {
  OPTION=$(whiptail --title "运维外挂-安装脚本" --menu "请选择想要安装的项目，上下键进行选择，回车即安装，左右键可选择<Cancel>返回上层！" 25 55 15 \
    "1" "nginx-1.14.0" \
    "2" "jdk-1.8" \
    "3" "tomcat-8" \
    "4" "mysql-5.6" \
    "5" "node-10.6" \
    "6" "maven-3.3" \
    "7" "php-7.0" \
    "8" "zabbix-agent-3.4" \
    "9" "py-3.6" \
    "10" "redis-4.0.6" \
    "11" "trash-autotrash" \
    "12" "jdk-1.7" \
    "14" "jdk11" \
    "13" "暂时未定义" 3>&1 1>&2 2>&3)
  case $OPTION in
  1)
    A && nginx
    ;;
  2)
    A && jdk8
    ;;
  3)
    A && tomcat
    ;;
  4)
    A && mysql
    ;;
  5)
    A && node
    ;;
  6)
    A && maven
    ;;
  7)
    A && php
    ;;
  8)
    A && zabbix
    ;;
  9)
    A && py3
    ;;
  10)
    A && redis
    ;;
  11)
    A && trash
    ;;
  12)
    A && jdk7
    ;;
  13)
    echo -e "\e[36m ****您选择的安装项目暂时未定义！****\e[39m" && exit 1
    ;;
  14)
    A && jdk11
    ;;
  *)
    xuanxiang
    ;;
  esac
}

chushihua() {
  OPTION=$(whiptail --title "运维外挂-初始化菜单" --menu "请选择想要初始化的选项，上下键进行选择，回车即运行，左右键可选择<Cancel>返回上层！" 25 50 10 \
    "1" "虚拟机 moban clone host" \
    "2" "init a new CeontOS" \
    "3" "zabbix agent" \
    "4" "vmtools" \
    "5" "change ip address" \
    "6" "change hostname" \
    "7" "aliyun init" 3>&1 1>&2 2>&3)

  case $OPTION in
  1)
    A && sleep 3 && newvitrulhost
    ;;
  2)
    A && sleep 3 && allnewcentos
    ;;
  3)
    A && sleep 3 && zabbix
    ;;
  4)
    A && sleep 3 && vmtools
    ;;
  5)
    A && changeipaddress
    ;;
  6)
    A && changehostname
    ;;
  7)
    A && alili
    ;;
  *)
    rm -rf $dir && xuanxiang
    ;;
  esac
}

youhua() {
  OPTION=$(whiptail --title "运维外挂-优化菜单" --menu "请选择想要优化的选项，上下键进行选择，回车即运行，左右键可选择<Cancel>返回上层！" 25 50 4 \
    "1" "优化11111111111" \
    "2" "优化22222222222" \
    "3" "优化33333333333" \
    "4" "优化44444444444" 3>&1 1>&2 2>&3)

  case $OPTION in
  1)
    A
    ;;
  2)
    A
    ;;
  3)
    A
    ;;
  4)
    A
    ;;
  *)
    rm -rf $dir && xuanxiang
    ;;
  esac
}

qita() {
  OPTION=$(whiptail --title "运维外挂-其他菜单" --menu "请选择相应的选项，上下键进行选择，回车即运行，左右键可选择<Cancel>返回上层！" 25 50 4 \
    "1" "其他11111111111" \
    "2" "其他22222222222" \
    "3" "其他33333333333" \
    "4" "其他44444444444" 3>&1 1>&2 2>&3)

  case $OPTION in
  1)
    A
    ;;
  2)
    A
    ;;
  3)
    A
    ;;
  4)
    A
    ;;
  *)
    rm -rf $dir && xuanxiang
    ;;
  esac
}

#---------------------------------------------------------------------------------------------------------------------------------------------
#               入口菜单
#---------------------------------------------------------------------------------------------------------------------------------------------
xuanxiang() {
  OPTION=$(whiptail --title "运维外挂-一步到位" --menu "请选择想要操作的菜单，回车即可进入！" 30 60 6 \
    "1" "安装(install service)" \
    "2" "初始化(new initialization)" \
    "3" "优化(optimization)" \
    "4" "其他(others)" 3>&1 1>&2 2>&3)

  case $OPTION in
  1)
    anzhuang
    ;;
  2)
    chushihua
    ;;
  3)
    youhua
    ;;
  4)
    qita
    ;;
  *)
    rm -rf $dir && echo "You chose Cancel."
    ;;
  esac
}

#调用首页
xuanxiang
