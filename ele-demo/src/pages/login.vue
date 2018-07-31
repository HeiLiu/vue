<template>
    <div class="login-container">
        <header-top headTitle="登录" goback="true">
            <!-- <slot name="button"></slot> -->
        </header-top> 
        <img :src="captchCodeImg" alt="验证码" v-if="captchCodeImg" style="padding-top:50px">
    </div>
</template>

<script>

import headTop from '@/components/headTop'
import { getCaptchas } from '@/api/getData'
//  业务经验一: navigationBar 的封装  
// history.go(-1) + title 居中 + 右边的操作按钮
export default {
    data(){
        return {
            captchCodeImg: '',
            codeNumber: null
        }
    },
    components: {
        'header-top': headTop
    },
    methods: {
       async getCaptchCode(){
        //    api
            const res =await getCaptchas();
            console.log(res);
            this.captchCodeImg = res.code
            
        }
    },
    mounted (){
        this.getCaptchCode()
    }
}
</script>

<style>

</style>
