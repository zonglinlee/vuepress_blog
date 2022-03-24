---
title: VueRouter4
---

## `createWebHistory`

初始化vueRouter时候，需要调用 `createWebHistory` 创建 `html5 history` 对象,在此过程中调用 `useHistoryListeners` 监听了 `popstate` 事件

```ts
window.addEventListener('popstate', popStateHandler)
window.addEventListener('beforeunload', beforeUnloadListener)
```

## vueRouter路由权重匹配

### `path` 解析成 `token`

在 `/src/matcher/pathTokenizer.ts` 中有个 专门的函数 `function tokenizePath(path: string): Array<Token[]> ` 是专门用于解析 `path` 的,
以 `/users/:id` 为例，解析的最终结果如 `tokens1` ,它会分段将 `url` 解析成 `Token` 类型的数组,其中的 `type` 代表的是枚举类型 `TokenizerState`;
`/:data(.*)`会解析成 `tokens2`,会保存 `regexp` 用来匹配 `data` 的格式;

```ts
const tokens1 = [
    [{type: 0, value: "users"}],
    [{type: 1, value: "id", regexp: "", repeatable: false, optional: false}]
]
const tokens2 = [
    [{type: 1, value: "data", regexp: ".*", repeatable: false, optional: false}]
]

const enum TokenizerState {
    Static,
    Param,
    ParamRegExp, // custom re for a param
    ParamRegExpEnd, // check if there is any ? + *
    EscapeNext,
}
```

### `token` 生成权重 并创建完整正则匹配规则

#### 权重规则

```ts
const enum PathScore {
    _multiplier = 10,
    Root = 9 * _multiplier, // just /
    Segment = 4 * _multiplier, // /a-segment
    SubSegment = 3 * _multiplier, // /multiple-:things-in-one-:segment
    Static = 4 * _multiplier, // /static
    Dynamic = 2 * _multiplier, // /:someId
    BonusCustomRegExp = 1 * _multiplier, // /:someId(\\d+)
    BonusWildcard = -4 * _multiplier - BonusCustomRegExp, // /:namedWildcard(.*) we remove the bonus added by the custom regexp
    BonusRepeatable = -2 * _multiplier, // /:w+ or /:w*
    BonusOptional = -0.8 * _multiplier, // /:w? or /:w*
    // these two have to be under 0.1 so a strict /:page is still lower than /:a-:b
    BonusStrict = 0.07 * _multiplier, // when options strict: true is passed, as the regex omits \/?
    BonusCaseSensitive = 0.025 * _multiplier, // when options strict: true is passed, as the regex omits \/?
}
```

#### 默认配置项

```ts
export interface _PathParserOptions {
    // Makes the RegExp case sensitive. Defaults to false
    sensitive?: boolean
    // Should we disallow a trailing slash. Defaults to false
    strict?: boolean
    // Should the RegExp match from the beginning by prepending a `^` to it. Defaults to true
    start?: boolean
    // Should the RegExp match until the end by appending a `$` to it. Defaults to true
    end?: boolean
}
```

依旧以`/users/:id` 为例，将上一步生成的 `tokens1` 进一步解析生成 `parser`,根据设置的 `_PathParserOptions`逐步添加匹配规则，得到正则字符串 `pattern`
，调用正则 `new RegExp`得到最终正则对象 `re`

```ts
let pattern = '^/users/([^/]+?)$'
const re = new RegExp(pattern, options.sensitive ? '' : 'i')
// 最终解析出来的 parser
const result = {
    re: /^\/user\/([^/]+?)$/i, // url匹配规则
    score: [[80], [60.7]], // url权重分值
    keys: [{"name": "id", "repeatable": false, "optional": false}],
    // parse: function(){},
    // stringify: function(){},
}
```

#### insertMatcher

`insertMatcher` 函数中通过路由权重对 matchers 做了排序

## routerView组件

当页面路由发生变化的时候，`setup` 中的计算属性 `matchedRouteRef` 会重新计算，从而得到与当前页面路由匹配的 `ViewComponent`,进而触发 `render` 函数渲染到当前页面上

