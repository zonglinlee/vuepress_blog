---
title: vue_migration
---

- `setup() 钩子`: `setup()` 自身并不含对组件实例的访问权，即在 `setup()` 中访问 this 会是 undefined; 在模板中访问从 `setup()` 返回的 ref
  时，它会自动浅层解包，因此你无须再在模板中为它写 `.value`。当通过 this 访问时也会同样如此解包;`setup(props)` 函数的第一个参数是组件的 props

```js
export default {
    setup(props, context) {
        // 将 `props` 转为一个其中全是 ref 的对象，然后解构
        const {title} = toRefs(props)
        // `title` 是一个追踪着 `props.title` 的 ref
        console.log(title.value)
        // 或者，将 `props` 的单个属性转为一个 ref
        const title1 = toRef(props, 'title1')
        console.log(context.attrs)// 透传 Attributes（非响应式的对象，等价于 $attrs）
        console.log(context.slots)// 插槽（非响应式的对象，等价于 $slots）
        console.log(context.emit) // 触发事件（函数，等价于 $emit）
        console.log(context.expose)// 暴露公共属性（函数）
        // attrs 和 slots 都是有状态的对象，它们总是会随着组件自身的更新而更新。这意味着你应当避免解构它们，并始终通过 attrs.x 或 slots.x 的形式使用其中的属性
        // expose 函数用于显式地限制该组件暴露出的属性，当父组件通过模板引用访问该组件的实例时，将仅能访问 expose 函数暴露出的内容
    }
}
```

- `setup` 也可以返回一个渲染函数, 返回一个渲染函数将会阻止我们返回其他东西, 我们可以通过调用 `expose()` 解决这个问题

```js
export default {
    setup(props, {expose}) {
        const count = ref(0)
        const increment = () => ++count.value
        expose({
            increment
        })
        return () => h('div', count.value)
    }
}
```

- `reactive()`, 返回一个对象的响应式代理, 响应式转换是“深层”的：它会影响到所有嵌套的属性,若要避免深层响应式转换，只想保留对这个对象顶层次访问的响应性，请使用 shallowReactive() 作替代
- `reactive()`, 它只能用于对象类型 (对象、数组和如 Map、Set 这样的集合类型)。它不能持有如 string、number 或 boolean 这样的原始类型
- `reactive()`, 不能替换整个对象

```js
let state = reactive({count: 0})
// 上面的 ({ count: 0 }) 引用将不再被追踪
// (响应性连接已丢失！)
state = reactive({count: 1})
```

- `reactive()`, 对解构操作不友好：当我们将响应式对象的原始类型属性解构为本地变量时，或者将该属性传递给函数时，我们将丢失响应性连接

```js
// 当访问到某个响应式数组或 Map 这样的原生集合类型中的 ref 元素时，不会执行 ref 的解包
const books = reactive([ref('Vue 3 Guide')])
console.log(books[0].value) // 这里需要 .value

// 将一个 ref 赋值给一个 reactive 属性时，该 ref 会被自动解包
const count = ref(1)
const obj = reactive({})
obj.count = count
```

- `watchEffect(callback(onCleanup))` 立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行; 第一个参数就是要运行的副作用函数。这个副作用函数的参数(onCleanup)
  也是一个函数，用来注册清理回调

```js
// 清除副作用， onCleanup 是个钩子函数，保证清理回调会在该副作用下一次执行前被调用
watchEffect(async (onCleanup) => {
    onCleanup(() => {
        // do cleanup logic
    })
})
```

- `watch()`, 侦听一个或多个响应式数据源，并在数据源变化时调用所给的回调函数。第一个参数是侦听器的源。这个来源可以是以下几种:一个函数，返回一个值; 一个 ref; 一个响应式对象;

```js
// 侦听一个 getter 函数
const state = reactive({count: 0})
watch(
    () => state.count,
    (count, prevCount) => {
        /* ... */
    }
)
// 侦听一个 ref
const count = ref(0)
watch(count, (count, prevCount) => {
    /* ... */
})
```

- toRef()

```js
// 双向 ref，会与源属性同步
const state = reactive({foo: 1})
const fooRef = toRef(state, 'foo') // 双向 ref，会与源属性同步
const fooRef = ref(state.foo)  // ref 不会和 state.foo 保持同步，因为这个 ref() 接收到的是一个纯数值
// 当 toRef 与组件 props 结合使用时，关于禁止对 props 做出更改的限制依然有效
toRef(props, 'foo')
toRef(() => props.foo)
```

- `toValue()` 将值、refs 或 getters 规范化为值, 与 `unref()` 类似


- `toRefs()`, 将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 `ref`。每个单独的 `ref` 都是使用 `toRef()` 创建的, 针对 `reactive()` 解构操作不友好的
  API

```js
function useFeatureX() {
    const state = reactive({
        foo: 1,
        bar: 2
    })
    // 在返回时都转为 ref， 针对 reactive 解构操作不友好的 Api
    return toRefs(state)
}

// 可以解构而不会失去响应性
const {foo, bar} = useFeatureX()
```

- `shallowRef()`, 只有对 `.value `的访问是响应式的

```js
const state = shallowRef({count: 1})
// 不会触发更改
state.value.count = 2
// 会触发更改
state.value = {count: 2}
```

- `triggerRef()`, 强制触发依赖于一个浅层 ref 的副作用
