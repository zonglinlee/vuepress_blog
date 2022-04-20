---
title: css layout
---

## [三栏布局](https://juejin.cn/post/6905539198107942919#heading-37)

### 圣杯布局

<css-layout />

```html

<div class="outer">
    <!--    中间的元素在第一位-->
    <div class="center"></div>
    <div class="left"></div>
    <div class="right"></div>
</div>
```

```css
    .outer {
    height: 100px;
    padding-left: 100px;
    padding-right: 200px;
}

.left {
    float: left;
    /* margin-left: -100%;由于负外边距-100%计算值是宿主元素 div.outer 内容盒模型的宽度, 这会导致div.left从第二行移动到第一行 */
    margin-left: -100%;
    /* div.left向左移动100px,占据父元素 div.outer的padding-left空间 */
    position: relative;
    left: -100px;
    width: 100px;
    height: 100px;
    background: tomato;
}

.right {
    position: relative;
    left: 200px;
    float: right;
    margin-left: -200px;
    width: 200px;
    height: 100px;
    background: gold;
}

.center {
    float: left;
    width: 100%;
    height: 100px;
    background: lightgreen;
}
```
