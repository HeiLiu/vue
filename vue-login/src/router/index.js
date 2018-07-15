import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import NotFound from '@/components/404'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 服务器端在客户端种下的cookie token
  let token = localStorage.getItem('token')
  if (to.meta.requireAuth) {
    if (token) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          redircet: to.fullPath
        }
      })
    }
  }
  next()
})
export default router
