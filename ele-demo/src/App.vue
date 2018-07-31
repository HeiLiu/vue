<template>
  <div>
    <!-- Vue 内置组件 -->
  <transition name="router-fade">
    <keep-alive>
      <router-view v-if="$route.meta.keepalive"></router-view>
    </keep-alive>
  </transition>
  <transition name="router-fade">
    <router-view v-if="!$route.meta.keepalive"></router-view>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import './style/common'
// 会在进入的整个过程里 完全进入后会移除.router-fade-enter这个样式
.router-fade-enter-active,
.router-fade-leave-active
    transition opacity .3s

// 页面上的元素从无到有的那个时刻 进入的那一瞬间
.router-fade-enter, 
.router-fade-leave-active
  opacity 0
</style>
