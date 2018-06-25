<template>
  <div id="app">
    {{articles}}
  </div>
</template>

<script>
import axios from "axios";
import Articles from "./components/articles";
import Article from "./components/article";

// console.log(articles.data);
console.log();
export default {
  name: "App",
  data() {
    return {
      articles: []
    };
  },
  components: {
    Articles,
    Article
  },
  mounted() {
    axios
      .get("https://easy-mock.com/mock/5adf039603701d27fce72de0/example/juejin")
      .then(data => {
        this.articles = data.data.articles;
        console.log(data.data);
        // console.log(this.articles[0]);
      });
  }
};
</script>

<style lang="stylus" scoped>
</style>

