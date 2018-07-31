import shop from '../../api/shop'

//  Store 里面的一间库房
// actions 搬运  动作=> 由请求触发  搬----> state 状态数据  -----> 通过getters 获取状态
// mutation 改变  会计？ 进行记录
const state ={
    all: []
}
const getters = {}
const actions = {
    getAllProducts ({ commit}){
        console.log('货车出发去拉货啦')
        shop.getProducts(products =>{
            console.log('拉货回来啦');
            commit('setProducts', products)
        })
    }

}
const mutations ={
    setProducts(state, products){
        console.log('验收入库啦')
        state.all = products
    },
    decrementProductInventory (state, { id }) {
        const product = state.all.find( product => product.id === id );
        product.inventory--
    }
}
export default {
    state,      // 状态 数据储存在此
    getters,
    actions,    // 搬运工
    mutations
}