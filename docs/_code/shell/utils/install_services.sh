#!/bin/bash

# 检查是否以 root 用户运行
check_root() {
    if [ "$EUID" -ne 0 ]; then
        echo "请以 root 用户运行此脚本。"
        exit 1
    fi
    echo "当前是 root 用户运行"
}

isCentos() {
      local os_info=$(cat /etc/os-release)
      echo "$os_info" | grep -iqsE "rhel|centos"
}

isUbuntu() {
      local os_info=$(cat /etc/os-release)
      echo "$os_info" | grep -iqsE "debian|ubuntu"
}

#EPEL（Extra Packages for Enterprise Linux）是一个由 Fedora 社区维护的开源软件仓库，专为企业级 Linux 系统（如 CentOS、RHEL、Oracle Linux 等）提供额外的高质量软件包。
#安装后，EPEL 源会被自动添加到/etc/yum.repos.d/目录（生成epel.repo文件）
#yum 会按照软件源的优先级依次搜索包：
#官方源（如 CentOS-Base）优先级最高。
#第三方源（如 EPEL、Remi）按配置顺序依次搜索。
#当你执行 yum install redis 时：yum 会在软件源中搜索 ** 名称部分为redis** 的包，忽略版本、发行号和架构信息。只匹配包名
#yum 会自动过滤不兼容的架构


yumInstallEPEL(){
  yum install -y  epel-release
}

# 更新系统软件包
update_system() {
    echo "正在更新系统软件包..."
    yum update -y
}

# 判断系统架构并下载 JDK 17
download_jdk() {
    ARCH=$(uname -m)
    if [ "$ARCH" = "x86_64" ]; then
        JDK_URL="https://github.com/adoptium/temurin17-binaries/releases/download/jdk-17.0.8.1%2B1/OpenJDK17U-jdk_x64_linux_hotspot_17.0.8.1_1.tar.gz"
        JDK_FILE="OpenJDK17U-jdk_x64_linux_hotspot_17.0.8.1_1.tar.gz"
    elif [ "$ARCH" = "aarch64" ]; then
        JDK_URL="https://github.com/adoptium/temurin17-binaries/releases/download/jdk-17.0.8.1%2B1/OpenJDK17U-jdk_aarch64_linux_hotspot_17.0.8.1_1.tar.gz"
        JDK_FILE="OpenJDK17U-jdk_aarch64_linux_hotspot_17.0.8.1_1.tar.gz"
    else
        echo "不支持的系统架构: $ARCH"
        exit 1
    fi

    echo "正在下载 JDK 17 安装包..."
    wget "$JDK_URL"
    if [ $? -ne 0 ]; then
        echo "下载 JDK 17 安装包失败，请检查网络或手动下载。"
        exit 1
    fi
}

# 安装 JDK 17
install_jdk() {
    JDK_FILE=$(ls OpenJDK17U-jdk_*_linux_hotspot_*.tar.gz 2>/dev/null)
    if [ -z "$JDK_FILE" ]; then
        echo "未找到 JDK 安装包，请检查。"
        exit 1
    fi
    echo "正在安装 JDK 17...":
    mkdir -p /usr/lib/jvm
    tar -zxvf "$JDK_FILE" -C /usr/lib/jvm
    JDK_DIR=$(basename "$JDK_FILE" .tar.gz)

    isCentos && {
          alternatives --install /usr/bin/java java /usr/lib/jvm/$JDK_DIR/bin/java 200000
          alternatives --install /usr/bin/javac javac /usr/lib/jvm/$JDK_DIR/bin/javac 200000
          alternatives --install /usr/bin/jar jar /usr/lib/jvm/$JDK_DIR/bin/jar 200000
    }

    isUbuntu && {
          update-alternatives --install /usr/bin/java java /usr/lib/jvm/$JDK_DIR/bin/java 200000
          update-alternatives --install /usr/bin/javac javac /usr/lib/jvm/$JDK_DIR/bin/javac 200000
          update-alternatives --install /usr/bin/jar jar /usr/lib/jvm/$JDK_DIR/bin/jar 200000
    }

    # 配置环境变量
    echo 'export JAVA_HOME=/usr/lib/jvm/'"$JDK_DIR" >> /etc/profile
    echo 'export JRE_HOME=${JAVA_HOME}/jre' >> /etc/profile
    echo 'export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib' >> /etc/profile
    echo 'export PATH=${JAVA_HOME}/bin:$PATH' >> /etc/profile
    source /etc/profile

    echo "JDK 17 安装成功。"
    alternatives --list
    # 添加权限
    sudo chmod -R 755 /usr/lib/jvm/OpenJDK17U-jdk_x64_linux_hotspot_17.0.8.1_1/
    java -version
}

