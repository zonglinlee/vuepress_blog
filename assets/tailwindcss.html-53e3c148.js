import{_ as i,r as l,o,c,a as n,b as s,d as e,e as t}from"./app-4d1d3ef4.js";const p={},u={id:"vue2-配置-tailwindcss",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#vue2-配置-tailwindcss","aria-hidden":"true"},"#",-1),r={href:"https://www.sanity.io/guides/tailwind-css-with-vue-js",target:"_blank",rel:"noopener noreferrer"},v=t(`<h3 id="tailwind-config-js" tabindex="-1"><a class="header-anchor" href="#tailwind-config-js" aria-hidden="true">#</a> tailwind.config.js</h3><ul><li>When building for production, you should always use Tailwind’s <code>purge</code> option to tree-shake unused styles and optimize your final build size</li><li>preflight: A set of base styles for Tailwind projects.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// https://v2.tailwindcss.com/docs/optimizing-for-production#removing-unused-css</span>
    <span class="token literal-property property">purge</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;./src/**/*.html&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;./src/**/*.vue&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;./src/**/*.jsx&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">corePlugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 禁用基础样式，否则集成到element-ui中会有干扰</span>
        <span class="token literal-property property">preflight</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="core-concepts" tabindex="-1"><a class="header-anchor" href="#core-concepts" aria-hidden="true">#</a> CORE CONCEPTS</h3><p><code>@tailwind base</code>: <code>Base</code> (or global) styles are the styles at the beginning of a stylesheet that set useful defaults for basic HTML elements like <code>&lt;a&gt;</code> tags, headings, etc. or apply opinionated resets like the popular <code>box-sizing</code> reset. Tailwind includes a useful set of base styles out of the box that we call <strong>Preflight</strong>, which is really just modern-normalize plus a thin layer of additional more opinionated styles.</p><ul><li>By using the <code>@layer</code> directive, Tailwind will automatically move those styles to the same place as <code>@tailwind base</code> to avoid unintended specificity issues.</li><li>Using the <code>@layer</code> directive will also instruct Tailwind to consider those styles for <strong>purging</strong> when purging the ** base layer**.</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*自定义base样式*/</span>
<span class="token atrule"><span class="token rule">@layer</span> base</span> <span class="token punctuation">{</span>
    <span class="token selector">h1</span> <span class="token punctuation">{</span>
        <span class="token atrule"><span class="token rule">@apply</span> text-2xl<span class="token punctuation">;</span></span>
    <span class="token punctuation">}</span>

    <span class="token selector">h2</span> <span class="token punctuation">{</span>
        <span class="token atrule"><span class="token rule">@apply</span> text-xl<span class="token punctuation">;</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Extracting component classes with @apply：</p><p>To avoid unintended specificity issues, we recommend wrapping your custom component styles with the <code>@layer components</code> directive to tell Tailwind what layer those styles belong to</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn-blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Click me
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>
<span class="token atrule"><span class="token rule">@tailwind</span> base<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@tailwind</span> components<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@tailwind</span> utilities<span class="token punctuation">;</span></span>

<span class="token atrule"><span class="token rule">@layer</span> components</span> <span class="token punctuation">{</span>
    <span class="token selector">.btn-blue</span> <span class="token punctuation">{</span>
        <span class="token atrule"><span class="token rule">@apply</span> py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md <span class="token property">hover</span><span class="token punctuation">:</span>bg-blue-700 <span class="token property">focus</span><span class="token punctuation">:</span>outline-none <span class="token property">focus</span><span class="token punctuation">:</span>ring-2 <span class="token property">focus</span><span class="token punctuation">:</span>ring-blue-400 <span class="token property">focus</span><span class="token punctuation">:</span>ring-opacity-75<span class="token punctuation">;</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Adding New Utilities:</p><p>Although Tailwind provides a pretty comprehensive set of utility classes out of the box, you may run into situations where you need to add a few of your own.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@tailwind</span> base<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@tailwind</span> components<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@tailwind</span> utilities<span class="token punctuation">;</span></span>
<span class="token comment">/*自定义css class 类名*/</span>
<span class="token atrule"><span class="token rule">@layer</span> utilities</span> <span class="token punctuation">{</span>
    <span class="token selector">.scroll-snap-none</span> <span class="token punctuation">{</span>
        <span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.scroll-snap-x</span> <span class="token punctuation">{</span>
        <span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.scroll-snap-y</span> <span class="token punctuation">{</span>
        <span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> y<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),k={id:"functions-directives",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#functions-directives","aria-hidden":"true"},"#",-1),b={href:"https://v2.tailwindcss.com/docs/functions-and-directives",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>A reference for the custom functions and directives Tailwind exposes to your CSS.</p><ul><li>Use the <code>@tailwind</code> directive to insert Tailwind’s <code>base</code>, <code>components</code>, <code>utilities</code> and <code>screens</code> styles into your CSS.</li><li>Use <code>@apply</code> to inline any existing utility classes into your own custom CSS.</li><li>Any rules inlined with <code>@apply</code> will have <code>!important</code> removed by default to avoid specificity issues</li><li>You can also mix <code>@apply</code> declarations with normal CSS declarations</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/**
 * This injects Tailwind&#39;s base styles and any base styles registered by
 * plugins.
 */</span>
<span class="token atrule"><span class="token rule">@tailwind</span> base<span class="token punctuation">;</span></span>

<span class="token comment">/**
 * This injects Tailwind&#39;s component classes and any component classes
 * registered by plugins.
 */</span>
<span class="token atrule"><span class="token rule">@tailwind</span> components<span class="token punctuation">;</span></span>

<span class="token comment">/**
 * This injects Tailwind&#39;s utility classes and any utility classes registered
 * by plugins.
 */</span>
<span class="token atrule"><span class="token rule">@tailwind</span> utilities<span class="token punctuation">;</span></span>

<span class="token comment">/**
 * Use this directive to control where Tailwind injects the responsive
 * variations of each utility.
 *
 * If omitted, Tailwind will append these classes to the very end of
 * your stylesheet by default.
 */</span>
<span class="token atrule"><span class="token rule">@tailwind</span> screens<span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>If you’d like to <code>@apply</code> an existing class and make it <code>!important</code>, simply add <code>!important</code> to the end of the declaration</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.btn</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@apply</span> font-bold py-2 px-4 rounded <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if you’re using <strong>Sass/SCSS</strong>, you’ll need to use Sass’ <strong>interpolation</strong> feature to get this to work</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.btn </span><span class="token punctuation">{</span>
  @apply font-bold py-2 px-4 rounded #<span class="token punctuation">{</span><span class="token important">!important</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Use the <code>@layer</code> directive to tell Tailwind which “bucket” a set of custom styles belong to. Valid layers are a <code>base</code> , <code>components</code>, and <code>utilities</code>.</p></li><li><p>@variants:You can generate <code>responsive</code>, <code>hover</code>, <code>focus</code>, <code>active</code>, and other variants of your own utilities by wrapping their definitions in the <code>@variants</code> directive.</p></li><li><p><code>theme()</code>: Use the <code>theme()</code> function to access your Tailwind config values using dot notation.</p></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.content-area</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh - <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;spacing.12&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue中自定义按钮</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>templae</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cus-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>tailwind.css<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>templae</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token atrule"><span class="token rule">@layer</span> components</span> <span class="token punctuation">{</span>
        <span class="token selector">.cus-btn</span> <span class="token punctuation">{</span>
            <span class="token atrule"><span class="token rule">@apply</span> rounded  w-40  text-center text-lg p-2 mb-2 text-white cursor-pointer transform duration-200 <span class="token property">hover</span><span class="token punctuation">:</span>scale-105<span class="token punctuation">;</span></span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;colors.myOrange&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resource-for-learn" tabindex="-1"><a class="header-anchor" href="#resource-for-learn" aria-hidden="true">#</a> Resource for learn</h2>`,12),h={href:"https://juejin.cn/post/7049594844926181390",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/aniftyco/awesome-tailwindcss",target:"_blank",rel:"noopener noreferrer"};function f(w,x){const a=l("ExternalLinkIcon");return o(),c("div",null,[n("h3",u,[d,s(),n("a",r,[s("Vue2 配置 tailwindcss"),e(a)])]),v,n("h3",k,[m,s(),n("a",b,[s("Functions & Directives"),e(a)])]),g,n("ul",null,[n("li",null,[n("a",h,[s("TailwindCSS 资源推荐"),e(a)])]),n("li",null,[n("a",y,[s("github:awesome-tailwindcss"),e(a)])])])])}const T=i(p,[["render",f],["__file","/home/runner/work/vuepress_blog/vuepress_blog/docs/.vuepress/.temp/pages/library/tailwindcss.html.vue"]]);export{T as default};
