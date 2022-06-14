---
title: vue_transition_animation
---

## Transition

- 1.v-enter-to，v-leave一般不写，不写的原因是：按照一般的过渡效果（动画），进入的最后状态就是元素本身的样式，离开的最初状态也是元素本身的样式，所以是没有必要写的。
- 2.v-enter, v-leave-to中的css一般相同，一个是进入时过渡（动画）的初始样式，一个是离开过渡（动画）结束时的样式。
- 3.v-enter-active ，v-leave-active 中的css一般相同，一般都是用于定义过渡（动画）的过程时间，延迟和曲线函数。当然离开的过渡（动画）的过程时间，延迟和曲线函数和进入的可以是不同的。

Q:组件根节点如何进行过渡 ?

记得要在根节点 transition 上标记 **appear** 属性，appear 设置节点在初始渲染的过渡

```html

<transition name="slide" appear>
    <div>我是根组件节点</div>
</transition>
```

```css
.slide-enter {
    transform: translateY(300px);
    opacity: 0.1;
}

.slide-enter-active {
    transition: all 0.3s ease-in-out;
}
```

## Reference

[vue 动画和过渡](https://codeantenna.com/a/lynpZ3utKZ)

https://juejin.cn/post/6967234534504923172

https://blog.csdn.net/weixin_43974265/article/details/113543096
