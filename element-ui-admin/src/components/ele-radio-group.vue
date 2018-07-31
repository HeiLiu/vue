<template>
    <div class="el-radio" role="radiogroup" @keydown="handleKeydown">
        <slot></slot>
    </div>
</template>

<script>
import EleRadio from '@/components/ele-radio'
export default {
    components: {
        EleRadio
    },
    methods: {
        handleKeydown (){

        }
    }
}
</script>

<style>

</style>




