<template>
    <div>
        <!-- productlist -->
        <ul>
            <li v-for="(product, index) in products" :key="index">
               <!-- 原始数据 | 进行过滤 -->
                {{ product.title}} - {{ product.price | currency }}
                <br>
                <button :disabled="!product.inventory" @click="addProductToCart(product)">
                    Add to cart
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    data(){
        return {

        }
    },
    computed: mapState({
        // 读取状态
        products: state => state.products.all
    }),
    methods: mapActions([
        'addProductToCart'
    ]),
   created(){
       this.$store.dispatch('getAllProducts')
   }
}
</script>

<style>

</style>
