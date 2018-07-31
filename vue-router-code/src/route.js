import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Foo from '@/views/Foo'
Vue.use(VueRouter); // 安装或使用这个插件
const router = new VueRouter({
    // 路由管理
    mode: 'history',
    routes: [{
      path: '/',
      component: Home
    },{
      path: '/foo',
      component: Foo
    }]
})

export default router