<template>
 <div>
   <p class="my-step-title">Step 3 of 10 </p>
   <el-progress :text-inside="true" :stroke-width="26" :percentage="30"></el-progress>
   <p style="margin-bottom: 30px">Service and Fee Schedule</p>
   <el-form :model="stepThree" ref="stepThree" :rules="rules">
     <el-form-item prop="offlineRates">
       <p style="margin: 0;padding: 0">The Service Fee shall be applied at the rate set forth in the table below:</p>
       <p style="">Offline Processing Rate<span class="must-label">*</span></p>
       <el-row :gutter="20">
         <el-checkbox-group v-model="stepThree.offlineRates">
           <el-col :span="8" class="offline-rate">
             <el-checkbox label="alipayOffline">Alipay offline</el-checkbox>
             <el-input size="mini"
                       class="inp"
                       placeholder="2.3%"
                       :disabled="!hasItem(stepThree.offlineRates, 'alipayOffline')"
                       v-model="stepThree.alipayOfflineRate"
             ></el-input>
           </el-col>
           <el-col :span="8" class="offline-rate"><div>
             <el-checkbox label="wechatpayOffline">WeChatPay Offline</el-checkbox>
             <el-input size="mini"
                       class="inp"
                       placeholder="1.8%"
                       :disabled="!hasItem(stepThree.offlineRates, 'wechatpayOffline')"
                       v-model="stepThree.wechatpayOfflineRate"
             ></el-input>
           </div></el-col>
           <el-col :span="8" class="offline-rate"><div>
             <el-checkbox label="unionpayQrcode">UnionPay QR Code</el-checkbox>
             <el-input size="mini"
                       class="inp"
                       placeholder="2.3%"
                       :disabled="!hasItem(stepThree.offlineRates, 'unionpayQrcode')"
                       v-model="stepThree.unionpayQrcodeRate"
             ></el-input>
           </div></el-col>
         </el-checkbox-group>
       </el-row>
     </el-form-item>
     <el-form-item>
       <p>Do you need Online API (For Ecommerce Only)<span class="must-label">*</span></p>
       <el-radio-group v-model="stepThree.onlineAPI" class="radio-group">
         <div class="my-radio"><el-radio label="yes">Yes</el-radio></div>
         <div class="my-radio"><el-radio label="no">No</el-radio></div>
       </el-radio-group>
     </el-form-item>
     <!--<el-form-item prop="onlineRates" :required="stepThree.needOnlineAPI">-->
     <el-form-item prop="onlineRates">
       <div v-show="stepThree.needOnlineAPI">
         <p>Online Processing Rate<span class="must-label">*</span></p>
         <el-row :gutter="20">
           <el-checkbox-group v-model="stepThree.onlineRates" >
             <el-col :span="8" class="offline-rate">
               <el-checkbox label="alipayOnline">Alipay Online</el-checkbox>
               <el-input size="mini"
                         class="inp"
                         placeholder="2.3%"
                         :disabled="!hasItem(stepThree.onlineRates, 'alipayOnline')"
                         v-model="stepThree.alipayOnlineRate"
               ></el-input>
             </el-col>
             <el-col :span="8" class="offline-rate"><div>
               <el-checkbox label="wechatpayOnline">WeChatPay Online</el-checkbox>
               <el-input size="mini"
                         class="inp"
                         placeholder="1.8%"
                         :disabled="!hasItem(stepThree.onlineRates, 'wechatpayOnline')"
                         v-model="stepThree.wechatpayOnlineRate"
               ></el-input>
             </div></el-col>
             <el-col :span="8" class="offline-rate"><div>
               <el-checkbox label="unionpayOnline">UnionPay Online</el-checkbox>
               <el-input size="mini"
                         class="inp"
                         placeholder="2.3%"
                         :disabled="!hasItem(stepThree.onlineRates, 'unionpayOnline')"
                         v-model="stepThree.unionpayOnlineRate"
               ></el-input>
             </div></el-col>
           </el-checkbox-group>
         </el-row>
       </div>
     </el-form-item>
     <el-form-item v-show="stepThree.needOnlineAPI">
       <p>Website Address(Require for Internet Merchant)</p>
       <el-input v-model="stepThree.website"></el-input>
     </el-form-item>
     <el-form-item>
       <p>Settlement Fee</p>
       <el-input v-model="stepThree.settlementFee" style="background: #E6E6E6;width: 300px" placeholder="$0.30 Per Batch"></el-input>
     </el-form-item>
     <el-form-item>
       <p>Settlement Period</p>
       <el-checkbox-group v-model="stepThree.settlementPeriod">
         <el-checkbox label="daily">Daily</el-checkbox>
         <el-checkbox label="every100">Every $100</el-checkbox>
       </el-checkbox-group>
     </el-form-item>
   </el-form>
   <div class="note">
     <el-row :gutter="20">
       <el-col :span="1"><div style="">Note:</div></el-col>
       <el-col :span="23"><div>
         The Service Fee shall be payable and deducted from Funds Available for Settlement on the same Working Day that the Funds Available for Settlement are paid to the Company.
       </div></el-col>
     </el-row>
     <el-row :gutter="20" style="margin-top: 10px">
       <el-col :span="23" :offset="1"><div>
         "Aggregate Payment Amount" means the aggregate total of all Payments submintted during the relevant period.
       </div></el-col>
     </el-row>
   </div>
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
      stepThree: {
        offlineRates: [],
        alipayOffline: 0,
        alipayOfflineRate: 0,
        wechatpayOffline: 0,
        wechatpayOfflineRate: 0,
        unionpayQrcode: 0,
        unionpayQrcodeRate: 0,
        onlineAPI: 'yes',
        onlineRates: [],
        alipayOnline: 0,
        alipayOnlineRate: 0,
        wechatpayOnline: 0,
        wechatpayOnlineRate: 0,
        unionpayOnline: 0,
        unionpayOnlineRate: 0,
        website: '',
        needOnlineAPI: true, // 不传后端的
        settlementFee: '',
        settlementPeriod: []
      },
      rules: {
        offlineRates: [
          {required: true, message: '请选择Offline Processing Rate', trigger: 'blur'}
        ],
        onlineRates: [
          {required: true, message: '请选择Online Processing Rate', trigger: 'blur'}
        ]
      }
    }
  },
  watch: {
    'stepThree.onlineAPI': function (curVal) {
      if (curVal === 'yes') {
        this.stepThree.needOnlineAPI = true
        this.rules.onlineRates = {required: true, message: '请选择Online Processing Rate', trigger: 'blur'}
      } else {
        this.stepThree.needOnlineAPI = false
        this.rules.onlineRates = {required: false, message: '请选择Online Processing Rate', trigger: 'blur'} // 重新赋值？
      }
      console.log('stepThree.onlineAPI=>vurVal', curVal)
      console.log('this.stepThree.needOnlineAPI', this.stepThree.needOnlineAPI)
    }
  },
  created () {
    if (window.allInfo.hasOwnProperty('stepThree') && !isEmptyObj(window.allInfo.stepThree)) {
      this.stepThree.offlineRates = window.allInfo.stepThree.offlineRates
      this.stepThree.alipayOfflineRate = window.allInfo.stepThree.alipayOfflineRate
      this.stepThree.wechatpayOfflineRate = window.allInfo.stepThree.wechatpayOfflineRate
      this.stepThree.unionpayQrcodeRate = window.allInfo.stepThree.unionpayQrcodeRate
      this.stepThree.onlineAPI = window.allInfo.stepThree.onlineAPI
      this.stepThree.onlineRates = window.allInfo.stepThree.onlineRates
      this.stepThree.alipayOnlineRate = window.allInfo.stepThree.alipayOnlineRate
      this.stepThree.wechatpayOnlineRate = window.allInfo.stepThree.wechatpayOnlineRate
      this.stepThree.unionpayOnlineRate = window.allInfo.stepThree.unionpayOnlineRate
      this.stepThree.website = window.allInfo.stepThree.website
      this.stepThree.settlementFee = window.allInfo.stepThree.settlementFee
      this.stepThree.settlementPeriod = window.allInfo.stepThree.settlementPeriod
      this.stepThree.needOnlineAPI = window.allInfo.stepThree.needOnlineAPI
    }
  },
  methods: {
    hasItem (arr, item) {
      if (Object.prototype.toString.call(arr) === '[object Array]') {
        if (arr.indexOf(item) !== -1) {
          return true
        } else {
          return false
        }
      } else {
        alert('arr not a array')
      }
    },
    go () {
      this.$refs['stepThree'].validate((valid) => {
        if (valid) {
          window.allInfo.stepThree.offlineRates = this.stepThree.offlineRates
          window.allInfo.stepThree.alipayOfflineRate = this.stepThree.alipayOfflineRate
          window.allInfo.stepThree.wechatpayOfflineRate = this.stepThree.wechatpayOfflineRate
          window.allInfo.stepThree.unionpayQrcodeRate = this.stepThree.unionpayQrcodeRate
          window.allInfo.stepThree.onlineAPI = this.stepThree.onlineAPI
          window.allInfo.stepThree.onlineRates = this.stepThree.onlineRates
          window.allInfo.stepThree.alipayOnlineRate = this.stepThree.alipayOnlineRate
          window.allInfo.stepThree.wechatpayOnlineRate = this.stepThree.wechatpayOnlineRate
          window.allInfo.stepThree.unionpayOnlineRate = this.stepThree.unionpayOnlineRate
          window.allInfo.stepThree.website = this.stepThree.website
          window.allInfo.stepThree.settlementFee = this.stepThree.settlementFee
          window.allInfo.stepThree.settlementPeriod = this.stepThree.settlementPeriod
          window.allInfo.stepThree.needOnlineAPI = this.stepThree.needOnlineAPI
          this.$router.push({name: 'step04'})
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
  .offline-rate{
    display: inline-flex;
    .inp{
      width: 70px;
      padding-left: 10px;
    }
  }
  .note{
    color: #4A4A4A;
    font-family: DINNextLTPro-Regular;
    font-size: 14px;
    margin: 30px 0;
  }
  .radio-group{
    margin-bottom: 20px;
    .my-radio{
      padding-top: 5px;
    }
  }
  p{
    padding-top: 0;
    margin-bottom: 10px;
    height: 22px;
    line-height: 22px;
  }
  .el-progress{
    margin-bottom: 20px;
  }
  .el-progress-bar__outer{
    margin-bottom: 20px;
  }
  .el-input{
    margin-bottom: 10px;
  }
</style>
