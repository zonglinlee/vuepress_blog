import {h} from "snabbdom/h"  // h is commonly used to define virtual nodes. The h means hyperscript.

const initialState = {template: ''}

const createReducer = args => (acc, currentString, index) => {
    const currentArg = args[index];
    console.log(`currentString`,currentString)
    if (currentArg && currentArg.type === 'event') {
        return {...acc, on: {click: currentArg.click}}
    }
    return {
        ...acc,
        template: acc.template + currentString + (currentArg || "")
    }
}


const createElement = tagName => (strArr, ...args) => {
    const {template, on} = strArr.reduce(createReducer(args), initialState)
    return {
        type: "element",
        template: h(tagName, {on}, template)
    }
}


export const div = createElement('div')
export const p = createElement('p')
