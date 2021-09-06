---
home: true
title: 首页
# heroImage: /images/hero.png
homeTitle: Hello world!
actions:
  - text: 阿里云
    link: /aliyun/
    type: primary
  - text: Git
    link: /git/gitCommit.html
    type: primary
  - text: 微信
    link: /wechat/wechat_sdk.html
    type: primary
  - text: css
    link: /css/css_transition_animation.html
    type: primary
  - text: jsBasic
    link: /js_basic/js_module.html
    type: primary
  - text: js实践
    link: /js_practice/h5_image_upload.html
    type: primary
  - text: 杂项
    link: /others/github.html
    type: primary
features:
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue 驱动
    details: 享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。
footer: Hello-world!
---

### 像数 1, 2, 3 一样容易

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
# 在你的项目中安装
yarn add -D vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
yarn vuepress dev

# 构建静态文件
yarn vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
# 在你的项目中安装
npm install -D vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
npx vuepress dev

# 构建静态文件
npx vuepress build
```

  </CodeGroupItem>
</CodeGroup>
