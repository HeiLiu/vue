<template>
    <div>
        <head-top>
            <router-link to="/search/geohash" class="link_search" slot="search">
                <svg width="100%" height="100%" xmls="http://www.w3.org/2000/svg" version="1.1">
                    <circle cx="8" cy="8" r="7" stroke="rgb(255,255,255)" stroke-width="1" fill="none">
                    </circle>
                    <line x1="14" y1="14" x2="20" y2="20" style="stroke:rgb(255,255,255);stroke-width:2"></line>
                </svg>
            </router-link>
            <router-link to="/home" slot="msite-title" class="msite_title">
                <span class="title_text ellipsis">{{msiteTitle}}</span>
            </router-link>
        </head-top>
        <nav class="msite_nav">
            <div class="swiper-container" v-if="foodTypes.length">
                <div class="swiper-wrapper">
                    <div class="swiper-slide food_types_container" v-for="(item, index) in foodTypes" :key="index">
                        <router-link v-for="foodItem in item" :key="foodItem.id" class="link_to_food" to="{
                            path: '/food',
                            query: {
                                geohash,
                                title: foodItem.title,
                                restaurant_category_id: foodItem.link,
                            }
                        }">
                            <figure>
                                <img :src="'http://fuss10.elemecdn.com/'+foodItem.image_url" />
                                <figcaption>
                                    {{foodItem.title}}
                                </figcaption>
                            </figure>
                        </router-link>
                    </div>
                </div>
            </div>
            <img src="../assets/fl.svg" v-else class="el_back animation_opacity" />
        </nav>
    </div>
</template>

<script>
import { cityGuess, msiteFoodTypes } from "@/api/getData";
import HeadTop from "@/components/headTop";
export default {
  data() {
    return {
      geohash: "",
      msiteTitle: "请选择地址",
      foodTypes: []
    };
  },
  components: {
    HeadTop
  },
  async beforeMount() {
    // msite 是由一个独立的项目组做的 由多个 spa 组成 作为比较独立的一部分 需要考虑到各种情况 尽可能要做到健壮
    // /city/25?a=1
    // this.$route.params.cityid   // params url中的一部分
    //  this.$route.query.geohash   // ?后面的查询对象 查询条件
    if (this.$route.query.geohash) {
      this.geohash = this.$route.query.geohash;
    } else {
      const data = await cityGuess();
      this.geohash = `${data.latitude},${data.longitude}`;
      // console.log(data)
    }
    // console.log(this.$route.query.geohash)
    console.log(this.geohash);
  },
  async mounted() {
    const data = await msiteFoodTypes(this.geohash);
    let resLength = data.length;
    let resArr = [...data];
    let foodArr = [];
    for (let i = 0, j = 0; i < resLength; i += 8, j++) {
      foodArr[j] = resArr.splice(0, 8);
    }
    this.foodTypes = foodArr
    console.log(this.foodTypes);
    // mvvm的数据改变 到 界面更新 是一个异步操作；里面要经过vnode
    // 更换真正的节点的时候会进行比对 vnode => dom diff 只会改变不同的部分
    //  vue 等待这个过程结束    this.$nextTick()
    this.$nextTick(()=>{
    new Swiper('.swiper-container', {
     loop: true
    });
})
  }
};



</script>

<style lang="stylus" scoped>
@import '../style/mixin';

.link_search {
    left: 0.8rem;
    wh(0.9rem, 0.9rem);
    ct();
}

.msite_title {
    center();
    width: 50%;
    text-align: center;
    margin-left: -0.5rem;

    .title_text {
        sc(0.8em, #fff);
        text-align: center;
        display: block;
    }
}
.msite_nav
  padding-top 3.1rem
  background-color #fff
  border-bottom 0.025rem solid $bc
  height 10.6rem
  .swiper-container
    wh(100%, auto)
    padding-bottom 0.6rem
    .swiper-pagination
      bottom 0.2rem
    .fl_back
      wh(100%, 100%)

.food_types_container
  display flex
  flex-wrap wrap
  .link_to_food
    width 25%
    padding 0.3rem 0rem
    fj(center)
    figure
      img
        margin-bottom 0.3rem
        wh(1.8rem, 1.8rem)
      figcaption
        text-align center
        sc(0.55rem, #666)

</style>
