import{_ as n,o as s,c as a,e as t}from"./app-4d1d3ef4.js";const p={},e=t(`<p>安装 mdx 解压工具</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#https://blog.csdn.net/qq_21583139/article/details/125881382</span>
<span class="token comment">#https://pypi.org/project/mdict-utils/</span>
pip3 <span class="token function">install</span> <span class="token parameter variable">--proxy</span> http://localhost:1081 mdict-utils
<span class="token comment">#Unpack MDX mdd</span>
mdict <span class="token parameter variable">-x</span> dict.mdx <span class="token parameter variable">-d</span> ./mdx
mdict <span class="token parameter variable">-x</span> dict.mdd <span class="token parameter variable">-d</span> ./mdd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提取文件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>company<span class="token punctuation">.</span>myutils</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>bind<span class="token punctuation">.</span></span><span class="token class-name">DatatypeConverter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span>charset<span class="token punctuation">.</span></span><span class="token class-name">StandardCharsets</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>regex<span class="token punctuation">.</span></span><span class="token class-name">Matcher</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>regex<span class="token punctuation">.</span></span><span class="token class-name">Pattern</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span>: administrator
 * <span class="token keyword">@date</span>: 2023/2/27 15:13
 * 提取 mdd mdx:
 * https://zhuanlan.zhihu.com/p/512906029
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MddImgExtractor</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> imgReg <span class="token operator">=</span> <span class="token string">&quot;base64=\\&quot;([^\\&quot;]+)\\&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;F:\\\\workspace\\\\Demo\\\\LDOCE5_v1.35\\\\mdx\\\\1-35.mdx.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileReader</span> fileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BufferedReader</span> bufferedReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span>fileReader<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> line <span class="token operator">=</span> bufferedReader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> lineLeft <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>line <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Pattern</span> pattern <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>imgReg<span class="token punctuation">,</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token constant">CASE_INSENSITIVE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Matcher</span> matcher <span class="token operator">=</span> pattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span>lineLeft <span class="token operator">+</span> line<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>matcher<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">writeFile</span><span class="token punctuation">(</span>matcher<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
                counter<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                lineLeft <span class="token operator">=</span> line<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>matcher<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                lineLeft <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            line <span class="token operator">=</span> bufferedReader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token class-name">String</span> base64String<span class="token punctuation">,</span> <span class="token keyword">int</span> counter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strings <span class="token operator">=</span> base64String<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> extension<span class="token punctuation">;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>strings<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//check image&#39;s extension</span>
            <span class="token keyword">case</span> <span class="token string">&quot;data:image/jpeg;base64&quot;</span><span class="token operator">:</span>
                extension <span class="token operator">=</span> <span class="token string">&quot;jpeg&quot;</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&quot;data:image/png;base64&quot;</span><span class="token operator">:</span>
                extension <span class="token operator">=</span> <span class="token string">&quot;png&quot;</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>should write cases <span class="token keyword">for</span> more images types
                extension <span class="token operator">=</span> <span class="token string">&quot;jpg&quot;</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//convert base64 string to binary data</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>strings<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> <span class="token class-name">DatatypeConverter</span><span class="token punctuation">.</span><span class="token function">parseBase64Binary</span><span class="token punctuation">(</span>strings<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> path <span class="token operator">=</span> <span class="token string">&quot;F:\\\\workspace\\\\Demo\\\\LDOCE5_v1.35\\\\images\\\\&quot;</span> <span class="token operator">+</span> counter <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> extension<span class="token punctuation">;</span>
            <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">OutputStream</span> outputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                outputStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","/home/runner/work/vuepress_blog/vuepress_blog/docs/.vuepress/.temp/pages/others/longmanMddPicEtractor.html.vue"]]);export{k as default};