# 安装 Redis
install_redis() {
    sudo yum install epel-release #https://www.digitalocean.com/community/tutorials/how-to-install-secure-redis-centos-7
    echo "正在安装 Redis..."
    yum install -y redis
    if [ $? -eq 0 ]; then
        echo "Redis 安装成功。"
        systemctl start redis
        systemctl enable redis
        echo "Redis 已启动并设置为开机自启。"
    else
        echo "Redis 安装失败，请检查网络或手动安装。"
        exit 1
    fi
}

# 安装 nginx
install_nginx() {
    echo "正在安装 nginx..."
    yum install -y nginx
    if [ $? -eq 0 ]; then
        echo "nginx 安装成功。"
        systemctl enable nginx
        systemctl start nginx
        systemctl status nginx
    else
        echo "nginx 安装失败，请检查网络或手动安装。"
        exit 1
    fi
}

# 配置 Redis
configure_redis() {
    REDIS_CONFIG="/etc/redis.conf"
    if [ -f "$REDIS_CONFIG" ]; then
        # 修改绑定 IP 为 0.0.0.0
        sed -i 's/^bind 127.0.0.1/bind 0.0.0.0/' "$REDIS_CONFIG"
        # 修改端口号为 63790
        sed -i 's/^port 6379/port 63780/' "$REDIS_CONFIG"

        # 设置 Redis 密码，这里假设密码为 vGopZ36zKEU0ZWkS，你可以根据需要修改
        REDIS_PASSWORD="vGopZ36zKEU0ZWkS"
        if ! grep -q "^requirepass" "$REDIS_CONFIG"; then
            echo "requirepass $REDIS_PASSWORD" >> "$REDIS_CONFIG"
        else
            sed -i "s/^requirepass.*/requirepass $REDIS_PASSWORD/" "$REDIS_CONFIG"
        fi

        # 重启 Redis 使配置生效
        systemctl restart redis
        if [ $? -eq 0 ]; then
            echo "Redis 配置更新成功，已重启。"
        else
            echo "Redis 重启失败，请检查配置文件。"
        fi
    else
        echo "未找到 Redis 配置文件，请检查安装。"
    fi
}

# 安装 Docker
install_docker() {
    echo "正在安装 Docker..."
    yum install -y yum-utils
    yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
    yum install -y docker-ce docker-ce-cli containerd.io
    if [ $? -eq 0 ]; then
        echo "Docker 安装成功。"
        systemctl start docker
        systemctl enable docker
        echo "Docker 已启动并设置为开机自启。"
    else
        echo "Docker 安装失败，请检查网络或手动安装。"
        exit 1
    fi
    docker -v
}

# 创建软链接
link_docker_compose(){
  local dockerComposeDir=$(find /usr/ -name "docker-compose")

  if [ -z "$dockerComposeDir" ]; then
      echo "未找到 docker-compose 文件"
  else
      echo "找到文件: $dockerComposeDir"
      ln -s ${dockerComposeDir} /usr/local/bin/docker-compose
      docker-compose -v
  fi
}

# 配置 Docker 代理
configure_docker() {
    # 请根据实际情况修改代理服务器地址和端口
    PROXY_SERVER="192.168.1.100"
    PROXY_PORT="8080"

    mkdir -p /etc/systemd/system/docker.service.d
    cat << EOF > /etc/systemd/system/docker.service.d/http-proxy.conf
[Service]
Environment="HTTP_PROXY=http://$PROXY_SERVER:$PROXY_PORT/"
Environment="HTTPS_PROXY=http://$PROXY_SERVER:$PROXY_PORT/"
Environment="NO_PROXY=localhost,127.0.0.1"
EOF

    systemctl daemon-reload
    systemctl restart docker
    if [ $? -eq 0 ]; then
        echo "Docker 代理配置成功，已重启。"
    else
        echo "Docker 重启失败，请检查代理配置。"
    fi
}

