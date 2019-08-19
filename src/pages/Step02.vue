<template>
    <div>
        <p class="my-step-title">Step 2 of 10</p>
        <el-progress
            :text-inside="true"
            :stroke-width="26"
            :percentage="20"
        ></el-progress>
        <h3>Terms and Conditions</h3>
        <div class="iframe">
            <!--<pdf src="../../static/pdf/agreement.pdf"></pdf>-->
            <iframe
                src="../../static/pdfjs/web/viewer.html"
                width="90%"
                height="500"
            ></iframe>
        </div>
        <el-checkbox v-model="stepTwo.agreeNext">I acknowledge that I have read and agree to the above</el-checkbox>
        <hr />
        <el-button class="previous-btn" @click="back()">Previous</el-button>
        <el-button type="primary" class="next-btn" @click="go()" :disabled="stepTwo.isDisabled">Next</el-button>
    </div>
</template>

<script>
import {isEmptyObj} from '../components/utils/common'
export default {
  data () {
    return {
      stepTwo: {
        agreeNext: false,
        isDisabled: true
      }
    }
  },
  computed: {
  },
  watch: {
    // 同意协议，才能下一步
    'stepTwo.agreeNext': function (newVal) {
      newVal ? this.stepTwo.isDisabled = false : this.stepTwo.isDisabled = true
    }
  },
  created () {
    if (window.allInfo.hasOwnProperty('stepTwo') && !isEmptyObj(window.allInfo.stepTwo)) {
      this.stepTwo.agreeNext = window.allInfo.stepTwo.agreeNext
    }
  },
  mounted () {
  },
  methods: {
    go () {
      window.allInfo.stepTwo.agreeNext = this.stepTwo.agreeNext
      this.$router.push({ name: 'step03' })
    },
    back () {
      window.allInfo.stepTwo.agreeNext = null // 故意设定为null
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
@import "../assets/css/common.css";
.el-progress--text-inside .el-progress-bar {
    padding-right: 0;
    margin-right: 0;
    margin-bottom: 32px;
}
p {
    padding-top: 0;
}
h3 {
    text-align: center;
    height: 24px;
    line-height: 24px;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 26px;
    margin-top: 32px;
}
.iframe {
    margin-bottom: 50px;
}
iframe {
    display: inline-block;
    margin-left: 50px;
}
.el-checkbox{
  margin-left: 50px;
  margin-bottom: 30px;
}
.el-checkbox__input{
  padding-left: 20px;
}
</style>
