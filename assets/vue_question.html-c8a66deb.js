import{_ as o,r as p,o as c,c as l,a as n,b as s,d as t,e}from"./app-4d1d3ef4.js";const i={},u={id:"vue中父子组件生命周期执行顺序",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#vue中父子组件生命周期执行顺序","aria-hidden":"true"},"#",-1),r={href:"https://juejin.cn/post/6844904113914773518",target:"_blank",rel:"noopener noreferrer"},k=e(`<p>在单一组件中，钩子的执行顺序是</p><p><code>beforeCreate-&gt; created -&gt; mounted-&gt;... -&gt;destroyed</code></p><p>当父子组件嵌套时,父组件先创建，然后子组件创建；子组件先挂载，然后父组件挂载,所以在父组件 <code>mounted</code> 中获取 <code>api</code> 的数据，子组件的 <code>mounted</code> 是拿不到的。</p><p><code>父beforeCreate-&gt;父created-&gt;父beforeMount-&gt;子beforeCreate-&gt;子created-&gt;子beforeMount-&gt;子mounted-&gt;父mounted</code></p><p>更新过程</p><p><code>父beforeUpdate-&gt;子beforeUpdate-&gt;子updated-&gt;父updated</code></p><p>销毁过程</p><p><code>父beforeDestroy-&gt;子beforeDestroy-&gt;子destroyed-&gt;父destroyed</code></p><h2 id="vue组件生命周期总结" tabindex="-1"><a class="header-anchor" href="#vue组件生命周期总结" aria-hidden="true">#</a> vue组件生命周期总结</h2><ul><li><code>beforeCreate</code> 执行时：<code>data</code> 和 <code>el</code> 均未初始化，值为 <code>undefined</code></li><li><code>created</code> 执行时：<code>Vue</code> 实例观察的数据对象 <code>data</code> 已经配置好，已经可以得到 <code>data</code> 的值，但 <code>Vue</code> 实例使用的根 <code>DOM</code> 元素 <code>el</code> 还未初始化</li><li><code>beforeMount</code> 执行时：<code>data</code> 和 <code>el</code> 均已经初始化，但此时 <code>el</code> 并没有渲染进数据，<code>el</code> 的值为“虚拟”的元素节点</li><li><code>mounted</code> 执行时：此时 <code>el</code> 已经渲染完成并挂载到实例上</li><li><code>beforeUpdate</code> 和 <code>updated</code> 触发时，<code>el</code> 中的数据都已经渲染完成，但只有 <code>updated</code> 钩子被调用时候，组件 <code>dom</code> 才被更新。</li><li>在 <code>created</code> 钩子中可以对 <code>data</code> 数据进行操作，这个时候可以进行数据请求将返回的数据赋给 <code>data</code></li><li>在 <code>mounted</code> 钩子对挂载的 <code>dom</code> 进行操作，此时，<code>DOM</code> 已经被渲染到页面上。</li><li>虽然 <code>updated</code> 函数会在数据变化时被触发，但却不能准确的判断是那个属性值被改变，所以在实际情况中用 <code>computed 或 watch</code> 函数来监听属性的变化，并做一些其他的操作。</li><li>所有的生命周期钩子自动绑定 <code>this</code> 上下文到实例中，所以不能使用 <strong>箭头函数</strong> 来定义一个生命周期方法 (例如 <code>created: () =&gt; this.fetchTodos()</code>),会导致 <code>this</code> 指向父级。</li><li>在使用 <code>vue-router</code> 时有时需要使用来缓存组件状态，这个时候 <code>created</code> 钩子就不会被重复调用了，如果我们的子组件需要在每次加载或切换状态的时候进行某些操作，可以使用 <code>activated</code> 钩子触发。</li><li><strong>父子组件的钩子并不会等待请求返回，请求是异步的</strong>，<code>VUE</code> 设计也不能因为请求没有响应而不执行后面的钩子。所以，我们必须通过 <code>v-if</code> 来控制子组件钩子的执行时机</li></ul><h2 id="vue-插槽" tabindex="-1"><a class="header-anchor" href="#vue-插槽" aria-hidden="true">#</a> vue 插槽</h2><ul><li>具名插槽: 书写组件的时候使用 <code>&lt;slot&gt;标签</code> + <code>name</code> 属性来提供插槽占位。 不带 <code>name</code> 的 <code>&lt;slot&gt;</code> 默认 <code>name=&quot;default&quot; </code></li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>具名插槽使用： <code> &lt;template&gt;</code> 元素上使用 <code>v-slot</code> 指令，并以 <code>v-slot</code> 的参数的形式提供其<strong>名称</strong>; 任何没有被包裹在带有 <code>v-slot</code> 的 <code>&lt;template&gt;</code> 中的内容都会被视为** 默认插槽**的内容</li><li>注意： <code>v-slot</code> 只能添加在 <code>&lt;template&gt;</code> 上</li><li><code>v-slot</code> 也有缩写，即把参数之前的所有内容 (<code>v-slot:</code>) 替换为字符<code> #</code>。例如 <code>v-slot:header</code> 可以被重写为 <code>#header</code></li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-layout</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>header</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Here might be a page title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-layout</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>绑定在 <code>&lt;slot&gt;</code> 元素上的 <code>attribute</code> 被称为 <code>插槽 prop</code></li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--书写组件时候定义插槽，绑定 插槽prop--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>user</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ user.lastName }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--使用组件时候访问 整个插槽 slotProps 属性，这里的 slotProps 名称可以自己随便定义--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{ slotProps.user.firstName }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>特殊情况简写 ： <strong>独占默认插槽</strong>的缩写语法，当被提供的内容<strong>只有默认插槽</strong>时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 <code>v-slot</code> <strong>直接用在组件上</strong></li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ slotProps.user.firstName }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--或者--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ slotProps.user.firstName }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>废弃的语法书写形式</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token comment">&lt;!--插槽的使用: 在template上使用slot属性指定插槽名称 --&gt;</span>
<span class="token comment">&lt;!--使用slot-scope属性指定 slot prop--&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot-example</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{ slotProps.msg }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot-example</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),v={id:"slots-vs-scopeslots",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#slots-vs-scopeslots","aria-hidden":"true"},"#",-1),g={href:"https://cn.vuejs.org/v2/api/#vm-scopedSlots",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"$slots",-1),h=n("code",null,"$scopeSlots",-1),f=e(`<ul><li><code>vm.$slots</code> 类型：<code>{ [name: string]: ?Array&lt;VNode&gt; }</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;blog-post&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> header <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>header
        <span class="token keyword">var</span> body <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default
        <span class="token keyword">var</span> footer <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>footer
        <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;header&#39;</span><span class="token punctuation">,</span> header<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">,</span> body<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;footer&#39;</span><span class="token punctuation">,</span> footer<span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>vm.$scopedSlots</code> 类型：<code>{ [name: string]: props =&gt; Array&lt;VNode&gt; | undefined }</code>, 他是一个函数，调用后会返回 <code>Array&lt;VNode&gt;</code> ,所有的 <code>$slots</code> 现在都会作为函数暴露在 <code>$scopedSlots</code> 中。如果你在使用渲染函数，不论当前插槽是否带有作用域，我们都<strong>推荐始终通过</strong> <code>$scopedSlots</code> 访问它们。</li></ul><p><code>vm.$scopedSlots</code>的 ts 类型为 <code>type ScopedSlot = (props: any) =&gt; ScopedSlotChildren</code></p><p>如果要渲染 <code>&lt;div&gt;&lt;slot :text=&quot;message&quot;&gt;&lt;/slot&gt;&lt;/div&gt;</code> 这样的模板，<code>render</code> 函数可以这样写</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$scopedSlots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下所示 <code>default</code> 函数传入的 <code>props</code> 最终会渲染到 <code>v-slot:default=&quot;props&quot;</code> 即作为 <code>slotProp</code> 传入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 如果要渲染 \`&lt;div&gt;&lt;child v-slot=&quot;props&quot;&gt;&lt;span&gt;{{ props.text }}&lt;/span&gt;&lt;/child&gt;&lt;/div&gt;\` 这样的模板，\`render\` 函数可以这样写</span>
<span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;child&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token comment">// 在数据对象中传递 \`scopedSlots\`</span>
            <span class="token comment">// 格式为 { name: props =&gt; VNode | Array&lt;VNode&gt; }</span>
            <span class="token literal-property property">scopedSlots</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function _(y,q){const a=p("ExternalLinkIcon");return c(),l("div",null,[n("h2",u,[d,s(),n("a",r,[s("Vue中父子组件生命周期执行顺序"),t(a)])]),k,n("h2",v,[m,s(),n("a",g,[b,s(" vs "),h,t(a)])]),f])}const w=o(i,[["render",_],["__file","/home/runner/work/vuepress_blog/vuepress_blog/docs/.vuepress/.temp/pages/vue2/vue_question.html.vue"]]);export{w as default};
