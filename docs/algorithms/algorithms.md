---
title: algorithms
---

## [数组去重](https://ssshooter.com/2021-02-25-array-unique-performance/)

效率：哈希表 > `Set` >> `indexof+array` >> `indexof+filter`

### 哈希表方式

```js
function uniqueArray1(arr) {
    const map = {}
    const a = []
    for (let i = 0; i < arr.length; i++) {
        let v = arr[i]
        if (map[v]) continue
        else {
            map[v] = 1
            a.push(arr[i])
        }
    }
    return a
}
```

### indexOf

```js
function uniqueArray2(arr) {
    var a = []
    for (let i = 0; i < arr.length; i++) {
        if (a.indexOf(arr[i]) === -1 && arr[i] !== '') a.push(arr[i])
    }
    return a
}
```

### indexOf + filter

```js
function uniqueArray3(a) {
    return a.filter(function onlyUnique(value, index, self) {
        return self.indexOf(value) === index
    })
}
```

### new Set

```js
function uniqueArray4(a) {
    return [...new Set(a)]
}
```
