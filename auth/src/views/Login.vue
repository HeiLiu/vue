<template>
    <div>
        <h1> Login 登录</h1>
       <form @submit.prevent="login">
           <label> <input type="text" v-model="email" placeholder="email"></label>
           <label><input type="password" v-model="pass" placeholder="password"></label>
           <button type="submit">Login</button>
       </form>
    </div>
</template>

<script>
import auth from '@/auth.js'
export default {
    data(){
        return {
            email: 'joe@example.com',
            pass: ''
        }
    },
    methods: {
        login(){
            // 验证 （email, pass） => auth.login()
            // 成功 localStorage.setItem('token', '1223')
            // 1. auth.login 传参, cb
            // 2. this.$router
            auth.login(this.email, this.pass, (loggedIn)=>{
                console.log(loggedIn);
                if(loggedIn){
                    this.$router.replace(this.$route.query.redirect || '/')
                }
            })
        }
    },
    mounted(){
        console.log(this.$route.query)
    }
}
</script>

<style>

</style>
