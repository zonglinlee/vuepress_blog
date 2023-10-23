---
title: react
---

## react api

### useCallback

`React.useCallback(fn, dependencies)` : 缓存传入的 **fn** 函数，并不会调用 **fn**

### [Adding a Ref to a Class Component](https://legacy.reactjs.org/docs/refs-and-the-dom.html#adding-a-ref-to-a-class-component)

using ref to reference a class component instance

```tsx
// 这里的 ref 引用的是 AutoFocusTextInput 实例
class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }

  componentDidMount() {
    this.textInput.current.focusTextInput()
  }

  render() {
    return <CustomTextInput ref={this.textInput} />
  }
}
```

But you may not use the ref attribute on function components because they don’t have instances.

If you want to allow people to take a ref to your **function component**, you can use `forwardRef` (possibly in
conjunction with `useImperativeHandle`), or you can **convert** the component to a **class**.

You can, however, use the ref attribute inside a function component as long as you refer to a **DOM element** or a **
class component**:

### forwardRef

`React.forwardRef((props,ref)=>{return ReactComponent})` : lets your component expose a DOM node to parent component
with a `ref`.
`forwardRef` accepts a render function as an argument. React calls this function with props and `ref`
`forwardRef` returns a React component,a component returned by forwardRef is also able to receive a ref prop,使用这个返回的
component 时候，传入 ref prop 即可。

- ref object

```tsx
const myRef = useRef(null);
<div ref={myRef}>
```

- ref callback

```tsx
<div ref={(node) => console.log(node)} />
```

#### [useRef() Hook on a custom component](https://stackoverflow.com/questions/61192450/useref-hook-on-a-custom-component)

On custom components, ref needs to be **forwarded**.
This is because `ref` is (usually) a reference to a DOM element. A React Component can renders multiple DOM element, so
you need to be explicit about where the ref should be assigned to.

```tsx
const salesRef = useRef(null)
return <Sales ref={salesRef} />

// inside Sales.js
// assigns the ref to an actual DOM element, the div
const Sales = (props, ref) => <div ref={ref}></div>

export default React.forwardRef(Sales)
```

When the `<div>` DOM node is added to the screen, React will call your `ref` callback with the DOM node as the argument.
When that `<div>` DOM node is removed, React will call your ref callback with `null`.

### [useLayoutEffect](https://react.dev/reference/react/useLayoutEffect)

is a version of `useEffect` that fires before the browser repaints the screen.

React guarantees that the code inside `useLayoutEffect` and any state updates scheduled inside it will be processed
before
the browser repaints the screen. This lets you render the tooltip, measure it, and re-render the tooltip again without
the user noticing the first extra render. In other words, useLayoutEffect **blocks** the browser from painting

### [React elements vs React nodes](https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement)

- A ReactElement is an object with a type and props
- A ReactNode is a ReactElement, a ReactFragment, a string, a number or an array of ReactNodes, or null, or undefined,
  or a boolean

`React.isValidElement` checks whether the argument is a `React element`, not whether it’s a `React node`.

### [useMemo vs useCallback](https://react.dev/reference/react/useCallback#how-is-usecallback-related-to-usememo)

- `useMemo` caches the result of calling your function.

- `useCallback` caches the function itself. Unlike `useMemo`, it does not call the function you provide.

### [react lifecycle vs hooks](https://retool.com/blog/the-react-lifecycle-methods-and-hooks-explained/)

React has four built-in methods that gets called, in this order, when mounting a component:

- `constructor()`
- `getDerivedStateFromProps()`
- `render()`
- `componentDidMount()`

The render() method is required and will always be called, the others are optional and will be called if you define
them.

React has five built-in methods that gets called, in this order, when a component is updated:

- `getDerivedStateFromProps()`
- `shouldComponentUpdate()`
- `render()`
- `getSnapshotBeforeUpdate()`
- `componentDidUpdate()`

The `render()` method is required and will always be called, the others are optional and will be called if you define
them

