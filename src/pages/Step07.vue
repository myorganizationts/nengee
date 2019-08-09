<template>
  <div>
    <p class="my-step-title">Step 7 of 10 </p>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
    <p class="BkInfo">Bank Information:</p>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Bank Name<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Bank Address<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Address Line 2</p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">City</p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">State/Province/Region</p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">ZIP/Postal Code</p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple">
        <p class="item-title item-style">Country</p>
        <el-input></el-input>
      </div></el-col>
    </el-row>
    <div class="message">Note: for statements & chargeback notifications - if different than physical</div>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">
        <p class="item-title item-style">Account Number<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <p class="item-title item-style">Routing Number<span class="must-label">*</span></p>
        <el-input></el-input>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <p class="item-title item-style">Swift Code<span class="must-label">*</span></p>
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
      this.$router.push({name: 'step08'})
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
  .BkInfo{
    margin-bottom: 15px;
  }
  .message{
    padding: 15px 0;
  }
  .el-col-6 {
    width: 33.3%;
}

.el-input {
  margin-bottom: 15px;
}
</style>
