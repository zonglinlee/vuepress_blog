---
title: vue常见问题解答
---

## [Vue中父子组件生命周期执行顺序](https://juejin.cn/post/6844904113914773518)

在单一组件中，钩子的执行顺序是

`beforeCreate-> created -> mounted->... ->destroyed`

当父子组件嵌套时,父组件先创建，然后子组件创建；子组件先挂载，然后父组件挂载,所以在父组件 `mounted` 中获取 `api` 的数据，子组件的 `mounted` 是拿不到的。

`父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted`

更新过程

`父beforeUpdate->子beforeUpdate->子updated->父updated`

销毁过程

`父beforeDestroy->子beforeDestroy->子destroyed->父destroyed`

## vue组件生命周期总结

- `beforeCreate` 执行时：`data` 和 `el` 均未初始化，值为 `undefined`
- `created` 执行时：`Vue` 实例观察的数据对象 `data` 已经配置好，已经可以得到 `data` 的值，但 `Vue` 实例使用的根 `DOM` 元素 `el` 还未初始化
- `beforeMount` 执行时：`data` 和 `el` 均已经初始化，但此时 `el` 并没有渲染进数据，`el` 的值为“虚拟”的元素节点
- `mounted` 执行时：此时 `el` 已经渲染完成并挂载到实例上
- `beforeUpdate` 和 `updated` 触发时，`el` 中的数据都已经渲染完成，但只有 `updated` 钩子被调用时候，组件 `dom` 才被更新。
- 在 `created` 钩子中可以对 `data` 数据进行操作，这个时候可以进行数据请求将返回的数据赋给 `data`
- 在 `mounted` 钩子对挂载的 `dom` 进行操作，此时，`DOM` 已经被渲染到页面上。
- 虽然 `updated` 函数会在数据变化时被触发，但却不能准确的判断是那个属性值被改变，所以在实际情况中用 `computed 或 watch` 函数来监听属性的变化，并做一些其他的操作。
- 所有的生命周期钩子自动绑定 `this` 上下文到实例中，所以不能使用 **箭头函数** 来定义一个生命周期方法 (例如 `created: () => this.fetchTodos()`),会导致 `this` 指向父级。
- 在使用 `vue-router` 时有时需要使用来缓存组件状态，这个时候 `created` 钩子就不会被重复调用了，如果我们的子组件需要在每次加载或切换状态的时候进行某些操作，可以使用 `activated` 钩子触发。
- **父子组件的钩子并不会等待请求返回，请求是异步的**，`VUE` 设计也不能因为请求没有响应而不执行后面的钩子。所以，我们必须通过 `v-if` 来控制子组件钩子的执行时机

## vue 插槽

- 具名插槽: 书写组件的时候使用 `<slot>标签` + `name` 属性来提供插槽占位。 不带 `name` 的 `<slot>` 默认 `name="default" `

```html

<div class="container">
    <header>
        <slot name="header"></slot>
    </header>
</div>
```

- 具名插槽使用： ` <template>` 元素上使用 `v-slot` 指令，并以 `v-slot` 的参数的形式提供其**名称**; 任何没有被包裹在带有 `v-slot` 的 `<template>` 中的内容都会被视为**
  默认插槽**的内容
- 注意： `v-slot` 只能添加在 `<template>` 上
- `v-slot` 也有缩写，即把参数之前的所有内容 (`v-slot:`) 替换为字符` #`。例如 `v-slot:header` 可以被重写为 `#header`

```html

<base-layout>
    <template v-slot:header>
        <h1>Here might be a page title</h1>
    </template>
</base-layout>
```

- 绑定在 `<slot>` 元素上的 `attribute` 被称为 `插槽 prop`

```html
<!--书写组件时候定义插槽，绑定 插槽prop-->
<span>
  <slot v-bind:user="user">
    {{ user.lastName }}
  </slot>
</span>
<!--使用组件时候访问 整个插槽 slotProps 属性，这里的 slotProps 名称可以自己随便定义-->
<current-user>
    <template v-slot:default="slotProps">
        {{ slotProps.user.firstName }}
    </template>
</current-user>
```

- 特殊情况简写 ： **独占默认插槽**的缩写语法，当被提供的内容**只有默认插槽**时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 `v-slot` **直接用在组件上**

```html

<current-user v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
</current-user>
<!--或者-->
<current-user v-slot="slotProps">
    {{ slotProps.user.firstName }}
</current-user>
```

- 废弃的语法书写形式

```html

<!--插槽的使用: 在template上使用slot属性指定插槽名称 -->
<!--使用slot-scope属性指定 slot prop-->

<slot-example>
    <template slot="default" slot-scope="slotProps">
        {{ slotProps.msg }}
    </template>
</slot-example>

```

## [`$slots` vs `$scopeSlots`](https://cn.vuejs.org/v2/api/#vm-scopedSlots)

- `vm.$slots` 类型：`{ [name: string]: ?Array<VNode> }`

```js
Vue.component('blog-post', {
    render: function (createElement) {
        var header = this.$slots.header
        var body = this.$slots.default
        var footer = this.$slots.footer
        return createElement('div', [
            createElement('header', header),
            createElement('main', body),
            createElement('footer', footer)
        ])
    }
})
```

- `vm.$scopedSlots` 类型：`{ [name: string]: props => Array<VNode> | undefined }`, 他是一个函数，调用后会返回 `Array<VNode>`
  ,所有的 `$slots` 现在都会作为函数暴露在 `$scopedSlots` 中。如果你在使用渲染函数，不论当前插槽是否带有作用域，我们都**推荐始终通过** `$scopedSlots` 访问它们。

`vm.$scopedSlots`的 ts 类型为 `type ScopedSlot = (props: any) => ScopedSlotChildren`

如果要渲染 `<div><slot :text="message"></slot></div>` 这样的模板，`render` 函数可以这样写
```js
render: function (createElement) {
    return createElement('div', [
        this.$scopedSlots.default({
            text: this.message
        })
    ])
}
```
如下所示 `default` 函数传入的 `props` 最终会渲染到 `v-slot:default="props"`  即作为 `slotProp` 传入

```js
// 如果要渲染 `<div><child v-slot="props"><span>{{ props.text }}</span></child></div>` 这样的模板，`render` 函数可以这样写
render: function (createElement) {
    return createElement('div', [
        createElement('child', {
            // 在数据对象中传递 `scopedSlots`
            // 格式为 { name: props => VNode | Array<VNode> }
            scopedSlots: {
                default: function (props) {
                    return createElement('span', props.text)
                }
            }
        })
    ])
}
```
