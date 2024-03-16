import{_ as t,r as o,o as p,c,a as n,b as s,d as e,e as r}from"./app-4d1d3ef4.js";const l={},i=n("h2",{id:"terminology",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#terminology","aria-hidden":"true"},"#"),s(" terminology")],-1),u={href:"https://zhuanlan.zhihu.com/p/43263751",target:"_blank",rel:"noopener noreferrer"},k={href:"https://oi-wiki.org/ds/dsu/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://dev.to/swasdev4511/sorting-in-javascript-how-it-works--1cb",target:"_blank",rel:"noopener noreferrer"},m=r(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token comment">// 这个就是升序排列， 当 sortFun 返回值大于 0 时候就是升序</span>
arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 简写如下</span>
arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function v(b,_){const a=o("ExternalLinkIcon");return p(),c("div",null,[i,n("ul",null,[n("li",null,[n("a",u,[s("BloomFilter-布隆过滤"),e(a)])]),n("li",null,[n("a",k,[s("Disjoint-set/union–find-set/merge–find-set | 并查集"),e(a)])]),n("li",null,[n("a",d,[s("javascript 数组 sort"),e(a)])])]),m])}const f=t(l,[["render",v],["__file","/home/runner/work/vuepress_blog/vuepress_blog/docs/.vuepress/.temp/pages/algorithms/basic_concept.html.vue"]]);export{f as default};
