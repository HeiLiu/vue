<template>
    <label class="el-radio" :class="[
    {'is-disable': isDisabled},
    {'is-focus': focus},
    {'is-border': border},
    {'is-checked': model ===label}
    ]">
    <span class="el-radio__input">
        <span class="el-radio__inner"></span>
        <input type="radio" class="el-radio__original" :value="label" @focus="focus = true" @blur="focus=false"
        @change="handleChange" v-model="model"/>
        <span class="el-radio__label"> 
            <slot></slot>
            <template v-if="!$slots.default">
                {{label}}
            </template>
        </span>
    </span>
    </label>
</template>

<script>
export default {
    data() {
        //  组件的内部状态
        return {
            focus: false
        }
    },  
    props: {
        // 外界传进来的属性
        value: {},
        label: {},
        disabled: Boolean,
        name: String,
        border: Boolean,
        size: String
    },
    computed: {
        isDisabled(){
            // 转个弯
            return this.disabled;
        },
        model:{
            get (){
                return this.value;
            },
            set (val){
                this.$emit('input', val)
            }
        }
    },
    methods: {
        handleChange(){

        }
    }
}
</script>
