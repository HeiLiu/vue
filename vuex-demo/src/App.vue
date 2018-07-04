<template>
  <div id="app">
      <h1>Shopping Cart Example</h1>
      <hr>
      <h2>Products</h2>
      <product-list>
        <hr>
      </product-list>
    <shopping-cart>
    </shopping-cart>
  </div>
</template>

<script>
import ShoppingCart from '@/components/shoppingCart'
import ProductList from '@/components/productList'


export default {
  name: "App",
  components: {
    ShoppingCart,
    ProductList
  },
  data(){
    return {
    }
  },
  created(){

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
