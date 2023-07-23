---
title: ts practice
---
- [what do "extends keyof" and "in keyof" mean?](https://stackoverflow.com/questions/57337598/in-typescript-what-do-extends-keyof-and-in-keyof-mean)
```ts
// https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
function invokeHandler<N extends keyof HTMLElementEventMap>(){}
```


```js
const contentTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

// 初始值为null，类型为函数，函数参数是一个 react Event, 函数返回类型为 void
let onWrapperClick: (e: React.SyntheticEvent) => void = null;

// 数组类型，数组元素类型为 React.key 或者一个对象
keys: (React.Key | { key: React.Key; [name: string]: any })[];
```
