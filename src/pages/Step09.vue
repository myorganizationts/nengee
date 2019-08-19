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
      <el-checkbox v-model="stepNine.allAgree" class="checkBox"
      >The information on the PDF is all corrected
      </el-checkbox>
    </div>
    <div class="signatureWall" v-show="stepNine.showSignature">
      <el-form :rules="rules" ref="stepNine" :model="stepNine">
        <el-form-item>
          <div>
            <span class="item-title item-style">Merchant's Signature<span class="must-label">*</span></span>
            <span style="padding-left: 205px;font-size: 13px;color: #212121;"><el-button size="small">Try Again</el-button></span>
          </div>
          <div class="box" v-show="stepNine.showSignature" id="signature"></div>
          <div style="padding-top: 10px;padding-left: 290px"><el-button size="small">Confirm Signture</el-button></div>
        </el-form-item>
        <el-row :gutter="20" class="signature-btm" style="width: 100%">
          <el-col :span="8">
            <el-form-item prop="name">
              <p class="item-title">Name<span class="must-label">*</span></p>
              <el-input v-model="stepNine.name" class="inp"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="title">
              <p class="item-title">Title<span class="must-label">*</span></p>
              <el-input v-model="stepNine.title" class="inp"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="date">
              <p class="item-title">Date<span class="must-label">*</span></p>
              <el-input v-model="stepNine.date" class="inp"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <hr/>
    <el-button class="previous-btn" @click="back()">Previous</el-button>
    <el-button type="primary" class="next-btn" @click="go()" :disabled="!stepNine.showSignature">Next</el-button>
  </div>
</template>

<script>
import {isEmptyObj} from '../components/utils/common'
export default {
  data () {
    return {
      stepNine: {
        name: '',
        title: '',
        date: '',
        allAgree: false,
        showSignature: false,
        signatureUrl: '' // 签名图片传到服务器中保存
      },
      rules: {
        name: [{required: true, message: '请输入name', trigger: 'blur'}],
        title: [{required: true, message: '请输入title', trigger: 'blur'}],
        date: [{required: true, message: '请输入date', trigger: 'blur'}]
      }
    }
  },
  watch: {
    'stepNine.allAgree': function (curVal) {
      console.log('allAgree (curVal)', curVal)
      curVal ? this.stepNine.showSignature = true : this.stepNine.showSignature = false
    }
  },
  created () {
    if (window.allInfo.hasOwnProperty('stepNine') && !isEmptyObj(window.allInfo.stepNine)) {
      this.stepNine.allAgree = window.allInfo.stepNine.allAgree
      this.stepNine.name = window.allInfo.stepNine.name
      this.stepNine.title = window.allInfo.stepNine.title
      this.stepNine.date = window.allInfo.stepNine.date
      this.stepNine.showSignature = window.allInfo.stepNine.showSignature
      this.stepNine.signatureUrl = window.allInfo.stepNine.signatureUrl
    }
  },
  methods: {
    go () {
      this.$refs['stepNine'].validate((valid) => {
        if (valid) {
          window.allInfo.stepNine.allAgree = this.stepNine.allAgree
          window.allInfo.stepNine.name = this.stepNine.name
          window.allInfo.stepNine.title = this.stepNine.title
          window.allInfo.stepNine.date = this.stepNine.date
          window.allInfo.stepNine.showSignature = this.stepNine.showSignature
          window.allInfo.stepNine.signatureUrl = this.stepNine.signatureUrl
          this.$router.push({ name: 'step10' })
        } else {
          console.log('cannot go next step!!')
          return false
        }
      })
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
