import{_ as p,r as o,o as e,c,a as n,b as a,d as l,e as s}from"./app-4d1d3ef4.js";const u={},i=s(`<h2 id="layui-radio-必填校验" tabindex="-1"><a class="header-anchor" href="#layui-radio-必填校验" aria-hidden="true">#</a> layUi radio 必填校验</h2><p>如下所示,当 <code>twins</code> 字段不给默认值，此时两个 <code>radio</code> 均是未选中状态，提交 <code>form</code> 表单，默认 <code>required</code> 会通过校验，而且 <code>form.field</code> 会忽略 <code>twins</code> 字段，提交的时候不收集该字段</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>layui-form-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>layui-form-label<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>是否双(多)胞胎：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>layui-input-block<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>twins<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>twins<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>twins<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">lay-verify</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>required<span class="token punctuation">&quot;</span></span> <span class="token attr-name">lay-filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>twins<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>是<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>twins<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>twins<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">lay-verify</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>required<span class="token punctuation">&quot;</span></span> <span class="token attr-name">lay-filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>twins<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>否<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方法：将 <code>lay-verify=&quot;required&quot;</code> 替换成 自定义 校验 <code>lay-verify = &quot;radioRequired&quot;</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">radioRequired</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> verifyName <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> verifyType <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> formElem <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parents</span><span class="token punctuation">(</span><span class="token string">&#39;.layui-form&#39;</span><span class="token punctuation">)</span><span class="token comment">//获取当前所在的form元素，如果存在的话</span>
        <span class="token punctuation">,</span> verifyElem <span class="token operator">=</span> formElem<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;input[name=&#39;&quot;</span> <span class="token operator">+</span> verifyName <span class="token operator">+</span> <span class="token string">&quot;&#39;]&quot;</span><span class="token punctuation">)</span><span class="token comment">//获取需要校验的元素</span>
        <span class="token punctuation">,</span> isTrue <span class="token operator">=</span> verifyElem<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">&#39;:checked&#39;</span><span class="token punctuation">)</span><span class="token comment">//是否命中校验</span>
        <span class="token punctuation">,</span> focusElem <span class="token operator">=</span> verifyElem<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;i.layui-icon&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//焦点元素</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isTrue <span class="token operator">||</span> <span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//定位焦点</span>
        focusElem<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span>verifyType <span class="token operator">==</span> <span class="token string">&#39;radio&#39;</span> <span class="token operator">?</span> <span class="token punctuation">{</span><span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FF5722&quot;</span><span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&quot;border-color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FF5722&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//对非输入框设置焦点</span>
        focusElem<span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;tabIndex&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;outline&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">blur</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            focusElem<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span>verifyType <span class="token operator">==</span> <span class="token string">&#39;radio&#39;</span> <span class="token operator">?</span> <span class="token punctuation">{</span><span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&quot;border-color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&#39;必填项不能为空&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r={id:"layui-radio-不能通过-js-触发事件",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#layui-radio-不能通过-js-触发事件","aria-hidden":"true"},"#",-1),d={href:"https://blog.csdn.net/qq_33769914/article/details/104770125",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"layui radio",-1),m=s(`<p><code>layui</code> 对 <code>radio和select</code> 组件做过包装处理，直接选中 <code>input和select</code> 元素通过 <code>click()</code> 触发是不生效的， 对于 <code>radio</code> 应该选中当前 <code>radio相应的input元素</code> 的下一个 <code>class=&quot;layui-form-radio&quot;</code> 的 <code>div</code> 元素,在这个 div 上面触发 <code>click()</code>, 此时会触发 <code>form.on(radio(radio-filter),callback)</code> 中的 <code>callback</code> 函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> radioElement <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>layero<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;input.none-standard-radio[name=&quot;addressStandard&quot;]&#39;</span><span class="token punctuation">)</span>
radioElement<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&#39;.layui-form-radio&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="layui-select-自动触发-select-filter-callback-中的-callback" tabindex="-1"><a class="header-anchor" href="#layui-select-自动触发-select-filter-callback-中的-callback" aria-hidden="true">#</a> <code>layui-select</code> 自动触发 <code>(select(filter),callback)</code> 中的 <code>callback</code></h2><p>layui 源码中就是监听的是 <code>dd</code> 上的 <code>click</code> 事件，如下所示 <code>liveTypeEle</code> 为当前的 <code>select</code> 元素，需要选中 <code>dl</code> 中的 <code>dd</code> 元素才可以触发事件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">setDefaultValue</span><span class="token punctuation">(</span><span class="token parameter">layero</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> liveTypeEle <span class="token operator">=</span> layero <span class="token operator">?</span> <span class="token function">$</span><span class="token punctuation">(</span>layero<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;select[name=&quot;livetype&quot;]&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;select[name=&quot;livetype&quot;]&#39;</span><span class="token punctuation">)</span>
    liveTypeEle<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 这个要加上 否则有很奇怪的 bug</span>
    liveTypeEle<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;dl dd[lay-value=&quot;1&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span>
    liveTypeEle<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;disabled&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    form<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="layer-load不生效" tabindex="-1"><a class="header-anchor" href="#layer-load不生效" aria-hidden="true">#</a> layer.load不生效</h2><p><code>layer.load</code> 在同步 <code>ajax</code> 请求中不生效，异步 <code>Ajax</code> 才生效</p>`,7);function q(f,g){const t=o("ExternalLinkIcon");return e(),c("div",null,[i,n("h2",r,[k,a(),n("a",d,[v,a(" 不能通过 js 触发事件"),l(t)])]),m])}const b=p(u,[["render",q],["__file","/home/runner/work/vuepress_blog/vuepress_blog/docs/.vuepress/.temp/pages/library/layui.html.vue"]]);export{b as default};
