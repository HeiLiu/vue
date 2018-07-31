import Vue from 'vue'
import Router from 'vue-router'
const home = ()=> import('@/pages/home')
const login = () => import('@/pages/login')
const city = () => import('@/pages/city')
const msite = () => import('@/pages/msite')
// import home from '@/page/home'
// lazyload

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },{
      path: '/home',
      component: home
    },{
      path: '/login',
      component: login,
      meta: {
        keepalive: true
      }
    },{
      path: '/city/:cityid',    // 动态路由 
      component: city
    },{
      path: '/msite',
      component: msite
    }
  ]
})
