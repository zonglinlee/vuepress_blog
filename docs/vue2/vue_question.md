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



