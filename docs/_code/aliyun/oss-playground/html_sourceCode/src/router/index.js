import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const upload1 = () => import("../components/Upload.vue")
const upload2 = () => import("../components/Uploadd.vue")
const routes = [
    { path: '', redirect: '/upload1' },
    { path: '/upload1', component: upload1 },
    { path: '/upload2', component: upload2 }
]


export default new VueRouter({
    routes
})