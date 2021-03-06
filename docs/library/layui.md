---
title: layUi 踩坑
---

## layUi radio 必填校验

如下所示,当 `twins` 字段不给默认值，此时两个 `radio` 均是未选中状态，提交 `form` 表单，默认 `required` 会通过校验，而且 `form.field` 会忽略 `twins` 字段，提交的时候不收集该字段

```html

<div class="layui-form-item">
    <label class="layui-form-label">是否双(多)胞胎：</label>
    <div class="layui-input-block" id="twins">
        <input type="radio" class="twins" name="twins" value="1" lay-verify="required" lay-filter="twins" title="是"/>
        <input type="radio" class="twins" name="twins" value="0" lay-verify="required" lay-filter="twins" title="否"/>
    </div>
</div>
```

解决方法：将 `lay-verify="required"` 替换成 自定义 校验 `lay-verify = "radioRequired"`

```js
function radioRequired(value, item) {
    let verifyName = $(item).attr('name')
        , verifyType = $(item).attr('type')
        , formElem = $(item).parents('.layui-form')//获取当前所在的form元素，如果存在的话
        , verifyElem = formElem.find("input[name='" + verifyName + "']")//获取需要校验的元素
        , isTrue = verifyElem.is(':checked')//是否命中校验
        , focusElem = verifyElem.next().find('i.layui-icon');//焦点元素
    if (!isTrue || !value) {
        //定位焦点
        focusElem.css(verifyType == 'radio' ? {"color": "#FF5722"} : {"border-color": "#FF5722"});
        //对非输入框设置焦点
        focusElem.first().attr("tabIndex", "1").css("outline", "0").blur(function () {
            focusElem.css(verifyType == 'radio' ? {"color": ""} : {"border-color": ""});
        }).focus();
        return '必填项不能为空';
    }
}
```

## [`layui radio` 不能通过 js 触发事件](https://blog.csdn.net/qq_33769914/article/details/104770125)

`layui` 对 `radio和select` 组件做过包装处理，直接选中 `input和select` 元素通过 `click()` 触发是不生效的， 对于 `radio` 应该选中当前 `radio相应的input元素`
的下一个 `class="layui-form-radio"` 的 `div` 元素,在这个 div 上面触发 `click()`, 此时会触发 `form.on(radio(radio-filter),callback)`
中的 `callback` 函数

```js
const radioElement = $(layero).find('input.none-standard-radio[name="addressStandard"]')
radioElement.next('.layui-form-radio').trigger('click')
```

## `layui-select` 自动触发 `(select(filter),callback)` 中的 `callback`

layui 源码中就是监听的是 `dd` 上的 `click` 事件，如下所示 `liveTypeEle` 为当前的 `select` 元素，需要选中 `dl` 中的 `dd` 元素才可以触发事件

```js
function setDefaultValue(layero) {
    let liveTypeEle = layero ? $(layero).find('select[name="livetype"]') : $('select[name="livetype"]')
    liveTypeEle.val('1') // 这个要加上 否则有很奇怪的 bug
    liveTypeEle.next().find('dl dd[lay-value="1"]').trigger('click')
    liveTypeEle.attr('disabled', true)
    form.render()
}
```

## layer.load不生效

`layer.load` 在同步 `ajax` 请求中不生效，异步 `Ajax` 才生效
