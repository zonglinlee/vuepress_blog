import {div} from "../framework/element";
import {onClick} from "../framework/event";
import {createComponent} from "../framework";

const methods = {
    // methods 返回新的 state,然后通过新的 state 渲染生成新的 vnode
    changeName: (state, firstName) => ({...state, firstName})
}

const template = ({
                      firstName,
                      secondName,
                      methods
                  }) => div`${onClick(() => methods.changeName("Mr_White"))}Hello ${firstName} ${secondName} !`


export const User = createComponent({
    template,
    methods,
    initialState: {firstName:'lee', secondName:'tumbleweed'}
})
