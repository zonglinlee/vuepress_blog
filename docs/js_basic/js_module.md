---
title: js模块机制
---
什么是模块 :一个模块（`module`）就是一个文件。一个脚本就是一个模块。模块可以相互加载，并可以使用特殊的指令 `export` 和 `import` 来交换功能，从另一个模块调用一个模块的函数

## 常见模块实现方案

- `AMD(Asynchronous module definition)` —— 最古老的模块系统之一，最初由 `require.js` 库实现。
- `CommonJS` —— 为 `Node.js` 服务器创建的模块系统。
- `UMD(Universal Module Definition)` —— 另外一个模块系统，建议作为通用的模块系统，它与 `AMD` 和 `CommonJS` 都兼容。

## 浏览器中模块的书写

由于模块支持特殊的关键字和功能，因此我们必须通过使用 `<script type="module">` 特性（`attribute`）来告诉浏览器，此脚本应该被当作模块（`module`）来对待。
浏览器会自动获取并解析（`evaluate`）导入的模块（如果需要，还可以分析该模块的导入），然后运行该脚本。模块只通过 `http/https` 工作，而非本地 如果你尝试通过 `file://`
协议在本地打开一个网页，你会发现 `import/export` 指令不起作用

```html
<!doctype html>
<script type="module">
    import {sayHi} from './say.js';

    document.body.innerHTML = sayHi('John');
</script>
```

与“常规”脚本相比，模块有什么不同呢？

- 模块**始终**在严格模式下运行
- 每个模块都有自己的顶级作用域（`top-level scope`）。换句话说，一个模块中的顶级作用域变量和函数在其他脚本中是不可见的。
- 模块代码仅在第一次导入时被解析

```js
// 如果这个模块被导入到多个文件中，模块仅在第一次被导入时被解析，并创建 admin 对象，然后将其传入到所有的导入。
// 📁 1.js
import {admin} from './admin.js';

admin.name = "Pete";

// 📁 2.js
import {admin} from './admin.js';

alert(admin.name); // Pete

// 1.js 和 2.js 引用的是同一个 admin 对象
// 在 1.js 中对对象做的更改，在 2.js 中也是可见的
```

- 在一个模块中，顶级 `this` 是 `undefined`。将其与非模块脚本进行比较会发现，非模块脚本的顶级 `this` 是**全局对象**

```html

<script>
    alert(this); // window
</script>

<script type="module">
    alert(this); // undefined
</script>
```

- 模块脚本 **总是** 被延迟的，与 `defer` 特性 对外部脚本和内联脚本（`inline script`）的影响相同。下载外部模块脚本 `<script type="module" src="...">` 不会阻塞 `HTML`
  的处理，它们会与其他资源并行加载。 模块脚本会等到 `HTML` 文档完全准备就绪（即使它们很小并且比 `HTML` 加载速度更快），然后才会运行。 在文档中排在前面的脚本先执行。

```html

<script type="module"> // 因为模块是被延迟的（deferred，所以模块脚本会在整个页面加载完成后才运行
alert(typeof button); // object：脚本可以“看见”下面的 button
</script>

<!--相较于下面这个常规脚本： 常规脚本会立即运行，常规脚本的运行是在在处理页面的其余部分之前进行的-->
<script>
    alert(typeof button); // button 为 undefined，脚本看不到下面的元素
</script>

<button id="button">Button</button>
```

## The `import()` expression

Although `import()` looks like a function call, it’s a **special syntax** that just happens to use parentheses (similar
to `super()`). So we can’t copy import to a variable or use `call/apply` with it. It’s **not a function**.

## Reference

[深入理解 ES6 模块机制](https://zhuanlan.zhihu.com/p/33843378)
