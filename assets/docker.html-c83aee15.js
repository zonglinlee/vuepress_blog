import{_ as i,r as c,o,c as l,a as n,b as s,d as a,e as t}from"./app-4d1d3ef4.js";const p={},r=n("h3",{id:"常见问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#常见问题","aria-hidden":"true"},"#"),s(" 常见问题")],-1),d={href:"https://blog.csdn.net/nexus124/article/details/104995251",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/benben_2015/article/details/88426438",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 优先级 ： dns缓存 &gt; hosts &gt; dns服务</span>
<span class="token comment"># 在docker-compose.yml文件中，通过配置参数extra_hosts来实现</span>
<span class="token comment"># 会自动写入到 容器中/etc/hosts 文件中</span>
extra_hosts:
 - <span class="token string">&quot;hostname1:162.242.195.82&quot;</span>
 - <span class="token string">&quot;hostname2:50.31.209.229&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m={href:"https://blog.51cto.com/u_13270164/3012377",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker-compose up -d 默认会以当前文件夹名为前缀创建一个 folderName-default 的默认网络，并将当前 service 中的服务加入到这个网络中</span>
<span class="token comment"># 使用 服务名称:port 就可以实现当前网络中各个容器的互联</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><p>docker 命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看docker网络</span>
<span class="token function">docker</span> networks <span class="token function">ls</span>
<span class="token comment">#查看运行容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> 
<span class="token comment">#进入当前容器交互式界面</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> containerId /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker-compose 命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
<span class="token function">docker-compose</span> down
<span class="token function">docker-compose</span> restart
<span class="token comment">#查看指定服务的最后 1000 行日志</span>
<span class="token function">docker-compose</span> logs <span class="token parameter variable">--tail</span> <span class="token number">1000</span> service-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-busybox-测试网络" tabindex="-1"><a class="header-anchor" href="#使用-busybox-测试网络" aria-hidden="true">#</a> 使用 busybox 测试网络</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看docker网络</span>
<span class="token function">docker</span> networks <span class="token function">ls</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--net</span> network-name <span class="token parameter variable">--name</span> busybox busybox
<span class="token comment"># docker run -it --net testApp-boot_mynet busybox</span>
<span class="token comment"># ping your-service-name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用docker内部的桥接网络进行容器之间访问" tabindex="-1"><a class="header-anchor" href="#使用docker内部的桥接网络进行容器之间访问" aria-hidden="true">#</a> 使用docker内部的桥接网络进行容器之间访问</h2><p>docker-compose.yaml 文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis
    <span class="token comment">#    unnecessary port expose</span>
    <span class="token comment">#    ports:</span>
    <span class="token comment">#      - &quot;6379:6379&quot;</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mynet
  <span class="token key atrule">nginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>latest
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /F/workspace/testApp/testApp<span class="token punctuation">-</span>boot/testApp.conf<span class="token punctuation">:</span>/etc/nginx/conf.d/testApp.conf
      <span class="token punctuation">-</span> /F/workspace/testApp/testApp<span class="token punctuation">-</span>boot/testApp.com.key<span class="token punctuation">:</span>/etc/nginx/cert/testApp.com.key
      <span class="token punctuation">-</span> /F/workspace/testApp/testApp<span class="token punctuation">-</span>boot/testApp.com.pem<span class="token punctuation">:</span>/etc/nginx/cert/testApp.com.pem
      <span class="token punctuation">-</span> /F/workspace/testApp/testApp<span class="token punctuation">-</span>vue/dist<span class="token punctuation">:</span>/home/nd<span class="token punctuation">-</span>test/html/
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;443:443&quot;</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mynet
  <span class="token key atrule">jdk</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> openjdk<span class="token punctuation">:</span><span class="token number">8</span>
    <span class="token comment">#    unnecessary port expose</span>
    <span class="token comment">#    ports:</span>
    <span class="token comment">#      - &quot;9000:9000&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /F/workspace/testApp/testApp<span class="token punctuation">-</span>boot/target/testApp<span class="token punctuation">-</span>xc<span class="token punctuation">-</span>2.0.0.jar<span class="token punctuation">:</span>/home/nd<span class="token punctuation">-</span>test/jar/testApp<span class="token punctuation">-</span>xc<span class="token punctuation">-</span>2.0.0.jar
    <span class="token key atrule">command</span><span class="token punctuation">:</span> nohup java <span class="token punctuation">-</span>jar /home/nd<span class="token punctuation">-</span>test/jar/testApp<span class="token punctuation">-</span>xc<span class="token punctuation">-</span>2.0.0.jar <span class="token punctuation">-</span><span class="token punctuation">-</span>spring.profiles.active=prod <span class="token punctuation">&gt;</span> /home/nd<span class="token punctuation">-</span>test/jar/stdout.log 2<span class="token punctuation">&gt;</span><span class="token important">&amp;1</span> &amp;
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> redis
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> jdk
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mynet
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">mynet</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx.conf 配置，docker 中使用自定义网络时候，比如上面的 mynet,会启用内嵌的 dns 服务，进入镜像中即可查看 <code>/etc/resolv.conf</code>, 默认为： <code>127.0.0.11</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考</p>`,14),b={href:"https://superuser.com/questions/1270370/check-connection-between-nodes-if-there-is-no-ping-command",target:"_blank",rel:"noopener noreferrer"},h={href:"https://stackoverflow.com/questions/52823279/how-to-nginx-reverse-proxy-outside-of-docker-to-proxy-pass-to-docker-containers",target:"_blank",rel:"noopener noreferrer"},_={href:"https://blog.51cto.com/u_13270164/3012377",target:"_blank",rel:"noopener noreferrer"};function g(x,f){const e=c("ExternalLinkIcon");return o(),l("div",null,[r,n("ul",null,[n("li",null,[n("a",d,[s("一个机器(可以访问外网)导出镜像，另一个机器(不能访问外网)导入镜像-(No command specified)"),a(e)])]),n("li",null,[n("a",u,[s("修改 docker 容器 hosts"),a(e)])])]),v,n("ul",null,[n("li",null,[n("a",m,[s("docker 网络"),a(e)])])]),k,n("ul",null,[n("li",null,[n("a",b,[s("Check connection between nodes if there is no 'ping' command"),a(e)])]),n("li",null,[n("a",h,[s("How to NGINX Reverse Proxy outside of Docker to proxy_pass to docker containers"),a(e)])]),n("li",null,[n("a",_,[s("Docker网络高级知识"),a(e)])])])])}const A=i(p,[["render",g],["__file","/home/runner/work/vuepress_blog/vuepress_blog/docs/.vuepress/.temp/pages/others/docker.html.vue"]]);export{A as default};
