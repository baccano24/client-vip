<template>
  <div class="hylx">
    <div class="tk">
      <div class="tk_wrap"></div>
      <div class="tk_con">
        <h1>修改成功，您的信息已提交审核！</h1>
        <p>
          您修改的信息将在24小时内审核，如遇节假日，审核时间将顺延！
          <br>装备通VIP会员的信息优先审核。
          <a
            href="https://www.tezhongzhuangbei.com/zbt_youshi.html"
            target="_blank"
            style="color:#0179f1;"
          >查看装备通优势</a>
        </p>
        <el-button type="danger" @click="sure">返回会员详细信息</el-button>
      </div>
    </div>
    <p class="xiaoxi">
      消息中心
      <span>
        <b style="color:#ff5b58;">【优惠】</b>
        <span>111</span>
      </span>
    </p>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="fbqg-ruleForm"
      style="text-align: left;"
    >
      <div class="admin_list" v-for="item in admin" :key="item.id">
        <el-form-item label="您的姓名：" class="com_name">
          <span style="line-height:40px;">{{item.com_name}}</span>
        </el-form-item>
        <el-form-item label="性别：" class="com_name2">
          <span style="line-height:40px;">{{item.com_name}}</span>
        </el-form-item>
        <el-form-item label="您的职位：" class="admin_con">
          <input type="text" :value="item.com_name">
        </el-form-item>
        <el-form-item label="所在省份：" class="com_name">
          <span style="line-height:40px;">{{item.com_name}}</span>
        </el-form-item>
        <el-form-item label="所在城市：" class="com_name">
          <span style="line-height:40px;">{{item.com_name}}</span>
        </el-form-item>
        <el-form-item label="详细地址：" class="com_name admin_con">
          <input type="text" :value="item.com_name" placeholder="请填写街道、门牌号！">
        </el-form-item>
        <el-form-item label="邮政编码：" class="admin_con">
          <input type="text" :value="item.com_name">
        </el-form-item>
        <el-form-item label="电话：" class="com_name2 admin_con tel">
          <input type="text" :value="item.com_name">
          <input type="text" :value="item.com_name">
          <input type="text" :value="item.com_name">
        </el-form-item>
        <el-form-item label="电话：" class="com_name2 admin_con tel">
          <input type="text" :value="item.com_name">
          <input type="text" :value="item.com_name">
          <input type="text" :value="item.com_name">
        </el-form-item>
        <el-form-item label="手机：" class="admin_con">
          <input type="text" :value="item.com_name">
        </el-form-item>
        <el-form-item label="QQ：" class="admin_con">
          <input type="text" :value="item.com_name">
        </el-form-item>
        <el-form-item label="网址：" class="admin_con">
          <input type="text" :value="item.com_name" placeholder="格式如“www.xxx.com”!">
        </el-form-item>
        <el-form-item label="E-Mail：" class="admin_con com_name3" >
          <input type="text" :value="item.com_name" placeholder="请正确填写电子邮件，以便客户联系!">
        </el-form-item>
        <el-form-item label="商铺客服QQ[1]：" class="admin_con">
          <input type="text" :value="item.com_name">
        </el-form-item>
        <el-form-item label="商铺客服名称[1]：" class="admin_con">
          <input type="text" :value="item.com_name">
        </el-form-item>
        <el-form-item label="商铺客服QQ[2]：" class="admin_con">
          <input type="text" :value="item.com_name">
        </el-form-item>
        <el-form-item label="商铺客服名称[2]：" class="admin_con">
          <input type="text" :value="item.com_name">
        </el-form-item>
        <el-form-item label="商铺客服QQ[3]：" class="admin_con">
          <input type="text" :value="item.com_name">
        </el-form-item>
        <el-form-item label="商铺客服名称[3]：" class="admin_con">
          <input type="text" :value="item.com_name">
        </el-form-item>
      </div>

      <el-button type="danger" @click="submitForm('ruleForm')">提交</el-button>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
