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

### 替换元素

`img object video iframe textarea input` 等都是替换元素

- 内容可以被替换
- 内容的外观不受页面上的 CSS 的影响，用专业的话讲就是在样式表现在 CSS 作用域之外。如何更改替换元素本身的外观？需要类似 **appearance** 属性，或者浏览器自身暴露的一些样式接口
- 有自己的尺寸。在 Web 中，很多替换元素在没有明确尺寸设定的情况下，其默认的尺寸（不包括边框）是 300 像素×150 像素，如`<video>、<iframe>`或者`<canvas>`等，也有少部分替换元素为 0
  像素，如`<img>`图片，而表单元素的替换元素的尺寸则和浏览器有关，没有明显的规律
- 在很多 CSS 属性上有自己的一套表现规则。比较具有代表性的就是 `vertical-align` 属性，对于替换元素和非替换元素，`vertical-align` 属性值的解释是不一样的
-

固有尺寸指的是替换内容原本的尺寸。例如，图片、视频作为一个独立文件存在的时候，都是有着自己的宽度和高度的。这个宽度和高度的大小就是这里的“固有尺寸”。对于表单类替换元素，“固有尺寸”可以理解为“不加修饰的默认尺寸”。比方说，你在空白页面写`<input>`
，此时的尺寸就可以看成是`<input>`元素的“固有尺寸”。这就是输入框、下拉框这些表单元素默认的 font-size/padding/margin 等属性全部使用 px
作为单位的原因，因为这样可以保证这些元素的“固有尺寸”是固定大小，不会受外界 CSS 的影响

- CSS 世界中的替换元素的固有尺寸有一个很重要的特性，那就是“我们是无法改变这个替换元素内容的固有尺寸的,下面的例子中 width 和 height 属性都被直接无视了

```css
div:before {
    /* 使用 content 属性插入的内容都是匿名的可替换元素。*/
    content: url("1.jpg");
    display: block;
    width: 200px;
    height: 200px;
}

/*既然图片的固定尺寸不受 CSS 宽高控制，那为何我们设定 width 和 height 会影响图片的尺寸呢？*/
/*那是因为图片中的 content 替换内容默认的适配方式是填充（fill），也就是外部设定的尺寸多大，我就填满、跟着一样大。*/
/*换句话说，尺寸变化的本质并不是改变固有尺寸，而是采用了填充作为适配 HTML 尺寸和 CSS 尺寸的方式，*/
/*且在 CSS3 之前，此适配方式是不能修改的*/
/*实际项目中，content 图片生成用得并不多，主要原因在于图片的尺寸不好控制，我们设置宽高无法改变图片的固有尺寸*/
```

#### object-fit

CSS3中 ，`<img>` 和其他一些替换元素的替换内容的适配方式可以通过 object-fit 属性修改了。例如，`<img>` 元素的默认声明是 `object-fit:fill`，如果我们设置 `object-fit:none`
，则我们图片的尺寸就完全不受控制，表现会和非替换元素`::before`生成的图片尺寸类似；如果我们设置 `object-fit:contain`，则图片会以保持比例图片，尽可能利用 HTML
尺寸但又不会超出的方式显示

### padding

#### 内联元素 垂直 padding

内联元素 padding 对视觉层和布局层具有双重影响。我们可以在不影响当前布局的情况下，优雅地增加链接或按钮的点击区域大小，比方说，文章中会有一些文字链接，默认情况下，这些链接的点击区域的高度是受 `font-size`
字体大小控制的，和行高没有关系。尤其在 Chrome 等浏览器下，高度仅
**1em**，这么小的高度，要是在移动端，我们的手指不一定能够一次点中，可能要戳好多下，此时就有必要增加链接的点击区域大小，但是前提是不影响当前的内容布局。此时，我们就可以使用 padding 天然实现我们想要的效果，例如：

```css
/*注意这里并没有将 a 标签设置为 display:inline-block;*/
/*如果我们设置成 inline-block，则行间距等很多麻烦事就会出来*/
article a {
    padding: .25em 0;
}
```

#### padding 百分比值

和 `margin` 属性不同，`padding` 属性是不支持负值的；其二，`padding` 支持百分比值，但是，和 `height` 等属性的百分比计算规则有些差异，差异在于：`padding`
百分比值无论是水平方向还是垂直方向均是**
相对于宽度**计算的！

```css
/*利用padding实现固定宽高比的 box, 这里padding-left和padding-right都为50%，刚好占据了整个 width */
/* demo: https://demo.cssworld.cn/4/2-3.php*/
.box {
    padding: 10% 50%;
    position: relative;
}

.box > img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
```

### margin

- 等高布局: 此布局多出现在分栏有背景色或者中间有分隔线的布局中，有可能左侧栏内容多，也有可能右侧栏内容多，但无论内容多少，两栏背景色都和容器一样高

```css
/*由于 height:100%需要在父级设定具体高度值时才有效，因此我们需要使用其他技巧来实现*/
/*方法一 (推荐使用)：使用 display:table-cell 布局，左右两栏作为单元格处理*/
/*方法二 (会有其它问题，这里只做展示)：使用我们这里的 margin 负值实现： https://demo.cssworld.cn/4/3-2.php */
.column-box {
    overflow: hidden;
}

.column-left,
.column-right {
    margin-bottom: -9999px;
    padding-bottom: 9999px;
}

/*垂直方向 margin 无法改变元素的内部尺寸，但却能改变外部尺寸，这里我们设置了 `margin-bottom:-9999px` 意味着元素的外部尺寸在垂直方向上小了 9999px。
默认情况下，垂直方向块级元素上下距离是 0，一旦 `margin-bottom:-9999px` 就意味着后面所有元素和上面元素的空间距离变成了-9999px，
也就是后面元素都往上移动了 9999px。此时，通过神来一笔padding-bottom:9999px 增加元素高度，
这正负一抵消，对布局层并无影响，但却带来了我们需要的东西—视觉层多了 9999px 高度的可使用的背景色。
但是，9999px 太大了，所以需要配合父级 overflow:hidden 把多出来的色块背景隐藏掉，于是实现了视觉上的等高布局效果*/
```

