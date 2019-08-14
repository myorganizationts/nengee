<template>
  <div class="main-body">
    <p class="my-step-title">Step 1 of 10 </p>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="10"></el-progress>
    <div>
      <p class="select">Select Country<span class="must-label">*</span></p>
      <country-selector @onCountrySelect="countrySelect($event)"></country-selector>
      <p>Do you have a referral code?<span class="must-label">*</span></p>
      <el-radio-group v-model="codeRadio" class="radio-group">
        <div class="my-radio"><el-radio label="yes">Yes</el-radio></div>
        <div class="my-radio"><el-radio label="no">No</el-radio></div>
      </el-radio-group>
      <el-row :gutter="20" v-show="hasCode">
        <el-col :span="12">
          <div style="">Code<span class="must-label">*</span></div>
          <el-input v-model="referralCode"  class="inp-code" size="mini" placeholder="referral code"></el-input>
        </el-col>
      </el-row>
      <hr>
      <el-button type="primary"  class="next-btn" @click="go()">Next</el-button>
    </div>
  </div>
</template>

<script>
import CountrySelector from '../components/CountrySelector/Index'
// import { mapState } from 'vuex'
export default {
  components: {CountrySelector},
  data () {
    return {
      codeRadio: 'no',
      hasCode: false,
      referralCode: '',
      country: null
    }
  },
  computed: {
  },
  mounted () {
  },
  watch: {
    codeRadio (curVal) {
      console.log('hasCode=>curVal', curVal)
      curVal === 'yes' ? this.hasCode = true : this.hasCode = false
    }
  },
  methods: {
    go () {
      this.$router.push({name: 'step02'})
    },
    countrySelect (country) {
      console.log('$event', country)
      this.country = country
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
