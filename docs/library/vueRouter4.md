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

### ref

### routerLink组件

routerLink默认渲染成为一个 `a` 标签，并添加了 `click`事件，点击触发 `link.navigate` 方法，会调用 `router` 对象的 `router.replace` 或者 `router.push`,
最终调用的是浏览器history对象的replaceState 或者 pushState,这会导致浏览器的url改变

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

- [VueRouter4路由权重](https://sumygg.com/2021/05/11/vue-router-4-path-ranking/)
- [Path Ranking](https://reach.tech/router/ranking)
- [Path Ranker](https://paths.esm.dev/?p=AAMeJSyAwR4UbFDAFxAcAGAIJXMAAA..#)
