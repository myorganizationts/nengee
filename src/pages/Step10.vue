<template>
 <div>
   <p class="my-step-title">Step 10 of 10 </p>
   <el-progress :text-inside="true" :stroke-width="26" :percentage="100"></el-progress>
   <p class="commit">Download the PDF document</p>
   <div class="iframe">
     <iframe src="../../static/pdfjs/web/viewer.html"
     width="90%"
     height="500px"
     ></iframe>
     </div>
     <span>Note:you can also find you pdf</span>
   <hr>
   <el-button class="previous-btn" @click="back()">Previous</el-button>
   <el-button type="primary"  class="next-btn" @click="submit()">Submit</el-button>
 </div>
</template>

<script>
export default {
  name: 'Step01',
  methods: {
    submit () {
      this.$router.push({name: 'step10'})
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
  @import '../assets/css/common.css';
  .commit{
    text-align: center;
    margin-bottom:20px;
  }
  .iframe{
    margin-left: 50px;
    margin-bottom: 20px;
  }
  hr{
    margin-top: 50px;
  }
  span{
    display: block;
    margin-left: 50px;
    color: #212121
  }
</style>
