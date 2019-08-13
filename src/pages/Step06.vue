<template>
  <div>
    <p class="my-step-title">Step 6 of 10 </p>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="60"></el-progress>
    <p class="info">Owner / Officer Information:</p>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Owner/ Officer Name(#1)<span class="must-label">*</span></p>
        <el-input v-model="ownerNameST"></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Title<span class="must-label">*</span></p>
        <el-input v-model="title1ST"></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Date Of Birth<span class="must-label">*</span></p>
        <el-input v-model="birthdateST"></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Contact Number<span class="must-label">*</span></p>
        <el-input v-model="contactNumST"></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Owner/ Officer Name(#2)</p>
        <el-input v-model="ownerNameND"></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Title</p>
        <el-input v-model="title1ND"></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Date Of Birth</p>
        <el-input v-model="birthdateND"></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Contact Number</p>
        <el-input v-model="contactNumND"></el-input>
      </div></el-col>
    </el-row>
    <hr>
    <el-button class="previous-btn" @click="back()">Previous</el-button>
    <el-button type="primary"  class="next-btn" @click="go()">Next</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ownerNameST: '', // ST： first
      title1ST: '',
      birthdateST: '',
      contactNumST: '',
      ownerNameND: '', // ND： second
      title1ND: '',
      birthdateND: '',
      contactNumND: ''
    }
  },
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
