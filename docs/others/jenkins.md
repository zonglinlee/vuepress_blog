---
title: jenkins问题
---

https://blog.csdn.net/u013670453/article/details/114489201

https://stackoverflow.com/questions/70663523/the-unauthenticated-git-protocol-on-port-9418-is-no-longer-supported

git config --global url."https://github.com/".insteadOf git://github.com/

## jenkins 中使用 yarn

**构建-执行 shell** 中全局安装 `yarn`，如果你在服务器上提前安装好了 `yarn`，可能在 jenkins 构建过程中找不到 `yarn` 命令，如果先使用 `npm` 安装 `yarn`， 再执行 `yarn`
命令就可以，我也不知道为什么

```shell
#!/bin/bash
npm install -g yarn
yarn -v
# Don’t generate a yarn.lock lockfile.
yarn install --pure-lockfile
yarn run build:test
```

## jenkins docker 部署

```yaml
# docker-compose.yml
services: # 集合
  docker_jenkins:
    user: root                                 # 为了避免一些权限问题 在这我使用了root
    restart: always                            # 重启方式
    image: jenkins/jenkins:lts                 # 指定服务所使用的镜像 在这里我选择了 LTS (长期支持)
    container_name: jenkins                    # 容器名称
    ports: # 对外暴露的端口定义
      - 9527:8080                              # 访问Jenkins服务端口
      - 50000:50000
    volumes: # 卷挂载路径
      - /var/vol_dockers/jenkins_home/:/var/jenkins_home  # 这是我们一开始创建的目录挂载到容器内的jenkins_home目录
      - /var/run/docker.sock:/var/run/docker.sock
      - /usr/bin/docker:/usr/bin/docker                # 这是为了我们可以在容器内使用docker命令
      - /usr/local/bin/docker-compose:/usr/local/bin/docker-compose
      - /root/.ssh:/root/.ssh
      - /home/jenkins/policy_settings.xml:/home/maven_settings.xml
      - /home/jdk/jdk-17.0.10/:/home/jdk/jdk-17.0.10
      - /etc/profile:/etc/profile
      - /usr/local/apache-maven-3.8.8:/usr/local/apache-maven-3.8.8
      - /usr/bin/docker:/usr/bin/docker
      - /home/mvn_repo:/home/mvn_repo # maven 仓库
      - /root/.nvm:/root/.nvm # node 映射
```

## jenkins build 脚本(后端)

```shell
. /etc/profile
cd /var/jenkins_home/workspace/common_services/zxxdykt-upload-video/zxxdykt-upload-video
#mvn clean package
java --version
mvn -v
mvn -X --settings /home/maven_settings.xml package

cd target
rm -rf ./app.jar
mv ./*.jar app.jar
cat > Dockerfile <<EOF
FROM eclipse-temurin:17-jre
#WORKDIR指令用于指定容器的一个目录， 容器启动时执行的命令会在该目录下执行。
WORKDIR /opt/docker/images/app/
#将当前metabase.jar 复制到容器根目录下
ADD app.jar app.jar
#将依赖包 复制到容器根目录/libs下,metabase.jar已不再需要添加其它jar包
#ADD libs /libs
#暴露容器端口为3000 Docker镜像告知Docker宿主机应用监听了3000端口
EXPOSE 3000
#容器启动时执行的命令
CMD java -jar app.jar
EOF

docker build -t upload-video:v1 .
```

## jenkins build 脚本(前端)

```shell
export PATH="/root/.nvm/versions/node/v18.19.0/bin:$PATH"
. /etc/profile
node -v
cd /var/jenkins_home/workspace/smenx_platform-usercenter-ui/smenx-user-center-ui
npm config set proxy=http://192.168.10.146:1081
npm install -g yarn 
yarn install
npm run build
```

## [docker上安装的jenkins容器内访问不了外网](https://juejin.cn/post/7301496834231615527)