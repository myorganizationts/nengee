<template>
  <div>
    <p class="my-step-title">Step 6 of 10 </p>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="60"></el-progress>
    <p class="info">Owner / Officer Information:</p>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Owner/ Officer Name(#1)<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Title<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Date Of Birth<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Contact Number<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Owner/ Officer Name(#2)</p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Title</p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Date Of Birth</p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Contact Number</p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <hr>
    <el-button class="previous-btn" @click="back()">Previous</el-button>
    <el-button type="primary"  class="next-btn" @click="go()">Next</el-button>
  </div>
</template>

<script>
export default {
  name: 'Step01',
  methods: {
    go () {
      this.$router.push({name: 'step07'})
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
  @import '../assets/css/common.css';
  hr{
    margin-top: 50px;
  }
  .item-style{
    margin-bottom: 15px;
  }
  .el-col-12 {
    width: 50%;
    margin-bottom: 10px;
}
.info{
  margin-bottom: 10px;
}
</style>
