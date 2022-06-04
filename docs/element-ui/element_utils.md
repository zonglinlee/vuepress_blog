---
title: element-utils
---

## directives utils

### repeat-click.js

在 `input-number` 组件中有应用 `v-repeat-click`,当长按加或减时候，会持续调用绑定的函数

- [`MouseEvent.button`](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/button)
  是只读属性，它返回一个值，代表用户按下并触发了事件的鼠标按键,0：主按键，通常指鼠标左键或默认值; 1：辅助按键，通常指鼠标滚轮中键; 2：次按键，通常指鼠标右键

### mousewheel.js

[normalize-wheel](https://github.com/basilfx/normalize-wheel)Mouse wheel normalization across multiple multiple
browsers.
`normalize-wheel` was used to standardize the mousewheel event
> If you need to react to the mouse wheel in a predictable way, this code is like your bestest friend.

> As of today, there are 4 DOM event types you can listen to:
'wheel' -- Chrome(31+), FF(17+), IE(9+)
'mousewheel' -- Chrome, IE(6+), Opera, Safari
'MozMousePixelScroll' -- FF(3.5 only!) (2010-2013) -- don't bother!
'DOMMouseScroll' -- FF(0.9.7+) since 2003
> In your event callback, use this code to get sane interpretation of the deltas. This code will return an object with properties:
spinX -- normalized spin speed (use for zoom) - x plane spinY -- " - y plane pixelX -- normalized distance (to pixels) - x plane pixelY -- " - y plane

fireFox 中监听的是 `DOMMouseScroll` 事件，其他浏览器中监听的是 `mousewheel`事件， v-mousewheel在table组件中有所使用

```js
import normalizeWheel from 'normalize-wheel';

const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

const mousewheel = function (element, callback) {
    if (element && element.addEventListener) {
        element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function (event) {
            const normalized = normalizeWheel(event);
            callback && callback.apply(this, [event, normalized]);
        });
    }
};
```

## mixins

### emitter.js

- `dispatch`方法：通过 `componentName` 向上搜索 parent component，并触发父组件上的 event
- `broadcast`方法：通过 `componentName` 向下搜索 children component，并触发子组件上的 event

```js
this.dispatch('ElFormItem', 'el.form.change', value);
this.broadcast('ElSelectDropdown', 'updatePopper');
```

## transitions

### collapse-transition.js

这是一个组件名为`ElCollapseTransition`的函数式组件,它的 `render`
函数返回值得是一个 [`transition`](https://cn.vuejs.org/v2/api/#transition) 组件，通过js操作子组件的 `height`,
它会使得包裹其中的子组件呈现过渡展开的效果，在 `Collapse 折叠面板` 中有所使用

`return h('transition', data, children)`

`<transition>` 元素作为单个元素/组件的过渡效果。`<transition>` 只会把过渡效果应用到其包裹的内容上，而不会额外渲染 DOM 元素，也不会出现在可被检查的组件层级中

## utils

### after-leave.js

这是一个兼容性工具函数，有的浏览器当前组件上的 `after-leave` 事件不会触发，after-leave.js会在当vue组件前实例上再次绑定一个 `after-leave`
事件，绑定完成之后默认400ms之后会执行绑定的回调函数，在element loading组件中有所使用，loading组件最外层是一个 `transition`
组件,当过渡完成之后，transition组件会触发当前loading组件上的`after-leave`
事件，但是在某些浏览器下可能会失效，则400ms之后回调函数也会执行，如果两者都发生了调用，after-leave.js中的 `called` 标记会保证回调只执行一次

```html
<!--loading组件中的 after-leave 事件的触发-->
<transition name="el-loading-fade" @after-leave="handleAfterLeave"></transition>
<script>
    handleAfterLeave()
    {
        this.$emit('after-leave')
    }
</script>

```