```ts
export const RouterViewImpl = /*#__PURE__*/ defineComponent({
    name: 'RouterView',
    inheritAttrs: false,
    props: {
        name: {
            type: String as PropType<string>,
            default: 'default',
        },
        route: Object as PropType<RouteLocationNormalizedLoaded>,
    },
    // setup(props, context) {} ，context  结构  setup(props, { attrs, slots, emit, expose }) {}
    setup(props, {attrs, slots}) {
        // 这里在vueRouter install 方法中从 vue 实例中注入了 routerViewLocationKey
        const injectedRoute = inject(routerViewLocationKey)!
        const routeToDisplay = computed(() => props.route || injectedRoute.value)
        const depth = inject(viewDepthKey, 0)
        // 获取当前的匹配路由组件的计算属性 matchedRouteRef (reference)
        const matchedRouteRef = computed<RouteLocationMatched | undefined>(
            () => routeToDisplay.value.matched[depth]
        )

        provide(viewDepthKey, depth + 1)
        provide(matchedRouteKey, matchedRouteRef)
        provide(routerViewLocationKey, routeToDisplay) // 继续向子级组件注入 routerViewLocationKey

        const viewRef = ref<ComponentPublicInstance>()

        // watch at the same time the component instance, the route record we are
        // rendering, and the name
        watch(
            () => [viewRef.value, matchedRouteRef.value, props.name] as const,
            ([instance, to, name], [oldInstance, from, oldName]) => {
                // copy reused instances
                if (to) {
                    // this will update the instance for new instances as well as reused
                    // instances when navigating to a new route
                    to.instances[name] = instance
                    // the component instance is reused for a different route or name so
                    // we copy any saved update or leave guards. With async setup, the
                    // mounting component will mount before the matchedRoute changes,
                    // making instance === oldInstance, so we check if guards have been
                    // added before. This works because we remove guards when
                    // unmounting/deactivating components
                    if (from && from !== to && instance && instance === oldInstance) {
                        if (!to.leaveGuards.size) {
                            to.leaveGuards = from.leaveGuards
                        }
                        if (!to.updateGuards.size) {
                            to.updateGuards = from.updateGuards
                        }
                    }
                }

                // trigger beforeRouteEnter next callbacks
                if (
                    instance &&
                    to &&
                    // if there is no instance but to and from are the same this might be
                    // the first visit
                    (!from || !isSameRouteRecord(to, from) || !oldInstance)
                ) {
                    ;(to.enterCallbacks[name] || []).forEach(callback =>
                        callback(instance)
                    )
                }
            },
            {flush: 'post'}
        )

        return () => {
            const route = routeToDisplay.value
            const matchedRoute = matchedRouteRef.value
            // 当路由变更时候 计算属性matchedRouteRef也跟着改变，从而获取到真正的页面视图组件 ViewComponent
            const ViewComponent = matchedRoute && matchedRoute.components[props.name]
            // we need the value at the time we render because when we unmount, we
            // navigated to a different location so the value is different
            const currentName = props.name

            if (!ViewComponent) {
                return normalizeSlot(slots.default, {Component: ViewComponent, route})
            }

            // props from route configuration
            const routePropsOption = matchedRoute!.props[props.name]
            const routeProps = routePropsOption
                ? routePropsOption === true
                    ? route.params
                    : typeof routePropsOption === 'function'
                        ? routePropsOption(route)
                        : routePropsOption
                : null

            const onVnodeUnmounted: VNodeProps['onVnodeUnmounted'] = vnode => {
                // remove the instance reference to prevent leak
                if (vnode.component!.isUnmounted) {
                    matchedRoute!.instances[currentName] = null
                }
            }
            // h() : Creates virtual DOM nodes (vnodes). ViewComponent即是与当前路由匹配的vue组件，最终router-view渲染成了实际的动态路由组件
            const component = h(
                ViewComponent,
                assign({}, routeProps, attrs, {
                    onVnodeUnmounted,
                    ref: viewRef,
                })
            )
            // 这里返回的是一个 VNode
            return (
                // pass the vnode to the slot as a prop.
                // h and <component :is="..."> both accept vnodes
                normalizeSlot(slots.default, {Component: component, route}) ||
                component
            )
        }
    },
})
```

