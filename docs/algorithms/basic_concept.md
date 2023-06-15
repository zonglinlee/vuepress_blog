---
title: terminology
---

## terminology

- [BloomFilter-布隆过滤](https://zhuanlan.zhihu.com/p/43263751)
- [Disjoint-set/union–find-set/merge–find-set | 并查集](https://oi-wiki.org/ds/dsu/)
- [javascript 数组 sort](https://dev.to/swasdev4511/sorting-in-javascript-how-it-works--1cb)

```js
const arr = [1, 9, 5, 2]
// 这个就是升序排列， 当 sortFun 返回值大于 0 时候就是升序
arr.sort((a, b) => {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
})
// 简写如下
arr.sort((a, b) => a - b)
```


