import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters.js'

Vue.use(Vuex)

// lbs: location base service
const state = {
    latitude: '',
    longitude: '',
    cartList: {},
    userInfo: null,
    shopId: null,
    products: [],
    shopDetail: null
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})