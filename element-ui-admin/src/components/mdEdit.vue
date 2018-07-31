<template>
  <div class="simplemde-container" :style="{height:height+'px',zIndex:zIndex}">
    <textarea :id="id">
    </textarea>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css'
import 'simplemde/dist/simplemde.min.css'
import SimpleMDE from 'simplemde'
export default {
   props: {
    value: String, // 接收父组件的content
    id: {
      type: String
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 150
    },
    zIndex: {
      type: Number,
      default: 10
    },
    toolbar: {
      type: Array
    }
  },
  data(){
    return {
      simplemde: null,
      hasChange: false
    }
  },
  watch: {
    value(val) {
      if (val === this.simplemde.value() && !this.hasChange) return
      this.simplemde.value(val)
    }
  },
    mounted(){
      this.simplemde = new SimpleMDE({
      // element: document.getElementById(this.id || 'markdown-editor-' + +new Date()),
      // autoDownloadFontAwesome: false,
      // autofocus: this.autofocus,
      // toolbar: this.toolbar,
      // spellChecker: false,
      // insertTexts: {
      //   link: ['[', ']( )']
      // },
      // // hideIcons: ['guide', 'heading', 'quote', 'image', 'preview', 'side-by-side', 'fullscreen'],
      // placeholder: this.placeholder
    })
     if (this.value) {
      this.simplemde.value(this.value)
    }
    this.simplemde.codemirror.on('change', () => {
      if (this.hasChange) {
        this.hasChange = true
      }
      this.$emit('input', this.simplemde.value())
    })
    }
}
</script>

<style scoped>
*{margin: 0;padding: 0;}
.simplemde-container{
  width: 50vw;
  height: 100vh;
}
</style>