- `componentDidMount`: React will call it when your component is added (mounted) to the screen
- `componentDidUpdate`: component re-renders due to changed props or state.
- `componentWillUnmount`: component has been removed (unmounted) from the screen.

![react 生命周期](../images/front-end/react_lifecycle.jpg)

in development when **Strict Mode** is on, React will call componentDidMount, immediately call componentWillUnmount, and
then call componentDidMount again.

#### hooks lifecycle

- `useEffect(setup, dependencies?)`

The `useEffect` hook works similarly to the three lifecycle methods: `componentDidMount`, `componentDidUpdate`,
and `componentWillUnmount`.

when the dependencies array is empty, the setup function only get called once; it works similarly to `componentDidMount`
;

if the dependencies isn't empty,
everytime when the dependencies changed, the setup function get called, it works similarly to `componentDidUpdate`;

useEffect will return a **fn** which will automatically get called when the component unmount, it works similarly
to `componentWillUnmount`

#### [useEffect 和 useLayoutEffect 的区别](https://pengfeixc.com/blog/605af93600f1525af762a725)

`useEffect` 是异步执行，而 `useLayoutEffect` 是同步执行的
当函数组件刷新（渲染）时，包含 useEffect 的组件整个运行过程如下

- 触发组件重新渲染（通过改变组件 state 或者组件的父组件重新渲染，导致子节点渲染）。
- 组件函数执行。
- 组件渲染后呈现到屏幕上。
- useEffect hook 执行。

当函数组件刷新（渲染）时，包含 `useLayoutEffect` 的组件整个运行过程如下：

- 触发组件重新渲染（通过改变组件 state 或者组件的父组件重新渲染，导致子组件渲染）。
- 组件函数执行。
- useLayoutEffect hook 执行, React 等待 useLayoutEffect 的函数执行完毕。
- 组件渲染后呈现到屏幕上。

`useEffect` 异步执行的优点是，react 渲染组件不必等待 `useEffect` 函数执行完毕，造成阻塞.百分之 99 的情况，使用 `useEffect` 就可以了，唯一需要用到 `useLayoutEffect`
的情况就是，在使用
`useEffect` 的情况下，我们的屏幕会出现闪烁的情况（组件在很短的时间内渲染了两次）

```tsx
// 下面的代码，组件就会渲染两次
const OnlyTest = () => {
  const [value, setValue] = useState(0)
  const mountedRef = useRef(false)
  useEffect(() => {
    // useLayoutEffect(() => {
    if (!mountedRef.current) {
      console.log('first mount')
      mountedRef.current = true
    }
    console.log('useEffect_callback_trigger')
    if (value === 0) {
      setValue(10 + +Math.random().toFixed(2))
    }
  }, [value])
  return (
    <div
      onClick={() => {
        console.log('onClick_trigger')
        setValue(0)
      }}
      style={{
        width: '100px',
        background: 'green',
        textAlign: 'center',
        color: 'white',
        padding: '4px',
        cursor: 'pointer',
      }}
    >
      value:{value}
    </div>
  )
}
```

#### [check components mounted status](https://jasonwatmore.com/post/2021/08/27/react-how-to-check-if-a-component-is-mounted-or-unmounted)

```tsx
import React, { useEffect, useRef } from 'react'

export { ExampleComponent }

function ExampleComponent() {
  const mounted = useRef(false)

  useEffect(() => {
    // The useEffect() hook is called when the component is mounted and sets the mounted.current value to true
    mounted.current = true
    // clean up
    return () => {
      mounted.current = false
    }
  }, [])

  return <MyComponent />
}
```

### [React.useImperativeHandle(ref, createHandle, dependencies?)](https://react.dev/reference/react/useImperativeHandle)

`useImperativeHandle` is a React Hook that lets you customize the handle exposed as a `ref`
Parameters

- The `ref` you received as the second argument from the `forwardRef` render function.
- createHandle: A function that takes no arguments and returns the ref handle you want to expose. That ref handle can
  have any type. Usually, you will return an object with the methods you want to expose.