## routerLink组件

routerLink 默认渲染成为一个 `a` 标签，并添加了 `click`事件，点击触发 `link.navigate` 方法，会调用 `router` 对象的 `router.replace` 或者 `router.push`,
最终调用的是浏览器history对象的 `replaceState` 或者 `pushState`,这会导致浏览器的url改变

```ts
// routerLink最终默认渲染的是 a 标签 （/src/RouterLink.ts）
return () => {
    const children = slots.default && slots.default(link)
    return props.custom
        ? children
        : h('a',
            {
                href: link.href,
                onClick: link.navigate,
                class: elClass.value,
            },
            children
        )
}

// 调用history对象方法改变url (/src/history/html5.ts)
history[replace ? 'replaceState' : 'pushState'](state, '', url)

```

## vueRouter 钩子函数的调用机制

### 导航流程

| **导航流程**    | **Explanation**                                                                                                                                                                           |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.导航被触发  | 调用 `router.navigate()`                                                                                                                                                                    | 
| 2.在失活的组件里调用 `beforeRouteLeave` 守卫 | 组件内守卫：可以访问 `vm 即 this`,`router.navigate` 中提取当前组件中的 `beforeRouteLeave` 钩子函数                                                                                                                | 
| 3.调用全局的 `beforeEach` 守卫 | 全局前置守卫：可选的第三个参数 `next`                                                                                                                                                                    | 
| 4.在重用的组件里调用 `beforeRouteUpdate` 守卫 | 组件内守卫:可以访问 `vm 即 this`,`router.navigate` 中提取当前组件中的 `beforeRouteUpdate` 钩子函数                                                                                                               | 
| 5.在路由配置里调用 `beforeEnter`                 | 路由独享的守卫, 配置在路由对象上                                                                                                                                                                         |
| 6.解析异步路由组件  |                                                                                                                                                                                           | 
| 7.在被激活的组件里调用 `beforeRouteEnter` | 组件内守卫：,`router.navigate` 中提取当前组件中的 `beforeRouteEnter` 钩子函数 ,不能访问 `this`，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建，可传入第三参数 `next`,`beforeRouteEnter` 是支持给 `next` 传递回调的唯一守卫 ,回调函数的参数是当前 `vue` 组件实例 `vm` | 
| 8.调用全局的 `beforeResolve` 守卫 | 全局解析守卫                                                                                                                                                                                    | 
| 9.导航被确认 |                                                                                                                                                                                           | 
| 10.调用全局的 `afterEach` 钩子 | 全局后置钩子                                                                                                                                                                                    | 
| 11.触发 DOM 更新 |                                                                                                                                                                                           | 
| 12.调用 `beforeRouteEnter` 守卫中传给 `next`的回调函数，创建好的组件实例会作为回调函数的参数传入 | 在 `routerView` 组件内触发 `next` 的回调，并传入 `vm` 实例                                                                                                                                                     |

### `pushWithRedirect` 方法

路由想要发生变化，就是通过改变路径完成的，路由对象提供了很多改变路径的方法，比如 `router.push、router.replace`，它们的底层最终都是通过 `pushWithRedirect` 完成路径的切换。
`pushWithRedirect` 会对跳转的路由进行 `resolve(to)` 解析， 因为参数 `to` 可能有多种情况，可以是一个表示路径的字符串，也可以是一个路径对象，所以要先经过一层 `resolve`
返回一个新的路径对象。

接下来执行 `navigate` 方法，它实际上是执行路由切换过程中的一系列导航守卫函数，我们后续会介绍。`navigate` 成功后，会执行 `finalizeNavigation` 完成导航, 在这里完成真正浏览器url路径的切换。
并且会更新当前的路径 `currentRoute` 的值, 它是当前 `router` 实例上的一个属性.

