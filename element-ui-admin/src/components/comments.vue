<template>
    <div>
        <comment-form @addComment="addComment"/>
        <comment-list :list="list">
            <comment-item></comment-item>
        </comment-list>
        <pagination :totalCount="totalCount" :currentPage="currentPage" :pageSize="pageSize" @turnPage="turnPage"/>
    </div>
</template>

<script>
import CommentForm from './commentForm'
import CommentList from './commentList'
import Pagination from './pagination'
export default {
    data(){
        return {
            // totalData 所有的数据 =>当前页面的数据
            list: [],
            pageSize: 3,
            totalData: [],
            totalCount: 0,
            currentPage: 1
        }
    },
    components: {
        CommentForm,
        CommentList,
        Pagination
    },
    methods: {
        addComment(msg){
            console.log(msg);
            this.totalData.push(msg);
            this.totalCount = this.totalData.length;
            if(this.totalCount <= this.pageSize){
                this.list = this.totalData;
            }else{
                this.list = this.totalData.slice(this.totalData.length-this.pageSize);
            }
            this.list.reverse();
            this.currentPage = 1;
            
        },
        turnPage(curr){
             this.currentPage = curr;
             if(this.currentPage == 1) {
                 console.log('在第一页')
                this.list = this.totalData.slice(this.totalData.length-this.pageSize); 
             }else{
            console.log(`当前在${this.currentPage}`)
             let start = -(curr)*this.pageSize;
             let end = -(curr-1)*this.pageSize;
            //  console.log(`总共${this.totalCount}: 从${start}开始截取: 到${end}`)
             this.list = this.totalData.slice(start, end);
             }
             console.log(this.list.reverse())
        }
    }
}
</script>

<style>

</style>
