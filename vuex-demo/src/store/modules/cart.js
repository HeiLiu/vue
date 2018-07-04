const state ={
    items: [],
    checkoutStatus: null 
}
const actions ={
    addProductToCart({ state, commit}, product){
        // console.log(product);
        // 是否已经在购物车
        if(product.inventory > 0){
            const cartItem = state.items.find(item => product.id === item.id)
            if(!cartItem ){
                commit('pushProductToCart', { id: product.id })
            }else{
                commit('incrementItemQuantity', cartItem)
            }
            //  在添加到购物车里后，提交给pruducts进行相应数量减少、 commit 牛逼啊
            commit('decrementProductInventory', { id: product.id })
        }
    }
}
//  对state的计算或者处理
const getters ={
    // vuex store 是一颗树， 树根 
    //  可以基于其他的getters进行计算  rootState 代表全局
    cartProducts: (state, getters, rootState) =>{
        return state.items.map(({id, quantity})=>{
            const product = rootState.products.all.find(product => product.id === id);
            return {
                id: product.id,
                title: product.title,
                quantity,
                price: product.price
            }
        })
    },
    computedTotal: (state, getters)=>{
        return getters.cartProducts.reduce((total, product) => {
            return total + product.quantity * product.price
        }, 0);
    }
}
const mutations = {
    pushProductToCart(state, { id }){
        state.items.push({
            id: id,
            quantity: 1
        })
    },
    incrementItemQuantity(state, { id }){
        const cartItem = state.items.find(item => item.id === id )
        cartItem.quantity++
    }
}
export default {
    state,
    actions,
    getters,
    mutations
}