let myBase = process.env.NODE_ENV === 'github' ? '/vuepress_blog/' : '/'
const {SidebarConfig} = require('./sidebar')
const {navbarConfig} = require('./navbar')

module.exports = {
  title: 'Hello,tumbleweed!',
  // description: '风滚草的个人博客',
  base:myBase,
  lang:'zh-CN',
  // 自定义header
  head: [['link', { rel: 'icon', href: '/images/favicon_io/favicon-32x32.png' }]],
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: navbarConfig,
    sidebar:SidebarConfig,
    sidebarDepth: 4
  },
  markdown: {
    toc: {
      level:[1, 2, 3, 4]
    }
  },
  plugins: [
    // ['@vuepress/plugin-debug']
    // [
    //   "@mr-hope/copy-code", {},
    // ],
  ]
};
