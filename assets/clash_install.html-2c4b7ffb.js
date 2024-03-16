import{_ as t,r as o,o as p,c as l,a as s,b as a,d as e,e as c}from"./app-4d1d3ef4.js";const r={},i=c(`<p>腾讯云不可访问GitHub，安装代理clash, 本地下载clash传到云服务器</p><p>使用systemd管理clash服务时候注意配置项 <strong>User</strong> 和 <strong>ExecStart</strong></p><blockquote><p>User=root ExecStart=/root/software/clash</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token hashbang comment">#!/usr/bin/env bash</span>

<span class="token constant">CLASH_VERSION</span><span class="token operator">=</span>clash<span class="token operator">-</span>linux<span class="token operator">-</span>amd64<span class="token operator">-</span>v1<span class="token punctuation">.</span><span class="token number">12.0</span><span class="token punctuation">.</span>gz
# 截取<span class="token punctuation">.</span>gz  得到 clash<span class="token operator">-</span>linux<span class="token operator">-</span>amd64<span class="token operator">-</span>v1<span class="token punctuation">.</span><span class="token number">12.0</span>
unzipFileName<span class="token operator">=</span><span class="token string">&quot;\${CLASH_VERSION%.gz}&quot;</span>

<span class="token keyword">function</span> <span class="token function">installClash</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token operator">-</span>d <span class="token operator">~</span><span class="token operator">/</span>software <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> then
    downloadAndGunzip
  <span class="token keyword">else</span>
    mkdir <span class="token operator">-</span>p <span class="token operator">~</span><span class="token operator">/</span>software
    downloadAndGunzip
  fi
<span class="token punctuation">}</span>

# 下载解压
<span class="token keyword">function</span> <span class="token function">downloadAndGunzip</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  cd <span class="token operator">~</span><span class="token operator">/</span>software
  <span class="token keyword">if</span> <span class="token operator">!</span> wget <span class="token string">&quot;https://github.com/Dreamacro/clash/releases/download/v1.12.0/$CLASH_VERSION&quot;</span><span class="token punctuation">;</span>then
    echo <span class="token string">&quot;download clash fail&quot;</span>
    exit <span class="token number">1</span>
  fi
  gunzip $unzipFileName
  mv $unzipFileName clash<span class="token punctuation">.</span>bak # 改名
  chmod <span class="token operator">+</span>x clash<span class="token punctuation">.</span>bak

  # 启动clash会失败，因为没有 config<span class="token punctuation">.</span>yaml 和 Country<span class="token punctuation">.</span>mmdb 文件
  # 配置文件在 <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>config<span class="token operator">/</span>clash 目录下
  # 添加 Clash 配置订阅 到机场官网订阅中心选择复制订阅，然后在浏览器中访问【 订阅地址后面加<span class="token operator">&amp;</span>flag<span class="token operator">=</span>clash 】
  # 然后右击浏览器页面，选择“另存为”保存页面 然后给保存的文件修改为config<span class="token punctuation">.</span>yaml
  # <span class="token punctuation">.</span><span class="token operator">/</span>clash  # 运行clash
<span class="token punctuation">}</span>

# Clash 自启动及后台运行 <span class="token operator">/</span>etc<span class="token operator">/</span>systemd<span class="token operator">/</span>system<span class="token operator">/</span>clash<span class="token punctuation">.</span>service
<span class="token keyword">function</span> <span class="token function">createClashService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  touch <span class="token operator">/</span>etc<span class="token operator">/</span>systemd<span class="token operator">/</span>system<span class="token operator">/</span>clash<span class="token punctuation">.</span>service
  chmod <span class="token number">755</span> <span class="token operator">/</span>etc<span class="token operator">/</span>systemd<span class="token operator">/</span>system<span class="token operator">/</span>clash<span class="token punctuation">.</span>service

  # https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>linuxtect<span class="token punctuation">.</span>com<span class="token operator">/</span>how<span class="token operator">-</span>to<span class="token operator">-</span>cat<span class="token operator">-</span>eof<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">-</span>multi<span class="token operator">-</span>line<span class="token operator">-</span>string<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>linux<span class="token operator">-</span>bash<span class="token operator">/</span>
  cat <span class="token operator">&lt;&lt;</span><span class="token constant">EOF</span> <span class="token operator">&gt;</span><span class="token operator">/</span>etc<span class="token operator">/</span>systemd<span class="token operator">/</span>system<span class="token operator">/</span>clash<span class="token punctuation">.</span>service
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
Description<span class="token operator">=</span>Clash service
After<span class="token operator">=</span>network<span class="token punctuation">.</span>target

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
Description<span class="token operator">=</span>Clash service
After<span class="token operator">=</span>network<span class="token punctuation">.</span>target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
Type<span class="token operator">=</span>simple
User<span class="token operator">=</span>root
ExecStart<span class="token operator">=</span><span class="token operator">/</span>root<span class="token operator">/</span>software<span class="token operator">/</span>clash
Restart<span class="token operator">=</span>on<span class="token operator">-</span>failure
RestartPreventExitStatus<span class="token operator">=</span><span class="token number">23</span>

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
WantedBy<span class="token operator">=</span>multi<span class="token operator">-</span>user<span class="token punctuation">.</span>target
<span class="token constant">EOF</span>

  # 重载服务
  sudo systemctl daemon<span class="token operator">-</span>reload
  # 开机启动
  sudo systemctl enable clash
  # 启动服务
  sudo systemctl start clash
  # 查看服务状态
  sudo systemctl status clash
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">setProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  # 配置全局代理 以下几种格式都写上
  echo <span class="token string">&#39;export http_proxy=&quot;http://127.0.0.1:1081/&quot;&#39;</span> <span class="token operator">&gt;&gt;</span><span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>bashrc
  echo <span class="token string">&#39;export HTTP_PROXY=&quot;http://127.0.0.1:1081/&quot;&#39;</span> <span class="token operator">&gt;&gt;</span><span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>bashrc
  echo <span class="token string">&#39;export https_proxy=&quot;http://127.0.0.1:1081/&quot;&#39;</span> <span class="token operator">&gt;&gt;</span><span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>bashrc
  echo <span class="token string">&#39;export HTTPS_PROXY=&quot;http://127.0.0.1:1081/&quot;&#39;</span> <span class="token operator">&gt;&gt;</span><span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>bashrc
  echo <span class="token string">&#39;export all_proxy=&quot;http://127.0.0.1:1081/&quot;&#39;</span> <span class="token operator">&gt;&gt;</span><span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>bashrc
  echo <span class="token string">&#39;export ALL_PROXY=&quot;http://127.0.0.1:1081/&quot;&#39;</span> <span class="token operator">&gt;&gt;</span><span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>bashrc
  echo <span class="token string">&#39;export no_proxy=&quot;127.0.0.1,localhost,mirrors.tencentyun.com&quot;&#39;</span> <span class="token operator">&gt;&gt;</span><span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>bashrc
  echo <span class="token string">&#39;export NO_PROXY=&quot;127.0.0.1,localhost,mirrors.tencentyun.com&#39;</span> <span class="token operator">&gt;&gt;</span><span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>bashrc

  source <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>bashrc
<span class="token punctuation">}</span>

installClash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>clash提供了 web api 管理端，访问网址 <code>http://clash.razord.top</code>, 输入服务器 ip 地址即可查询 clash 日志</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,6),u={href:"https://xtrojan.vip/client/how-to-configure-scientific-internet-proxy-service-on-clash-for-linux.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.idcbuy.net/it/linux/2433.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://luckyfuture.top/config-clash-on-linux.html#%E5%AE%89%E8%A3%85clash",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const n=o("ExternalLinkIcon");return p(),l("div",null,[i,s("ul",null,[s("li",null,[s("a",u,[a("如何在 Clash for Linux 上配置科学上网代理服务"),e(n)])]),s("li",null,[s("a",d,[a("在 Linux 服务器上安装 Clash，以及开机自动启动"),e(n)])]),s("li",null,[s("a",k,[a("clash web-api 外网访问"),e(n)])])])])}const g=t(r,[["render",v],["__file","/home/runner/work/vuepress_blog/vuepress_blog/docs/.vuepress/.temp/pages/shell/clash_install.html.vue"]]);export{g as default};
