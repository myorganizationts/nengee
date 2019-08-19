<template>
  <div>
    <p class="my-step-title">Step 6 of 10 </p>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="60"></el-progress>
    <p class="info">Owner / Officer Information:</p>
    <el-form :model="stepSix" ref="stepSix" :rules="rules">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item prop="ownerName1">
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Owner/ Officer Name(#1)<span class="must-label">*</span></p>
              <el-input v-model="stepSix.ownerName1"></el-input>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="tile1">
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Title<span class="must-label">*</span></p>
              <el-input v-model="stepSix.tile1"></el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item prop="birthDate1">
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Date Of Birth<span class="must-label">*</span></p>
              <el-input v-model="stepSix.birthDate1"></el-input>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="contactNum1">
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Contact Number<span class="must-label">*</span></p>
              <el-input v-model="stepSix.contactNum1"></el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Owner/ Officer Name(#2)</p>
              <el-input v-model="stepSix.ownerName2"></el-input>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Title</p>
              <el-input v-model="stepSix.tile2"></el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Date Of Birth</p>
              <el-input v-model="stepSix.birthDate2"></el-input>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <div class="grid-content bg-purple">
              <p class="item-title item-style">Contact Number</p>
              <el-input v-model="stepSix.contactNum2"></el-input>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
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
      stepSix: {
        ownerName1: '', // ST： first
        tile1: '',
        birthDate1: '',
        contactNum1: '',
        ownerName2: '', // ND： second
        tile2: '',
        birthDate2: '',
        contactNum2: ''
      },
      rules: {
        ownerName1: [{ required: true, message: '请输入ower', trigger: 'blur' }],
        tile1: [{ required: true, message: '请输入title', trigger: 'blur' }],
        birthDate1: [{ required: true, message: '请输入birthday', trigger: 'blur' }],
        contactNum1: [{ required: true, message: '请输入contact number', trigger: 'blur' }]
      }
    }
  },
  created () {
    if (window.allInfo.hasOwnProperty('stepSix') && !isEmptyObj(window.allInfo.stepSix)) {
      this.stepSix.ownerName1 = window.allInfo.stepSix.ownerName1
      this.stepSix.tile1 = window.allInfo.stepSix.tile1
      this.stepSix.birthDate1 = window.allInfo.stepSix.birthDate1
      this.stepSix.contactNum1 = window.allInfo.stepSix.contactNum1
      this.stepSix.ownerName2 = window.allInfo.stepSix.ownerName2
      this.stepSix.tile2 = window.allInfo.stepSix.tile2
      this.stepSix.birthDate2 = window.allInfo.stepSix.birthDate2
      this.stepSix.contactNum2 = window.allInfo.stepSix.contactNum2
    }
  },
  methods: {
    go () {
      this.$refs['stepSix'].validate((valid) => {
        if (valid) {
          window.allInfo.stepSix.ownerName1 = this.stepSix.ownerName1
          window.allInfo.stepSix.tile1 = this.stepSix.tile1
          window.allInfo.stepSix.birthDate1 = this.stepSix.birthDate1
          window.allInfo.stepSix.contactNum1 = this.stepSix.contactNum1
          window.allInfo.stepSix.ownerName2 = this.stepSix.ownerName2
          window.allInfo.stepSix.tile2 = this.stepSix.tile2
          window.allInfo.stepSix.birthDate2 = this.stepSix.birthDate2
          window.allInfo.stepSix.contactNum2 = this.stepSix.contactNum2
          this.$router.push({name: 'step07'})
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
  hr{
    margin-top: 50px;
  }
  .item-style{
    margin-bottom: 15px;
  }
  .el-col-12 {
    width: 50%;
    margin-bottom: 10px;
}
.info{
  margin-bottom: 10px;
}
</style>
