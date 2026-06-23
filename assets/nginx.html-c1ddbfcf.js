import{_ as t,r as o,o as l,c,a as n,b as s,d as a,e as i}from"./app-6be1f847.js";const r={},d={id:"nginx-报-403",tabindex:"-1"},p=n("a",{class:"header-anchor",href:"#nginx-报-403","aria-hidden":"true"},"#",-1),u={href:"https://www.cnblogs.com/kenshinobiy/p/7134120.html",target:"_blank",rel:"noopener noreferrer"},v=i(`<p>默认情况下 Nginx 的 user 配置为 <code>nginx</code>,将 <code>nginx</code> 改为 <code>root</code> ,重启 nginx 即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># /etc/nginx/nginx.conf</span>
user  nginx<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="you-need-to-know" tabindex="-1"><a class="header-anchor" href="#you-need-to-know" aria-hidden="true">#</a> You need to know</h2>`,3),m=n("li",null,"windows 下 nginx 更改配置不生效原因（可能运行了多个nginx进程，杀掉后重启nginx）",-1),b={href:"https://blog.csdn.net/a760352276/article/details/106774599",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"alias",-1),g=n("code",null,"root",-1),_=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#如果配置文件使用root，那么nginx最终得到的路径就是  配置的文件路径 + 匹配的路径   简单的说就是root旁边的路径在加上location的路径就是nginx要访问的静态资源</span>
<span class="token comment">#当访问 /download/1.jpg 时候， nginx 会去 /home/download/ 目录下去寻找静态资源(需要拼上 location 中的后缀)</span>
location /download/ <span class="token punctuation">{</span>
  root /home/<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">#如果配置文件使用alias ，nginx 最终得到的路径就是  配置文件的路径，比root少一个location的路径。</span>
<span class="token comment">#当访问 /download/1.jpg 时候， nginx 会去 /home/download/ 目录下去寻找静态资源</span>
location /download/ <span class="token punctuation">{</span>
  <span class="token builtin class-name">alias</span> /home/download/<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>匹配规则</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># proxy_pass的url后边 带&quot;/&quot;会把 /system 给替换掉，新的url里面 /system不存在,</span>
<span class="token comment"># proxy_pass的url后边 不带&quot;/&quot;则不会把 /system 给替换掉， 新的url里面 /system路径还存在</span>
 location /system <span class="token punctuation">{</span>
 	proxy_pass http://127.0.0.1:9000/<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),k={id:"nginx-forward-proxy-nginx正向代理模块",tabindex:"-1"},x=n("a",{class:"header-anchor",href:"#nginx-forward-proxy-nginx正向代理模块","aria-hidden":"true"},"#",-1),f={href:"https://github.com/chobits/ngx_http_proxy_connect_module?tab=readme-ov-file#install",target:"_blank",rel:"noopener noreferrer"},w=i(`<p>此模块需要额外编译,先下载 <code>nginx</code> 源码和 <code>ngx_http_proxy_connect_module</code> 源码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/download
<span class="token function">wget</span> https://nginx.org/download/nginx-1.24.0.tar.gz
<span class="token function">tar</span> zxvf nginx-1.24.0.tar.gz
<span class="token function">git</span> clone git@github.com:chobits/ngx_http_proxy_connect_module.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打补丁，然后将模块添加后源码编译安装 nginx,注意这个过程需要一次成功，如果报错则移除 nginx源码目录，重新解压nginx源码后再尝试安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>nginx正向代理配置 conf 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen                         <span class="token number">3127</span><span class="token punctuation">;</span>
    server_name <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>	
    <span class="token comment"># dns resolver used by forward proxying</span>
    resolver                       <span class="token number">114.114</span>.114.114<span class="token punctuation">;</span>

    <span class="token comment"># forward proxy for CONNECT requests</span>
    proxy_connect<span class="token punctuation">;</span>
    proxy_connect_allow            <span class="token number">443</span> <span class="token number">563</span><span class="token punctuation">;</span>
    proxy_connect_connect_timeout  10s<span class="token punctuation">;</span>
    proxy_connect_data_timeout     10s<span class="token punctuation">;</span>

    <span class="token comment"># defined by yourself for non-CONNECT requests</span>
    <span class="token comment"># Example: reverse proxy for non-CONNECT requests</span>
    location / <span class="token punctuation">{</span>
        proxy_pass http://<span class="token variable">$host</span><span class="token punctuation">;</span>
        proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


server <span class="token punctuation">{</span>
    listen                         <span class="token number">3128</span> default<span class="token punctuation">;</span>
    server_name <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>	
    <span class="token comment"># self signed certificate generated via openssl command</span>
    ssl_certificate_key            /etc/nginx/cert/default.key<span class="token punctuation">;</span>
    ssl_certificate                /etc/nginx/cert/default.crt<span class="token punctuation">;</span>
    ssl_session_cache              shared:SSL:1m<span class="token punctuation">;</span>

    <span class="token comment"># dns resolver used by forward proxying</span>
    resolver                       <span class="token number">114.114</span>.114.114<span class="token punctuation">;</span>

    <span class="token comment"># forward proxy for CONNECT request</span>
    proxy_connect<span class="token punctuation">;</span>
    proxy_connect_allow            <span class="token number">443</span> <span class="token number">563</span><span class="token punctuation">;</span>
    proxy_connect_connect_timeout  10s<span class="token punctuation">;</span>
    proxy_connect_data_timeout     10s<span class="token punctuation">;</span>

    <span class="token comment"># defined by yourself for non-CONNECT request</span>
    <span class="token comment"># Example: reverse proxy for non-CONNECT requests</span>
    location / <span class="token punctuation">{</span>
        proxy_pass http://<span class="token variable">$host</span><span class="token punctuation">;</span>
        proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正向代理测试命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://www.baidu.com  <span class="token parameter variable">-v</span> <span class="token parameter variable">-x</span> <span class="token number">127.0</span>.0.1:3127
<span class="token function">curl</span> https://github.com/ <span class="token parameter variable">-v</span> <span class="token parameter variable">-x</span> <span class="token number">127.0</span>.0.1:3128
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-http-转-https" tabindex="-1"><a class="header-anchor" href="#nginx-http-转-https" aria-hidden="true">#</a> nginx http 转 https</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server
<span class="token punctuation">{</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>
        server_name foo.com bar.com servername.com<span class="token punctuation">;</span>
        <span class="token builtin class-name">return</span> <span class="token number">301</span> https://<span class="token variable">$host</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> reference</h2>`,11),y={href:"https://www.cnblogs.com/fnz0/p/15803011.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.cnblogs.com/itzgr/p/13343387.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.cnblogs.com/xiongzaiqiren/p/16968651.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.jb51.net/article/246881.htm",target:"_blank",rel:"noopener noreferrer"},E={href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#var_server_port",target:"_blank",rel:"noopener noreferrer"},T={href:"https://learnku.com/articles/69306",target:"_blank",rel:"noopener noreferrer"},z={href:"https://www.alibabacloud.com/blog/how-to-build-nginx-from-source-on-ubuntu-20-04-lts_597793",target:"_blank",rel:"noopener noreferrer"};function O($,S){const e=o("ExternalLinkIcon");return l(),c("div",null,[n("h2",d,[p,s(),n("a",u,[s("Nginx 报 403"),a(e)])]),v,n("ul",null,[m,n("li",null,[n("a",b,[h,s(" vs "),g,a(e)])])]),_,n("h2",k,[x,s(" nginx forward proxy （"),n("a",f,[s("nginx正向代理模块"),a(e)]),s("）")]),w,n("ul",null,[n("li",null,[n("a",y,[s("nginx跨域配置1"),a(e)])]),n("li",null,[n("a",N,[s("nginx跨域配置2"),a(e)])]),n("li",null,[n("a",C,[s("nginx location 规则(优先级)"),a(e)])]),n("li",null,[n("a",q,[s("nginx 负载均衡"),a(e)])]),n("li",null,[n("a",E,[s("nginx core module"),a(e)])]),n("li",null,[n("a",T,[s("nginx 代理转发 传递真实 ip 地址"),a(e)])]),n("li",null,[n("a",z,[s("How to Build NGINX from Source on Ubuntu 20.04 LTS"),a(e)])])])])}const L=t(r,[["render",O],["__file","/home/runner/work/vuepress_blog/vuepress_blog/docs/.vuepress/.temp/pages/others/nginx.html.vue"]]);export{L as default};
