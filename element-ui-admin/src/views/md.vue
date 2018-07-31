<template>
  <div class="components-container">
    <div class="editor-container">
      <markdown-editor id="contentEditor" ref="contentEditor" v-model="content" :height="300" :zIndex="20"></markdown-editor>
    </div>
    <div class="compileArea" v-html="html"></div>
    <el-button @click="markdown2Html" style="margin-top:80px;" type="primary" icon="el-icon-document">To HTML</el-button>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/mdEdit'
const content = `
**this is test**
* vue
* element
* webpack
## Simplemde
`
export default {
  name: 'markdown-demo',
  components: { MarkdownEditor },
  data() {
    return {
      content: content,
      html: ''
    }
  },
  methods: {
    // markdown2Html() {
    //   import('showdown').then(showdown => {
    //     const converter = new showdown.Converter()
    //     this.html = converter.makeHtml(this.content)
    //   })
    // }
    
  }
}
</script>
<style>
*{
  margin: 0;padding: 0;
}
.editor-container{
  display: inline-block;
}
.compileArea{
  /* margin-left: 10px; */
  /* padding-top: 40px; */
  padding: 40px 0 0 20px;
  width: 47vw;
  float: right;
  border: 1px solid #cccccc;
  min-height:340px;
  height: auto;
}
</style>

