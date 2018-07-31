import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex)

// Vuex 管理Vue大型項目中的数据流 小型项目不要用Vuex  
// Vue项目将分为两部分  
export default new Vuex.Store({
    modules : {
        products,
        cart
    }
})