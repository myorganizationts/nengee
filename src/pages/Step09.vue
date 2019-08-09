<template>
    <div>
        <p class="my-step-title">Step 9 of 10</p>
        <el-progress
            :text-inside="true"
            :stroke-width="26"
            :percentage="90"
        ></el-progress>
        <p class="Review">Review</p>
        <div class="iframe">
            <iframe
                src="../../static/pdfjs/web/viewer.html"
                width="90%"
                height="500"
            ></iframe>
        </div>
        <div class="checkBox">
            <el-checkbox v-model="checked"
                >The information on the PDF is all corrected
            </el-checkbox>
        </div>
        <div class="signatureWall">
            <el-row>
                <el-col :span="6"
                    ><div class="grid-content bg-purple">
                        <p class="item-title item-style">
                            Swift Code<span class="must-label">*</span>
                        </p>
                      </div
                ></el-col>
            </el-row>
            <span  class="try">Try Again</span>
        </div>
        <div class="box"></div>
        <hr />
        <el-button class="previous-btn" @click="back()">Previous</el-button>
        <el-button type="primary" class="next-btn" @click="go()"
            >Next</el-button
        >
    </div>
</template>

<script>
export default {
    name: "Step09",
    data() {
        return {
            checked: true
        };
    },
    methods: {
        go() {
            this.$router.push({ name: "step10" });
        },
        back() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped lang="less">
@import "../assets/css/common.css";
.Review {
    text-align: center;
    margin-bottom: 30px;
}
.iframe {
    margin-left: 50px;
    margin-bottom: 20px;
}
hr {
    margin-top: 50px;
}
.checkBox {
    margin-left: 50px;
}
.signatureWall{
  margin-top: 20px;
  margin-left: 50px;
  height: 20px;
  width: 100%;

}
.el-col-6{
  width: 120px;
}
.el-row{
  float: left;
  line-height: 20px;
}
.try{
 float: left;
  margin-left: 150px;
  font-size: 13px;
  height: 20px;
  line-height: 20px;
  color: #212121;
}
.box{
  width: 360px;
  height: 150px;
  border: 1px solid #cccccc;
  background-color: #ccc;
  margin-top: 20px;
  margin-left: 50px;
}
</style>
