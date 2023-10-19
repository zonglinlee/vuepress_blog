let myBase = process.env.NODE_ENV === 'github' ? '/vuepress_blog/' : '/'
import { SidebarConfig } from './sidebar'
import { navbarConfig } from './navbar'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
import { path } from '@vuepress/utils'
import fullTextSearchPlugin from 'vuepress-plugin-full-text-search2'
import { defaultTheme } from '@vuepress/theme-default'
export default {
  title: 'Hello,tumbleweed!',
  description: '-',
  base: myBase,
  lang: 'zh-CN',
  // 自定义header
  head: [
    ['link', { rel: 'icon', href: '/images/favicon_io/favicon-32x32.png' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googlefonts.cn/css?family=Merriweather',
      },
    ],
    ['script', { src: myBase + 'js/baiduAnalysis.js' }],
    // ['script', {  src: myBase + 'js/tailwind.css.js' }]
  ],
  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
    navbar: navbarConfig,
    sidebar: SidebarConfig,
    sidebarDepth: 2, // 最大值为2  可以提取到 h3
  }),

  markdown: {
    toc: {
      level: [1, 2, 3, 4],
    },
  },
  plugins: [
    copyCodePlugin({}),
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
    fullTextSearchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
}
