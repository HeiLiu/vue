<template>
  <div id="app">
    <el-form :rules="rules" :model="activity" :inline="true" labelPosition="left" ref="ruleForm">
      <el-form-item label="活动名称" prop="name" >
        <el-input v-model="activity.name">

        </el-input>
      </el-form-item>
      <a class="el-button el-button--primary" @click.prevent="submitForm('ruleForm')">立即创建</a>
    </el-form>
  </div>
</template>

<script>
import ElForm from '@/components/el-form'
import ElFormItem from '@/components/el-form-item'
import ElInput from '@/components/el-input'
export default {
  name: 'App',
  data () {
    return {
      activity: {
        name: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入活动名称'
          }
        ]
      }
    }
  },
  components: {
    ElForm,
    ElFormItem,
    ElInput
  },
  methods: {
    submitForm (formName){
      this.$refs[formName].validate((valid) => {

      })
    }
  }
}
</script>

<style>
</style>
