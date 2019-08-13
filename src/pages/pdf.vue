<template>
    <div class="pdf">
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
                                        >备选项</el-checkbox
                                    >
                                </li>
                                <li>
                                    <el-checkbox v-model="checked"
                                        >备选项</el-checkbox
                                    >
                                </li>
                                <li>
                                    <el-checkbox v-model="checked"
                                        >备选项</el-checkbox
                                    >
                                </li>
                                <li>
                                    <el-checkbox v-model="checked"
                                        >备选项</el-checkbox
                                    >
                                </li>
                                <li>
                                    <el-checkbox v-model="checked"
                                        >备选项</el-checkbox
                                    >
                                </li>
                                <li>
                                    <el-checkbox v-model="checked"
                                        >备选项</el-checkbox
                                    >
                                </li>
                                <li>
                                    <el-checkbox v-model="checked"
                                        >备选项</el-checkbox
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
                            <p>Complete description of business and goods or services sold:</p>
                            <span></span>
                        </li>
                        <li>
                            <span></span>
                        </li>
                        <li>
                            <ul class="money">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </li>
                    </ul>
                </dl>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "pdf",
    data() {
        return {
            checked: true,
            checked1: true,
            formLabelAlign: {
                name: "",
                region: "",
                type: ""
            }
        };
    }
};
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
    background: #58bc58;
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
    width: 540px;
    height: 130px;
    border: 2px solid black;
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
    height: 800px;
    background: yellow;
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
    height: 1000px;
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
.businessmanImage {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 1);
    height: 80px;
}
.businessmanImage_l {
    width: 60%;
    float: left;
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
    width: 25%;
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
    width: 40%;
}
.describe{
    height: 90px;
    width: 100%;
}
.describe li{
    height: 30px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(0, 0, 0, 1);
}
.describe li:nth-child(3){
    border-bottom: none;
}
.describe li P{
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    width: 100%;
}
/* 不同样式的td */
</style>
