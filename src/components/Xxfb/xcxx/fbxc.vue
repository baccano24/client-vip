<template>
  <div>
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
      label-width="110px"
      class="fbqg-ruleForm"
      style="text-align: left;"
    >
      <el-form-item label="图片名称：" prop="name">
        <el-input placeholder="限18个字符以内!" v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="图片上传："  class="com_name">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip" style="color:#b7c4cb;">最大只能上传2MB的图片，4:3比例的图片显示效果最佳!</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="图片说明：" prop="desc">
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
          请勿在图片说明里发布联系信息或各类图片，若有违规将不予审核通过。
          已经上传的违规信息在编审人员巡回检查时如被发现，仍将会被删除。按Enter另起一段，按Shift+Enter回车。
        </p>
      </el-form-item>
      <el-button type="danger" @click="submitForm('ruleForm')">立即发布</el-button>
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
  name: "Fbxc",
  components: {},
  data() {
    return {
      // 上传图片
      fileList: [],
      // Admin
      admin: [],
      // 表单数据
      ruleForm: {
        // 图片名称
        name: "",
        //详细说明
        desc: "",
        upLoad: ""
      },
      // 表单验证
      rules: {
        desc: [
          { required: true, message: "详细说明不能为空" },
          { min: 12, message: "图片说明不得少于12个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "图片名称不能为空" },
          { min: 1, max: 18, message: "长度在 1 到 18 个字符", trigger: "blur" }
        ]
      },
      // admin模拟数据
      // 富文本编辑器
      content: null,
      editorOption: {
        placeholder:
          "填写图片说明，方便用户了解您的企业和产品!图片说明不得少于12个字符!",
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
    submitForm(formName, files, fileList) {
      if ($(".el-upload-list li").length == 0) {
         this.$message({
          showClose: true,
          message: '请上传图片后再提交！',
          type: 'error'
        });
        return false;
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$confirm(
            "您发布的信息将在24小时内审核, 如遇节假日, 审核时间将顺延！",
            "发布成功，您的信息已提交审核！",
            {
              confirmButtonText: "查看已发布相册信息",
              cancelButtonText: "继续发布相册信息",
              center: true
            }
          )
            .then(() => {
              this.$router.push({
                path: "/xcxx/gl"
              });
            })
            .catch(() => {
              window.location.reload();
            });
        } else {
          return false;
        }
      });
    },
    goTo(path) {
      this.$router.replace(path);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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

.admin_con input {
  color: #b3c0d1;
  border-radius: 4px;
  border: 1px solid #b3c0d1;
  width: 300px;
  color: #b7c4cb;
  height: 35px;
  border-color: #b7c4cb;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
}
.el-input {
  width: 300px;
}
.change_admin {
  color: #ff5b58;
  text-indent: 20px;
  cursor: pointer;
}
.change_admin:hover {
  text-decoration: underline;
}
.com_name {
  position: relative;
}
.com_name::before {
  content: "*";
  color: #f56c6c;
  position: absolute;
  top: 10px;
  left: 18px;
}
/* 当屏幕大于1366px时，执行下面 */
@media (min-width: 1366px) {
  .el-aside {
    height: 870px;
    overflow: hidden;
    padding: 0 10px;
  }
  .contact_bottom {
    display: none;
  }
}
/* 当屏幕最小1366px时，执行下面 */
@media (max-width: 1366px) {
  .qq {
    display: none;
  }
  .fbqg_con {
    position: absolute;
    right: 0;
    left: 240px;
  }
  .contact_bottom {
    position: absolute;
    bottom: -300px;
    left: 240px;
    right: 0px;
  }
}
</style>
