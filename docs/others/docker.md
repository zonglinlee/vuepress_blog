---
title: docker
---

### 常见问题

- [一个机器(可以访问外网)导出镜像，另一个机器(不能访问外网)导入镜像-(No command specified)](https://blog.csdn.net/nexus124/article/details/104995251)
- [修改 docker 容器 hosts](https://blog.csdn.net/benben_2015/article/details/88426438)

```shell
# 优先级 ： dns缓存 > hosts > dns服务
# 在docker-compose.yml文件中，通过配置参数extra_hosts来实现
# 会自动写入到 容器中/etc/hosts 文件中
extra_hosts:
 - "hostname1:162.242.195.82"
 - "hostname2:50.31.209.229"
```

- [docker 网络](https://blog.51cto.com/u_13270164/3012377)

````shell
# docker-compose up -d 默认会以当前文件夹名为前缀创建一个 folderName-default 的默认网络，并将当前 service 中的服务加入到这个网络中
# 使用 服务名称:port 就可以实现当前网络中各个容器的互联
````

### 常用命令

docker 命令

```shell
#查看docker网络
docker networks ls
#查看运行容器
docker ps 
#进入当前容器交互式界面
docker exec -it containerId /bin/bash
```

docker-compose 命令

```shell
docker-compose up
docker-compose up -d
docker-compose down
docker-compose restart
#查看指定服务的最后 1000 行日志
docker-compose logs --tail 1000 service-name
```

## 使用 busybox 测试网络

```shell
#查看docker网络
docker networks ls
docker run -it --net network-name busybox
# docker run -it --net testApp-boot_mynet busybox
# ping your-service-name
```

## 使用docker内部的桥接网络进行容器之间访问

docker-compose.yaml 文件

```yaml
services:
  redis:
    image: redis
    #    unnecessary port expose
    #    ports:
    #      - "6379:6379"
    container_name: redis
    networks:
      - mynet
  nginx:
    image: nginx:latest
    volumes:
      - /F/workspace/testApp/testApp-boot/testApp.conf:/etc/nginx/conf.d/testApp.conf
      - /F/workspace/testApp/testApp-boot/testApp.com.key:/etc/nginx/cert/testApp.com.key
      - /F/workspace/testApp/testApp-boot/testApp.com.pem:/etc/nginx/cert/testApp.com.pem
      - /F/workspace/testApp/testApp-vue/dist:/home/nd-test/html/
    ports:
      - "443:443"
    container_name: nginx
    networks:
      - mynet
  jdk:
    image: openjdk:8
    #    unnecessary port expose
    #    ports:
    #      - "9000:9000"
    volumes:
      - /F/workspace/testApp/testApp-boot/target/testApp-xc-2.0.0.jar:/home/nd-test/jar/testApp-xc-2.0.0.jar
    command: nohup java -jar /home/nd-test/jar/testApp-xc-2.0.0.jar --spring.profiles.active=prod > /home/nd-test/jar/stdout.log 2>&1 &
    depends_on:
      - redis
    container_name: jdk
    networks:
      - mynet
networks:
  mynet:
```

nginx.conf 配置，docker 中使用自定义网络时候，比如上面的 mynet,会启用内嵌的 dns 服务，进入镜像中即可查看 `/etc/resolv.conf`, 默认为： `127.0.0.11`

```text
server {
		listen 80;
		server_name 127.0.0.1;
		rewrite ^(.*)$ https://$server_name$1 permanent;
}

server {
		listen       443  ssl;
        server_name  127.0.0.1;
		
		ssl_certificate /etc/nginx/cert/testApp.com.pem;
		ssl_certificate_key /etc/nginx/cert/testApp.com.key;
		ssl_session_timeout 5m;
		
	    client_max_body_size 200m;
	    
		# Docker DNS 使用 Docker DNS 解析
        resolver 127.0.0.11;

        location /testApp/api {
            client_max_body_size 500M;
            client_body_buffer_size 500M; 
            proxy_pass http://jdk:9000; # 使用服务名称进行访问
        }
	
	    location /testApp {
	        alias   /home/nd-test/html;
            index  index.html index.htm;
            try_files $uri $uri/ /testApp/index.html;
	    }
        
        location ~^/(WEB-INF)/{ 
           deny all; 
        }
    }

```

参考

- [Check connection between nodes if there is no 'ping' command](https://superuser.com/questions/1270370/check-connection-between-nodes-if-there-is-no-ping-command)
- [How to NGINX Reverse Proxy outside of Docker to proxy_pass to docker containers](https://stackoverflow.com/questions/52823279/how-to-nginx-reverse-proxy-outside-of-docker-to-proxy-pass-to-docker-containers)
- [Docker网络高级知识](https://blog.51cto.com/u_13270164/3012377)
