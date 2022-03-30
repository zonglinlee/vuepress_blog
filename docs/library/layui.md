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
