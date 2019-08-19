<template>
  <div>
    <p class="my-step-title">Step 4 of 10 </p>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="40"></el-progress>
    <p class="BsInfo">Business Information</p>
    <el-form :model="stepFour" ref="stepFour" :rules="rules">
      <!--测试布局-->
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item prop="dbaName">
            <div class="grid-content bg-purple">
              <p class="item-title">Merchants DBA Name(Doing Business As)/Outlet Name<span class="must-label">*</span></p>
              <el-input v-model="stepFour.dbaName"></el-input>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="legalName">
            <div class="grid-content bg-purple">
              <p class="item-title">Merchant's Legal Name<span class="must-label"></span><span class="must-label">*</span></p>
              <el-input v-model="stepFour.legalName"></el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title">Street Address</p>
              <el-input v-model="stepFour.streetAddrBus"></el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title">Address Line2</p>
              <el-input v-model="stepFour.addrLineBus"></el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title">City</p>
              <el-input v-model="stepFour.cityBus"></el-input>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title">State/Province/Region</p>
              <el-input v-model="stepFour.stateBus"></el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title">ZIP/Postal Code</p>
              <el-input v-model="stepFour.zipBus"></el-input>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title">Country</p>
              <country-selector @onCountrySelect="countryBusSelect($event)" :cur-country="stepFour.countryBus"></country-selector>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <span class="item-title">Mailing Address</span>
              <el-checkbox v-model="stepFour.sameAddr">Mailing Address Same</el-checkbox>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20"  v-show="!stepFour.sameAddr">
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title">Street Address</p>
              <el-input v-model="stepFour.streetAddrMail"></el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" v-show="!stepFour.sameAddr">
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title">Address Line2</p>
              <el-input v-model="stepFour.addrLineMail"></el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" v-show="!stepFour.sameAddr">
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title">City</p>
              <el-input v-model="stepFour.cityMail"></el-input>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title">State/Province/Region</p>
              <el-input v-model="stepFour.stateMail"></el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" v-show="!stepFour.sameAddr">
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title">ZIP/Postal Code</p>
              <el-input v-model="stepFour.zipMail"></el-input>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title">Country</p>
              <country-selector  @onCountrySelect="countryMailSelect($event)" :cur-country="stepFour.countryMail"></country-selector>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="refundNotice">Note: for statements & chargeback notifications - if different than physical</div>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item prop="contactName">
            <div class="grid-content bg-purple">
              <p class="item-title">Contact Name at this Address<span class="must-label">*</span></p>
              <el-input v-model="stepFour.contactName"></el-input>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="phone">
            <div class="grid-content bg-purple">
              <p class="item-title">Customer Service Phone Number<span class="must-label">*</span></p>
              <el-input v-model="stepFour.phone"></el-input></div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title">Fax Number</p>
              <el-input v-model="stepFour.fax"></el-input>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title">Telephone Number Ext.</p>
              <el-input v-model="stepFour.telphone"></el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item prop="email">
            <div class="grid-content bg-purple">
              <p class="item-title">Email Address<span class="must-label">*</span></p>
              <el-input v-model="stepFour.email"></el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>

      <!--测试布局结束-->
      <!--<el-form-item prop="dbaName">-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :span="12"><div class="grid-content bg-purple">-->
            <!--<p class="item-title">Merchants DBA Name(Doing Business As)/Outlet Name<span class="must-label">*</span></p>-->
            <!--<el-input v-model="stepFour.dbaName"></el-input>-->
          <!--</div></el-col>-->
          <!--<el-col :span="12" prop="legalName"><div class="grid-content bg-purple">-->
            <!--<p class="item-title">Merchant's Legal Name<span class="must-label">*</span></p>-->
            <!--<el-input v-model="stepFour.legalName"></el-input>-->
          <!--</div>-->
          <!--</el-col>-->
        <!--</el-row></el-form-item>-->
      <!--<el-form-item>-->
        <!--<el-row :gutter="20">-->
        <!--<el-col :span="12"><div class="grid-content bg-purple">-->
          <!--<p class="item-title">Street Address</p>-->
          <!--<el-input v-model="stepFour.streetAddrBus"></el-input>-->
        <!--</div></el-col>-->
      <!--</el-row>-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :span="12"><div class="grid-content bg-purple">-->
            <!--<p class="item-title">Address Line2</p>-->
            <!--<el-input v-model="stepFour.addrLineBus"></el-input>-->
          <!--</div></el-col>-->
        <!--</el-row>-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :span="12"><div class="grid-content bg-purple">-->
            <!--<p class="item-title">City</p>-->
            <!--<el-input v-model="stepFour.cityBus"></el-input>-->
          <!--</div></el-col>-->
          <!--<el-col :span="12"><div class="grid-content bg-purple">-->
            <!--<p class="item-title">State/Province/Region</p>-->
            <!--<el-input v-model="stepFour.stateBus"></el-input>-->
          <!--</div></el-col>-->
        <!--</el-row>-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :span="12"><div class="grid-content bg-purple">-->
            <!--<p class="item-title">ZIP/Postal Code</p>-->
            <!--<el-input v-model="stepFour.zipBus"></el-input>-->
          <!--</div></el-col>-->
          <!--<el-col :span="12"><div class="grid-content bg-purple">-->
            <!--<p class="item-title">Country</p>-->
            <!--&lt;!&ndash;<el-input v-model="countryBUS"></el-input>&ndash;&gt;-->
            <!--<country-selector @onCountrySelect="countryBusSelect($event)" :cur-country="stepFour.countryBus"></country-selector>-->
          <!--</div></el-col>-->
        <!--</el-row>-->
        <!--<div class="refundNotice">Note: for statements & chargeback notifications - if different than physical</div>-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :span="12"><div class="grid-content bg-purple">-->
            <!--<span class="item-title">Mailing Address</span>-->
            <!--<el-checkbox v-model="stepFour.sameAddr">Mailing Address Same</el-checkbox>-->
          <!--</div></el-col>-->
        <!--</el-row>-->
      <!--</el-form-item>-->
      <!--<el-form-item v-show="!stepFour.sameAddr">-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :span="12"><div class="grid-content bg-purple">-->
            <!--<p class="item-title">Street Address</p>-->
            <!--<el-input v-model="stepFour.streetAddrMail"></el-input>-->
          <!--</div></el-col>-->
        <!--</el-row>-->
      <!--</el-form-item>-->
      <!--<el-form-item v-show="!stepFour.sameAddr">-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :span="12"><div class="grid-content bg-purple">-->
            <!--<p class="item-title">Address Line2</p>-->
            <!--<el-input v-model="stepFour.addrLineMail"></el-input>-->
          <!--</div></el-col>-->
        <!--</el-row>-->
      <!--</el-form-item>-->
      <!--<el-form-item  v-show="!stepFour.sameAddr">-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :span="12"><div class="grid-content bg-purple">-->
            <!--<p class="item-title">City</p>-->
            <!--<el-input v-model="stepFour.cityMail"></el-input>-->
          <!--</div></el-col>-->
          <!--<el-col :span="12"><div class="grid-content bg-purple">-->
            <!--<p class="item-title">State/Province/Region</p>-->
            <!--<el-input v-model="stepFour.stateMail"></el-input>-->
          <!--</div></el-col>-->
        <!--</el-row>-->
      <!--</el-form-item>-->
      <!--<el-form-item v-show="!stepFour.sameAddr">-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :span="12"><div class="grid-content bg-purple">-->
            <!--<p class="item-title">ZIP/Postal Code</p>-->
            <!--<el-input v-model="stepFour.zipMail"></el-input>-->
          <!--</div></el-col>-->
          <!--<el-col :span="12"><div class="grid-content bg-purple">-->
            <!--<p class="item-title">Country</p>-->
            <!--<country-selector  @onCountrySelect="countryMailSelect($event)" :cur-country="stepFour.countryMail"></country-selector>-->
          <!--</div></el-col>-->
        <!--</el-row>-->
        <!--<div class="refundNotice">Note: for statements & chargeback notifications - if different than physical</div>-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :span="12"><div class="grid-content bg-purple">-->
            <!--<p class="item-title">Contact Name at this Address<span class="must-label">*</span></p>-->
            <!--<el-input v-model="stepFour.contactName"></el-input>-->
          <!--</div></el-col>-->
          <!--<el-col :span="12"><div class="grid-content bg-purple">-->
            <!--<p class="item-title">Customer Service Phone Number<span class="must-label">*</span></p>-->
            <!--<el-input v-model="stepFour.phone"></el-input>-->
          <!--</div></el-col>-->
        <!--</el-row>-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :span="12"><div class="grid-content bg-purple">-->
            <!--<p class="item-title">Fax Number</p>-->
            <!--<el-input v-model="stepFour.fax"></el-input>-->
          <!--</div></el-col>-->
          <!--<el-col :span="12"><div class="grid-content bg-purple">-->
            <!--<p class="item-title">Telephone Number Ext.</p>-->
            <!--<el-input v-model="stepFour.telphone"></el-input>-->
          <!--</div></el-col>-->
        <!--</el-row>-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :span="12"><div class="grid-content bg-purple">-->
            <!--<p class="item-title">Email Address<span class="must-label">*</span></p>-->
            <!--<el-input v-model="stepFour.email"></el-input>-->
          <!--</div></el-col>-->
        <!--</el-row>-->
      <!--</el-form-item>-->
    </el-form>
    <hr>
    <el-button class="previous-btn" @click="back()">Previous</el-button>
    <el-button type="primary"  class="next-btn" @click="go()">Next</el-button>
  </div>