```ts
  function pushWithRedirect(
    to: RouteLocationRaw | RouteLocation,
    redirectedFrom?: RouteLocation
): Promise<NavigationFailure | void | undefined> {
    const targetLocation: RouteLocation = (pendingLocation = resolve(to))
    const from = currentRoute.value
    const data: HistoryState | undefined = (to as RouteLocationOptions).state
    const force: boolean | undefined = (to as RouteLocationOptions).force
    // to could be a string where `replace` is a function
    const replace = (to as RouteLocationOptions).replace === true

    const shouldRedirect = handleRedirectRecord(targetLocation)

    if (shouldRedirect)
        return pushWithRedirect(
            assign(locationAsObject(shouldRedirect), {
                state: data,
                force,
                replace,
            }),
            // keep original redirectedFrom if it exists
            redirectedFrom || targetLocation
        )

    // if it was a redirect we already called `pushWithRedirect` above
    const toLocation = targetLocation as RouteLocationNormalized

    toLocation.redirectedFrom = redirectedFrom
    let failure: NavigationFailure | void | undefined

    if (!force && isSameRouteLocation(stringifyQuery, from, targetLocation)) {
        failure = createRouterError<NavigationFailure>(
            ErrorTypes.NAVIGATION_DUPLICATED,
            {to: toLocation, from}
        )
        // trigger scroll to allow scrolling to the same anchor
        handleScroll(
            from,
            from,
            // this is a push, the only way for it to be triggered from a
            // history.listen is with a redirect, which makes it become a push
            true,
            // This cannot be the first navigation because the initial location
            // cannot be manually navigated to
            false
        )
    }

    return (failure ? Promise.resolve(failure) : navigate(toLocation, from))
        .catch((error: NavigationFailure | NavigationRedirectError) =>
            isNavigationFailure(error)
                ? // navigation redirects still mark the router as ready
                isNavigationFailure(error, ErrorTypes.NAVIGATION_GUARD_REDIRECT)
                    ? error
                    : markAsReady(error) // also returns the error
                : // reject any unknown error
                triggerError(error, toLocation, from)
        )
        .then((failure: NavigationFailure | NavigationRedirectError | void) => {
            if (failure) {
                if (
                    isNavigationFailure(failure, ErrorTypes.NAVIGATION_GUARD_REDIRECT)
                ) {

                    return pushWithRedirect(
                        // keep options
                        assign(locationAsObject(failure.to), {
                            state: data,
                            force,
                            replace,
                        }),
                        // preserve the original redirectedFrom if any
                        redirectedFrom || toLocation
                    )
                }
            } else {
                // finalizeNavigation函数中执行 window.history 的　push / replace 方法
                // finalizeNavigation 内部调用 markAsReady 函数中监听了 window上的 popstate 事件
                failure = finalizeNavigation(
                    toLocation as RouteLocationNormalizedLoaded,
                    from,
                    true,
                    replace,
                    data
                )
            }
            // 执行 全局导航守卫 AfterEach 钩子函数
            triggerAfterEach(
                toLocation as RouteLocationNormalizedLoaded,
                from,
                failure
            )
            return failure
        })
}
```

### `router.navigate` 方法

`navigate` 执行导航守卫的方式是先构造 `guards` 数组，数组中每个元素都是一个返回 `Promise` 对象的函数,然后通过 `runGuardQueue` 去执行这些 `guards`

