import{_ as t,r as p,o,c,a as n,b as a,d as e,e as l}from"./app-4d1d3ef4.js";const i={},r=l(`<h2 id="scroll-行为-vs-scroll-事件" tabindex="-1"><a class="header-anchor" href="#scroll-行为-vs-scroll-事件" aria-hidden="true">#</a> scroll 行为 vs scroll 事件</h2><p>文档视图或者一个元素在滚动时，会触发元素的 scroll 事件，先有滚动行为，然后才会触发 scroll 事件。scroll 事件的 <strong>event.cancelable</strong> 属性默认是 false,是一种不可被取消的事件，调用 <code>event.preventDefault()</code>没有任何意义，并不能阻止浏览器滚动</p><h2 id="passive-事件原因" tabindex="-1"><a class="header-anchor" href="#passive-事件原因" aria-hidden="true">#</a> passive 事件原因</h2><p>由于 touchstart/touchmove/wheel 事件对象的 cancelable 属性为 true，也就是说它的默认行为可以被监听器通过 <code>preventDefault()</code> 方法阻止，那它的默认行为是什么呢，通常来说就是滚动当前页面（还可能是缩放页面），如果它的默认行为被阻止了，页面就必须静止不动。但浏览器无法预先知道一个监听器会不会调用 <code>preventDefault()</code> ，它能做的只有等监听器执行完后再去执行默认行为，而监听器执行是要耗时的，有些甚至耗时很明显，这样就会导致页面卡顿。视频里也说了，即便监听器是个空函数，也会产生一定的卡顿，毕竟空函数的执行也会耗时。</p><p>有 80% 的滚动事件监听器是不会阻止默认行为的，也就是说大部分情况下，浏览器是白等了。所以，passive 监听器诞生了，它表示当前通过 addEventListener 注册的 handler 是一个被动监听器，相当于标记当前 <code>event.cancelable=false</code> ,告诉浏览器 滚动行为 不会被阻止，你可以立即执行滚动行为， 浏览器知道了一个监听器是 passive 的，它就可以在两个线程里同时执行监听器中的 JavaScript 代码和浏览器的默认行为了。</p><p>当标记为 <code>passive=true</code> 之后，即使调用 <code>event.preventDefault()</code> 也不会阻止浏览器滚动，只会再控制台输出一条警告信息。</p><h2 id="passive-detect" tabindex="-1"><a class="header-anchor" href="#passive-detect" aria-hidden="true">#</a> passive detect</h2><p>通过在 options 对象中定义一个 getter 方法来检测 passive 属性是否被访问到</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> supportsPassive <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> opts <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;passive&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            supportsPassive <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> opts<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用检测结果。如果支持则使用 passive，否则将捕获设置为 false</span>
elem<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
    <span class="token string">&quot;touchstart&quot;</span><span class="token punctuation">,</span>
    fn<span class="token punctuation">,</span>
    supportsPassive <span class="token operator">?</span> <span class="token punctuation">{</span><span class="token literal-property property">passive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> reference</h2>`,10),u={href:"https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.zjy.name/passive-event-listeners/",target:"_blank",rel:"noopener noreferrer"};function v(k,h){const s=p("ExternalLinkIcon");return o(),c("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[a("[英] 被动事件监听器（Passive Event Listeners）"),e(s)])]),n("li",null,[n("a",d,[a("[译] 被动事件监听器（Passive Event Listeners）"),e(s)])])])])}const m=t(i,[["render",v],["__file","/home/runner/work/vuepress_blog/vuepress_blog/docs/.vuepress/.temp/pages/js_basic/passive_event.html.vue"]]);export{m as default};
