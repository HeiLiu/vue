// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入elementUI
import ElementUI from 'element-ui'
// 导入element的样式
import "element-ui/lib/theme-chalk/index.css"

Vue.config.productionTip = false
// 使用一下ElementUI的组件
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