```tsx
// expose custom methods that you want to expose to parent components
// in other words ,parent ref not has full access to dom element
// forwardref is no longer bind to dom element, instead, create a new ref in MyInput component,bind it to actual dom element
import { forwardRef, useRef, useImperativeHandle } from 'react'

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus()
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView()
        },
      }
    },
    []
  )

  return <input {...props} ref={inputRef} />
})
```

### [React.memo(Component, arePropsEqual?)](https://react.dev/reference/react/memo)

- arePropsEqual: A function that accepts two arguments: the component’s previous props, and its new props. It should
  return true if the old and new props are equal: that is, if the component will render the same output and behave in
  the same way with the new props as with the old. Otherwise it should return false. Usually, you will not specify this
  function. By default, React will compare each prop with Object.is

Wrap a component in memo to get a memoized version of that component. This memoized version of your component will
usually not be re-rendered when its parent component is re-rendered as long as its props have not changed

### [ReactDOM.createPortal(children, domNode, key?)](https://react.dev/reference/react-dom/createPortal)

createPortal lets you render some children into a different part of the DOM. createPortal returns a React node that can
be included into JSX or returned from a React component

- children: Anything that can be rendered with React, such as a piece of JSX (e.g. `<div />` or `<SomeComponent />`), a
  Fragment (`<>...</>`), a string or a number, or an array of these
- domNode: Some DOM node, such as those returned by `document.getElementById()`. The node must already exist. Passing a
  different DOM node during an update will cause the portal content to be recreated.

- optional key: A unique string or number to be used as the portal’s key.

### setState(nextState, callback?)

nextState: Either an object or a function.

- If you pass an object as nextState, it will be shallowly merged into this.state.
- If you pass a function as nextState, it will be treated as an updater function. It must be pure, should take the
  pending state and props as arguments, and should return the object to be shallowly merged into this.state. React will
  put your updater function in a queue and re-render your component. During the next render, React will calculate the
  next state by applying all of the queued updaters to the previous state.

### [findDOMNode](https://react.dev/reference/react-dom/findDOMNode)

Call `findDOMNode` to find the browser DOM node for a given React class component instance.

```tsx
import { findDOMNode } from 'react-dom'

const domNode = findDOMNode(componentInstance)
```

## react util

- useId: 返回全局的 id,兼容了 `React.useId` api
- render: 兼容了 react 各个版本的 React.createRoot().render() 方法

## react transition

### rc-motion (ant-design base component)

如下当切换 `show:true` 的时候，CSSMotion 组件会将 `.fade .fade-appear .fade-enter .fade-enter-active` 等 class 应用于 div 元素;
如下当切换 `show:false` 的时候，CSSMotion 组件会将 `.fade .fade-leave-active` 等 class 应用于 div 元素;

js 会在浏览器每帧之间添加和移除这些 `class` 类，浏览器会根据相应的 css 样式在两个 css 状态之间展示过渡动画，过渡动画的效果以及时间完全由 css 样式和 `css transition` 属性决定，`CSSMotion`组件只是在适当的时间进行添加和移除 class 类

```jsx
<CSSMotion motionName="fade" visible={show} removeOnLeave>
  {({ style, className: motionClassName }) => {
    return (
      <div style={{ ...style }} className={classNames('card', motionClassName)}>
        rc-motion
      </div>
    )
  }}
</CSSMotion>
```

```scss
.card {
  border: 1px solid green;
  border-radius: 8px;
  text-align: center;
  line-height: 100px;
  height: 100px;
  transition: 1s;
}

.fade {
  &.fade-appear,
  &.fade-enter {
    opacity: 0;
  }

  &.fade-appear.fade-appear-active,
  &.fade-enter.fade-enter-active {
    opacity: 1;
  }

  &.fade-leave-active {
    background: green;
    opacity: 0;
  }
}
```
