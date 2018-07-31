<template>
  <div id="app">
    <header class="header header-fixed">
      <el-row>
        <el-col :span="24">
          <el-menu class="el-menu-demo" mode="horizontal" default-active="1">
            <el-menu-item index="1">高级插件</el-menu-item>
            <el-menu-item index="2">在线商城</el-menu-item>
            <el-menu-item index="3">购物管理</el-menu-item>
            <el-menu-item index="4">系统设置</el-menu-item>
            <el-menu-item index="5">活动发布</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <main>
      <div class="main-left">
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item>活动发布</el-menu-item>
          <el-menu-item>活动管理</el-menu-item>
        </el-menu>
      </div>
      <div class="main-right">
        <div class="activePublic">
          <el-steps :space="200" :active="step">
          <el-step title="活动信息"></el-step>
          <el-step title="报名签到"></el-step>
          <el-step title="分享设置"></el-step>
          <el-step title="个性设置"></el-step>
          </el-steps>
          <div class="step1">
            <el-form class="demo-ruleForm" ref="ruleForm" label-position="top" :model="ruleForm">
              <!-- ref锚点 -->
                <el-form-item label="活动名称" prop="name">
                  <el-input v-model="ruleForm.name" size="large"></el-input>
                </el-form-item>
                <el-form-item label="" prop="fenLei">
                  <el-row style="height:35px;" type="flex" align="middle">
                    <el-col :span="3" style="width:90px;">
                      <div class="el-form-item__label">活动分类 *</div>
                    </el-col>
                    <el-col :span="2">
                      <el-button @click.prevent="dialogFormFenLeiVisible=true" type="text">设置</el-button>
                    </el-col>
                  </el-row>
                  <el-radio-group v-model="ruleForm.fenLei">
                    <el-radio v-for="item of ruleForm.fenleis" :key="item.name" :label="item.name"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item>
                  <el-row>
                    <el-col :span="3">
                      <div class="el-form-item__label">活动标签 *</div>
                    </el-col>
                  </el-row>
                  <el-row>
                      <el-tag v-for="tag of ruleForm.tags" type="primary" :key="tag" closable style="margin-right:20px;">{{tag}}</el-tag>
                      <el-button class="el-button default" @click.prevent="dialogFormTagVisible=true"><i class="el-icon-plus"></i></el-button>
                  </el-row>
                </el-form-item>
                <el-form-item label="活动时间" required style="width: 750px;">
                  <el-col :span="5">
                  <!-- 时间选择器，表单验证时也有点坑，报错异常，建议不用element自带表单验证，自己写验证规则 -->
                    <el-form-item prop="activeStartTimeDate">

                      <el-date-picker
                        v-model="ruleForm.activeStartTimeDate"
                        type="date"
                        placeholder="活动开始日期">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>

                  <el-col :span="5">
                    <el-form-item prop="activeStartTimeTime">
                      <el-time-select
                        placeholder="请选择时间点"
                        v-model="ruleForm.activeStartTimeTime"
                        :picker-options="{start: '00:00',step: '00:15',end: '23:45'}">
                      </el-time-select>
                    </el-form-item>
                  </el-col>

                  <el-col :span="1" style="text-align: center;">—</el-col>

                  <el-col :span="5">
                    <el-form-item prop="activeEndTimeDate">

                      <el-date-picker
                        v-model="ruleForm.activeEndTimeDate"
                        type="date"
                        placeholder="活动结束日期">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>

                  <el-col :span="5">
                    <el-form-item prop="activeEndTimeTime">
                      <el-time-select
                        placeholder="请选择时间点"
                        v-model="ruleForm.activeEndTimeTime"
                        :picker-options="{start: '00:00',step: '00:15',end: '23:45'}">
                      </el-time-select>
                    </el-form-item>
                  </el-col>

                </el-form-item>
            </el-form>
            <el-dialog title="设置活动分类" :visible.sync="dialogFormFenLeiVisible">
              <el-form>
                <el-form-item>
                  <el-tag v-for="fenLei of ruleForm.fenleis" type="primary" :key="fenLei.name"
                  closable @close="handleClose(tag)">{{fenLei.name}}</el-tag>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="fenLei.name" auto-complete="off" ></el-input>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click.native="dialogFormFenLeiVisible = false">取 消</el-button>
                <el-button type="primary"  @click.native="handleAdd()">添加</el-button>
              </span>
            </el-dialog>
            <el-dialog title="添加活动标签" :visible.sync="dialogFormTagVisible">
              <el-form>
                <el-form-item>
                  <el-input size="large" v-model="tagIn" style="margin-bottom:20px;"></el-input>
                  <el-button type="primary" @click.native="handleTagAdd(tagIn)" style="float:right;margin-left:20px;">添加</el-button>
                  <el-button type="default"  @click.native="handleTagClose(tag)" style="float:right;">取消</el-button>
                </el-form-item>
              </el-form>
            </el-dialog>
          </div>
          <el-button-group>
            <el-button v-show="preStep" type="default" icon="icon-arrow-left" @click.native.prevent="handlePreStep">上一步</el-button>
            <el-button v-show="nextStep" type="success" @click.native.prevent="handleNextStep">下一步 <i class="icon-arrow-right"></i></el-button>
            <el-button type="primary" icon="icon-arrow-left">发布活动</el-button>
          </el-button-group>
        </div>
      </div>
    </main>
    
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // "el-button": elbutton,
    // "el-button-group": buttongroup
  },
  data() {
    return {
      tagIn: "",
      status: false,
      type: "primary",
      isloading: false,
      step: 2,
      preStep: true,
      nextStep: true,
      dialogFormFenLeiVisible: false,
      dialogFormTagVisible: false,
      tagForm: "",
      ruleForm: {
        name: "哈哈哈",
        fenleis: [
          {
            name: "未发布"
          },
          {
            name: "测试活动"
          },
          {
            name: "精彩活动"
          }
        ],
        fenLei: "测试活动",
        tags: ["嘻嘻"]
      }
    };
  },
  methods: {
    deleteTag(){

    },
    handleTagAdd(tag) {
      // console.log(tag)
      // console.log();
      this.ruleForm.tags.push(tag);
      this.dialogFormTagVisible = false;
    },
    handleTagClose() {
      this.dialogFormTagVisible = false;
    },
    handleClose() {
      this.dialogFormFenLeiVisible = false;
    },
    change() {
      this.isloading = !this.isloading;
      console.log("啊是大");
    },
    doSubmit(evt) {
      console.log(evt);
    },
    handlePreStep() {
      if (this.step <= 1) return;
      this.step--;
      this.goStep(this.step);
    },
    handleNextStep() {
      if (this.step > 4) return;
      this.step++;
      this.goStep(this.step);
    },
    goStep(n) {
      switch (n) {
        case 1:
          this.preStep = false;
          this.nextStep = true;
          break;
        case 2:
        case 3:
          this.preStep = true;
          this.nextStep = true;
          break;
        case 4:
          this.preStep = true;
          this.nextStep = false;
          break;
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.status = true;
    }, 2000);
  }
};
</script>

<style >
* {
  margin: 0;
  padding: 0;
}

#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: sans-serif;
}

header {
  z-index: 1000;
  min-width: 1200px;
  transition: all 0.5 ease;
  border-top: 4px solid #3091f2;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}

header.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

header.el-menu-demo {
  padding-left: 300px !important;
}

main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 800px;
  border: solid 40px #e9ecf1;
  background-color: #fcfcfc;
  margin-top: 60px;
}

main .main-left {
  text-align: center;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 200px;
  flex: 0 0 200px;
}

main .main-right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: #fff;
  padding: 50px 70px;
}

main .el-menu {
  background-color: transparent !important;
}
</style>

