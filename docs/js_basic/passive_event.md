---
title: Passive Event
---

## scroll 行为 vs scroll 事件

文档视图或者一个元素在滚动时，会触发元素的 scroll 事件，先有滚动行为，然后才会触发 scroll 事件。scroll 事件的 **event.cancelable** 属性默认是
false,是一种不可被取消的事件，调用 `event.preventDefault()`没有任何意义，并不能阻止浏览器滚动

## passive 事件原因

由于 touchstart/touchmove/wheel 事件对象的 cancelable 属性为 true，也就是说它的默认行为可以被监听器通过 `preventDefault()`
方法阻止，那它的默认行为是什么呢，通常来说就是滚动当前页面（还可能是缩放页面），如果它的默认行为被阻止了，页面就必须静止不动。但浏览器无法预先知道一个监听器会不会调用 `preventDefault()`
，它能做的只有等监听器执行完后再去执行默认行为，而监听器执行是要耗时的，有些甚至耗时很明显，这样就会导致页面卡顿。视频里也说了，即便监听器是个空函数，也会产生一定的卡顿，毕竟空函数的执行也会耗时。

有 80% 的滚动事件监听器是不会阻止默认行为的，也就是说大部分情况下，浏览器是白等了。所以，passive 监听器诞生了，它表示当前通过 addEventListener 注册的 handler
是一个被动监听器，相当于标记当前 `event.cancelable=false` ,告诉浏览器 滚动行为 不会被阻止，你可以立即执行滚动行为， 浏览器知道了一个监听器是
passive 的，它就可以在两个线程里同时执行监听器中的 JavaScript 代码和浏览器的默认行为了。

当标记为 `passive=true` 之后，即使调用 `event.preventDefault()` 也不会阻止浏览器滚动，只会再控制台输出一条警告信息。

## passive detect

通过在 options 对象中定义一个 getter 方法来检测 passive 属性是否被访问到

```js
var supportsPassive = false;
try {
    var opts = Object.defineProperty({}, "passive", {
        get: function () {
            supportsPassive = true;
        },
    });
    window.addEventListener("test", null, opts);
} catch (e) {
}

// 使用检测结果。如果支持则使用 passive，否则将捕获设置为 false
elem.addEventListener(
    "touchstart",
    fn,
    supportsPassive ? {passive: true} : false
);
```

## reference

- [[英] 被动事件监听器（Passive Event Listeners）](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md)
- [[译] 被动事件监听器（Passive Event Listeners）](https://www.zjy.name/passive-event-listeners/)
