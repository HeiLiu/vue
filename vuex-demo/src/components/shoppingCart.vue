<template>
    <div class="cart">
        <h2>my cart</h2>
        <p v-show="!products.length"><i>购物车空空如也</i></p>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.title }} - {{product.price | currency}} X {{product.quantity}}
            </li>
        </ul>
        <p>{{ total | currency}}</p>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapState({   // 展开后面的json对象 展开为计算属性的属性
        items: state => state.cart.items,
        checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters({
        products: 'cartProducts',
        total: 'computedTotal'
    })
    }

}
</script>

<style>

</style>
