<template>
 <div>
   <p class="my-step-title">Step 3 of 10 </p>
   <el-progress :text-inside="true" :stroke-width="26" :percentage="30"></el-progress>
   <p style="margin-bottom: 30px">Service and Fee Schedule</p>
   <p style="margin: 0;padding: 0">The Service Fee shall be applied at the rate set forth in the table below:</p>
   <p style="">Offline Processing Rate<span class="must-label">*</span></p>
   <el-row :gutter="20">
     <el-checkbox-group v-model="checkList">
       <el-col :span="8" class="offline-rate">
         <el-checkbox label="alipayOffline">Alipay offline</el-checkbox>
         <el-input size="mini" class="inp" placeholder="2.3%" :disabled="true"></el-input>
       </el-col>
       <el-col :span="8" class="offline-rate"><div>
         <el-checkbox label="wechatpayOffline">WeChatPay Offline</el-checkbox>
         <el-input size="mini" class="inp" placeholder="1.8%" :disabled="true"></el-input>
       </div></el-col>
       <el-col :span="8" class="offline-rate"><div>
         <el-checkbox label="unionpayQRCode">UnionPay QR Code</el-checkbox>
         <el-input size="mini" class="inp" placeholder="2.3%" :disabled="true"></el-input>
       </div></el-col>
     </el-checkbox-group>
   </el-row>
   <p>Do you need Online API (For Ecommerce Only)<span class="must-label">*</span></p>
   <el-radio-group v-model="onlineAPI" class="radio-group">
     <div class="my-radio"><el-radio label="yes">Yes</el-radio></div>
     <div class="my-radio"><el-radio label="no">No</el-radio></div>
   </el-radio-group>
   <div v-show="needOnlineAPI">
     <p>Online Processing Rate</p>
     <el-row :gutter="20">
       <el-checkbox-group v-model="checkList">
         <el-col :span="8" class="offline-rate">
           <el-checkbox label="alipayOnline">Alipay Online</el-checkbox>
           <el-input size="mini" class="inp" placeholder="2.3%" :disabled="true"></el-input>
         </el-col>
         <el-col :span="8" class="offline-rate"><div>
           <el-checkbox label="wechatpayOffline">WeChatPay Online</el-checkbox>
           <el-input size="mini" class="inp" placeholder="1.8%" :disabled="true"></el-input>
         </div></el-col>
         <el-col :span="8" class="offline-rate"><div>
           <el-checkbox label="unionpayQRCode">UnionPay Online</el-checkbox>
           <el-input size="mini" class="inp" placeholder="2.3%" :disabled="true"></el-input>
         </div></el-col>
       </el-checkbox-group>
     </el-row>
     <p>Website Address(Require for Internet Merchant)</p>
     <el-input v-model="webSite"></el-input>
   </div>
   <p>Settlement Fee</p>
   <el-input v-model="settlementFee" style="background: #E6E6E6;width: 300px" placeholder="$0.30 Per Batch"></el-input>
   <p>Settlement Period</p>
   <el-checkbox-group v-model="checkList">
     <el-checkbox label="dailyOn">Daily</el-checkbox>
     <el-checkbox label="every100">Every $100</el-checkbox>
   </el-checkbox-group>
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
export default {
  data () {
    return {
      checkList: ['unionpayQRCode'],
      serviceFee: '',
      onlineAPI: 'yes',
      needOnlineAPI: true,
      onlineServiceFee: '',
      webSite: '',
      settlementFee: ''
    }
  },
  watch: {
    onlineAPI (curVal) {
      curVal === 'yes' ? this.needOnlineAPI = true : this.needOnlineAPI = false
    }
  },
  methods: {
    go () {
      this.$router.push({name: 'step04'})
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
