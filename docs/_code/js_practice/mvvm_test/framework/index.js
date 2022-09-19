import * as snabbdom from "snabbdom"

const patch = snabbdom.init([
    require("snabbdom/modules/eventListeners").default
])

export const init = (selector, component) => {
    const app = document.querySelector(selector)
    patch(app, component.template)
}

let state = {}

export const createComponent = ({template, methods = {}, initialState = {}}) => props => {
    state = initialState
    let previous;
    const mappedMethods = Object.keys(methods).reduce((acc, key) => ({
        ...acc,
        [key]: (...args) => {
            state = methods[key](state, ...args) // 触发相应的事件监听函数, 生成新的 state
            const nextNode = template({...props, ...state, methods: mappedMethods}) // 生成新的 vnode
            patch(previous.template, nextNode.template) // 并 patch 到页面上
            previous = nextNode // 存储新生成的 vnode, 以便下次 patch
            return state
        }
    }), {})

    return props => {
        previous = template({...props, ...state, methods: mappedMethods})
        return previous
    }
}
