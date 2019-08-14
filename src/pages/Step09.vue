<template>
  <div>
    <p class="my-step-title">Step 9 of 10</p>
    <el-progress
        :text-inside="true"
        :stroke-width="26"
        :percentage="90"
    ></el-progress>
    <p class="Review">Review</p>
    <div class="iframe">
        <iframe
            src="../../static/pdfjs/web/viewer.html"
            width="90%"
            height="500"
        ></iframe>
    </div>
    <div>
      <el-checkbox v-model="allAgree" class="checkBox"
      >The information on the PDF is all corrected
      </el-checkbox>
    </div>
    <div class="signatureWall" v-show="showSignature">
      <div>
        <span class="item-title item-style">Merchant's Signature<span class="must-label">*</span></span>
        <span style="padding-left: 205px;font-size: 13px;color: #212121;"><el-button size="small">Try Again</el-button></span>
      </div>
      <div class="box" v-show="showSignature" id="signature"></div>
      <div style="padding-top: 10px;padding-left: 290px"><el-button size="small">Confirm Signture</el-button></div>
      <el-row :gutter="20" class="signature-btm" style="width: 100%">
        <el-col :span="8">
        <p class="item-title">Name<span class="must-label">*</span></p>
        <el-input v-model="name" class="inp"></el-input></el-col>
        <el-col :span="8">
        <p class="item-title">Title<span class="must-label">*</span></p>
        <el-input v-model="title" class="inp"></el-input></el-col>
        <el-col :span="8">
        <p class="item-title">Date<span class="must-label">*</span></p>
        <el-input v-model="date" class="inp"></el-input></el-col>
      </el-row>
    </div>
    <hr/>
    <el-button class="previous-btn" @click="back()">Previous</el-button>
    <el-button type="primary" class="next-btn" @click="go()" :disabled="!showSignature">Next</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      title: '',
      date: '',
      allAgree: false,
      showSignature: false,
      signatureURL: '' // 签名图片传到服务器中保存
    }
  },
  watch: {
    allAgree (curVal) {
      console.log('allAgree (curVal)', curVal)
      curVal ? this.showSignature = true : this.showSignature = false
    }
  },
  methods: {
    go () {
      this.$router.push({ name: 'step10' })
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
@import "../assets/css/common.css";
.signature-btm{
  .inp{
    width: 100px;
  }
}
.Review {
    text-align: center;
    margin-bottom: 30px;
}
.iframe {
    margin-left: 50px;
    margin-bottom: 20px;
}
hr {
    margin-top: 50px;
}
.checkBox {
    margin-left: 50px;
}
.signatureWall{
  margin-top: 20px;
  margin-left: 50px;
}
.try{
  margin-left: 150px;
  font-size: 13px;
  color: #212121;
}
.box{
  width: 360px;
  height: 150px;
  border: 1px solid #cccccc;
  background-color: #ccc;
  margin-top: 20px;
  margin-left: 50px;
}
</style>
