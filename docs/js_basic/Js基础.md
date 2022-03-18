---
title: js基础
---

## [`Object.create(null)`](https://stackoverflow.com/questions/15518328/is-creating-js-object-with-object-createnull-the-same-as)

A javascript object inherits from `Object` by default, unless you explicitly create it with `null` as its `prototype`,
like: `Object.create(null)`.
`{}` would instead be equivalent to `Object.create(Object.prototype)`. In Chrome Devtool you can see
that `Object.create(null)` has no `__proto__` property, while `{}` does.

## [class](https://zh.javascript.info/class)

类初始化过程

- 创建一个名为 `User` 的函数，该函数成为类声明的结果。该函数的代码来自于 `constructor` 方法（如果我们不编写这种方法，那么它就被假定为空）。
- 原型方法用于继承：存储类中的方法，例如 `User.prototype` 中的 `sayName`。
- 为每个实例创建的方法，原型链中不存在，使用箭头函数书写，可以防止 `this` 丢失的问题,例如 `sayAge` 方法.在这里对于每一个 `User` 对象都有一个独立的方法，在内部都有一个指向此对象的 `this`
- 为每个实例创建 `类字段` 属性,存在于该实例上，原型链中不存在

```js
class User {
    constructor(name) {
        this.name = name;
    }

    // 类字段”是一种允许添加任何属性的语法
    age = 22

    sayName() {
        alert(this.name);
    }

    sayAge() {
        alert(this.age);
    }

    // 计算属性名称
    ['say' + 'Hi']() {
        alert("Hello");
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }
}

```

## Nullish coalescing operator (??)

The nullish coalescing operator (`??`) is a logical operator that returns its right-hand side operand when its left-hand
side operand is `null` or `undefined`, and otherwise returns its left-hand side operand.

```js
const foo = null ?? 'default string'; // expected output: "default string"
const baz = 0 ?? 42; // expected output: 0
```

## 数字转化，一元运算符 `+`

一元运算符加号，或者说，加号 + 应用于单个值，对数字没有任何作用。但是如果运算元不是数字，加号 + 则会将其转化为数字。它的效果和 `Number(...)` 相同，但是更加简短。

```js
// 转化非数字
alert(+true); // 1
alert(+"");   // 0
let apples = "2";
let oranges = "3";
alert(+apples + +oranges); // 5
```

## [赋值 `=` 运算符](https://zh.javascript.info/operators#fu-zhi-fan-hui-yi-ge-zhi)

在 JavaScript 中，所有运算符都会返回一个值。这对于 `+` 和 `-` 来说是显而易见的，但对于 `=` 来说也是如此。 语句 `x = value` 将值 `value` 写入 `x` 然后返回 `x`。

```js
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
alert(a); // 3
alert(c); // 0
```

## [逗号运算符](https://zh.javascript.info/operators#dou-hao-yun-suan-fu)

逗号运算符能让我们处理多个语句，使用 , 将它们分开。每个语句都运行了，但是只有最后的语句的结果会被返回。 请注意逗号运算符的优先级非常低，比 `=` 还要低，因此下面的例子中圆括号非常重要。

```js
let a = (1 + 2, 3 + 4);
alert(a); // 7（3 + 4 的结果）

// 有时候，人们会使用它把几个行为放在一行上来进行复杂的运算。
for (a = 1, b = 3, c = a * b; a < 10; a++) {
// ...
}
```
