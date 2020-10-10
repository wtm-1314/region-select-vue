import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入首页
import Home from '../view/home.vue'

const routes=[{
path:'/',
name:'home',
component:Home
}]
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//         return originalPush.call(this, location).catch(err => err)
//     }

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router