# 安装 Docker Compose
install_docker_compose() {
    echo "正在安装 Docker Compose..."
    DOCKER_COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep 'tag_name' | cut -d\" -f4)
    curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    if [ $? -eq 0 ]; then
        echo "Docker Compose 安装成功。"
    else
        echo "Docker Compose 安装失败，请检查网络或手动安装。"
        exit 1
    fi
}
# load docker 镜像
load_docker_jdk17(){
  docker load -i 17_linux_amd.tar
  docker images | grep jre
}

get_install_tip(){
  echo "redis: 请检查 /etc/redis.conf 配置信息，redis 默认密码为 vGopZ36zKEU0ZWkS ，如有需要请自行设置"
  echo "nacos: 请检查 /home/tools/nacos-server-3.0.0/conf/application.properties 配置信息，如有需要自行调整"
}

# 安装 Nacos
install_nacos() {
    echo "正在安装 Nacos..."
    NACOS_VERSION="2.2.3"
    wget https://github.com/alibaba/nacos/releases/download/${NACOS_VERSION}/nacos-server-${NACOS_VERSION}.tar.gz
    if [ $? -ne 0 ]; then
        echo "通过网络下载 Nacos 安装包失败，请检查网络或手动安装。"
        exit 1
    fi
    tar -zxvf nacos-server-${NACOS_VERSION}.tar.gz -C /opt
    echo "Nacos 安装成功。"
}

# 安装 Nacos
install_local_nacos() {
    echo "正在安装 Nacos... 3.0.0"
    NACOS_VERSION="3.0.0"
    tar -zxvf nacos-server-${NACOS_VERSION}.tar.gz -C /home/tools
    echo "Nacos 安装成功。"
    NACOS_DIR="/home/tools/nacos-server-${NACOS_VERSION}"
    echo "正在启动单机版 Nacos..."
    sh "$NACOS_DIR/bin/startup.sh" -m standalone
     if [ $? -eq 0 ]; then
        echo "Nacos 启动成功。"
     else
        echo "Nacos 启动失败，请检查。"
      ps aux | grep nacos
    fi
}

# 启动单机版 Nacos 并暴露 8848 端口
start_nacos() {
  NACOS_VERSION="3.0.0"
    NACOS_DIR="/home/nacos/nacos-server-${NACOS_VERSION}"
    if [ -d "$NACOS_DIR" ]; then
        echo "正在启动单机版 Nacos..."
        sh "$NACOS_DIR/bin/startup.sh" -m standalone
        if [ $? -eq 0 ]; then
            echo "Nacos 启动成功。"
            # 检查防火墙状态
            if systemctl is-active --quiet firewalld; then
                echo "正在开放 Nacos 8848 端口..."
                firewall-cmd --zone=public --add-port=8848/tcp --permanent
                firewall-cmd --reload
                if [ $? -eq 0 ]; then
                    echo "Nacos 8848 端口已开放。"
                else
                    echo "开放 Nacos 8848 端口失败，请手动检查。"
                fi
            else
                echo "防火墙未运行，无需开放端口。"
            fi
        else
            echo "Nacos 启动失败，请检查。"
        fi
    else
        echo "未找到 Nacos 安装目录，请检查安装过程。"
    fi
}

# 开启 CCProxy 代理
enable_ccproxy() {
    # 请根据实际情况修改代理服务器地址和端口
    CC_PROXY_SERVER="172.16.208.205"
    CC_PROXY_PORT="3128"

    export http_proxy="http://$CC_PROXY_SERVER:$CC_PROXY_PORT"
    export https_proxy="http://$CC_PROXY_SERVER:$CC_PROXY_PORT"
    export no_proxy="localhost,127.0.0.1"

    # 配置 yum 代理
    if [ ! -f /etc/yum.conf.bak ]; then
        cp /etc/yum.conf /etc/yum.conf.bak
    fi
    sed -i "s/^proxy=.*$/proxy=http:\/\/$CC_PROXY_SERVER:$CC_PROXY_PORT/" /etc/yum.conf
    if ! grep -q "proxy=" /etc/yum.conf; then
        echo "proxy=http://$CC_PROXY_SERVER:$CC_PROXY_PORT" >> /etc/yum.conf
    fi

    echo "CCProxy 代理已开启。"
}