- 和 padding 属性一样，margin 的百分比值无论是水平方向还是垂直方向都是相对于宽度计算的

#### margin 合并

块级元素的上外边距（margin-top）与下外边距（margin-bottom）有时会合并为单个外边距

- 块级元素，但不包括浮动和绝对定位元素，尽管浮动和绝对定位可以让元素块状化。
- 只发生在垂直方向，需要注意的是，这种说法在不考虑 writing-mode 的情况下才是正确的，严格来讲，应该是只发生在和当前文档流方向的相垂直的方向上。由于默认文档流是水平流，因此发生 margin 合并的就是垂直方向

margin 合并有以下 3 种场景， margin 合并的计算规则为 “正正取大值” “正负值相加” “负负最负值”

- 相邻兄弟元素 margin 合并
- 父级和第一个/最后一个子元素,查看 [demo](https://demo.cssworld.cn/4/3-3.php),这里最终的 margin
  全部合到了父元素上，这里只是表现为合并到父元素之上了，实际中使用 `getComputedStyle`
  方法获取父元素的 margin-top 值还是 CSS 属性中设置值
- 空块级元素的 margin 合并（自身上下边距会合并为一个）

阻止 margin-top 合并

- 父元素设置为块状格式化上下文元素；
- 父元素设置 border-top 值；
- 父元素设置 padding-top 值；
- 父元素和第一个子元素之间添加内联元素进行分隔

阻止 margin-bottom 合并

- 父元素设置为块状格式化上下文元素；
- 父元素设置 border-bottom 值；
- 父元素设置 padding-bottom 值；
- 父元素和最后一个子元素之间添加内联元素进行分隔；
- 父元素设置 height、min-height 或 max-height

margin:auto 的填充规则

- 如果一侧定值，一侧 auto，则 auto 为剩余空间大小。
- 如果两侧均是 auto，则平分剩余空间。
- 如果想让某个块状元素右对齐，脑子里不要就一个 `float:right`，很多时候，`margin-left:auto` 才是最佳的实践

Q1: 为什么明明 容器定高、元素定高，margin:auto 却无法垂直居中 ?

原因在于触发 margin:auto 计算有一个前提条件，就是 width 或 height 为 auto 时，元素是具有对应方向的自动填充特性的,width
可以自动填充，所以水平方向可以居中，但是height一般是根据内容高度撑开的，不会自动填充为父级高度，所以垂直方向不能自动居中，可以使用 `writing-mode:vertical-lr;` 改变父级文档流的方向，但这样之后水平方向就不能
auto 居中了

```css
.father {
    height: 200px;
}

.son {
    height: 100px;
    margin: auto;
}
```

绝对定位元素的 margin:auto 居中， 查看 [demo](https://demo.cssworld.cn/4/3-5.php)

```css
.father {
    width: 300px;
    height: 150px;
    position: relative;
}

/*此时.son 这个元素的尺寸表现为“格式化宽度和格式化高度, 尺寸自动填充父级元素的可用尺寸*/
/*设置宽高之后，剩余空间会被 margin 均匀分配*/
.son {
    position: absolute;
    width: 200px;
    height: 100px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
```

margin失效的情况：

- display 计算值 inline 的非替换元素的垂直 margin 是无效的
- 表格中的`<tr>`和`<td>`元素或者设置 display 计算值是 table-cell 或 table-row 的元素的 margin 都是无效的
- margin 合并的时候，更改 margin 值可能是没有效果的
- 绝对定位元素非定位方位的 margin 值“无效”
- 定高容器的子元素的 margin-bottom 或者宽度定死的子元素的 margin-right 的定位“失效
- 内联特性导致的 margin 无效

### border

- border-color 有一个很重要也很实用的特性，就是“border-color 默认颜色就是color 色值
- 三角等图形绘制

```css
div {
    width: 0;
    border: 10px solid;
    border-color: #f30 transparent transparent;
}
```

### 字母 x

- 在各种内联相关模型中，凡是涉及垂直方向的排版或者对齐的，都离不开最基本的基线 （baseline）。例如 line-height 行高的定义就是两基线的间距，vertical-align 的默认值就是基线。字母 `x`
  的下边缘（线）就是我们的基线
- 字母 x 与 CSS 中的 x-height: x-height 指的就是小写字母 x 的高度，术语描述就是基线和等分线（mean line）（也称作中线，midline）之间的距离,在 CSS 世界中，middle 指的是基线往上
  1/2 x-height 高度。我们可以近似理解为字母 x 交叉点那个位置。 由此可见，vertical-align:middle 并不是绝对的垂直居中对齐，我们平常看到的 middle 效果只是一种近似效果(跟当前字体
  fontFamily 中字母 x 有关)
- The `vertical-align` CSS property sets vertical alignment of an `inline`, `inline-block` or `table-cell` box

line-height 计算

- 数值，如 line-height:1.5，其最终的计算值是和当前 font-size 相乘后的值(后代元素继承的是 1.5)
- 百分比值，如 line-height:150%，其最终的计算值是和当前 font-size 相乘后的值 (后代元素继承的是 150%*fontSize 计算出来的 px 值)



## CSS key concepts

- [Layout and the containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block)
- [HTMLElement: offsetParent property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent)
- [Dom element dimensions and css transforms](https://impressivewebs.com/dom-element-dimensions-and-css-transforms/)
