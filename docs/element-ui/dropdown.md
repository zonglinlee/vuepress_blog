---
title: dropDown
---

### dropdown 组件部分层级展示

组件渲染顺序

- 父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
- 父beforeDestroy->子beforeDestroy->子destroyed->父destroyed

```text
el-scrollbar
    el-roving-focus-group                                                1#
        el-roving-focus-group-collection                                 2#
            el-roving-focus-group-impl                                   3#
                el-dropdown-collection                                   4#
                    el-dropdown-menu                                     5#
                        el-dropdown-item                                 6#
                            el-dropdown-collection-item                  7#
                                roving-focus-item                        8#
                                    el-roving-focus-collection-item      9#
                                        dropdown-item-impl               10#
```

组件说明

- 1#：仅仅是一个 wrapper , 将父级的 $attr 传给孙子级组件 el-roving-focus-group-impl
- 2#：ElCollection, 抽象逻辑组件, 向后代组件 provide: itemMap,getItems,collectionRef 这三个属性, 用来管理后代组件中的 items
- 3#：组合 elRovingFocusGroup 对象，并向后代组件 provide：elRovingFocusGroup 对象，在 5# 和 8# 中inject 相应的方法
- 4#：ElCollection， 抽象逻辑组件，向后代组件 provide: itemMap,getItems,collectionRef 这三个属性, 用来管理后代组件中的 items
- 5#：暴露给用户的子级组件（<ul></ul> 作为最终渲染的标签， ul 上绑定了 composeRefs 函数作为 ref, 最终将 ul dom 引用赋值给
  contentRef,dropdownCollectionRef,focusTrapRef,rovingFocusGroupRef,rovingFocusGroupCollectionRef）
- 6#：暴露给用户的子级组件
- 7#：ElCollectionItem, 抽象逻辑组件,对应 4# 中的祖先组件, 该组件会inject 4# 中的三个属性，并向后代组件中 provide: collectionItemRef,在 mounted 中会将
  collectionItemRef 收集至 itemMap
- 8#：provide: rovingFocusGroupItemRef
- 9#：ElCollectionItem, 对应 2# 中的祖先组件, 该组件会inject 4# 中的三个属性，并向后代组件中 provide: collectionItemRef,在 mounted 中会将
  collectionItemRef 收集至 itemMap
- 10#：这里对应 7# 8# 9#, 绑定最终 li dom 元素至 collectionItemRef:(
  dropdownCollectionItemRef/rovingFocusCollectionItemRef/rovingFocusGroupItemRef) （这里子级组件先 mounted, 然后父级组件再 mounted）
