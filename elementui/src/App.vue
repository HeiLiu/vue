<template>
  <div id="app">
    <el-button :disabled="status" :type="type">Primary按钮</el-button>
    <el-button type="success">success</el-button>
    <el-button type="info">info</el-button>
    <el-button type="warning" icon="el-icon-edit" :loading=isloading v-on:click="change"></el-button>
    <el-button type="danger" loading>danger</el-button>
    <el-button type="default">default</el-button>
  </div>
</template>

<script>
import elbutton from '@/components/elbutton';

export default {
  name: 'App',
  components: {
    'el-button': elbutton
  },
  data(){
    return {
      status:false,
      type:'primary',
      isloading:false
    }
  },
  methods:{
    change(){
      this.isloading = !this.isloading;
      console.log('啊是大')
    }
  },
  mounted() {
    setTimeout(()=>{
      this.status = true
    },2000)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
