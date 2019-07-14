<template>
  <div class="login">
    <el-form
      :model="loginUser"
      status-icon
      :rules="rules"
      ref="loginUser"
      label-width="100px"
      class="register_con"
    >
      <h1>登录页面</h1>
      <el-form-item label="用户名：" prop="name">
        <el-input type="text" v-model="loginUser.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="pass">
        <el-input type="password" v-model="loginUser.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="选择身份" prop="region">
        <el-select v-model="loginUser.region" placeholder="请选择用户身份">
          <el-option label="管理员" value="guanliyuan"></el-option>
          <el-option label="员工" value="yuangong"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginUser')" style="margin-left:70px;">登录</el-button>
      </el-form-item>
      <b @click="goTo('/register')">去注册</b>
    </el-form>
    <vue-particles
      style="height:99%"
      class="bg_login"
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
export default {
  name: "Login",
  components: {},
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.loginUser.checkPass !== "") {
          this.$refs.loginUser.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      loginUser: {
        pass: "",
        checkPass: "",
        age: "",
        name: "",
        region: ""
      },
      rules: {
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }],
        region: [
          { required: true, message: "请选择用户身份", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios.post("/user/login", this.loginUser).then(res => {
            //   登录成功,存储到localStorage
            const { token } = res.data;
            localStorage.setItem("eleToken", token);

            // 解析token
            const decode = jwt_decode(token);
            console.log(decode);

            // token存储到Vuex
            this.$store.dispatch("setAutenticated", !this.isEmpty(decoded));
            this.$store.dispatch("setUser", decoded);
            this.$router.push("/");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goTo(path) {
      this.$router.replace(path);
    },
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>

<style scoped>
.register_con {
  /* margin: 100px auto; */
  width: 500px;
  height: 320px;
  padding: 10px;
  background: #fff;
  z-index: 999;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  border: 1px solid #fff;
  border-radius: 10px;
}
.register_con h1 {
  text-align: center;
  margin-bottom: 20p;
}
.bg_login{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
}
</style>
