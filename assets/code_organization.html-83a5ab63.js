import{_ as o,r as i,o as l,c,a as n,b as s,d as a,e as t}from"./app-4d1d3ef4.js";const p={},r=n("h2",{id:"prerequisite",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#prerequisite","aria-hidden":"true"},"#"),s(" prerequisite")],-1),d={id:"cross-platform-utilities",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#cross-platform-utilities","aria-hidden":"true"},"#",-1),m={href:"https://github.com/RyanZim/awesome-npm-scripts#cross-platform-utilities",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"Utilities to perform common command-line tasks without worrying about cross-platform compatibility.",-1),b={href:"https://github.com/isaacs/rimraf",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"rm -rf",-1),v=n("li",null,"del-cli - Safer file and folder deletion.",-1),_=n("li",null,[s("mkdirp - Create a directory, creating parent directories if needed; like "),n("code",null,"mkdir -p"),s(".")],-1),g=n("li",null,"cpr - cp -r for Node.js.",-1),f=n("li",null,"cpy-cli - File/directory copying/renaming.",-1),q=n("li",null,"copyfiles - Copy a list of files into a directory.",-1),w=n("li",null,"sync-files - rsync-like directory syncing with watch mode.",-1),j=n("li",null,"echo-cli - Cross-platform echo with JS escape sequence support.",-1),y=n("li",null,"clear-cli - Clear the terminal.",-1),x={href:"https://github.com/kentcdodds/cross-env",target:"_blank",rel:"noopener noreferrer"},N=n("li",null,"cross-os - Run platform-specific npm scripts.",-1),E=n("li",null,"ntee - Utility that reads from standard input and writes to standard output and files; like Unix tee.",-1),V=n("li",null,"catw - Print a file to stdout, with optional watch mode; sorta like Unix cat.",-1),C=t(`<h2 id="npm-scripts" tabindex="-1"><a class="header-anchor" href="#npm-scripts" aria-hidden="true">#</a> npm scripts</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;dist&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run clean &amp;&amp; npm run build:file &amp;&amp; npm run lint &amp;&amp; webpack --config build/webpack.conf.js &amp;&amp; webpack --config build/webpack.common.js &amp;&amp; webpack --config build/webpack.component.js &amp;&amp; npm run build:utils &amp;&amp; npm run build:umd &amp;&amp; npm run build:theme&quot;</span>,
    <span class="token string">&quot;bootstrap&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;yarn || npm i&quot;</span>,
    <span class="token string">&quot;build:file&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;node build/bin/iconInit.js &amp; node build/bin/build-entry.js &amp; node build/bin/i18n.js &amp; node build/bin/version.js&quot;</span>,
    <span class="token string">&quot;build:theme&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;node build/bin/gen-cssfile &amp;&amp; gulp build --gulpfile packages/theme-chalk/gulpfile.js &amp;&amp; cp-cli packages/theme-chalk/lib lib/theme-chalk&quot;</span>,
    <span class="token string">&quot;build:utils&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env BABEL_ENV=utils babel src --out-dir lib --ignore src/index.js&quot;</span>,
    <span class="token string">&quot;build:umd&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;node build/bin/build-locale.js&quot;</span>,
    <span class="token string">&quot;clean&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rimraf lib &amp;&amp; rimraf packages/*/lib &amp;&amp; rimraf test/**/coverage&quot;</span>,
    <span class="token string">&quot;deploy:build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run build:file &amp;&amp; cross-env NODE_ENV=production webpack --config build/webpack.demo.js &amp;&amp; echo element.eleme.io&gt;&gt;examples/element-ui/CNAME&quot;</span>,
    <span class="token string">&quot;deploy:extension&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=production webpack --config build/webpack.extension.js&quot;</span>,
    <span class="token string">&quot;dev:extension&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rimraf examples/extension/dist &amp;&amp; cross-env NODE_ENV=development webpack --watch --config build/webpack.extension.js&quot;</span>,
    <span class="token string">&quot;dev&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run bootstrap &amp;&amp; npm run build:file &amp;&amp; cross-env NODE_ENV=development webpack-dev-server --config build/webpack.demo.js &amp; node build/bin/template.js&quot;</span>,
    <span class="token string">&quot;dev:play&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run build:file &amp;&amp; cross-env NODE_ENV=development PLAY_ENV=true webpack-dev-server --config build/webpack.demo.js&quot;</span>,
    <span class="token string">&quot;i18n&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;node build/bin/i18n.js&quot;</span>,
    <span class="token string">&quot;lint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;eslint src/**/* test/**/* packages/**/* build/**/* --quiet&quot;</span>,
    <span class="token string">&quot;pub&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run bootstrap &amp;&amp; sh build/git-release.sh &amp;&amp; sh build/release.sh &amp;&amp; node build/bin/gen-indices.js&quot;</span>,
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="build-file" tabindex="-1"><a class="header-anchor" href="#build-file" aria-hidden="true">#</a> build:file</h3><p>使用了 <code>postcss</code> 对 <code>packages/theme-chalk/src/icon.scss</code> 进行了解析，提取了所有的 <code>icon class</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// icon.scss 其实是一个css文件，所以可以使用 postcss.parse</span>
<span class="token keyword">var</span> fontFile <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../../packages/theme-chalk/src/icon.scss&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> nodes <span class="token operator">=</span> postcss<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>fontFile<span class="token punctuation">)</span><span class="token punctuation">.</span>nodes<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析根目录下的<code>components.json</code>文件, 使用 <strong>模板字符串</strong> 的方式生成 <code>src/index.js</code></p>`,6),O={href:"https://github.com/lightsofapollo/json-templater",target:"_blank",rel:"noopener noreferrer"},U=n("p",null,[s("JSON template(r) is an opinionated simple way to do "),n("strong",null,"mustache style template replacements"),s(" on your js and json objects ( and of course strings too)!")],-1),D={href:"https://github.com/SamVerschueren/uppercamelcase",target:"_blank",rel:"noopener noreferrer"},I=n("p",null,"Convert a dash/dot/underscore/space separated string to UpperCamelCase: foo-bar → FooBar",-1),M=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> render <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;json-templater/string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> uppercamelcase <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;uppercamelcase&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> endOfLine <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;os&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token constant">EOL</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),S={id:"构建-demo-文件",tabindex:"-1"},B=n("a",{class:"header-anchor",href:"#构建-demo-文件","aria-hidden":"true"},"#",-1),F={href:"https://juejin.cn/post/6943866186438443016",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,"deploy:build",-1),A=n("code",null,"cross-env NODE_ENV=production webpack --config build/webpack.demo.js",-1),P=n("code",null,"element-UI",-1),z=n("code",null,"md-loader",-1),J={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"markdown-it",-1),W=n("code",null,"markdown",-1),G=n("code",null,"html",-1),T={href:"https://github.com/vuejs/vue/tree/dev/packages/vue-template-compiler#readme",target:"_blank",rel:"noopener noreferrer"},X=n("code",null,"vue-loader",-1),Y=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>      <span class="token punctuation">{</span>
        test: /<span class="token punctuation">\\</span>.md$/,
        use: <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            loader: <span class="token string">&#39;vue-loader&#39;</span>,
            options: <span class="token punctuation">{</span>
              compilerOptions: <span class="token punctuation">{</span>
                preserveWhitespace: <span class="token boolean">false</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>,
          <span class="token punctuation">{</span>
            loader: path.resolve<span class="token punctuation">(</span>__dirname, <span class="token string">&#39;./md-loader/index.js&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调试 <code>md-loader</code>,将打包命令单独拉出来，如下</p><p>将断点设置好，在 <code>webstorm</code> 中 debug <code>build:md</code> 脚本进行调试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;build:md&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=production webpack --config build/webpack.demo.js&quot;</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Element 自定义了 Markdown-container 解析，并覆写了 <code>markdown-it</code> 的默认的 <code>fence</code> 渲染策略</p>`,5),Z={href:"https://github.com/markdown-it/markdown-it-container",target:"_blank",rel:"noopener noreferrer"},$=n("p",null,[s("Plugin for creating "),n("strong",null,"block-level custom containers"),s(" for "),n("code",null,"markdown-it"),s(" markdown parser.")],-1),H={id:"makefile-文件",tabindex:"-1"},K=n("a",{class:"header-anchor",href:"#makefile-文件","aria-hidden":"true"},"#",-1),Q={href:"https://juejin.cn/post/6844903775912591368",target:"_blank",rel:"noopener noreferrer"},nn=t("<p><code>Makefile</code> 是一个适用于 <code>C/C++</code> 的工具，较早作为工程化工具出现在 <code>UNIX</code> 系统中， 通过 <code>make</code> 命令来执行一系列的编译和连接操作。在拥有 <code>make</code> 环境的目录下， 如果存在一个 <code>Makefile</code> 文件。 那么输入 <code>make</code> 命令将会执行 <code>Makefile</code> 文件中的某个目标命令。</p>",1),sn={href:"http://gnuwin32.sourceforge.net/packages/make.htm",target:"_blank",rel:"noopener noreferrer"},en=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" reference")],-1),an={href:"https://segmentfault.com/a/1190000016419049",target:"_blank",rel:"noopener noreferrer"};function tn(on,ln){const e=i("ExternalLinkIcon");return l(),c("div",null,[r,n("h2",d,[u,s(),n("a",m,[s("Cross-platform Utilities"),a(e)])]),k,n("ul",null,[n("li",null,[n("a",b,[s("rimraf"),a(e)]),s(" - Delete files or directories; like "),h,s(".")]),v,_,g,f,q,w,j,y,n("li",null,[n("a",x,[s("cross-env"),a(e)]),s(" - Set environment variables for scripts, unix-style.")]),N,E,V]),C,n("ul",null,[n("li",null,[n("p",null,[n("a",O,[s("json-templater"),a(e)])]),U]),n("li",null,[n("p",null,[n("a",D,[s("uppercamelcase"),a(e)])]),I])]),M,n("h3",S,[B,s(),n("a",F,[s("构建 demo 文件"),a(e)])]),n("p",null,[s("在 "),L,s(" 脚本中使用 "),A,s("命令构建了 "),P,s(" 文档中的 demo， 这里使用了elementUI自研的 "),z,s(", 这个loader会先将 Markdown 文档使用 "),n("a",J,[R,a(e)]),s(" 将 "),W,s(" 解析为 "),G,s(" ,然后再使用 "),n("a",T,[s("vue-template-compiler"),a(e)]),s("将html文件转换为 Vue组件交给 "),X,s(" 去处理")]),Y,n("ul",null,[n("li",null,[n("a",Z,[s("markdown-it-container"),a(e)])])]),$,n("h2",H,[K,s(),n("a",Q,[s("MakeFile 文件"),a(e)])]),nn,n("p",null,[n("a",sn,[s("Windows下载 make 的 GUN 工具"),a(e)])]),en,n("p",null,[n("a",an,[s("ElementUI的构建流程"),a(e)])])])}const pn=o(p,[["render",tn],["__file","/home/runner/work/vuepress_blog/vuepress_blog/docs/.vuepress/.temp/pages/element-ui/code_organization.html.vue"]]);export{pn as default};
