<template>
  <div>
    <p class="my-step-title">Step 7 of 10 </p>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
    <p class="BkInfo">Bank Information:</p>
    <el-form :model="stepSeven" ref="stepSeven" :rules="rules">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item prop="bankName">
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Bank Name<span class="must-label">*</span></p>
              <el-input v-model="stepSeven.bankName"></el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item prop="bankAddr">
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Bank Address<span class="must-label">*</span></p>
              <el-input v-model="stepSeven.bankAddr"></el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Address Line 2</p>
              <el-input v-model="stepSeven.bankAddrLine"></el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title item-style">City</p>
              <el-input v-model="stepSeven.bankCity"></el-input>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title item-style">State/Province/Region</p>
              <el-input v-model="stepSeven.bankState"></el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title item-style">ZIP/Postal Code</p>
              <el-input v-model="stepSeven.bankZip"></el-input>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Country</p>
              <country-selector @onCountrySelect="countrySelect($event)" :cur-country="stepSeven.bankCountry"></country-selector>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="message">Note: for statements & chargeback notifications - if different than physical</div>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item prop="accountNum">
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Account Number<span class="must-label">*</span></p>
              <el-input v-model="stepSeven.accountNum"></el-input>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item prop="routingNum">
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Routing Number<span class="must-label">*</span></p>
              <el-input v-model="stepSeven.routingNum"></el-input>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item prop="swiftCode">
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Swift Code<span class="must-label">*</span></p>
              <el-input v-model="stepSeven.swiftCode"></el-input>
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
import CountrySelector from '../components/CountrySelector/Index'
export default {
  components: {CountrySelector},
  data () {
    return {
      stepSeven: {
        bankName: '',
        bankAddr: '',
        bankAddrLine: '',
        bankCity: '',
        bankState: '',
        bankZip: '',
        bankCountry: '',
        accountNum: '',
        routingNum: '',
        swiftCode: ''
      },
      rules: {
        bankName: [{required: true, message: '请输入bankName', trigger: 'blur'}],
        bankAddr: [{required: true, message: '请输入bankAddr', trigger: 'blur'}],
        accountNum: [{required: true, message: '请输入accountNum', trigger: 'blur'}],
        routingNum: [{required: true, message: '请输入routingNum', trigger: 'blur'}],
        swiftCode: [{required: true, message: '请输入swiftCode', trigger: 'blur'}]
      }
    }
  },
  created () {
    if (window.allInfo.hasOwnProperty('stepSeven') && !isEmptyObj(window.allInfo.stepSeven)) {
      this.stepSeven.bankName = window.allInfo.stepSeven.bankName
      this.stepSeven.bankAddr = window.allInfo.stepSeven.bankAddr
      this.stepSeven.bankAddrLine = window.allInfo.stepSeven.bankAddrLine
      this.stepSeven.bankCity = window.allInfo.stepSeven.bankCity
      this.stepSeven.bankState = window.allInfo.stepSeven.bankState
      this.stepSeven.bankZip = window.allInfo.stepSeven.bankZip
      this.stepSeven.bankCountry = window.allInfo.stepSeven.bankCountry
      this.stepSeven.accountNum = window.allInfo.stepSeven.accountNum
      this.stepSeven.routingNum = window.allInfo.stepSeven.routingNum
      this.stepSeven.swiftCode = window.allInfo.stepSeven.swiftCode
    }
  },
  methods: {
    countrySelect (country) {
      this.stepSeven.bankCountry = country
    },
    go () {
      this.$refs['stepSeven'].validate((valid) => {
        if (valid) {
          window.allInfo.stepSeven.bankName = this.stepSeven.bankName
          window.allInfo.stepSeven.bankAddr = this.stepSeven.bankAddr
          window.allInfo.stepSeven.bankAddrLine = this.stepSeven.bankAddrLine
          window.allInfo.stepSeven.bankCity = this.stepSeven.bankCity
          window.allInfo.stepSeven.bankState = this.stepSeven.bankState
          window.allInfo.stepSeven.bankZip = this.stepSeven.bankZip
          window.allInfo.stepSeven.bankCountry = this.stepSeven.bankCountry
          window.allInfo.stepSeven.accountNum = this.stepSeven.accountNum
          window.allInfo.stepSeven.routingNum = this.stepSeven.routingNum
          window.allInfo.stepSeven.swiftCode = this.stepSeven.swiftCode
          this.$router.push({name: 'step08'})
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
