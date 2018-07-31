<template>
  <div>
    <form class="el-form" :class="[
    labelPosition?'el-form--label-'+labelPosition: '',
    {'el-form--inline':inline}]">
      <slot/>
    </form>
  </div>
</template>

<script>

export default {
  name: 'ElFrom',
  componentName: 'ElForm',
  data () {
    return {
      fields:[]
    }
  },
  props: {
    labelPosition: String,
    inline: Boolean,
    rules: Object,
    model: Object
  },
  methods: {
    validate () {
      console.log('validate')
      console.log(this.fields)
      this.fields.forEach(field => {
        console.log('hahah')
        field.validate('', (message, field) => {
        })
      });
    }
  },
  created () {
    // 允许子组件mounted的时候
    // 先监听
    this.$on('el.form.addField', (field) => {
      console.log('123')
      console.log(field)
      this.fields.push(field)
    })
  }
}
</script>

<style>

</style>
