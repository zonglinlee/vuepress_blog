import{_ as t,r as i,o as l,c as r,a as n,b as a,d as e,e as o}from"./app-6be1f847.js";const c={},p=o(`<h3 id="一个简单的-bat脚本" tabindex="-1"><a class="header-anchor" href="#一个简单的-bat脚本" aria-hidden="true">#</a> 一个简单的<code>.bat</code>脚本</h3><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>@echo off
start cmd /k &quot;http-server -c-1 --port 8888&quot;
start http://localhost:8888
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定时关机" tabindex="-1"><a class="header-anchor" href="#定时关机" aria-hidden="true">#</a> 定时关机</h3><p>1小时后关机：<code>shutdown -s -t 3600</code></p><h3 id="远程连接" tabindex="-1"><a class="header-anchor" href="#远程连接" aria-hidden="true">#</a> 远程连接</h3><p><code>mstsc</code></p><h3 id="lockscreen" tabindex="-1"><a class="header-anchor" href="#lockscreen" aria-hidden="true">#</a> lockScreen</h3><p><code>win + L</code></p><h3 id="windows-c盘清理" tabindex="-1"><a class="header-anchor" href="#windows-c盘清理" aria-hidden="true">#</a> windows C盘清理</h3><p>https://baiyunju.cc/6196</p><h3 id="windows-简单脚本" tabindex="-1"><a class="header-anchor" href="#windows-简单脚本" aria-hidden="true">#</a> windows 简单脚本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@echo off

<span class="token builtin class-name">set</span> <span class="token assign-left variable">JAR_PATH_1</span><span class="token operator">=</span>D:<span class="token punctuation">\\</span>smenx<span class="token punctuation">\\</span>smenx-cloud-system.jar
<span class="token builtin class-name">set</span> <span class="token assign-left variable">redisPath</span><span class="token operator">=</span>G:<span class="token punctuation">\\</span>Redis-x64-3.0.504<span class="token punctuation">\\</span>redis-server.exe
<span class="token builtin class-name">set</span> <span class="token assign-left variable">nacosPath</span><span class="token operator">=</span>G:<span class="token punctuation">\\</span>nacos-server-2.0.3<span class="token punctuation">\\</span>nacos<span class="token punctuation">\\</span>bin<span class="token punctuation">\\</span>startup.cmd
<span class="token builtin class-name">set</span> <span class="token assign-left variable">nginxPath</span><span class="token operator">=</span>E:<span class="token punctuation">\\</span>nginx-1.23.4<span class="token punctuation">\\</span>nginx-1.23.4<span class="token punctuation">\\</span>nginx.exe

REM 执行exe文件
start <span class="token string">&quot;&quot;</span> <span class="token string">&quot;%redisPath%&quot;</span>
start <span class="token string">&quot;&quot;</span> <span class="token string">&quot;%nacosPath%&quot;</span>
start <span class="token string">&quot;&quot;</span> <span class="token string">&quot;%nginxPath%&quot;</span>

REM 启动第一个JAR包
start <span class="token string">&quot;App1&quot;</span> <span class="token function">java</span> <span class="token parameter variable">-Dfile.encoding</span><span class="token operator">=</span>UTF-8  <span class="token parameter variable">-jar</span> %JAR_PATH_1%

REM 可选：保持命令行窗口打开以查看输出
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="windows-wsl" tabindex="-1"><a class="header-anchor" href="#windows-wsl" aria-hidden="true">#</a> windows wsl</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看已安装的 WSL 发行版</span>
wsl <span class="token parameter variable">--list</span> <span class="token parameter variable">--verbose</span>
<span class="token comment"># 或简写：</span>
wsl <span class="token parameter variable">-l</span> <span class="token parameter variable">-v</span>

<span class="token comment"># 设置默认 WSL 发行版</span>
wsl --set-default <span class="token operator">&lt;</span>发行版名称<span class="token operator">&gt;</span>
<span class="token comment"># 例如，将 Ubuntu 设置为默认发行版：</span>
wsl --set-default Ubuntu

<span class="token comment"># 启动指定的 WSL 发行版</span>
wsl <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>发行版名称<span class="token operator">&gt;</span>
<span class="token comment"># 例如，启动 Debian：</span>
wsl <span class="token parameter variable">-d</span> Debian

<span class="token comment"># 停止 WSL 发行版</span>
wsl <span class="token parameter variable">--terminate</span> <span class="token operator">&lt;</span>发行版名称<span class="token operator">&gt;</span>
<span class="token comment"># 例如，停止 Ubuntu：</span>
wsl <span class="token parameter variable">--terminate</span> Ubuntu

<span class="token comment"># 卸载 WSL 发行版</span>
wsl <span class="token parameter variable">--unregister</span> <span class="token operator">&lt;</span>发行版名称<span class="token operator">&gt;</span>
<span class="token comment"># 例如，卸载 Debian：</span>
wsl <span class="token parameter variable">--unregister</span> Debian

<span class="token comment"># 设置 WSL 默认版本</span>
wsl --set-default-version <span class="token operator">&lt;</span>版本号<span class="token operator">&gt;</span>
<span class="token comment"># 例如，设置默认版本为 WSL 2：</span>
wsl --set-default-version <span class="token number">2</span>

<span class="token comment"># 将指定发行版转换为 WSL 2</span>
wsl --set-version <span class="token operator">&lt;</span>发行版名称<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>版本号<span class="token operator">&gt;</span>
<span class="token comment"># 例如，将 Ubuntu 转换为 WSL 2：</span>
wsl --set-version Ubuntu <span class="token number">2</span>

<span class="token comment"># 关闭所有 WSL 发行版</span>
wsl <span class="token parameter variable">--shutdown</span>

<span class="token comment"># 查看 WSL 状态</span>
wsl <span class="token parameter variable">--status</span>

<span class="token comment"># 导出 WSL 发行版</span>
wsl <span class="token parameter variable">--export</span> <span class="token operator">&lt;</span>发行版名称<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>导出路径<span class="token operator">&gt;</span>.tar
<span class="token comment"># 例如，将 Ubuntu 导出到 D:\\ubuntu.tar：</span>
wsl <span class="token parameter variable">--export</span> Ubuntu D:<span class="token punctuation">\\</span>ubuntu.tar

<span class="token comment"># 导入 WSL 发行版</span>
wsl <span class="token parameter variable">--import</span> <span class="token operator">&lt;</span>发行版名称<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>安装路径<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>导出路径<span class="token operator">&gt;</span>.tar
<span class="token comment"># 例如，将 D:\\ubuntu.tar 导入到 D:\\wsl\\ubuntu：</span>
wsl <span class="token parameter variable">--import</span> Ubuntu D:<span class="token punctuation">\\</span>wsl<span class="token punctuation">\\</span>ubuntu D:<span class="token punctuation">\\</span>ubuntu.tar

<span class="token comment"># 在 WSL 中运行单个命令</span>
wsl <span class="token operator">&lt;</span>命令<span class="token operator">&gt;</span>
<span class="token comment"># 例如，在 WSL 中运行 ls 命令：</span>
wsl <span class="token function">ls</span>

<span class="token comment"># 在指定发行版中运行命令</span>
wsl <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>发行版名称<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>命令<span class="token operator">&gt;</span>
<span class="token comment"># 例如，在 Debian 中运行 ls 命令：</span>
wsl <span class="token parameter variable">-d</span> Debian <span class="token function">ls</span>

<span class="token comment"># 在 WSL 中访问 Windows 文件</span>
<span class="token comment"># WSL 可以直接访问 Windows 文件系统，路径为 /mnt/。例如：</span>
<span class="token builtin class-name">cd</span> /mnt/c/Users/YourUsername

<span class="token comment"># 在 Windows 中访问 WSL 文件</span>
<span class="token comment"># WSL 文件系统可以通过 \\\\wsl$ 访问。在文件资源管理器中输入：</span>
<span class="token punctuation">\\</span><span class="token punctuation">\\</span>wsl$

<span class="token comment"># 查看 WSL 帮助</span>
wsl <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h3>`,15),d={href:"https://wsgzao.github.io/post/windows-batch/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=i("ExternalLinkIcon");return l(),r("div",null,[p,n("ul",null,[n("li",null,[n("a",d,[a("Windows 批处理 (cmd/bat) 常用命令小结"),e(s)])]),n("li",null,[n("a",u,[a("Windows 命令-微软官网"),e(s)])])])])}const h=t(c,[["render",v],["__file","/home/runner/work/vuepress_blog/vuepress_blog/docs/.vuepress/.temp/pages/others/windows-cmd.html.vue"]]);export{h as default};
