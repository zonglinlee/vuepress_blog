import{_ as p,r as i,o as l,c as t,a as n,b as s,d as a,e as r}from"./app-4d1d3ef4.js";const o={},c=r(`<h2 id="安装注意事项" tabindex="-1"><a class="header-anchor" href="#安装注意事项" aria-hidden="true">#</a> 安装注意事项</h2><p>安装 php php-fpm php-mysql,安装过程中注意有没有报错信息</p><ul><li>Ubuntu 18 上默认安装 php7.2, php 会默认自动安装 apache2</li><li>php-fpm,是 PHP 对 Web Server(nginx 或者 Apache2) 提供的 FastCGI 协议的接口程序，额外还提供了相对智能一些任务管理。 Wordpress是 php 动态网站，当客户端请求后缀名为 .php 的文件时，nginx不能直接解析，而是需要交给 php-fpm 解析后返回客户端。</li><li>php-mysql, 这个是 php 用来连接mysql的，php安装的时候没有默认安装这个</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> list <span class="token operator">|</span> <span class="token function">grep</span> php
<span class="token function">apt</span> <span class="token function">install</span> php
<span class="token function">apt</span> <span class="token function">install</span> php-fpm
<span class="token function">apt</span> <span class="token function">install</span> php-mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-php-fpm" tabindex="-1"><a class="header-anchor" href="#配置-php-fpm" aria-hidden="true">#</a> 配置 php-fpm</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看 php-fpm 服务文件</span>
systemctl list-unit-files <span class="token operator">|</span><span class="token function">grep</span> fpm
<span class="token comment"># 查看 php-fpm 打开的文件</span>
systemctl status php7.2-fpm <span class="token comment"># 查看状态 并 获取 pid</span>
<span class="token function">lsof</span> <span class="token parameter variable">-p</span> fpm-pid <span class="token comment"># 查看 fpm 服务的监听端口</span>
<span class="token comment"># 查看配置文件有效信息（过滤注释）</span>
<span class="token function">grep</span> <span class="token parameter variable">-v</span> ^<span class="token punctuation">\\</span><span class="token punctuation">;</span> /etc/php/7.2/fpm/php-fpm.conf <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> ^$
<span class="token function">grep</span> <span class="token parameter variable">-v</span> ^<span class="token punctuation">\\</span><span class="token punctuation">;</span> /etc/php/7.2/fpm/pool.d/www.conf <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> ^$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>/etc/php/7.2/fpm/pool.d/www.conf</code>路径下，php-fpm 配置默认开启的是socket监听，</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>listen <span class="token operator">=</span> /run/php/php7.2-fpm.sock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里我们前面加分号注释掉 socket 监听，开启 tcp 监听，其他的配置无需更改</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">;</span>listen <span class="token operator">=</span> /run/php/php7.2-fpm.sock
listen <span class="token operator">=</span> <span class="token number">127.0</span>.0.1:9000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改配置文件之后需要重启 php-fmp 服务，这里有坑，可以查看到 9000 端口在被 php-fpm 监听，但服务状态是 inactive，所以服务启动成功与否不能靠端口监听来判断</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重启服务</span>
systemctl restart php7.2-fpm
systemctl status php7.2-fpm
<span class="token comment"># 查看 9000 端口监听情况</span>
<span class="token function">lsof</span> <span class="token parameter variable">-i:9000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-nginx" tabindex="-1"><a class="header-anchor" href="#配置-nginx" aria-hidden="true">#</a> 配置 nginx</h2><p>nginx配置中可以直接将php文件交给 php-fpm 处理，或者nginx也可以代理到 Apache 服务器，由 Apache web server 交给 php-fpm 处理 php后缀的文件，我们这里直接由nginx交给 php-fpm 解析</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen       8082;
    server_name  your_server_ip_address;

    access_log  /var/log/nginx/wordpress.access.log  main;
    error_log   /var/log/nginx/wordpress.error.log;

    location / {
        root   /wordpress/;
        index  index.php;
    }

    error_page   500 502 503 504  /50x.html;

#     proxy the PHP scripts to Apache listening on 127.0.0.1:80

#     location ~ \\.php$ {
# 	    root /wordpress;
#         proxy_pass   http://127.0.0.1;
#     }

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    location ~ \\.php$ {
	    root /wordpress;
	    include fastcgi_params;
	    # fastcgi_pass unix:/run/php/php7.2-fpm.sock;
	    fastcgi_pass 127.0.0.1:9000;
	    fastcgi_index index.php;
	    fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
        # fastcgi_param  SCRIPT_FILENAME /wordpress$fastcgi_script_name;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-wordpress" tabindex="-1"><a class="header-anchor" href="#安装-wordpress" aria-hidden="true">#</a> 安装 WordPress</h2><p>在以上配置都做好之后，可以尝试访问 <code>http://wordpress-blog-server:8082/wp-admin/install.php</code>,如果页面可以正常访问，说明已经可以解析php文件了，如果页面显示 php 相关错误，可以通过以下方法来分析错误</p><p>在你的WordPress根目录下新建一个 phpinfo.php 文件，文件内容如下，然后浏览器访问<code>http://wordpress-blog-server:8082/phpinfo.php</code>，这样可以查看php相关配置信息以及所安装的模块信息</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token function">phpinfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$link</span> <span class="token operator">=</span> <span class="token function">mysqli_connect</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;localhost&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;mysql_username&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;mysql_login_password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$link</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Could not connect: &#39;</span> <span class="token operator">.</span> <span class="token function">mysqli_error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;Connected successfully&#39;</span><span class="token punctuation">;</span>
<span class="token function">mysqli_close</span><span class="token punctuation">(</span><span class="token variable">$link</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于我安装的是 mysql8.0，默认的密码验证为 caching_sha2_password, 当前 PHP 版本中所带的 mysqlnd 无法支持这种验证 ，而 PHP 默认的是 mysql_native_password ,需要更改用户密码验证方式</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">use</span> mysql<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token keyword">user</span><span class="token punctuation">,</span>host<span class="token punctuation">,</span>plugin <span class="token keyword">from</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&#39;username&#39;</span><span class="token variable">@&#39;host&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;your_new_password&#39;</span><span class="token punctuation">;</span>
flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wordpress相关" tabindex="-1"><a class="header-anchor" href="#wordpress相关" aria-hidden="true">#</a> Wordpress相关</h2>`,22),d={href:"https://cpury.com/2861.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/weixin_43059285/article/details/108013067",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.wbolt.com/installation-failed-could-not-create-directory.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/weixin_46062398/article/details/116566840",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" reference")],-1),k={href:"https://codex.wordpress.org/zh-cn:%E5%AE%89%E8%A3%85_WordPress",target:"_blank",rel:"noopener noreferrer"},b={href:"https://cloud.tencent.com/developer/article/1538240",target:"_blank",rel:"noopener noreferrer"},g={href:"https://kinsta.com/knowledgebase/php-installation-missing-mysql-extension-required-by-wordpress/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.csdn.net/qq_38157825/article/details/108885653",target:"_blank",rel:"noopener noreferrer"};function _(w,x){const e=i("ExternalLinkIcon");return l(),t("div",null,[c,n("ul",null,[n("li",null,[n("a",d,[s("中文支持"),a(e)])]),n("li",null,[n("a",u,[s("主题安装 ftp 验证问题"),a(e)])]),n("li",null,[n("a",v,[s("使用WordPress站点健康工具"),a(e)])]),n("li",null,[n("a",m,[s("Wordpress站点基本设置1——主题安装及配置"),a(e)])])]),h,n("ul",null,[n("li",null,[n("a",k,[s("WordPress安装指南"),a(e)])]),n("li",null,[n("a",b,[s("全面了解CGI、FastCGI、PHP-FPM"),a(e)])]),n("li",null,[n("a",g,[s("How to Fix “Your PHP Installation Appears to Be Missing the MySQL Extension Which Is Required by WordPress” Error"),a(e)])]),n("li",null,[n("a",f,[s("wordpress连接不上mysql8的解决方案"),a(e)])])])])}const q=p(o,[["render",_],["__file","/home/runner/work/vuepress_blog/vuepress_blog/docs/.vuepress/.temp/pages/shell/wordpress_install.html.vue"]]);export{q as default};
