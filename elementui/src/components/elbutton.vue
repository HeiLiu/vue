<template>
    <button @click="handleClick" class="el-button" :disabled="buttonDisabled" :class="[
        type?'el-button--'+ type : '', {'is-disabled':disabled,
        'is-loading':loading}, btnSize?'el-button--' + btnSize:'',
    ]" :type="nativeType">
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon&&!loading"></i>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'elbutton',
    props: {
        disabled: Boolean,
        type: {
            type: String,
            default:'default'
        },
        loading: Boolean,
        icon:{
            type: String,
            default: ''
        },
        nativeType: {
            type : String,
            default: 'button'
        },
        btnSize: {
            type: String,
            default: ""
        }
    },
    computed:{
        buttonDisabled (){
            return this.disabled;
        }
    },
    methods: {
        handleClick(evt){
            // console.log(evt);
            // $ vue 的私有方法
            // emit 将时间传递到父组件
            this.$emit('click', evt);
        }
    }
}
</script>

<style scoped>

</style>

