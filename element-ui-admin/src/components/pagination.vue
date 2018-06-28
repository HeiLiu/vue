<template>
    <div>
        <el-col :span="24" class="pagination">
            <el-pagination layout="prev, pager, next" :currentPage="currentPage"
            :page-size="pageSize" :total="totalCount" @current-change="handleCurrentPage" style="float:right">

            </el-pagination>
        </el-col>
    </div>
</template>

<script>
export default {
    // props:{
    //     totalCount: Number,
    //     currentPage: Number
    // }
    props: ['totalCount', 'currentPage', 'pageSize'],
    methods: {
        handleCurrentPage(val){
            // console.log('hahahah');
            return this.$emit('turnPage', val)
        }
    }
}
</script>

<style>

</style>
