import { defineClientConfig } from '@vuepress/client'
import CssCenter from './components/CssCenter.vue'
import CssLayout from './components/CssLayout.vue'
import titleDivider from './components/titleDivider.vue'
import AuthenticationProvider from './components/AuthenticationProvider.vue'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        // 全局注册组件
        app.component('CssCenter', CssCenter)
        app.component('CssLayout', CssLayout)
        app.component('titleDivider', titleDivider)
        app.component('AuthenticationProvider', AuthenticationProvider)
    },
})
