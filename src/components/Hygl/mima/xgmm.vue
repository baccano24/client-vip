<template>
  <div>
    <p class="xiaoxi">
      消息中心
      <span>
        <b style="color:#ff5b58;">【优惠】</b>
        <span>111</span>
      </span>
    </p>
    <div class="com_title">
      杭州鑫中警广告有限公司
      <span>会员登录名：4564685</span>
    </div>
    <div class="change">
      <div class="change_left fl">
        <h2>修改登录密码</h2>
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="100px"
          class="demo-ruleForm"
          prefix-icon="el-icon-date"
        >
          <el-form-item label="新密码：" prop="pass">
            <el-input
              type="password"
              placeholder="密码由6-20个英文字母（区分大小写）"
              v-model="ruleForm2.pass"
              autocomplete="off"
              prefix-icon="el-icon-date"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认新密码：" prop="checkPass">
            <el-input
              type="password"
              placeholder="请再输入一遍您的新密码"
              v-model="ruleForm2.checkPass"
              autocomplete="off"
              prefix-icon="el-icon-date"
            ></el-input>
          </el-form-item>
          
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">确认修改</el-button>
            <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
          </el-form-item>
        </el-form>
      </div>
      <div class="change_right fr">
        <h2>修改密码提示信息</h2>
        <el-form label-width="100px" style="text-align: left;">
          <el-form-item
            label="密码提示问题："
            class="admin_con q_name"
            v-for="item in admin"
            :key="item.id"
          >
            <input type="text" :value="item.com_name" placeholder="当您忘记密码，可以通过“提示答案”取回密码!">
          </el-form-item>
          <el-form-item
            label="密码提示答案："
            class="admin_con q_name"
            v-for="item in admin"
            :key="item.id"
          >
            <input type="text" :value="item.com_name">
          </el-form-item>
          <el-button type="primary" @click="submitForm2">确认修改</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// Admin信息模拟api接口
import { getAdmin } from "../../../api/admin_qg";
import change_bg from "../../../assets/images/change_mima.png";
export default {
  name: "Xgmm",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      change_bg: change_bg,
      // Admin
      admin: [],
      ruleForm2: {
        pass: "",
        checkPass: ""
      },
      rules2: {
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  created() {
    axios.get("qgxx/fabu").then(res => {
      console.log(res.data);
      this.admin = res.data;
    });
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submitForm2() {
      alert("submit!");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.com_title {
  line-height: 60px;
  font-size: 20px;
  text-align: left;
  text-indent: 1em;
  font-weight: 900;
}
.com_title span {
  font-size: 12px;
  margin-left: 50px;
  font-weight: 100;
}
.change {
  overflow: hidden;
  margin-top: 50px;
  box-sizing: border-box;
  padding: 0 30px;
}
.change h2 {
  font-weight: 100;
  font-size: 15px;
  text-align: left;
  margin-bottom: 60px;
}
.change_left {
  width: 40%;
  height: 300px;
}
.change_right {
  width: 45%;
  height: 300px;
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
.q_name {
  position: relative;
}
.q_name::before {
  content: "*";
  color: #f56c6c;
  position: absolute;
  top: 10px;
  left: -8px;
}
</style>
