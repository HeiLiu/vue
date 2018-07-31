<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <v-header :seller="seller"/>
    <div class="nav">
      <div class="nav-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header'
const seller = require('./assets/data/seller.json')
export default {
  name: "App",
  components: {
    VHeader: Header
  },
  data(){
    return {
      seller: {}
    }
  },
  created(){
    console.log(seller)
    Object.assign(this.seller, seller.data);
  }
};
</script>

<style lang="stylus" scoped>
  .nav
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    // border-1px(rgba(7, 17, 27, 0.1))
    .nav-item
      flex: 1
</style>