```ts
  function navigate(
    to: RouteLocationNormalized,
    from: RouteLocationNormalizedLoaded
): Promise<any> {
    let guards: Lazy<any>[]

    const [leavingRecords, updatingRecords, enteringRecords] =
        extractChangingRecords(to, from)

    // all components here have been resolved once because we are leaving
    // 路由导航从当前路由切换至下一个路由，提取当前组件中的 beforeRouterLeave 钩子函数
    guards = extractComponentsGuards(
        leavingRecords.reverse(),
        'beforeRouteLeave',
        to,
        from
    )

    // leavingRecords is already reversed
    for (const record of leavingRecords) {
        record.leaveGuards.forEach(guard => {
            guards.push(guardToPromiseFn(guard, to, from))
        })
    }

    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(
        null,
        to,
        from
    )

    guards.push(canceledNavigationCheck)

    // run the queue of per route beforeRouteLeave guards
    return (
        runGuardQueue(guards) // ① 调用 beforeRouteLeave 钩子函数
            .then(() => {
                // check global guards beforeEach
                guards = []
                for (const guard of beforeGuards.list()) { // ② beforeEach 钩子函数
                    guards.push(guardToPromiseFn(guard, to, from))
                }
                guards.push(canceledNavigationCheck)

                return runGuardQueue(guards)
            })
            .then(() => {
                // check in components beforeRouteUpdate
                guards = extractComponentsGuards(
                    updatingRecords,
                    'beforeRouteUpdate',
                    to,
                    from
                )

                for (const record of updatingRecords) {
                    record.updateGuards.forEach(guard => {
                        guards.push(guardToPromiseFn(guard, to, from))
                    })
                }
                guards.push(canceledNavigationCheck)

                // run the queue of per route beforeEnter guards
                return runGuardQueue(guards) // ③ 调用 beforeRouteUpdate 钩子函数
            })
            .then(() => {
                // check the route beforeEnter
                guards = []
                for (const record of to.matched) {
                    // do not trigger beforeEnter on reused views // ④ 路由独享的守卫： route上的beforeEnter钩子函数
                    if (record.beforeEnter && !from.matched.includes(record)) {
                        if (Array.isArray(record.beforeEnter)) {
                            for (const beforeEnter of record.beforeEnter)
                                guards.push(guardToPromiseFn(beforeEnter, to, from))
                        } else {
                            guards.push(guardToPromiseFn(record.beforeEnter, to, from))
                        }
                    }
                }
                guards.push(canceledNavigationCheck)

                // run the queue of per route beforeEnter guards
                return runGuardQueue(guards)
            })
            .then(() => {
                // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>

                // clear existing enterCallbacks, these are added by extractComponentsGuards
                to.matched.forEach(record => (record.enterCallbacks = {}))

                // check in-component beforeRouteEnter
                guards = extractComponentsGuards(
                    enteringRecords,
                    'beforeRouteEnter',
                    to,
                    from
                )
                guards.push(canceledNavigationCheck)

                // run the queue of per route beforeEnter guards
                return runGuardQueue(guards) // ⑤ beforeRouteEnter 钩子
            })
            .then(() => {
                // check global guards beforeResolve
                guards = []
                for (const guard of beforeResolveGuards.list()) { // ⑥ beforeResolve 路由守卫
                    guards.push(guardToPromiseFn(guard, to, from))
                }
                guards.push(canceledNavigationCheck)

                return runGuardQueue(guards)
            })
            // catch any navigation canceled
            .catch(err =>
                isNavigationFailure(err, ErrorTypes.NAVIGATION_CANCELLED)
                    ? err
                    : Promise.reject(err)
            )
    )
}
```

### `runGuardQueue`方法

`runGuardQueue` 通过数组的 `reduce` 方法，链式执行 `guard` 函数，每个 `guard` 函数都会返回一个 `Promise` 对象

```ts
/**
 *
 * @param guards
 * example: guards [ fn1, fn2 ]
 * promise.then( () => fn1() ).then( ()=> fn2() )
 */
function runGuardQueue(guards: Lazy<any>[]): Promise<void> {
    return guards.reduce(
        (promise, guard) => promise.then(() => guard()),
        Promise.resolve()
    )
}
```

### `guardToPromiseFn`方法

我们添加的导航守卫是一个普通函数，并不是一个返回 `Promise` 对象的函数，那是怎么做的呢？ 原来在把 `guard` 添加到 `guards` 数组前，都会执行 `guardToPromiseFn`
函数把普通函数 `Promise` 化 。`guardToPromiseFn` 函数返回一个新的函数，这个函数内部会执行 `guard` 函数。

这里我们要注意 `next` 方法的设计，当我们在导航守卫中执行 `next` 时，实际上就是执行这里定义的 `next` 函数。

