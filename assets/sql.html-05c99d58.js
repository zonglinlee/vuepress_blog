import{_ as s,o as n,c as a,e}from"./app-6be1f847.js";const t={},l=e(`<p>order results by enum fields, <code>field</code> is a mysql function.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> orderNumber<span class="token punctuation">,</span>  <span class="token keyword">status</span> <span class="token keyword">FROM</span> orders 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> 
  FIELD<span class="token punctuation">(</span>
    <span class="token keyword">status</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;In Process&#39;</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;On Hold&#39;</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;Cancelled&#39;</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;Resolved&#39;</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;Disputed&#39;</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;Shipped&#39;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[l];function i(o,p){return n(),a("div",null,c)}const r=s(t,[["render",i],["__file","/home/runner/work/vuepress_blog/vuepress_blog/docs/.vuepress/.temp/pages/database/mysql/sql.html.vue"]]);export{r as default};
