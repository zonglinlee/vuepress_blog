---
title: el-dialog
---

## PopupManager
element 中有一个 `PopupManager` 专门用来管理弹框，在 `src/utils/popup/index.js` 中导出了 mixin形式的 PopupManager 和全局公用的 PopupManager 方法, 分别用于组件mixin和全局状态管理.

```js
  // 在 mixin PopupManager中会将当前 dialog 组件注册到 全局 PopupManager,关联当前dialog组件和 PopupManager
  beforeMount() {
    this._popupId = 'popup-' + idSeed++;
    PopupManager.register(this._popupId, this);
  }
```
当dialog传入的属性 `visible` 变化时，会显示和隐藏dialog，dialog的遮罩层由 PopupManager 独自维护 
```js
      visible(val) { // watch中监听 visible 属性，打开/关闭弹框
        if (val) {
          this.closed = false;
          this.$emit('open'); // 触发自定义事件 即传入 el-dialog  @open=handler (Dialog 打开的回调)
          this.$el.addEventListener('scroll', this.updatePopper);  // 当滚动的时候更新 ElSelectDropdown组件 和 ElDropdownMenu组件下拉的位置
          this.$nextTick(() => {
            this.$refs.dialog.scrollTop = 0;
          });
          if (this.appendToBody) {
            document.body.appendChild(this.$el); // 将dialog 组件的 dom 挂载到 body上 
          }
        } else {
          this.$el.removeEventListener('scroll', this.updatePopper);
          if (!this.closed) this.$emit('close'); // 触发自定义事件 @close
          if (this.destroyOnClose) {
            this.$nextTick(() => {
              this.key++;
            });
          }
        }
      }
```
添加遮罩层 并将遮罩层加入 modalStack 中进行管理
```js
  openModal: function(id, zIndex, dom, modalClass, modalFade) {
    if (Vue.prototype.$isServer) return;
    if (!id || zIndex === undefined) return;
    this.modalFade = modalFade;

    const modalStack = this.modalStack; // 遮罩层栈

    for (let i = 0, j = modalStack.length; i < j; i++) {
      const item = modalStack[i];
      if (item.id === id) {
        return;
      }
    }

    const modalDom = getModal();

    addClass(modalDom, 'v-modal');
    if (this.modalFade && !hasModal) {
      addClass(modalDom, 'v-modal-enter');
    }
    if (modalClass) {
      let classArr = modalClass.trim().split(/\s+/);
      classArr.forEach(item => addClass(modalDom, item));
    }
    setTimeout(() => {
      removeClass(modalDom, 'v-modal-enter');
    }, 200);
    // 为 popup 添加遮罩
    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modalDom);
    } else {
      document.body.appendChild(modalDom);
    }

    if (zIndex) {
      modalDom.style.zIndex = zIndex;
    }
    modalDom.tabIndex = 0;
    modalDom.style.display = '';
    this.modalStack.push({ id: id, zIndex: zIndex, modalClass: modalClass });
  }
```
