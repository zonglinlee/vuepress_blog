---
title: css layout
---

## [三栏布局](https://juejin.cn/post/6905539198107942919#heading-37)

### [圣杯布局](https://www.mdnice.com/writing/96b5349606bf464caed7d9188220a235)

圣杯布局 ： 为了让中间div内容不被遮挡，将中间div设置了左右padding-left和padding-right后，将左右两个div用相对布局position:
relative并分别配合right和left属性，以便左右两栏div移动后不遮挡中间div
缺点：正常情况下没有问题，但是特殊情况下就会暴漏此方案的弊端，如果浏览器无限放大时，圣杯将会破坏掉。当center部分的宽小于right部分时就会发生布局混乱。（`center<right`即会变形）


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

### [双飞翼布局](https://www.mdnice.com/writing/96b5349606bf464caed7d9188220a235)

双飞翼布局：为了让中间div内容不被遮挡，直接在中间div内部创建子div用于放置内容，在该div里用margin-left和margin-right为左右两栏div留出位置。双飞翼布局把定位优化掉了。

```html

<div class="father text-white">
    <div class="center-wrap">
        <div class="center">div.center</div>
    </div>
    <div class="left">div.left</div>
    <div class="right">div.right</div>
</div>
```

```css
.center {
    height: 200px;
    background: red;
    margin-left: 200px;
    margin-right: 150px;
}

.center-wrap {
    width: 100%;
}

.center-wrap, .left, .right {
    float: left;

}

.left {
    background: yellow;
    height: 200px;
    width: 200px;
    margin-left: -100%;
}

.right {
    background: black;
    height: 200px;
    width: 150px;
    margin-left: -150px;
}
```

[垂直居中](https://www.ltonus.com/Css/css-center.html)

[What's the difference between align-content and align-items?](https://stackoverflow.com/questions/27539262/whats-the-difference-between-align-content-and-align-items)

<css-center />


## css sticky position
- [sticky-js](https://github.com/rgalus/sticky-js/tree/master)
- [position:sticky](https://www.zhangxinxu.com/wordpress/2018/12/css-position-sticky/)