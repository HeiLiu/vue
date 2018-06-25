<template>
    <button class="el-button" :disabled="buttonDisabled" :class="[
        type?'el-button--'+ type : '', {'is-disabled':disabled,
        'is-loading':loading}
    ]">
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
        }
    },
    computed:{
        buttonDisabled (){
            return this.disabled;
        }
    }
}
</script>

<style scoped>

</style>