在执行 `next` 函数时，如果不传参数，那么则直接 `resolve`，执行下一个导航守卫；如果参数是 `false`，则创建一个导航取消的错误 `reject` 出去；如果参数是一个 `Error` 实例，则直接执行
`reject`，并把错误传递出去；如果参数是一个路径对象，则创建一个导航重定向的错误传递出去。 有些时候我们写导航守卫不使用 `next` 函数，而是直接返回 `true` 或 `false`，这种情况则先执行如下代码：

`guardCall = Promise.resolve(guardReturn)`;

把导航守卫的返回值 `Promise` 化，然后再执行 `guardCall.then(next)`，把导航守卫的返回值传给 `next` 函数。 当然，如果你在导航守卫中定义了第三个参数 `next`
，但是你没有在函数中调用它，这种情况也会报警告。

`beforeRouteEnter` 导航守卫的 `next` 可以传入回调，当 `record` 存在的时候会给 `record` 上绑定 `enterCallbacks` 数组， 并将 `next` 回调函数 `push`
进去，并最终在 routerView 中通过 `watch` `[viewRef.value, matchedRouteRef.value, props.name]` 三个属性的变化来最终调用 `next`
的回调函数，并传入当前的 `instance` 实例

```ts
export function guardToPromiseFn(
    guard: NavigationGuard,
    to: RouteLocationNormalized,
    from: RouteLocationNormalizedLoaded
): () => Promise<void>
export function guardToPromiseFn(
    guard: NavigationGuard,
    to: RouteLocationNormalized,
    from: RouteLocationNormalizedLoaded,
    record: RouteRecordNormalized,
    name: string
): () => Promise<void>
export function guardToPromiseFn(
    guard: NavigationGuard,
    to: RouteLocationNormalized,
    from: RouteLocationNormalizedLoaded,
    record?: RouteRecordNormalized,
    name?: string
): () => Promise<void> {
    // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
    const enterCallbackArray =
        record &&
        // name is defined if record is because of the function overload
        // 注意这里，只有当 record 存在的时候才进行后续的赋值操作，给record上绑定 enterCallbacks 回调
        (record.enterCallbacks[name!] = record.enterCallbacks[name!] || [])

    return () =>
        new Promise((resolve, reject) => {
            const next: NavigationGuardNext = (
                valid?: boolean | RouteLocationRaw | NavigationGuardNextCallback | Error
            ) => {
                if (valid === false)
                    reject(
                        createRouterError<NavigationFailure>(
                            ErrorTypes.NAVIGATION_ABORTED,
                            {
                                from,
                                to,
                            }
                        )
                    )
                else if (valid instanceof Error) {
                    reject(valid)
                } else if (isRouteLocation(valid)) {
                    reject(
                        createRouterError<NavigationRedirectError>(
                            ErrorTypes.NAVIGATION_GUARD_REDIRECT,
                            {
                                from: to,
                                to: valid,
                            }
                        )
                    )
                } else {
                    if (
                        enterCallbackArray &&
                        // since enterCallbackArray is truthy, both record and name also are
                        record!.enterCallbacks[name!] === enterCallbackArray &&
                        typeof valid === 'function'
                    )
                        enterCallbackArray.push(valid)
                    resolve()
                }
            }

            // wrapping with Promise.resolve allows it to work with both async and sync guards
            const guardReturn = guard.call(
                record && record.instances[name!],
                to, from, next
            )
            let guardCall = Promise.resolve(guardReturn)

            if (guard.length < 3) guardCall = guardCall.then(next)
            guardCall.catch(err => reject(err))
        })
}
```

## reference

- [VueRouter4路由权重](https://sumygg.com/2021/05/11/vue-router-4-path-ranking/)
- [Path Ranking](https://reach.tech/router/ranking)
- [Path Ranker](https://paths.esm.dev/?p=AAMeJSyAwR4UbFDAFxAcAGAIJXMAAA..#)
- [VueRouter4 核心源码解读-上](https://boychina.github.io/posts/2021-01-26-vue3-core-source-code-26)
- [VueRouter4 核心源码解读-下](https://boychina.github.io/posts/2021-01-27-vue3-core-source-code-27)

