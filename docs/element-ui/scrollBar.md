---
title: el-scrollBar
---

### you should know

- `Document.documentElement` returns the Element that is the root element of the document
- 设置一个可滚动元素的 scrollTop/scrollLeft 是会触发该元素上的 scroll 事件的

```javascript
document instanceof Document // true
document instanceof Node // true
document.scrollTop // undefined
document.scrollLeft // undefined
document.documentElement.scrollTop // 0
document.documentElement.scrollLeft // 0
```

坑点：

```javascript
// 在 document 上监听 scroll 事件
document.addEventListener('scroll', function () {
    console.log('trigger-scroll')
})
// 由于 document 没有 scrollTop 和 scrollLeft 属性，
// 所以必须在 document.documentElement 上设置 scrollTop/scrollLeft 才能触发 scroll 事件
document.documentElement = 200 // console: trigger-scroll
```









### Reference

- [element ScrollBar滚动组件源码深入分析](https://juejin.cn/post/6844903764873199630)
