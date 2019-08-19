<template>
  <div>
    <p class="my-step-title">Step 5 of 10 </p>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="50"></el-progress>
    <p class="McProfile">Merchant Profile</p>
    <el-form :model="stepFive" ref="stepFive" :rules="rules">
      <el-row :gutter="20">
        <el-col :span="20">
          <el-form-item prop="ownership">
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Type of Ownership<span class="must-label">*</span></p>
              <el-radio-group v-model="stepFive.ownership">
              <el-radio label="soleProprietor">Sole Proprietor</el-radio>
              <el-radio label="partnership">Partnership</el-radio>
              <el-radio label="professionalAssoc">Professional Assoc.</el-radio>
              <el-radio label="corporation">Corporation</el-radio>
              <el-radio label="taxExemptOrg">Tax Exempt Org (501C)</el-radio>
              <el-radio label="LLC">LLC</el-radio>
              <el-radio label="Other">Other</el-radio>
            </el-radio-group>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item prop="establishedDate">
            <div class="grid-content bg-purple">
              <p class="item-title item-style">eBusiness Established Date<span class="must-label">*</span></p>
              <el-input v-model="stepFive.establishedDate"></el-input>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="taxId">
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Federal Tax ID #<span class="must-label">*</span></p>
              <el-input v-model="stepFive.taxId"></el-input>
            </div>
          </el-form-item>
       </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="20">
          <el-form-item prop="descriptionBus">
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Complete Description Business and Goods or Sold<span class="must-label">*</span></p>
              <el-input
                type="textarea"
                placeholder="请输入内容"
                v-model="stepFive.descriptionBus"
                maxlength="30"
                show-word-limit
              >
              </el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item prop="annualSale">
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Annual Sale<span class="must-label">*</span></p>
              <el-input v-model="stepFive.annualSale"></el-input>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item prop="averageTicket">
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Average Ticket $<span class="must-label">*</span></p>
              <el-input v-model="stepFive.averageTicket"></el-input>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item prop="maxTicket">
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Max Ticket $<span class="must-label">*</span></p>
              <el-input v-model="stepFive.maxTicket"></el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <hr>
    <el-button class="previous-btn" @click="back()">Previous</el-button>
    <el-button type="primary"  class="next-btn" @click="go()">Next</el-button>
  </div>
</template>

<script>
import {isEmptyObj} from '../components/utils/common'
export default {
  data () {
    return {
      stepFive: {
        ownership: 'Other',
        establishedDate: '',
        taxId: '',
        descriptionBus: '', // Description Business
        annualSale: '',
        averageTicket: '',
        maxTicket: ''
      },
      rules: {
        ownership: [{required: true, message: '请输入ownership', trigger: 'blur'}],
        establishedDate: [{required: true, message: '请输入establishedDate', trigger: 'blur'}],
        taxId: [{required: true, message: '请输入taxId', trigger: 'blur'}],
        descriptionBus: [{required: true, message: '请输入descriptionBus', trigger: 'blur'}],
        annualSale: [{required: true, message: '请输入annualSale', trigger: 'blur'}],
        averageTicket: [{required: true, message: '请输入averageTicket', trigger: 'blur'}],
        maxTicket: [{required: true, message: '请输入maxTicket', trigger: 'blur'}]
      }
    }
  },
  created () {
    if (window.allInfo.hasOwnProperty('stepFive') && !isEmptyObj(window.allInfo.stepFive)) {
      this.stepFive.ownership = window.allInfo.stepFive.ownership
      this.stepFive.establishedDate = window.allInfo.stepFive.establishedDate
      this.stepFive.taxId = window.allInfo.stepFive.taxId
      this.stepFive.descriptionBus = window.allInfo.stepFive.descriptionBus
      this.stepFive.annualSale = window.allInfo.stepFive.annualSale
      this.stepFive.averageTicket = window.allInfo.stepFive.averageTicket
      this.stepFive.maxTicket = window.allInfo.stepFive.maxTicket
    }
  },
  methods: {
    go () {
      this.$refs['stepFive'].validate((valid) => {
        if (valid) {
          window.allInfo.stepFive.ownership = this.stepFive.ownership
          window.allInfo.stepFive.establishedDate = this.stepFive.establishedDate
          window.allInfo.stepFive.taxId = this.stepFive.taxId
          window.allInfo.stepFive.descriptionBus = this.stepFive.descriptionBus
          window.allInfo.stepFive.annualSale = this.stepFive.annualSale
          window.allInfo.stepFive.averageTicket = this.stepFive.averageTicket
          window.allInfo.stepFive.maxTicket = this.stepFive.maxTicket
          this.$router.push({name: 'step06'})
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
  @import '../assets/css/common.css';
.McProfile{
  margin-bottom: 20px;
}
.el-row{
  margin-bottom: 20px;
}
.item-style{
  margin-bottom: 15px;
}
.el-radio {
    width: 25%;
    color: #606266;
    cursor: pointer;
    /* margin-right: 30px; */
    float: left;
    margin-left: 20px;
    margin-bottom: 10px;
}
.el-col-20 {
    width: 100%;
}
.el-col-6 {
    width: 33.3%;
}
hr{
  margin-top: 50px;
}
</style>
