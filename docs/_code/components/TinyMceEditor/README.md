此组件为 Vue3 富文本组件,使用的是 tinymce v6

- [oxide-icon-pack-template](https://github.com/tinymce/oxide-icon-pack-template)是一个自定义 富文本工具栏按钮的附属项目
  ,[参考自定义 icon](https://www.tiny.cloud/docs/tinymce/6/creating-an-icon-pack/),使用 SVGO 对svg图片进行了压缩
- 需要引入以下依赖

```text
    "@tinymce/tinymce-vue": "^5.1.1",
    "@types/tinymce": "^4.6.9",
```

- 组件使用的时候需要将 tinymce 文件夹下的内容公共目录下，因为 `TinyMceEditor.vue` 组件中需要传入 tinymce 的入口
- 富文本中引入了导入word文档的插件，word中的图片会自动传入到后台

