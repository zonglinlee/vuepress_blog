---
title: element-table
---

## [`<colgroup>`元素](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup)

The `<colgroup>` HTML element defines a group of columns within a table. The `<colgroup>` HTML element defines a group
of columns within a table. the `<colgroup>` must appear after any optional `<caption>` element but before
any `<thead>, <th>, <tbody>, <tfoot> and <tr> ` element.

## Table元素初始化

`table` 组件由`TableHeader, TableFooter, TableBody` 三个子组件构成,在table组件data中通过`createStore`
创建了一个store对象，并将store作为props传递给了`TableHeader, TableFooter, TableBody` 三个子组件;此外table组件data中还维护了一个`layout`
对象，用来管理table组件的尺寸调节，layout对象中保存了对store对象的引用。

store 是通过 `Vue.extend` 创建的一个Vue实例，并且在store对象上挂载了对table组件实例的引用。在这里`Vue.extend`
创建的Vue实例内部维护了一组响应式数据，可以当做一个store来用, 并且store的 `prototype` 上挂载了一个 `mutations` 对象和一个 `commit` 方法，用来修改当前store内部的状态

```js
export function createStore(table, initialState = {}) {
  if (!table) {
    throw new Error('Table is required.');
  }
  const store = new Store();
  store.table = table;
  /**
   * .... 省略 ....
   */
  return store;
}
```

## table-column

tableColumn组件的computed属性中有个owner属性，它指向的是当前tableColumn组件所归属的父组件table实例

```text
owner(){
  let parent = this.$parent;
  while (parent && !parent.tableId) {
    parent = parent.$parent;
  }
  return parent;
}
```

tableColumn组件在mounted钩子中会调用store原型上的commit方法插入tableColumn组件，将所有挂载的tableColumn组件维护在`store.states._columns`
中，然后在`table-header`组件中使用

```js
owner.store.commit('insertColumn', this.columnConfig, columnIndex, this.isSubColumn ? parent.columnConfig : null);
```

### compose 函数
- `compose` 的参数是函数，返回的也是一个函数。
- 除了初始函数（最右侧的一个）外，其他函数的接收参数都是一个函数的返回值，所以**初始函数的参数可以是多元的**，**而其他函数的接收值是一元的。**
- `compose` 函数可以接收任意的参数，所有的参数都是函数，且执行方向为自右向左。初始函数一定要放到参数的最右侧。
```js
// https://github.com/reduxjs/redux/blob/master/src/compose.js
export function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
function fn1(a){}
function fn2(b){}
function fn3(c){}
compose(fn1,fn2,fn3) // 注意 compose 中函数执行的顺序是从右到左
```
