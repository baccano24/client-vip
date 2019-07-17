<template>
<div class="register_wrap">
  <div class="register">
    <el-form
      :model="registerUser"
      status-icon
      :rules="rules"
      ref="registerUser"
      label-width="100px"
      class="register_con"
    >
      <h1>注册页面</h1>
      <el-form-item label="用户名：" prop="name">
        <el-input type="text" v-model="registerUser.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="pass">
        <el-input type="password" v-model="registerUser.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="checkPass">
        <el-input type="password" v-model="registerUser.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄：" prop="age">
        <el-input v-model.number="registerUser.age"></el-input>
      </el-form-item>
      <el-form-item label="选择身份" prop="region">
        <el-select v-model="registerUser.region" placeholder="请选择用户身份">
          <el-option label="管理员" value="guanliyuan"></el-option>
          <el-option label="员工" value="yuangong"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('registerUser')" style="margin-left:70px;">提交</el-button>
        <el-button @click="resetForm('registerUser')">重置</el-button>
      </el-form-item>
      <b @click="goTo('/login')">去登录</b>
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
</div>
</template>

<script>
export default {
  name: "Register",
  components: {},
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerUser.checkPass !== "") {
          this.$refs.registerUser.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerUser.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerUser: {
        pass: "",
        checkPass: "",
        age: "",
        name: "",
        region:""
      },
      rules: {
        pass: [{ required: true,validator: validatePass, trigger: "blur" }],
        checkPass: [{ required: true,validator: validatePass2, trigger: "blur" }],
        age: [{ required: true,validator: checkAge, trigger: "blur" }],
        region: [{ required: true, message: '请选择用户身份', trigger: 'change'  }],

      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios.post("/user/register",this.registerUser)
          .then(res => {
            //   注册成功
            this.$message({
                message:"账号注册成功",
                type:'success'
            })
          })

        this.$router.push('/login');
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
  }
};
</script>

<style scoped>
.register_con {
  margin: 100px auto;
  width: 500px;
  padding: 10px;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
}
.register_con h1 {
  text-align: center;
  margin-bottom: 20px;
}
.bg_login {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
}
.register_wrap {
  background: #333;
  position: absolute;
  top: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -2;
}
</style>
