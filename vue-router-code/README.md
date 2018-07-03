# vue-router-code

> A Vue.js project

## Vue   

Vue 用于开发SPA(single Page Application), 路由接管一切  
页面/Views 跟路由 route url 相匹配  

- router-link  
 取代 a标签 VueRouter提供的组件  
Vue.use(VueRouter) 时将一些组件注册为全局组件

- route  

 > 前端路由 区分由ngnix apache 等配置的后端路由      

前端路由解决的是SPA  
核心： 切换url，页面不刷新    

**模式：**  
- 一、路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
    history API(html5) pushState() onPopState() 移除之前的组件， 更新新的组件  
        它的格式和传统的后端url是一样的 localhost:8080/foo  
    缺点： 兼容性  

- 二、 hash 模式  
    在url后面加锚点，兼容到ie8，同样可以得到事件