</template>

<script>
import CountrySelector from '../components/CountrySelector/Index'
import {isEmptyObj} from '../components/utils/common'
export default {
  components: {CountrySelector},
  data () {
    return {
      stepFour: {
        dbaName: '', // y
        legalName: '', // y
        streetAddrBus: '', // Bus：business info的地址信息
        addrLineBus: '',
        cityBus: '',
        stateBus: '',
        zipBus: '',
        countryBus: '',
        streetAddrMail: '', // mail：mailing address info
        addrLineMail: '',
        cityMail: '',
        stateMail: '',
        zipMail: '',
        countryMail: '',
        contactName: '', // 联系人信息 // y
        telphone: '', // 新增，frank相应改
        phone: '', // y
        fax: '',
        email: '', // y
        sameAddr: true
      },
      rules: {
        dbaName: [
          { required: true, message: '请输入dbaName', trigger: 'blur' }
        ],
        legalName: [
          { required: true, message: '请输入legalName', trigger: 'blur' }
        ],
        contactName: [
          { required: true, message: '请输入contactName', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入phone', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入email', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    if (window.allInfo.hasOwnProperty('stepFour') && !isEmptyObj(window.allInfo.stepFour)) {
      this.stepFour.dbaName = window.allInfo.stepFour.dbaName
      this.stepFour.legalName = window.allInfo.stepFour.legalName
      this.stepFour.streetAddrBus = window.allInfo.stepFour.streetAddrBus
      this.stepFour.addrLineBus = window.allInfo.stepFour.addrLineBus
      this.stepFour.cityBus = window.allInfo.stepFour.cityBus
      this.stepFour.stateBus = window.allInfo.stepFour.stateBus
      this.stepFour.zipBus = window.allInfo.stepFour.zipBus
      this.stepFour.countryBus = window.allInfo.stepFour.countryBus
      this.stepFour.streetAddrMail = window.allInfo.stepFour.streetAddrMail
      this.stepFour.addrLineMail = window.allInfo.stepFour.addrLineMail
      this.stepFour.cityMail = window.allInfo.stepFour.cityMail
      this.stepFour.stateMail = window.allInfo.stepFour.stateMail
      this.stepFour.zipMail = window.allInfo.stepFour.zipMail
      this.stepFour.countryMail = window.allInfo.stepFour.countryMail
      this.stepFour.contactName = window.allInfo.stepFour.contactName
      this.stepFour.telphone = window.allInfo.stepFour.telphone
      this.stepFour.phone = window.allInfo.stepFour.phone
      this.stepFour.fax = window.allInfo.stepFour.fax
      this.stepFour.email = window.allInfo.stepFour.email
      this.stepFour.sameAddr = window.allInfo.stepFour.sameAddr
    }
  },
  watch: {
    'stepFour.sameAddr': function (curVal) {
      console.log('stepFour.sameAddr=>curVal', curVal)
    }
  },
  methods: {
    countryBusSelect (country) {
      console.log('$event', country)
      this.stepFour.countryBus = country
    },
    countryMailSelect (country) {
      this.stepFour.countryMail = country
    },
    go () {
      this.$refs['stepFour'].validate((valid) => {
        if (valid) {
          window.allInfo.stepFour.dbaName = this.stepFour.dbaName
          window.allInfo.stepFour.legalName = this.stepFour.legalName
          window.allInfo.stepFour.streetAddrBus = this.stepFour.streetAddrBus
          window.allInfo.stepFour.addrLineBus = this.stepFour.addrLineBus
          window.allInfo.stepFour.cityBus = this.stepFour.cityBus
          window.allInfo.stepFour.stateBus = this.stepFour.stateBus
          window.allInfo.stepFour.zipBus = this.stepFour.zipBus
          window.allInfo.stepFour.countryBus = this.stepFour.countryBus
          window.allInfo.stepFour.streetAddrMail = this.stepFour.streetAddrMail
          window.allInfo.stepFour.addrLineMail = this.stepFour.addrLineMail
          window.allInfo.stepFour.cityMail = this.stepFour.cityMail
          window.allInfo.stepFour.stateMail = this.stepFour.stateMail
          window.allInfo.stepFour.zipMail = this.stepFour.zipMail
          window.allInfo.stepFour.countryMail = this.stepFour.countryMail
          window.allInfo.stepFour.contactName = this.stepFour.contactName
          window.allInfo.stepFour.telphone = this.stepFour.telphone
          window.allInfo.stepFour.phone = this.stepFour.phone
          window.allInfo.stepFour.fax = this.stepFour.fax
          window.allInfo.stepFour.email = this.stepFour.email
          window.allInfo.stepFour.sameAddr = this.stepFour.sameAddr
          this.$router.push({name: 'step05'})
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
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .refundNotice{
    margin-bottom: 30px;
  }
  .grid-content{
    line-height: 36px;
  }
  .BsInfo{
    margin-bottom: 20px;
  }
</style>
