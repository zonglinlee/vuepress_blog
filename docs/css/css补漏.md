---
title: css 补漏
---

## css参考

### 工具网站

- [cubic-bezier](https://cubic-bezier.com/)
- [animista(css animation)](https://animista.net/)
- [css-box-shadow-example](https://getcssscan.com/css-box-shadow-examples)
- [w3schools.com_css_howto](https://www.w3schools.com/howto/default.asp)

### library

- [tailwindcss v2](https://v2.tailwindcss.com/)

### 在线电子书

- [cssanimation](https://cssanimation.rocks/css-animation-101)

## [caret-color](https://developer.mozilla.org/zh-CN/docs/Web/CSS/caret-color)

The `caret-color` CSS property sets the color of the **insertion caret**, the visible marker where the next character
typed will be inserted. This is sometimes referred to as **the text input cursor**.

## ::after vs ::before

创建一个伪元素，作为已选中元素的**最后一个/第一个子元素**。通常会配合content属性来为该元素添加装饰内容。这个虚拟元素默认是**行内元素**

## [box-sizing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)

box-sizing 只有两个取值 ：**content-box**(default) 和 **border-box**

- content-box: 如果你设置一个元素的宽为 100px，那么这个元素的内容区会有 100px 宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
- border-box 不包含 margin

## css 世界

### 内部尺寸

内部尺寸：元素的尺寸由内部元素决定，而非由外部容器决定，假如这个元素内部没有内容，宽度就是 0 ,典型的如 `display: inline-block`, 比如html中的 button 元素，默认就是 `inline-block`
,它的宽度会随文字的增加而变宽。

以下代码可以实现文字少的时候居中显示，文字多的时候居左显示

```css
.box {
    text-align: center;
}

.content {
    display: inline-block;
    text-align: left;
}
```

### 首选最小宽度

- 中文中最小宽度为每个汉字的宽度
- 英文中单词一般是连续的，终止于空格、短横线、问号、以及其他非英文字符, 如果想让英文字符和中文字符一样，可以使用 `word-break:break-all;`

### width:auto

对于块状元素，如果 width:auto，则元素会如水流般充满整个容器，而一旦设定了 width 具体数值，则元素的流动性就会被阻断，因为元素给定宽度就像河流中间竖了两个大闸一样， 就没有了流动性。尤其宽度作用在 `content-box`
上，更是内外流动性全无.

### CSS 流体布局下的宽度分离原则

宽度分离原则: CSS 中的 width 属性不与影响宽度的 padding/border（有时候包括 margin）属性共存,也就是不能出现  `.box { width: 100px; border: 1px solid; }`
或者 `.box { width: 100px; padding: 20px; }`

正确的书写方式

```css
.father {
    width: 180px;
}

.son {
    margin: 0 20px;
    padding: 20px;
    border: 1px solid;
}
```

### textarea

textarea 为替换元素，替换元素的特性之一就是尺寸由内部元素决定，且无论其 display 属性值是 inline 还是 block。这个特性很有意思，对于非替换元素，如果其 display 属性值为
block，则会具有流动性，宽度由外部尺寸决定，但是替换元素的宽度却不受 display 水平影响，因此，我们通过 CSS 修改 textarea 的 display 水平是无法让尺寸 100%自适应父容器的：

```css
textarea {
    display: block; /* 还是原来的尺寸 */
}
```

所以，我们只能通过 width 设定让 textarea 尺寸 100%自适应父容器

### height:100%

如果包含块的高度没有显式指定（即高度由内容决定），并且该元素不是绝对定位，则计算值为 auto。一句话总结就是：因为解释成了 auto。要知道，auto 和百分比计算，肯定是算不了的.

如何让元素支持 height:100%效果

- 设定显式的高度值
- 使用绝对定位

### 幽灵空白节点

Each line box starts with a zero-width inline box with the element’s font and line height properties. We call that
imaginary box a “strut”.



## CSS key concepts

- [Layout and the containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block)
- [HTMLElement: offsetParent property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent)
- [Dom element dimensions and css transforms](https://impressivewebs.com/dom-element-dimensions-and-css-transforms/)