# 关闭 CCProxy 代理
disable_ccproxy() {
    unset http_proxy
    unset https_proxy
    unset no_proxy

    # 恢复 yum 配置
    if [ -f /etc/yum.conf.bak ]; then
        cp /etc/yum.conf.bak /etc/yum.conf
    fi

    echo "CCProxy 代理已关闭。"
}

# 备份 Nacos 的 YML 文件
backup_nacos_yml() {
    NACOS_DIR="/opt/nacos-server-${NACOS_VERSION}"
    BACKUP_DIR="$NACOS_DIR/backup_yml_$(date +%Y%m%d%H%M%S)"
    mkdir -p "$BACKUP_DIR"
    find "$NACOS_DIR/conf" -name "*.yml" -exec cp {} "$BACKUP_DIR" \;
    if [ $? -eq 0 ]; then
        echo "Nacos YML 文件备份成功，备份目录: $BACKUP_DIR"
    else
        echo "Nacos YML 文件备份失败，请检查。"
    fi
}

# 从指定文件夹导入 YML 文件到 Nacos
import_nacos_yml() {
    IMPORT_DIR="$1"
    if [ -z "$IMPORT_DIR" ]; then
        echo "请提供要导入的 YML 文件所在的文件夹路径。"
        return 1
    fi
    NACOS_DIR="/opt/nacos-server-${NACOS_VERSION}"
    if [ -d "$IMPORT_DIR" ]; then
        find "$IMPORT_DIR" -name "*.yml" -exec cp {} "$NACOS_DIR/conf" \;
        if [ $? -eq 0 ]; then
            echo "Nacos YML 文件导入成功。"
        else
            echo "Nacos YML 文件导入失败，请检查。"
        fi
    else
        echo "指定的导入文件夹不存在，请检查路径。"
    fi
}

updateYumRepo() {
  sed -i s/mirror.centos.org/vault.centos.org/g /etc/yum.repos.d/*.repo
  sed -i s/^#.*baseurl=http/baseurl=http/g /etc/yum.repos.d/*.repo
  sed -i s/^mirrorlist=http/#mirrorlist=http/g /etc/yum.repos.d/*.repo

  sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
  sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
  sudo yum clean all #先清理旧的缓存。
  sudo yum makecache #生成新的缓存以便让新的Yum源生效
}
install_mvn() {
  # 定义 Maven 下载链接
  MAVEN_DOWNLOAD_URL="https://dlcdn.apache.org/maven/maven-3/3.9.9/binaries/apache-maven-3.9.9-bin.tar.gz"
  # 定义保存下载文件的目录
  DOWNLOAD_DIR="/tmp"
  # 定义解压后的安装目录
  INSTALL_DIR="/usr/local"

  # 下载 Maven 安装包
  echo "正在下载 Maven..."
  wget -P "$DOWNLOAD_DIR" "$MAVEN_DOWNLOAD_URL"
  if [ $? -ne 0 ]; then
      echo "下载 Maven 失败，请检查网络连接。"
      exit 1
  fi

  # 获取下载的文件名
  MAVEN_FILE=$(basename "$MAVEN_DOWNLOAD_URL")

  # 解压 Maven 安装包
  echo "正在解压 Maven..."
  tar -zxvf "$DOWNLOAD_DIR/$MAVEN_FILE" -C "$INSTALL_DIR"
  if [ $? -ne 0 ]; then
      echo "解压 Maven 失败，请检查下载的文件是否完整。"
      exit 1
  fi

  # 获取解压后的目录名
  MAVEN_DIR=$(basename "$MAVEN_FILE" .tar.gz)

  # 配置环境变量
  echo "正在配置 Maven 环境变量..."
  echo "export MAVEN_HOME=/usr/local/$MAVEN_DIR" >> /etc/profile
  echo "export PATH=\$MAVEN_HOME/bin:\$PATH" >> /etc/profile
  source /etc/profile

  echo "Maven 安装成功！"
}

# 主函数，按顺序调用各个安装函数
main() {
    check_root
    update_system
    enable_ccproxy
    download_jdk
    install_jdk
    install_redis
    configure_redis
    install_docker
    configure_docker
    install_docker_compose
    install_nacos
    start_nacos
    backup_nacos_yml
    IMPORT_DIR="/path/to/your/yml/folder"  # 请替换为实际的 YML 文件所在文件夹路径
    import_nacos_yml "$IMPORT_DIR"
    disable_ccproxy
    echo "所有服务安装、配置并启动完成。"
}
