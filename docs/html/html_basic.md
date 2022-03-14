---
title: html补漏
---

## [`<base>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)

The Document Base URL element. The `<base>` HTML element specifies the base URL to use for all relative URLs in a
document. There can be only one `<base>` element in a document.

A document's used base URL can be accessed by scripts with `Node.baseURI`. If the document has no `<base>` elements,
then `baseURI` defaults to `location.href`.
`vueRouter4` 中 `createWebHistory normalizeBase(base)`需要对 `base` 进行格式化，就用到了 `<base>` 标签
