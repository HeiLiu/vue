// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Goods from '@/components/goods'
import Ratings from '@/components/ratings'
import Seller from '@/components/seller'

// import './common/stylus/index.styl'

Vue.use(Router)
Vue.config.productionTip = false

const routes= [
  {
    path: '/',
    component: Goods
  },
  {
    path: '/goods',
    component: Goods
  },
  {
    path: '/ratings',
    component: Ratings
  },
  {
    path: '/seller',
    component: Seller
  }

]
const router = new Router({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
     App
    },
  template: '<App/>'
})
