<template>
    <div>
        <p class="my-step-title">Step 8 of 10</p>
        <el-progress
            :text-inside="true"
            :stroke-width="26"
            :percentage="80"
        ></el-progress>
        <p class="BkInfo">Bank Information:</p>
        <el-row :gutter="20">
            <el-col :span="12"
                ><div class="grid-content bg-purple">
                    <p class="item-title">Upload 3 Months Bank Statement</p>
                    <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple
                    >
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">
                            将文件拖到此处，或<em>点击上传</em>
                        </div>
                    </el-upload>
                </div></el-col
            >
            <el-col :span="12"
                ><div class="grid-content bg-purple">
                    <p class="item-title">Upload Government Issued ID</p>
                    <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple
                    >
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">
                            将文件拖到此处，或<em>点击上传</em>
                        </div>
                    </el-upload>
                </div></el-col
            >
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12"
                ><div class="grid-content bg-purple">
                    <p class="item-title">Upload Interior Company Photo</p>
                    <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple
                    >
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">
                            将文件拖到此处，或<em>点击上传</em>
                        </div>
                    </el-upload>
                </div></el-col
            >
            <el-col :span="12"
                ><div class="grid-content bg-purple">
                    <p class="item-title">Upload Exterior Company Photo</p>
                    <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple
                    >
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">
                            将文件拖到此处，或<em>点击上传</em>
                        </div>
                    </el-upload>
                </div></el-col
            >
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12"
                ><div class="grid-content bg-purple">
                    <p class="item-title">Upload Company Logo Photo</p>
                    <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple
                    >
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">
                            将文件拖到此处，或<em>点击上传</em>
                        </div>
                    </el-upload>
                </div></el-col
            >
            <el-col :span="12"
                ><div class="grid-content bg-purple">
                    <p class="item-title">
                        Upload Company Service/Product Photo
                    </p>
                    <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple
                    >
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">
                            将文件拖到此处，或<em>点击上传</em>
                        </div>
                    </el-upload>
                </div></el-col
            >
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12"
                ><div class="grid-content bg-purple">
                    <p class="item-title">Upload Void Check</p>
                    <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple
                    >
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">
                            将文件拖到此处，或<em>点击上传</em>
                        </div>
                    </el-upload>
                </div></el-col
            >
            <el-col :span="12"
                ><div class="grid-content bg-purple">
                    <p class="item-title">
                        Upload Business license/certificate/registration of the
                        company
                    </p>
                    <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple
                    >
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">
                            将文件拖到此处，或<em>点击上传</em>
                        </div>
                    </el-upload>
                </div></el-col
            >
        </el-row>
        <hr />
        <el-button class="previous-btn" @click="back()">Previous</el-button>
        <el-button type="primary" class="next-btn" @click="go()"
            >Next</el-button
        >
    </div>
</template>

<script>
export default {
  data () {
    return {
      bankStatementURL: '',
      issuedIdURL: '',
      interiorCompanyURL: '',
      exteriorCompanyURL: '',
      companyLogoURL: '',
      companyProductURL: '',
      voidCheckURL: '',
      businessLicenseURL: ''
    }
  },
  methods: {
    go () {
      this.$router.push({ name: 'step09' })
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
@import "../assets/css/common.css";
hr {
    margin-top: 50px;
}
.BkInfo {
    margin-bottom: 15px;
}
.item-title {
    padding: 15px 0;
}
// .upload-demo {
//     width: 440px;
//     height: 100px;
//     background: rgba(242, 243, 244, 1);
//     opacity: 0.8;
//     position: relative;
// }
// .el-upload-dragger {
//     width: 300px;
//     height: 200px;
// }
// .el-upload-dragger {
//     background-color: #fff;
//     border: 1px dashed #d9d9d9;
//     border-radius: 6px;
//     -webkit-box-sizing: border-box;
//     box-sizing: border-box;
//     width: 380px;
//     height: 80px;
//     text-align: center;
//     position: absolute;
//     top: 0;
//     overflow: hidden;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     margin: auto;
// }
.el-upload-dragger .el-icon-upload {
    font-size: 50px;
    color: blue;
    margin: 40px 0 16px;
    line-height: 50px;
}
</style>
