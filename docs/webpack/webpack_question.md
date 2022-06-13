---
title: webpack QA
---

- [webpack中的css引入文件需要用~@的形式](https://juejin.cn/post/6844903718152830989)

> https://webpack.js.org/loaders/sass-loader/#resolving-import-at-rules

Using `~` is **deprecated** and can be removed from your code (we recommend it), but we still support it for historical
reasons. Why can you remove it? The loader will first try to resolve @import as a **relative path**. If it cannot be
resolved, then the loader will try to resolve @import inside **node_modules**.

It's important to prepend it with **only** `~`, because `~/` resolves to the **home directory**.
