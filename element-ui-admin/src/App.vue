<template>
  <div id="app">
    <comments></comments>
    <!-- <login></login>
    <p v-text="content"></p>
    <p v-html="content"></p> -->
    <!-- <ele-radio-group v-model="sex">
      <ele-radio label="女">女</ele-radio>
      <ele-radio label="男">男</ele-radio>
    </ele-radio-group> -->
  <!-- <markdown/> -->
  <!-- <markd/> -->
  </div>
</template>

<script>
//  @ 表示alias 地址短链接，在哪里都指向src 让地址引入更轻松
import HelloWorld from "./components/HelloWorld";
import Login from "@/views/login";
import MarkDown from "@/views/markdown";
import MD from "@/views/md";
import EleRadioGroup from '@/components/ele-radio-group'
import EleRadio from '@/components/ele-radio'
import comments from '@/components/comments'
export default {
  name: "App",
  data() {
    return {
      sex: 0,
      content: "<span>拼多多，拼多多，拼的多，省得多。</span>"
    };
  },
  components: {
    Login: Login,
    markdown: MarkDown,
    markd: MD,
    EleRadioGroup,
    EleRadio,
    comments
  }
};
</script>

<style lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

