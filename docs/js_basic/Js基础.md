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
