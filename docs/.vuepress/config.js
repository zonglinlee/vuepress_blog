let myBase = process.env.NODE_ENV === 'github' ? '/vuepress_blog/' : '/'
const {SidebarConfig} = require('./sidebar')
const {navbarConfig} = require('./navbar')
const { copyCode }  = require("vuepress-plugin-copy-code2")
const {path} = require('@vuepress/utils')

module.exports = {
  title: 'Hello,tumbleweed!',
  description: '-',
  base:myBase,
  lang:'zh-CN',
  // 自定义header
  head: [
      ['link', { rel: 'icon', href: '/images/favicon_io/favicon-32x32.png' }],
      ['script', {  src: '/js/tailwind.css.js' }]
  ],
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: navbarConfig,
    sidebar:SidebarConfig,
    sidebarDepth: 2, // 最大值为2  可以提取到 h3
  },
  markdown: {
    toc: {
      level:[1, 2, 3, 4]
    }
  },
  plugins: [
    copyCode({}),
    [
        '@vuepress/register-components',
        {
            componentsDir: path.resolve(__dirname, './components'),
        },
    ],
    // [
    //   '@vuepress/docsearch',
    //   '@vuepress/plugin-docsearch',
    //   {
    //     apiKey: '<API_KEY>',
    //     indexName: '<INDEX_NAME>',
    //     locales: {
    //       '/': {
    //         placeholder: 'Search Documentation',
    //       },
    //       '/zh/': {
    //         placeholder: '搜索文档',
    //       },
    //     },
    //   },
    // ]
  ]
};
