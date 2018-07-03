# Router

> router 常用API

- redirect   

```
 routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/dashboard',
      component: Dashboard,
      beforeEnter: (to, from, next)=>{
        // 路由上的钩子函数 在路由生成之前  
        // to 要去的 from 来处 next 接下来怎么办
      }
    }
  ]
```  
- $router
    this.$router.query 在url中的请求参数 
    this.$router.query.redirect 