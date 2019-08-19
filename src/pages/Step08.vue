<template>
    <div>
        <p class="my-step-title">Step 8 of 10</p>
        <el-progress
            :text-inside="true"
            :stroke-width="26"
            :percentage="80"
        ></el-progress>
        <p class="BkInfo">Upload Photo:</p>
      <el-form :rules="rules" :model="stepEight" ref="stepEight">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item>
              <div class="grid-content bg-purple">
                <p class="item-title">Upload 3 Months Bank Statement</p>
                <el-upload
                  class="upload-demo"
                  @on-success="handleUploadSuccess"
                  @on-error="handleUploadError"
                  drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple
                >
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">
                    将文件拖到此处，或<em>点击上传</em>
                  </div>
                </el-upload>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item>
              <div class="grid-content bg-purple">
                <p class="item-title">Upload Government Issued ID</p>
                <el-upload
                  class="upload-demo"
                  drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                  @on-success="handleUploadSuccess"
                  multiple
                >
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">
                    将文件拖到此处，或<em>点击上传</em>
                  </div>
                </el-upload>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item>
              <div class="grid-content bg-purple">
                <p class="item-title">Upload Interior Company Photo</p>
                <el-upload
                  class="upload-demo"
                  :on-success="handleUploadSuccess()"
                  :on-error="handleUploadError()"
                  drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple
                >
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">
                    将文件拖到此处，或<em>点击上传</em>
                  </div>
                </el-upload>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item>
              <div class="grid-content bg-purple">
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
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item>
              <div class="grid-content bg-purple">
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
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item>
              <div class="grid-content bg-purple">
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
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item>
              <div class="grid-content bg-purple">
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
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item>
              <div class="grid-content bg-purple">
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
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
        <hr />
        <el-button class="previous-btn" @click="back()">Previous</el-button>
        <el-button type="primary" class="next-btn" @click="go()"
            >Next</el-button
        >
    </div>
</template>

<script>
import {isEmptyObj} from '../components/utils/common'
export default {
  data () {
    return {
      stepEight: {
        bankStatementUrl: '',
        issuedIdUrl: '',
        interiorCompanyUrl: '',
        exteriorCompanyUrl: '',
        companyLogoUrl: '',
        companyProductUrl: '',
        voidCheckUrl: '',
        businessLicenseUrl: '',
        action: '' // 图片上传地址 不保存的
      },
      rules: {}
    }
  },
  created () {
    if (window.allInfo.hasOwnProperty('stepEight') && !isEmptyObj(window.allInfo.stepEight)) {
      this.stepEight.bankStatementUrl = window.allInfo.stepEight.bankStatementUrl
      this.stepEight.issuedIdUrl = window.allInfo.stepEight.issuedIdUrl
      this.stepEight.interiorCompanyUrl = window.allInfo.stepEight.interiorCompanyUrl
      this.stepEight.exteriorCompanyUrl = window.allInfo.stepEight.exteriorCompanyUrl
      this.stepEight.companyLogoUrl = window.allInfo.stepEight.companyLogoUrl
      this.stepEight.companyProductUrl = window.allInfo.stepEight.companyProductUrl
      this.stepEight.voidCheckUrl = window.allInfo.stepEight.voidCheckUrl
      this.stepEight.businessLicenseUrl = window.allInfo.stepEight.businessLicenseUrl
      this.stepEight.action = window.allInfo.stepEight.action
    }
  },
  methods: {
    handleUploadSuccess (file, fileList) {
      console.log('handleUploadSuccess=>file', file)
      console.log('handleUploadSuccess=>fileList', fileList)
    },
    handleUploadError (file, fileList) {
      console.log('handleUploadError=>file', file)
      console.log('handleUploadError=>fileList', fileList)
    },
    go () {
      this.$refs['stepEight'].validate((valid) => {
        console.log('valid', valid)
        if (valid) {
          window.allInfo.stepEight.bankStatementUrl = this.stepEight.bankStatementUrl
          window.allInfo.stepEight.issuedIdUrl = this.stepEight.issuedIdUrl
          window.allInfo.stepEight.interiorCompanyUrl = this.stepEight.interiorCompanyUrl
          window.allInfo.stepEight.exteriorCompanyUrl = this.stepEight.exteriorCompanyUrl
          window.allInfo.stepEight.companyLogoUrl = this.stepEight.companyLogoUrl
          window.allInfo.stepEight.companyProductUrl = this.stepEight.companyProductUrl
          window.allInfo.stepEight.voidCheckUrl = this.stepEight.voidCheckUrl
          window.allInfo.stepEight.businessLicenseUrl = this.stepEight.businessLicenseUrl
          window.allInfo.stepEight.action = this.stepEight.action
          this.$router.push({ name: 'step09' })
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
