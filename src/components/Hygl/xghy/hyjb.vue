<template>
  <div class="hyjb">
      <div class="tk">
          <div class="tk_wrap"></div>
          <div class="tk_con">
              <h1>修改成功，您的信息已提交审核！</h1>
              <p>您修改的信息将在24小时内审核，如遇节假日，审核时间将顺延！<br>
                  装备通VIP会员的信息优先审核。
                  <a href="https://www.tezhongzhuangbei.com/zbt_youshi.html" target="_blank" style="color:#0179f1;">查看装备通优势</a>
              </p>
              <el-button type="danger" @click="sure">返回会员基本信息</el-button>
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
      <el-form-item label="公司名称：" v-for="item in admin" :key="item.id" class="com_name">
        <span style="line-height:40px;">{{item.com_name}}</span>
      </el-form-item>

      <el-form-item label="英文名称：">
        <el-input v-model="ruleForm.english" placeholder="国内注册企业完整填写在工商局注册的全称！"></el-input>
      </el-form-item>

      <el-form-item label="公司Logo：" class="upload-pic">
        <el-upload drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
          <i class="el-icon el-icon-picture-outline"></i>
          <div class="el-upload__text">
            最大上传2MB的图片
            <br>80*60显示效果最佳
            <br>支持jpg,bmp,png!
          </div>
        </el-upload>
      </el-form-item>

      <el-form-item label="公司形象图：" class="upload-pic1">
        <el-upload drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
          <i class="el-icon el-icon-picture-outline"></i>
          <div class="el-upload__text">
            最大上传2MB的图片
            <br>支持jpg,bmp,png!
          </div>
        </el-upload>
        <el-input v-model="ruleForm.upload" placeholder="公司形象图说明，填写最多20个字符的说明！"></el-input>
      </el-form-item>
      <el-form-item label="公司类型：" prop="com_type">
        <el-checkbox-group v-model="ruleForm.com_type">
          <el-checkbox label="制造商" name="com_type"></el-checkbox>
          <el-checkbox label="代理商" name="com_type"></el-checkbox>
          <el-checkbox label="工程商" name="com_type"></el-checkbox>
          <el-checkbox label="行业协会" name="com_type"></el-checkbox>
          <el-checkbox label="行业媒体" name="com_type"></el-checkbox>
          <el-checkbox label="展览公司" name="com_type"></el-checkbox>
          <el-checkbox label="政府相关机构" name="com_type"></el-checkbox>
          <el-checkbox label="其他" name="com_type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="产品品牌：" class="admin_con" v-for="item in admin" :key="item.id">
        <input type="text" :value="item.com_name">
      </el-form-item>
      <el-form-item label="主营类别：" prop="main_categories" class="main_categories">
        <el-checkbox-group v-model="ruleForm.main_categories">
          <el-checkbox label="反恐技术装备" name="main_categories"></el-checkbox>
          <el-checkbox label="通信设备" name="main_categories"></el-checkbox>
          <el-checkbox label="安检排爆" name="main_categories"></el-checkbox>
          <el-checkbox label="刑事科学技术" name="main_categories"></el-checkbox>
          <el-checkbox label="防护装备" name="main_categories"></el-checkbox>
          <el-checkbox label="交通管理装备" name="main_categories"></el-checkbox>
          <el-checkbox label="消防/应急救援装备" name="main_categories"></el-checkbox>
          <el-checkbox label="执法取证装备" name="main_categories"></el-checkbox>
          <el-checkbox label="后勤训练装备" name="main_categories"></el-checkbox>
          <el-checkbox label="无人机/机器人/特种车辆" name="main_categories"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="产品/服务：" prop="service">
        <el-input v-model="ruleForm.service" placeholder="请填写产品名称，多个产品用 “，” 分割！"></el-input>
      </el-form-item>
      <el-form-item label="详细说明：" prop="desc">
        <quill-editor
          v-model="ruleForm.desc"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)"
        ></quill-editor>
      </el-form-item>

      <el-form-item style="text-align:center">
        <p style="line-height:25px;text-indent:2em;color:#ff5b58;margin-bottom:10px;">
          请勿在公司介绍里发布联系信息，若有违规将不予审核通过。
          已经上传的违规信息在编审人员巡回检查时如被发现，仍将会被删除。按Enter另起一段，按Shift+Enter回车。
        </p>

        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
      </el-form-item>
      <el-button type="danger" @click="submitForm('ruleForm')">提交</el-button>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
// Admin信息模拟api接口
import { getAdmin } from "../../../api/admin_qg";
// 富文本编辑器
import { quillEditor } from "vue-quill-editor";
export default {
  name: "Hyjb",
  components: {},
  data() {
    return {
      // 上传图片
      fileList: [],
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
      },
      // admin模拟数据
      // 富文本编辑器
      content: null,
      editorOption: {
        placeholder:
          "填写公司介绍，方便客户了解您的公司，公司介绍不得少于20个字符！",
        modules: {
          toolbar: [
            [
              // 加粗
              "bold",
              // 斜体
              "italic",
              // 下划线
              "underline",
              // 删除线
              "strike",
              // 图片
              "image",
              // 公式
              "formula",
              // 代码块
              "code-block",
              // 引用
              "blockquote",
              // 链接
              "link",
              // 标题
              { header: 1 },
              { header: 2 },
              // 列表
              { list: "ordered" },
              { list: "bullet" },
              // 上标下标
              { script: "sub" },
              { script: "super" },
              // 缩进
              { indent: "-1" },
              { indent: "+1" },
              // 文本方向
              { direction: "rtl" },
              // 颜色
              { color: [] },
              { background: [] },
              // 对齐
              { align: [] },
              // 清除样式
              "clean"
            ]
          ]
        }
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
          $(".tk").css("display","block")
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
  left: 10px;
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
.tk{
    display: none;
}
.tk_wrap{
    background: #999;
    opacity: .5;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    
}
.tk_con{
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
.tk h1{
    margin-top: 30px;
    line-height: 100px;
    text-align: center;
}
.tk p{
    text-indent: 2em;
    line-height: 20px;
    font-size: 14px;
}
.tk .el-button{
    margin: 40px 0;
    font-size: 15px;
    padding: 10px 20px;
}
</style>
