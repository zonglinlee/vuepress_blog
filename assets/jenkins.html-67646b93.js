import{_ as i,r as t,o as l,c,a as n,b as s,d as e,e as o}from"./app-6be1f847.js";const p={},r=o(`<p>https://blog.csdn.net/u013670453/article/details/114489201</p><p>https://stackoverflow.com/questions/70663523/the-unauthenticated-git-protocol-on-port-9418-is-no-longer-supported</p><p>git config --global url.&quot;https://github.com/&quot;.insteadOf git://github.com/</p><h2 id="jenkins-中使用-yarn" tabindex="-1"><a class="header-anchor" href="#jenkins-中使用-yarn" aria-hidden="true">#</a> jenkins 中使用 yarn</h2><p><strong>构建-执行 shell</strong> 中全局安装 <code>yarn</code>，如果你在服务器上提前安装好了 <code>yarn</code>，可能在 jenkins 构建过程中找不到 <code>yarn</code> 命令，如果先使用 <code>npm</code> 安装 <code>yarn</code>， 再执行 <code>yarn</code> 命令就可以，我也不知道为什么</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">yarn</span>
<span class="token function">yarn</span> <span class="token parameter variable">-v</span>
<span class="token comment"># Don’t generate a yarn.lock lockfile.</span>
<span class="token function">yarn</span> <span class="token function">install</span> --pure-lockfile
<span class="token function">yarn</span> run build:test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jenkins-docker-部署" tabindex="-1"><a class="header-anchor" href="#jenkins-docker-部署" aria-hidden="true">#</a> jenkins docker 部署</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># docker-compose.yml</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span> <span class="token comment"># 集合</span>
  <span class="token key atrule">docker_jenkins</span><span class="token punctuation">:</span>
    <span class="token key atrule">user</span><span class="token punctuation">:</span> root                                 <span class="token comment"># 为了避免一些权限问题 在这我使用了root</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always                            <span class="token comment"># 重启方式</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> jenkins/jenkins<span class="token punctuation">:</span>lts                 <span class="token comment"># 指定服务所使用的镜像 在这里我选择了 LTS (长期支持)</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> jenkins                    <span class="token comment"># 容器名称</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> <span class="token comment"># 对外暴露的端口定义</span>
      <span class="token punctuation">-</span> 9527<span class="token punctuation">:</span><span class="token number">8080</span>                              <span class="token comment"># 访问Jenkins服务端口</span>
      <span class="token punctuation">-</span> 50000<span class="token punctuation">:</span><span class="token number">50000</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span> <span class="token comment"># 卷挂载路径</span>
      <span class="token punctuation">-</span> /var/vol_dockers/jenkins_home/<span class="token punctuation">:</span>/var/jenkins_home  <span class="token comment"># 这是我们一开始创建的目录挂载到容器内的jenkins_home目录</span>
      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock
      <span class="token punctuation">-</span> /usr/bin/docker<span class="token punctuation">:</span>/usr/bin/docker                <span class="token comment"># 这是为了我们可以在容器内使用docker命令</span>
      <span class="token punctuation">-</span> /usr/local/bin/docker<span class="token punctuation">-</span>compose<span class="token punctuation">:</span>/usr/local/bin/docker<span class="token punctuation">-</span>compose
      <span class="token punctuation">-</span> /root/.ssh<span class="token punctuation">:</span>/root/.ssh
      <span class="token punctuation">-</span> /home/jenkins/policy_settings.xml<span class="token punctuation">:</span>/home/maven_settings.xml
      <span class="token punctuation">-</span> /home/jdk/jdk<span class="token punctuation">-</span>17.0.10/<span class="token punctuation">:</span>/home/jdk/jdk<span class="token punctuation">-</span>17.0.10
      <span class="token punctuation">-</span> /etc/profile<span class="token punctuation">:</span>/etc/profile
      <span class="token punctuation">-</span> /usr/local/apache<span class="token punctuation">-</span>maven<span class="token punctuation">-</span>3.8.8<span class="token punctuation">:</span>/usr/local/apache<span class="token punctuation">-</span>maven<span class="token punctuation">-</span>3.8.8
      <span class="token punctuation">-</span> /usr/bin/docker<span class="token punctuation">:</span>/usr/bin/docker
      <span class="token punctuation">-</span> /home/mvn_repo<span class="token punctuation">:</span>/home/mvn_repo <span class="token comment"># maven 仓库</span>
      <span class="token punctuation">-</span> /root/.nvm<span class="token punctuation">:</span>/root/.nvm <span class="token comment"># node 映射</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jenkins-build-脚本-后端" tabindex="-1"><a class="header-anchor" href="#jenkins-build-脚本-后端" aria-hidden="true">#</a> jenkins build 脚本(后端)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span> /etc/profile
<span class="token builtin class-name">cd</span> /var/jenkins_home/workspace/common_services/zxxdykt-upload-video/zxxdykt-upload-video
<span class="token comment">#mvn clean package</span>
<span class="token function">java</span> <span class="token parameter variable">--version</span>
mvn <span class="token parameter variable">-v</span>
mvn <span class="token parameter variable">-X</span> <span class="token parameter variable">--settings</span> /home/maven_settings.xml package

<span class="token builtin class-name">cd</span> target
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> ./app.jar
<span class="token function">mv</span> ./*.jar app.jar
<span class="token function">cat</span> <span class="token operator">&gt;</span> Dockerfile <span class="token operator">&lt;&lt;</span><span class="token string">EOF
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
EOF</span>

<span class="token function">docker</span> build <span class="token parameter variable">-t</span> upload-video:v1 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jenkins-build-脚本-前端" tabindex="-1"><a class="header-anchor" href="#jenkins-build-脚本-前端" aria-hidden="true">#</a> jenkins build 脚本(前端)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/root/.nvm/versions/node/v18.19.0/bin:<span class="token environment constant">$PATH</span>&quot;</span>
<span class="token builtin class-name">.</span> /etc/profile
<span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token builtin class-name">cd</span> /var/jenkins_home/workspace/smenx_platform-policy-ui-prod/smenx-policy-ui
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> <span class="token assign-left variable">proxy</span><span class="token operator">=</span>http://192.168.10.146:1081
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">yarn</span> 
<span class="token function">yarn</span> <span class="token function">install</span>
<span class="token function">npm</span> run build

<span class="token function">tar</span> <span class="token parameter variable">-cvf</span> dist.tar  ./dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建完成后脚本(Publish Over SSH)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xvf</span>  /home/vue/policy/dist.tar <span class="token parameter variable">-C</span> /home/vue/policy/
<span class="token builtin class-name">cd</span> /home/vue/policy/
<span class="token function">cp</span> <span class="token parameter variable">-R</span>  ./dist/* ./
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> dist.tar
<span class="token function">rm</span> <span class="token parameter variable">-rf</span>  ./dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),d={id:"docker上安装的jenkins容器内访问不了外网",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#docker上安装的jenkins容器内访问不了外网","aria-hidden":"true"},"#",-1),v={href:"https://juejin.cn/post/7301496834231615527",target:"_blank",rel:"noopener noreferrer"},k={id:"jenkins使用publish-over-ssh插件实现部署",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#jenkins使用publish-over-ssh插件实现部署","aria-hidden":"true"},"#",-1),b={href:"https://www.cnblogs.com/iXiAo9/p/16282260.html",target:"_blank",rel:"noopener noreferrer"},h={id:"jenkins使用ssh-publishers远程发送文件成功但在服务器找不到对应文件",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#jenkins使用ssh-publishers远程发送文件成功但在服务器找不到对应文件","aria-hidden":"true"},"#",-1),g={href:"https://blog.csdn.net/mqq2502513332/article/details/127214288",target:"_blank",rel:"noopener noreferrer"};function _(j,y){const a=t("ExternalLinkIcon");return l(),c("div",null,[r,n("h2",d,[u,s(),n("a",v,[s("docker上安装的jenkins容器内访问不了外网"),e(a)])]),n("h2",k,[m,s(),n("a",b,[s("Jenkins使用Publish Over SSH插件实现部署"),e(a)])]),n("h2",h,[f,s(),n("a",g,[s("jenkins使用SSH Publishers远程发送文件成功但在服务器找不到对应文件"),e(a)])])])}const D=i(p,[["render",_],["__file","/home/runner/work/vuepress_blog/vuepress_blog/docs/.vuepress/.temp/pages/others/jenkins.html.vue"]]);export{D as default};
