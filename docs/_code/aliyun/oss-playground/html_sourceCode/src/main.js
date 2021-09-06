import Vue from 'vue'
import App from './App.vue'
import axios from './api/config'
import router from "./router/index"

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
