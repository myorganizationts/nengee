<template>
  <div class="main-body">
    <p class="my-step-title">Step 1 of 10 </p>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="10"></el-progress>
    <div>
      <el-form :model="stepOne" :rules="rules" ref="stepOne" >
        <el-form-item prop="country">
          <p class="select">Select Country<span class="must-label">*</span></p>
          <country-selector @onCountrySelect="countrySelect($event)" :cur-country="stepOne.country"></country-selector>
        </el-form-item>
        <el-form-item>
          <p>Do you have a referral code?<span class="must-label">*</span></p>
          <el-radio-group v-model="stepOne.codeRadio" class="radio-group">
            <div class="my-radio"><el-radio label="yes">Yes</el-radio></div>
            <div class="my-radio"><el-radio label="no">No</el-radio></div>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="referralCode" :required="stepOne.hasCode">
          <el-row :gutter="20" v-show="stepOne.hasCode">
            <el-col :span="12">
              <div style="">Code<span class="must-label">*</span></div>
              <el-input v-model="stepOne.referralCode"  class="inp-code" size="mini" placeholder="referral code"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <hr>
      <el-button type="primary"  class="next-btn" @click="go()">Next</el-button>
    </div>
  </div>
</template>

<script>
import CountrySelector from '../components/CountrySelector/Index'
import {isEmptyObj} from '../components/utils/common'

// import { mapState } from 'vuex'

export default {
  components: {CountrySelector},
  data () {
    return {
      stepOne: {
        codeRadio: 'no',
        hasCode: false, // 不传后端的
        referralCode: '',
        country: null
      },
      rules: {
        country: [
          { required: true, message: '请选择国家', trigger: 'blur' }
        ],
        referralCode: [
          { message: '请输入referral code', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
  },
  created () {
    // test http
    // let tmpTest = {
    //   'country': 'CN',
    //   'dbaName': 'ldf201908170141-d',
    //   'legalName': 'ldf201908170141-l',
    //   'alipayOnline': 0,
    //   'alipayOffline': 0,
    //   'wechatpayOffline': 0,
    //   'wechatpayOnline': 0,
    //   'unionpayOnline': 0,
    //   'unionpayQrcode': 0,
    //   'contactName': 'ldf',
    //   'phone': '123456789',
    //   'email': 'ldf@ld2f.fit',
    //   'ownership': 'BOSS',
    //   'establishedDate': '20190817',
    //   'taxId': '123',
    //   'descriptionBus': '1000010001',
    //   'annualSale': 'sfs',
    //   'averageTicket': 1,
    //   'maxTicket': 2,
    //   'ownerName1': 'ldf',
    //   'tile1': 'boss',
    //   'birthDate1': '20190817',
    //   'contactNum1': '123456789',
    //   'bankName': 'ICBC',
    //   'bankAddr': 'China',
    //   'accountNum': '123456',
    //   'routingNum': '654321',
    //   'swiftCode': '1000010001',
    //   'signatureUrl': 'sdfsdf',
    //   'name': '1000010001',
    //   'title': '1000010001',
    //   'date': '20190817'
    // }
    // this.$post('/api/merchant-official/add', tmpTest).then(res => {
    //   console.log('test http=>res', res)
    // })
    if (window.allInfo.hasOwnProperty('stepOne') && !isEmptyObj(window.allInfo.stepOne)) {
      this.stepOne.hasCode = window.allInfo.stepOne.hasCode
      this.stepOne.codeRadio = window.allInfo.stepOne.codeRadio
      this.stepOne.referralCode = window.allInfo.stepOne.referralCode
      this.stepOne.country = window.allInfo.stepOne.country
    }
  },
  watch: {
    'stepOne.codeRadio': function (curVal) {
      console.log('hasCode=>curVal', curVal)
      curVal === 'yes' ? this.stepOne.hasCode = true : this.stepOne.hasCode = false
    },
    'stepOne.hasCode': function (curVal) {
      if (!curVal) { // referralCode
        this.stepOne.referralCode = ''
      }
    }
  },
  methods: {
    go () {
      this.$refs['stepOne'].validate((valid) => {
        if (valid) {
          window.allInfo.stepOne.codeRadio = this.stepOne.codeRadio
          window.allInfo.stepOne.hasCode = this.stepOne.hasCode
          window.allInfo.stepOne.referralCode = this.stepOne.referralCode
          window.allInfo.stepOne.country = this.stepOne.country
          this.$router.push({name: 'step02'})
        } else {
          console.log('cannot go next step!!')
          return false
        }
      })
    },
    countrySelect (country) {
      console.log('$event', country)
      this.stepOne.country = country
    }
  }
}
</script>

<style scoped lang="less">
  @import '../assets/css/common.css';
  .inp-code {
    width: 100px;
    /*margin-left: 20px;*/
    margin: 5px 0 15px 0;
  }
  /*.my-step-title{*/
  /*padding-top: 68px;*/
  /*margin: 0;*/
  /*margin-bottom: 57px;*/
  /*}*/
  .el-progress{
    margin-bottom: 37px;
  }
  .select{
    padding-top: 0;
    margin-bottom: 21px;
  }
  .el-radio-group{
    overflow: hidden;
    .my-radio{
      width: 100%;
      height: 19px;
      margin: 10px 0;
    }
    .next-btn{
      margin-top: 20px;
      width: 100%;
      height: 20px;
    }
  }

</style>
