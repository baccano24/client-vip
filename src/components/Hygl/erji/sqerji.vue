<template>
  <div class="sqerji">
    <p class="xiaoxi">
      消息中心
      <span>
        <b style="color:#ff5b58;">【优惠】</b>
        <span>111</span>
      </span>
    </p>
    <el-form
      :model="numberValidateForm"
      ref="numberValidateForm"
      label-width="150px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="申请二级域名："
        prop="erji"
        style="text-align:left"
        :rules="[
      { required: true, message: '二级域名不能为空'},
      { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
    ]"
      >
        <el-input type="erji" v-model.number="numberValidateForm.erji" autocomplete="off" class="fl"></el-input>
        <span class="fl">.tezhongzhuangbei.com</span>
      </el-form-item>
      <el-form-item>
          <p>例如：xxxxxx.tezhongzhuangbei.com</p>
          <p>
            注意：二级域名自定义部分不得与用户名相同，且最长不得超过15个字符！
            <i style="color:#ff5b58;">二级域名一旦申请通过将无法修改！</i>
          </p>
        <el-button type="danger" @click="submitForm('numberValidateForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Sqerji",
   data() {
      return {
        numberValidateForm: {
          erji: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>

<style scoped>
.demo-ruleForm p{
    color: #b2c0c8;
    line-height: 28px;
}
</style>
