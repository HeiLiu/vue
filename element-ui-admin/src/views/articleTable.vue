<template>
    <div class="app-container">
        <div class="filter-container">
            <el-select v-model="listQuery.importance" placeholder="重要性"
            class="filter-item">
                <el-option v-for="item in importances" :key="item" :label="item" :value="item"/>
            </el-select>
            <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查 询</el-button>
        </div>
        <el-table :data="list" border v-loading="listLoading">
            <el-table-column label="序号" prop="id" align="center" width="65">
                <template slot-scope="scope">
                    <span>{{scope.row.id}}</span>
                </template>
            </el-table-column>
            <el-table-column label="日期" prop="date" align="center" width="150"></el-table-column>
            <el-table-column label="标题" prop="title" min-width="150"></el-table-column>
            <el-table-column label="作者" prop="author" align="center" width="110"></el-table-column>
            <el-table-column label="重要性" prop="importance" align="center" width="95"></el-table-column>
            <el-table-column label="阅读数" prop="pageViews" align="center" width="95"></el-table-column>
            <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
                <template slot-scope="scope">
                    <el-button type="primary" @click="handleUpdate(scope.row)" size="small">查看</el-button>
                    <el-button type="primary" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination-container">
             <el-pagination :current-page="listQuery.page" :page-size="listQuery.limit" :total="total" layout="total, sizes, prev, pager, next, jumper" @current-change='handleCurrentChange'></el-pagination>
        </div>
        <el-dialog title="修改" :visible.sync="dialogVisible">
            <el-form :v-model="temp" label-width="70" style="width:400px;margin-left:50px;">
                <el-form-item prop="title" label="标题">
                    <el-input v-model="temp.title"></el-input>
                </el-form-item>
                <el-form-item prop="date" label="日期">
                    <el-input v-model="temp.date"></el-input>
                </el-form-item>
                
            </el-form>
        
            <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible=false">取消</el-button>
                    <el-button @click="updateData">保存</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
import { fetchList } from "@/api/article.js";
export default {
  data() {
    return {
        importances:[1, 2, 3],
      listLoading: false,
      dialogVisible: false,
      temp: {
        //   弹窗里的表单model
        id: null,
        importance: 1,
        remark: "",
        date: "",
        title: "",
        author: "",
        status: "published"
      },
      list: [],
      listQuery: {
        // 查询对象设计
        title: undefined,
        importance: undefined,
        type: undefined,
        sort: "+ id",
        page: 1,
        limit: 20
      },
      total: 2
    };
  },
  created() {
    //   组件完成生成时
    this.listLoading = true;
    this.getList();
  },
  methods: {
      handleFilter(){
          this.getList();
      },
    handleCurrentChange(page) {
      this.listQuery.page = page;
      this.getList();
    },
    updateData() {
      this.dialogVisible = false;
    },
    handleUpdate(row) {
      console.log(row);
      this.temp = Object.assign({}, row);
      this.dialogVisible = true;
      console.log(this.temp);
    },
    getList() {
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items;
        this.total = response.data.total;
      });
      setTimeout(() => {
        this.listLoading = false;
      }, 2000);
    }
  }
};
</script>

<style>
</style>
