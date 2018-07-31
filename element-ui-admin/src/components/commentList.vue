<template>
    <div>
        <!-- <comment-item v-for="(item, index)in list" :key="index"
        :content="item">{{item}}</comment-item> -->
        <!-- 单标签与双标签的区别 Look -->
        <comment-item v-for="(item, index) in list" :key="index" :content="item"/>
        <div v-if="list.length ==0"> 当前还没有评论 </div>
    </div>
</template>

<script>
import CommentItem from './commentItem'
export default {
    props:{
        list: Array
    },
    components:{
        CommentItem
    }
}
</script>

<style>

</style>
