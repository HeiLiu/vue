<template>
    <form class="input-area">
        <label> 用户名： <input type="text" ref="username" placeholder="请输入用户名" class="user"></label>
        <label> 评论：<textarea @keydown.enter.native="doComment" class="textarea" ref="contents" placeholder="期待你的精彩点评😁"></textarea></label>
        <button type="button" @click="doComment">提 交</button>
    </form>
</template>

<script>
export default {
    methods: {
        doComment(){
            const user= this.$refs.username.value;
            const contents = this.$refs.contents.value;
            const pubTime = new Date().toLocaleString();
            this.$emit('addComment', `${user}:${contents},发布于${pubTime}`);
            this.$refs.contents.value = '';
        }
    }
}
</script>

<style>
.input-area {
  color: #000;
  font-size: 15px;
  margin: 10px auto;
  width: 300px;
}
.input-area .user {
  border: 1px solid blue;
  width: 100px;
  display: block;
  margin-bottom: 10px;
}
.input-area .textarea {
  border: 1px solid blue;
  width: 100px;
  height: 100px;
  display: block;
  margin-bottom: 10px;
}

</style>
