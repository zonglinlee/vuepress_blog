---
title: Typescript入门
---

## Ts须知

[typescript doc](https://www.typescriptlang.org/docs/)

### [类型关键字](https://juejin.cn/post/6844904131975446536)

- `extends` 用于扩展一个 `interface` 的类型，从而得到新的类型
- `keyof` 是TS中的索引类型查询操作符。`keyof T` 会得到由 `T` 上已知的公共属性名组成的联合类型
- 在 TS 中用于类型表达时，`typeof` 可以用于从一个变量上获取它的类型。
- `in` 操作符用于遍历目标类型的公开属性名。类似 `for .. in` 的机制。 从其用途看，我们很容易想到 `in` 可用于联合类型或者枚举类型

### [.d.ts VS declare](https://blog.csdn.net/qq_34551390/article/details/118800743)

- `.d.ts` 文件是ts用来声明`变量，模块，type，interface`等等的,在 `.d.ts` 声明变量或者模块等东西之后，在其他地方可以不用 import 导入这些东西就可以直接用, 但是也不是说创建了 `.d.ts` 文件，里面声明的东西就能生效了，毕竟归根到底也是 .ts 文件，需要预编译，所以需要在tsconfig.json文件里面的include数组里面添加这个文件
- `.d.ts` 文件中的顶级声明必须以 `"declare" 或 "export"` 修饰符开头。 通过 `declare` 声明的类型或者变量或者模块，在include包含的文件范围内，都可以直接引用而不用去 import 或者 import type 相应的变量或者类型