// Admin信息模拟api接口
import { getAdmin } from "../../../api/admin_qg";
export default {
  name: "Hylx",
  components: {},
  data() {
    return {
      // Admin
      admin: [],
      // 表单数据
      ruleForm: {
        // 公司名称
        com_title: "",
        //产品介绍
        desc: "",
        // 图片文字附加
        upload: "",
        // 英文名
        english: "",
        // 公司类别
        com_type: [],
        // 主营类别
        main_categories: [],
        // 主营产品或服务
        service: ""
      },
      // 表单验证
      rules: {
        desc: [
          { required: false, message: "产品介绍不能为空" },
          { min: 20, message: "长度不得少于20个字符", trigger: "blur" }
        ],
        com_type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个公司类型",
            trigger: "change"
          }
        ],
        main_categories: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个主营类别",
            trigger: "change"
          }
        ],
        service: [
          { required: true, message: "请输入产品名称", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    axios.get("qgxx/fabu").then(res => {
      // console.log(res.data);
      this.admin = res.data;
    });
  },
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
    },
    handleChange(value) {
      //   console.log(value);
    },
    // 上传图片
    handleRemove(file, fileList) {
      //   console.log(file, fileList);
    },
    handlePreview(file) {
      //   console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    // 富文本编辑器---------------------------------
    onEditorBlur() {
      //失去焦点事件
    },
    onEditorFocus() {
      //获得焦点事件
    },
    onEditorChange() {
      //内容改变事件
    },
    // 表单验证
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          $(".tk").css("display", "block");
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 弹框确认按钮
    sure() {
      window.location.reload();
    }
  }
};
</script>

<style scoped>
h1,
p {
  text-align: left;
}
h1 {
  font-size: 25px;
  width: 100%;
  line-height: 60px;
  background: #fff;
  box-sizing: border-box;
}

.el-main {
  background-color: #b3c0d1;
}
.el-aside {
  background-color: #d3dce6;
  position: absolute;
  right: 0;
  top: 140px;
  bottom: 0;
}
.fbqg_con {
  background-color: #fff;
  position: absolute;
  right: 220px;
  left: 240px;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding-top: 0;
}
.fbqg_con ul {
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
}
.fbqg_con ul li {
  float: left;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  margin-right: 20px;
  cursor: pointer;
  border-bottom: 3px solid #2b5a8c;
}
.tabs {
  line-height: 35px;
}
.fbqg_con ul .active {
  border-bottom: 3px solid #479dff !important;
  color: #479dff;
}
/* guanjian_box */
.guanjian_box {
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
}
.admin_con input {
  color: #b3c0d1;
  border-radius: 4px;
  border: 1px solid #b3c0d1;
  width: 270px;
  color: #b7c4cb;
  height: 35px;
  border-color: #b7c4cb;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
}
.com_name {
  position: relative;
}
.com_name::before {
  content: "*";
  color: #f56c6c;
  position: absolute;
  top: 10px;
  left: 40px;
}
.com_name2 {
  position: relative;
}
.com_name2::before {
  content: "*";
  color: #f56c6c;
  position: absolute;
  top: 10px;
  left: 70px;
}
.com_name3 {
  position: relative;
}
.com_name3::before {
  content: "*";
  color: #f56c6c;
  position: absolute;
  top: 10px;
  left: 55px;
}
.el-checkbox {
  color: #b2c0c8;
}
.el-message-box {
  width: 590px;
  height: 330px;
  text-align: center;
  box-sizing: border-box;
  padding: 0 55px;
}

.el-message-box__message p {
  text-indent: 2em;
  color: #2b5a8c;
}
.tk {
  display: none;
}
.tk_wrap {
  background: #999;
  opacity: 0.5;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.tk_con {
  border: 1px solid #fff;
  border-radius: 5px;
  width: 460px;
  height: 300px;
  background: #fff;
  z-index: 9999;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 20px 50px;
}
.tk h1 {
  margin-top: 30px;
  line-height: 100px;
  text-align: center;
}
.tk p {
  text-indent: 2em;
  line-height: 20px;
  font-size: 14px;
}
.tk .el-button {
  margin: 40px 0;
  font-size: 15px;
  padding: 10px 20px;
}
.tel input:nth-of-type(1){
    width: 30px;
}
.tel input:nth-of-type(2){
    width: 50px;
}
.tel input:nth-of-type(3){
    width: 120px;
}
</style>
