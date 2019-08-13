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
        <el-checkbox v-model="agreeNext">I acknowledge that I have read and agree to the above</el-checkbox>
        <hr />
        <el-button class="previous-btn" @click="back()">Previous</el-button>
        <el-button type="primary" class="next-btn" @click="go()" :disabled="isDisabled">Next</el-button>
    </div>
</template>

<script>
export default {
  name: 'Step01',
  data () {
    return {
      isDisabled: true,
      agreeNext: false
    }
  },
  computed: {
  },
  watch: {
    // 同意协议，才能下一步
    agreeNext (newVal, oldVal) {
      newVal ? this.isDisabled = false : this.isDisabled = true
    }
  },
  mounted () {
  },
  methods: {
    go () {
      this.$router.push({ name: 'step03' })
    },
    back () {
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
