<template>
    <div class="pdf">
      <button type="button" v-on:click="getPdf()">导出pdf</button>
        <div id="pdfDom">
          <div class="head">
            <div class="head_l">
              <img src="../assets/imgs/yuansfer_LOGO.png" alt="" />
              <ul class="informationTitle">
                <li>
                  <i class="el-icon-location"></i>
                  <p>NEW YORK,USA,LOS ANGELES,USA,GUANGZHOU,CHINA</p>
                </li>
                <li>
                  <i class="el-icon-circle-plus-outline"></i>
                  <p>WWW.YUANSFER.COM</p>
                </li>
                <li>
                  <i class="el-icon-phone"></i>
                  <p>(855) 982-6888</p>
                </li>
              </ul>
            </div>
            <div class="head_r">
              <h3>Documentation Checklist</h3>
              <div class="head_r_title">
                <el-checkbox v-model="checked"
                >A copy of business License or certificate or
                  registration</el-checkbox
                >
                <br />
                <el-checkbox v-model="checked1"
                >A copy of business void check</el-checkbox
                >
                <br />
                <el-checkbox v-model="checked"
                >A copy of government issued ID of a C-level executive
                  or manager (EX. Driver License)</el-checkbox
                >
                <br />
                <el-checkbox v-model="checked"
                >2 indoor pictures and 1 outdoor picture of business
                  physical location</el-checkbox
                >
                <br />
              </div>
            </div>
          </div>
          <div class="main">
            <div class="main-title">
              <span>Page 1 of 1</span>
              <h2>MERCHANT APPLICATION FORM</h2>
            </div>
            <div class="formInformation">
              <dl class="formHead">
                <dt>BUSINESS INFORMATION</dt>
                <dd>
                  <el-form
                    :label-position="labelPosition"
                    label-width="240px"
                    :model="formLabelAlign"
                  >
                    <el-form-item
                      label="Merchant’s DBA Name/Outlet Name:"
                    >
                      <el-input
                        v-model="formLabelAlign.name"
                        style="margin-left:0px;"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                </dd>
                <dd>
                  <el-form
                    :label-position="labelPosition"
                    label-width="240px"
                    :model="formLabelAlign"
                  >
                    <el-form-item
                      label="Merchant’s DBA Name/Outlet Name:"
                    >
                      <el-input
                        v-model="formLabelAlign.name"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                </dd>
                <dd>
                  <el-form
                    :label-position="labelPosition"
                    label-width="240px"
                    :model="formLabelAlign"
                  >
                    <el-form-item
                      label="Merchant’s DBA Name/Outlet Name:"
                    >
                      <el-input
                        v-model="formLabelAlign.name"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                </dd>
                <dd>
                  <el-form
                    :label-position="labelPosition"
                    label-width="240px"
                    :model="formLabelAlign"
                  >
                    <el-form-item
                      label="Merchant’s DBA Name/Outlet Name:"
                    >
                      <el-input
                        v-model="formLabelAlign.name"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                </dd>
                <dd>
                  <el-form
                    :label-position="labelPosition"
                    label-width="240px"
                    :model="formLabelAlign"
                  >
                    <el-form-item
                      label="Merchant’s DBA Name/Outlet Name:"
                    >
                      <el-input
                        v-model="formLabelAlign.name"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                </dd>
                <dd>
                  <el-form
                    :label-position="labelPosition"
                    label-width="240px"
                    :model="formLabelAlign"
                  >
                    <el-form-item
                      label="Merchant’s DBA Name/Outlet Name:"
                    >
                      <el-input
                        v-model="formLabelAlign.name"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                </dd>
                <dd>
                  <div class="segmentation">
                    <el-form
                      :label-position="labelPosition"
                      label-width="120px"
                      :model="formLabelAlign"
                    >
                      <el-form-item
                        label="Contact Name at this Address:"
                      >
                        <el-input
                          v-model="formLabelAlign.name"
                        ></el-input>
                      </el-form-item>
                    </el-form>
                  </div>
                  <div class="segmentation">
                    <el-form
                      :label-position="labelPosition"
                      label-width="120px"
                      :model="formLabelAlign"
                    >
                      <el-form-item
                        label="Contact Name at this Address:"
                      >
                        <el-input
                          v-model="formLabelAlign.name"
                        ></el-input>
                      </el-form-item>
                    </el-form>
                  </div>
                </dd>
                <dd>
                  <div class="segmentation">
                    <el-form
                      :label-position="labelPosition"
                      label-width="120px"
                      :model="formLabelAlign"
                    >
                      <el-form-item
                        label="Contact Name at this Address:"
                      >
                        <el-input
                          v-model="formLabelAlign.name"
                        ></el-input>
                      </el-form-item>
                    </el-form>
                  </div>
                  <div class="segmentation">
                    <el-form
                      :label-position="labelPosition"
                      label-width="120px"
                      :model="formLabelAlign"
                    >
                      <el-form-item
                        label="Contact Name at this Address:"
                      >
                        <el-input
                          v-model="formLabelAlign.name"
                        ></el-input>
                      </el-form-item>
                    </el-form>
                  </div>
                </dd>
                <dd>
                  <el-form
                    :label-position="labelPosition"
                    label-width="240px"
                    :model="formLabelAlign"
                  >
                    <el-form-item
                      label="Merchant’s DBA Name/Outlet Name:"
                    >
                      <el-input
                        v-model="formLabelAlign.name"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                </dd>
                <dd>
                  <el-form
                    :label-position="labelPosition"
                    label-width="240px"
                    :model="formLabelAlign"
                  >
                    <el-form-item
                      label="Merchant’s DBA Name/Outlet Name:"
                    >
                      <el-input
                        v-model="formLabelAlign.name"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                </dd>
              </dl>
              <dl class="formHead">
                <dt>MERCHANT PROFILE</dt>
                <div class="businessmanImage">
                  <div class="businessmanImage_l">
                    <ul>
                      <li class="ownership">
                        Type of Ownership:
                      </li>
                      <li>
                        <el-checkbox v-model="checked"
                        >Sole Proprietor</el-checkbox
                        >
                      </li>
                      <li>
                        <el-checkbox v-model="checked"
                        >Partnership</el-checkbox
                        >
                      </li>
                      <li>
                        <el-checkbox v-model="checked"
                        >Professional Assoc.</el-checkbox
                        >
                      </li>
                      <li>
                        <el-checkbox v-model="checked"
                        >Corporation</el-checkbox
                        >
                      </li>
                      <li>
                        <el-checkbox v-model="checked"
                        >Tax Exempt Org</el-checkbox
                        >
                      </li>
                      <li>
                        <el-checkbox v-model="checked"
                        >Tax Exempt Org</el-checkbox
                        >
                      </li>
                      <li>
                        <el-checkbox v-model="checked"
                        >Other:</el-checkbox
                        >
                      </li>
                    </ul>
                    <div class="businessmanImage_l_b">
                      <p>Business Established Date:</p>
                      <span></span>
                    </div>
                    <div class="businessmanImage_l_b">
                      <p>Business Established Date:</p>
                      <span></span>
                    </div>
                  </div>
                  <div class="businessmanImage_r"></div>
                </div>
                <ul class="describe">
                  <li>
                    <p>
                      Complete description of business and goods or
                      services sold:
                    </p>
                    <span>123</span>
                  </li>
                  <li>
                    <span>123</span>
                  </li>
                  <li>
                    <div class="money">
                      <p class="title">Annual Sales:</p>
                      <span>$1</span>
                    </div>
                    <div class="money">
                      <p class="title">Average Ticket:</p>
                      <span>$2</span>
                    </div>
                    <div class="money">
                      <p class="title">Max Ticket:</p>
                      <span>$3</span>
                    </div>
                  </li>
                </ul>
              </dl>
              <dl class="formHead">
                <dt>OWNER / OFFICER INFORMATION</dt>
                <div class="personnelInfo">
                  <ul class="personnelInfo_data">
                    <li>
                      <p>Owner/Officer Name (#1)</p>
                      <span></span>
                    </li>
                    <li>
                      <p>Title</p>
                      <span></span>
                    </li>
                    <li>
                      <p>Date of Birth:</p>
                      <span></span>
                    </li>
                    <li>
                      <p>Contact Number:</p>
                      <span></span>
                    </li>
                  </ul>
                  <ul class="personnelInfo_data">
                    <li>
                      <p>Owner/Officer Name (#2)</p>
                      <span></span>
                    </li>
                    <li>
                      <p>Title</p>
                      <span></span>
                    </li>
                    <li>
                      <p>Date of Birth:</p>
                      <span></span>
                    </li>
                    <li>
                      <p>Contact Number:</p>
                      <span></span>
                    </li>
                  </ul>
                </div>
              </dl>
              <dl class="formHead">
                <dt>
                  BANK INFORMATION (Complete Section and Attach Voided
                  Check or Bank Letter)
                </dt>
                <div class="bankInfo">
                  <ul class="bankInfo_data">
                    <li>
                      <p>Bank Name:</p>
                      <span></span>
                    </li>
                    <li>
                      <p>Account Number:</p>
                      <span></span>
                    </li>
                    <li>
                      <p>Routing Number:</p>
                      <span></span>
                    </li>
                    <li>
                      <p>Swift Code:</p>
                      <span></span>
                    </li>
                  </ul>
                  <ul class="bankInfo_data bankInfo_data_1">
                    <li>
                      <p>Bank Address:</p>
                      <span></span>
                    </li>
                    <li>
                      <p>City:</p>
                      <span></span>
                    </li>
                    <li>
                      <p>State:</p>
                      <span></span>
                    </li>
                    <li>
                      <p>Zip Code:</p>
                      <span></span>
                    </li>
                  </ul>
                </div>
              </dl>
              <dl class="formHead">
                <dt>SERVICES AND FEE SCHEDULE</dt>
                <div class="serviceFeeList">
                  <ul class="serviceFeeList_data">
                    <li>
                      <p>Processing Rate: AliPay Online:</p>
                      <span></span>
                    </li>
                    <li>
                      <p>AliPay Online:</p>
                      <span></span>
                    </li>
                    <li>
                      <p>AliPay Offline:</p>
                      <span></span>
                    </li>
                    <li>
                      <p>WeChatPay Online:</p>
                      <span></span>
                    </li>
                    <li>
                      <p>WeChatPay Offline:</p>
                      <span></span>
                    </li>
                    <li>
                      <p>UnionPay Online:</p>
                      <span></span>
                    </li>
                  </ul>
                  <ul class="serviceFeeList_data">
                    <li>
                      <p>Statement Fee:</p>
                      <span>$0.00</span>
                    </li>
                    <li>
                      <p>Monthly Minimum Fee:</p>
                      <span>$0.00</span>
                    </li>
                    <li>
                      <p>Settlement Fee:</p>
                      <span>$0.30</span>
                    </li>
                    <li>
                      <p>Minimum Withdrawal:</p>
                      <span>$1.00</span>
                    </li>
                    <li class="optionBox">
                      <p>Settlement Period:</p>
                      <el-checkbox v-model="checked"
                      >备选项</el-checkbox
                      >
                      <el-checkbox v-model="checked"
                      >备选项</el-checkbox
                      >
                    </li>
                    <li>
                      <p>Authorization Fee</p>
                      <span>$0.00</span>
                    </li>
                  </ul>
                </div>
              </dl>
              <dl class="formHead">
                <dt>
                  ACCEPTANCE OF TERMS & CONDITIONS / MERCHANT
                  AUTHORIZATION
                </dt>
                <div class="protocol">
                  <p>
                    This Services Agreement is between Yuanex, Inc.
                    (“Yuansfer”) and the Merchant named above. Yuanex,
                    Inc., is a licensed sales partners of China
                    UnionPay, Alipay, and Wechat Pay. A copy of the
                    Services Terms and Conditions has been provided to
                    you. Please sign below to signify that you have
                    received a copy of the Services Terms and Conditions
                    and that you agreeto all terms and conditions
                    contained therein. If this Merchant Application is
                    accepted for China UnionPay card services, Alipay
                    payment services, and / or Wechat Pay services,
                    Merchant Application and the Services Terms and
                    agrees to comply with the Merchant Coditions as may
                    be modified or amended in the future. IF THE
                    MERCHANT SUBMITS A TRANSACTION TO YUANEX, INC.,
                    HEREUNDER, MERCHANT WILL BE DEEMED TO HAVE ACCEPTED
                    THE YUANEX SERVICES TERMS AND CONDITIONS.
                  </p>
                  <p>
                    By your signature below on behalf of Merchant, you
                    certify that all information provided in this
                    Merchant Application is true and accurate and you
                    authorize Yuansfer, INC., to : (a) initiate debit
                    entries to Merchant’s checking account(s) in
                    accordance with the Card Services Terms and
                    Conditions, (b) initiate debit entries to Merchant’s
                    checking account(s) for the fees described herein,
                    and (c) order a consumer credit report on the
                    Merchant.
                  </p>
                </div>
                <div class="protocolTitle">
                  <ul>
                    <li>
                      <p>Merchant’s Signature:</p>
                      <!--<span>1</span>-->
                      <img src="../assets/imgs/name1.png" alt="" style="width: 80px;height: 26px">
                    </li>
                    <li>
                      <p>Name (printed):</p>
                      <span>2</span>
                    </li>
                    <li>
                      <p>title:</p>
                      <span>3</span>
                    </li>
                    <li>
                      <p>data:</p>
                      <span>4</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>Merchant’s Signature:</p>
                      <span>1</span>
                    </li>
                    <li>
                      <p>Name (printed):</p>
                      <span>2</span>
                    </li>
                    <li>
                      <p>title:</p>
                      <span>3</span>
                    </li>
                    <li>
                      <p>data:</p>
                      <span>4</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>Signing for Yuansfer, Inc.:</p>
                      <span>1</span>
                    </li>
                    <li>
                      <p>Name (printed):</p>
                      <span>2</span>
                    </li>
                    <li>
                      <p>title:</p>
                      <span>3</span>
                    </li>
                    <li>
                      <p>data:</p>
                      <span>4</span>
                    </li>
                  </ul>
                </div>
              </dl>
              <dl class="formHead">
                <dt>PRODUCTS</dt>
                <div class="product">
                  <ul>
                    <li>
                      <p>Gateway(s) Ordered:</p>
                      <span></span>
                    </li>
                    <li>
                      <el-checkbox v-model="checked">AliPay</el-checkbox>
                    </li>
                    <li>
                      <el-checkbox v-model="checked">WeChatPay</el-checkbox>
                    </li>
                    <li>
                      <el-checkbox v-model="checked">UnionPay</el-checkbox>
                    </li>
                  </ul>
                </div>
              </dl>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'pdf',
  data () {
    return {
      labelPosition: '',
      htmlTitle: 'YuansferForm',
      checked: true,
      checked1: true,
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  }
}
</script>
<style>
ul,
li {
    list-style: none;
}
.pdf::before {
    clear: both;
}
.pdf {
    width: 900px;
    height: 1000px;
    margin: auto;
    padding-top: 23px;
}
/* 头部部分 */
.head {
    overflow: hidden;
}
.head_l {
    float: left;
    height: 100%;
    width: 350px;
}
.head_l img {
    width: 300px;
    height: 100px;
    vertical-align: middle;
}
.informationTitle {
    width: 100%;
    margin-left: 10px;
    overflow: hidden;
}
.informationTitle li {
    height: 20px;
    width: 100%;
    line-height: 20px;
    overflow: hidden;
    margin-bottom: 2px;
}
.informationTitle li i {
    /* float: left; */
    display: inline-block;
    color: #47a2ff;
    width: 16px;
    height: 16px;
    font-size: 16px;
    line-height: 20px;
}
.informationTitle li p {
    /* float: left; */
    display: inline-block;
    height: 20px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
    font-size: 10px;
}
.head_r {
    float: left;
    width: 546px;
    height: 130px;
    border: 2px solid #000000;
    margin-top: 15px;
}
.head_r h3 {
    height: 18px;
    font-size: 16px;
    font-family: TimesNewRomanPS-BoldMT;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.87);
    line-height: 18px;
    margin-left: 25px;
}
.el-checkbox {
    margin-left: 5px;
    padding: 3px 0;
}
.el-checkbox__label {
    color: rgba(0, 0, 0, 0.87);
    font-size: 12px;
}
/* 内容表达部分 */
.main {
    width: 100%;
    margin-bottom: 50px;
}
.main-title {
    width: 100%;
    height: 30px;
}
.main-title span {
    float: left;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.87);
    font-family: TimesNewRomanPSMT;
    padding-top: 10px;
}
.main-title h2 {
    float: left;
    color: rgba(0, 0, 0, 0.87);
    line-height: 30px;
    font-size: 20px;
    margin-left: 200px;
}
.formInformation {
    width: 100%;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 1);
}
.formHead {
    width: 100%;
    overflow: hidden;
}
.formHead dt {
    height: 28px;
    line-height: 30px;
    padding-left: 10px;
    background: #6b6e6a;
    color: #fff;
    font-size: 18px;
}
.formHead dd {
    float: left;
    height: 60px;
    box-sizing: border-box;
    width: 50%;
    font-size: 12px;
    position: relative;
    border-right: 1px solid rgba(0, 0, 0, 1);
    border-bottom: 1px solid rgba(0, 0, 0, 1);
}
.formHead dd:nth-child(odd) {
    border-right: 0;
}
.el-form-item__label {
    text-align: right;
    vertical-align: middle;
    /* float: left; */
    float: none;
    font-size: 13px;
    color: #606266;
    width: 100px;
    line-height: 24px;
    padding: 0;
    /* padding: 0 12px 0 0; */
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.el-form-item {
    margin-bottom: 0;
}
.el-form-item__content {
    line-height: 40px;
    /* position: relative; */
    /* font-size: 14px; */
    width: 180px;
    /* float: right; */
    margin-left: 5px !important;
}
.el-input__inner {
    height: 24px;
}
.segmentation {
    float: left;
    width: 50%;
    height: 60px;
    box-sizing: border-box;
}
.segmentation:nth-child(odd) {
    border-right: 1px solid rgba(0, 0, 0, 1);
}
/* 商人形象部分样式 */
.businessmanImage {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 1);
    height: 80px;
    box-sizing: border-box;
}
.businessmanImage_l {
    width: 67%;
    float: left;
    box-sizing: border-box;
    height: 100%;
    border-right: 1px solid rgba(0, 0, 0, 1);
}
.businessmanImage_l ul {
    height: 40px;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 1);
}
.businessmanImage_l ul li {
    float: left;
    height: 20px;
    line-height: 20px;
    width: 23%;
    margin-left: 10px;
}
.businessmanImage_l_b {
    overflow: hidden;
}
.businessmanImage_l_b p {
    float: left;
    color: #000000;
    font-size: 12px;
    margin-left: 5px;
}
.businessmanImage_l_b span {
    float: left;
    font-size: 12px;
    color: #000000;
}
.el-checkbox {
    padding: 0;
}
.ownership {
    font-weight: bold;
    font-size: 12px;
}
.businessmanImage_r {
    float: left;
    height: 100%;
    width: 33%;
}
.describe {
    height: 90px;
    width: 100%;
}
.describe li {
    height: 30px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(0, 0, 0, 1);
}
.describe li:nth-child(3) {
    border-bottom: none;
}
.describe li p {
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    margin-left: 10px;
}
.describe li span {
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    margin-left: 10px;
}
.money {
    overflow: hidden;
    height: 30px;
    width: 33.3%;
    float: left;
}
.title {
    float: left;
}
/* 人员信息部分 */
.personnelInfo {
    width: 100%;
    margin-bottom: 20px;
}
.personnelInfo_data {
    height: 50px;
    border-bottom: 1px solid #000000;
}
.personnelInfo_data li {
    float: left;
    padding-top: 5px;
    padding-left: 5px;
    font-size: 12px;
}
.personnelInfo_data li:nth-child(1) {
    width: 38%;
}
.personnelInfo_data li:nth-child(2),
.personnelInfo_data li:nth-child(3),
.personnelInfo_data li:nth-child(4) {
    width: 18%;
}
/* 银行资料 */
.bankInfo {
}
.bankInfo_data {
    height: 50px;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 1);
}
.bankInfo_data li {
    float: left;
    margin-left: 5px;
    font-size: 12px;
}
.bankInfo_data li:nth-child(1) {
    width: 35%;
}
.bankInfo_data li:nth-child(2),
.bankInfo_data li:nth-child(3),
.bankInfo_data li:nth-child(4) {
    width: 20%;
}
.bankInfo_data_1 {
    height: 30px;
}
/* 收费列表 */
.serviceFeeList_data {
    height: 50px;
    border-bottom: 1px solid #000000;
}
.serviceFeeList_data li {
    float: left;
    width: 23%;
    margin-left: 5px;
    margin-bottom: 5px;
    font-size: 12px;
}
.serviceFeeList_data li p {
    display: inline-block;
}
.optionBox {
    width: 40% !important;
}
/* 协议部分 */
.protocol {
    margin-left: 10px;
    margin-bottom: 60px;
}
.protocol p {
    font-size: 12px;
    line-height: 20px;
}
.protocol p:nth-child(1) {
    border-bottom: 1px solid rgba(0, 0, 0, 1);
    margin-bottom: 5px;
}
.protocolTitle{
    margin-left: 10px;
}
.protocolTitle ul{
    height: 60px;
    width: 100%;
}
.protocolTitle ul li{
    height: 42px;
    width: 22%;
    float: left;
    margin-right: 10px;
    border-bottom: 1px solid rgba(192,192,192,1);
    font-size: 12px;
}
.protocolTitle ul li p{
    font-weight: bold;
    margin-bottom: 2px;
}
.product ul{
    height: 40px;
}
.product ul li{
    float: left;
    width: 18%;
    margin-left: 10px;
    line-height: 40px;
    font-size: 13px;
}
.product ul li:nth-child(1){
    width: 35% !important;
}
</style>
