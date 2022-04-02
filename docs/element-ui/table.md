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

`tableColumn` 组件就是补全当前列的 `props`, 设置当前列单元格渲染 `render` 函数，设置 watch 监听各个 `props` 的变化，并在 `mounted` 的时候将当前列添加到 `el-table`
组件内部的 `store`上，在 `destroyed` 的时候将当前 `column` 从 `store` 中移除掉。

`tableColumn` 组件的 `computed` 属性中有个 `owner` 属性，它指向的是当前 `tableColumn` 组件所归属的父组件实例（可能是 `el-table` 或者 `el-table-column`,
存在多级表头的情况）

```text
owner(){
  let parent = this.$parent;
  while (parent && !parent.tableId) {
    parent = parent.$parent;
  }
  return parent;
}
```

`tableColumn` 组件在 `mounted` 钩子中会调用 `store` 原型上的 `commit` 方法插入 `tableColumn` 组件，将所有挂载的 `tableColumn`
组件维护在`store.states._columns` 中，然后在`table-header`组件中使用

```js
owner.store.commit('insertColumn', this.columnConfig, columnIndex, this.isSubColumn ? parent.columnConfig : null);
```

### 设置 `column` 初始属性

在 `table-column.js` 中 `created` 时，会进行 `column` 默认属性的补全，会调用 `compose`,从右项左依次执行

```js
const chains = compose(this.setColumnRenders, this.setColumnWidth, this.setColumnForcedProps);
column = chains(column);
this.columnConfig = column;
```

#### [compose 函数](https://github.com/reduxjs/redux/blob/master/src/compose.js)

- `compose` 的参数是函数，返回的也是一个函数。
- 除了初始函数（最右侧的一个）外，其他函数的接收参数都是一个函数的返回值，所以**初始函数的参数可以是多元的**，**而其他函数的接收值是一元的。**
- `compose` 函数可以接收任意的参数，所有的参数都是函数，且执行方向为自右向左。初始函数一定要放到参数的最右侧。

```js
export function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg;
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

function fn1(a) {
}

function fn2(b) {
}

function fn3(c) {
}

compose(fn1, fn2, fn3) // 注意 compose 中函数执行的顺序是从右到左
```

#### `setColumnRenders`

这个函数中主要是添加当前 `column` 的 `renderCell` 和 `renderHeader` 方法，用来实现当前列的单元格内容的渲染

默认的 `renderCell` 方法,是从路径上获取当前字段的值

`this.$scopedSlots.default` 是个函数, 它的ts类型是 `type ScopedSlot = (props: any) => ScopedSlotChildren`

```js
column.renderCell = (h, data) => {
    let children = null;
    if (this.$scopedSlots.default) {
        // 注意： 这里会将 data 作为 v-slot:default="data" 作为插槽 props 传入
        children = this.$scopedSlots.default(data);
    } else {
        // 默认情况下调用 getPropByPath 获取 value,默认情况下 children 是个 primitive value
        children = originRenderCell(h, data);
    }
    const prefix = treeCellPrefix(h, data);
    const props = {
        class: 'cell',
        style: {}
    };
    if (column.showOverflowTooltip) {
        props.class += ' el-tooltip';
        props.style = {width: (data.column.realWidth || data.column.width) - 1 + 'px'};
    }
    // 默认 renderCell 返回的 jsx
    return (<div {...props}>
        {prefix}
        {children}
    </div>);
};
```

给定一个多层嵌套对象，根据路径获取对应的值，[String.prototype.replace](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

```js
// 根据路径提取值
export function getPropByPath(obj, path, strict) {
    let tempObj = obj;
    // 将 obj[variable1] 转换成 obj.variable1 形式，方便 split
    // $1 是替换 第一个捕获组中的匹配内容的
    path = path.replace(/\[(\w+)\]/g, '.$1');
    // 将 . 开头的路径 移除起始位的 .
    path = path.replace(/^\./, '');

    let keyArr = path.split('.');
    let i = 0;
    for (let len = keyArr.length; i < len - 1; ++i) {
        if (!tempObj && !strict) break;
        let key = keyArr[i];
        if (key in tempObj) {
            tempObj = tempObj[key];
        } else {
            if (strict) {
                throw new Error('please transfer a valid prop path to form item!');
            }
            break;
        }
    }
    return {
        o: tempObj,
        k: keyArr[i],
        v: tempObj ? tempObj[keyArr[i]] : null
    };
};

```

#### `setColumnWidth`

这个步骤是为了标准化当前 `column` 上的`with` 属性，`table-column` 中有个计算属性 `realWidth`,如果 `el-column` 组件传入了 `width` 属性，则会将 `with`
进行 `parseInt` 转换为 `number`类型 赋给 `this.width 和 this.realWith`;如果没有传入 `width` 属性， 则 `with` 和 `realWith` 为 `undefined`;
如果没有传入 `minWidth` 属性，则设置默认 `minWith` 为 `80`。对于 `with` 和 `realWith` 为 `undefined`的列，最后会被当作弹性列 `flexColumns`,会给它们分配剩余空间

## table-header

### vue内置方法`this._l`

`this._l` 是 `vue` 框架中的遍历方法（`Runtime helper for rendering v-for lists`） 返回值是 `Array<VNode>`,这个方法存在于

`vue/src/core/instance/render-helpers/render-list.js （vue version 2.6）`

它接收两个参数 第一个是要渲染的 对象 ，第二个参数是一个 `render` 函数

```ts
export function renderList(
    val: any,
    render: (
        val: any,
        keyOrIndex: string | number,
        index?: number
    ) => VNode
): ?Array<VNode> {
    let ret: ?Array<VNode>, i, l, keys, key
    if (Array.isArray(val) || typeof val === 'string') {
        ret = new Array(val.length)
        for (i = 0, l = val.length; i < l; i++) {
            ret[i] = render(val[i], i)
        }
    } else if (typeof val === 'number') {
        ret = new Array(val)
        for (i = 0; i < val; i++) {
            ret[i] = render(i + 1, i)
        }
    } else if (isObject(val)) {
        if (hasSymbol && val[Symbol.iterator]) {
            ret = []
            const iterator: Iterator<any> = val[Symbol.iterator]()
            let result = iterator.next()
            while (!result.done) {
                ret.push(render(result.value, ret.length))
                result = iterator.next()
            }
        } else {
            keys = Object.keys(val)
            ret = new Array(keys.length)
            for (i = 0, l = keys.length; i < l; i++) {
                key = keys[i]
                ret[i] = render(val[key], key, i)
            }
        }
    }
    if (!isDef(ret)) {
        ret = []
    }
    // (ret: any)._isVList = true
    return ret
}
```
