<template>
  <div>
    <span class="xgxx_tab">修改招聘信息</span>
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
      class="demo-ruleForm"
      style="text-align: left;"
    >
      <el-form-item label="招聘职位：" prop="position">
        <el-input v-model="ruleForm.position"></el-input>
      </el-form-item>
      <el-form-item label="职业性质：" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择职业性质">
          <el-option label="全职" value="quanzhi"></el-option>
          <el-option label="兼职" value="jianzhi"></el-option>
          <el-option label="不限" value="buxian"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="性别要求：" prop="sex">
        <el-select v-model="ruleForm.sex" placeholder="请选择职业性质">
          <el-option label="男" value="man"></el-option>
          <el-option label="女" value="woman"></el-option>
          <el-option label="均可" value="both"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学历要求：" prop="education">
        <el-select v-model="ruleForm.education" placeholder="请选择职业性质">
          <el-option label="均可" value="all"></el-option>
          <el-option label="中专" value="zhongzhuan"></el-option>
          <el-option label="大专" value="dazhuan"></el-option>
          <el-option label="本科" value="benke"></el-option>
          <el-option label="硕士" value="shuoshi"></el-option>
          <el-option label="博士" value="boshi"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专业要求：" class="admin_con">
        <input value="不限">
      </el-form-item>
      <el-form-item label="薪资待遇：" class="admin_con">
        <input value="面议">
      </el-form-item>
      <el-form-item label="招聘人数：" prop="num">
        <el-input type="num" v-model.number="ruleForm.num" placeholder="请填写招聘人数！"></el-input>
      </el-form-item>

      <el-form-item label="工作地点：" prop="place">
        <el-input v-model="ruleForm.place"></el-input>
      </el-form-item>
      <el-form-item label="截止日期：" prop="date">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.date"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="职位描述：" prop="desc">
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
          请勿在产品介绍里发布联系信息，以及重复发布产品信息，若有违规将不予审核通过。
          已经上传的违规信息在编审人员巡回检查时如被发现，仍会被删除。按Enter另起一段，按Shift+Enter回车。
        </p>
      </el-form-item>
      <el-form-item label="职位要求：" prop="req">
        <quill-editor
          v-model="ruleForm.req"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)"
        ></quill-editor>
      </el-form-item>

      <el-form-item style="text-align:center">
        <p style="line-height:25px;text-indent:2em;color:#ff5b58;margin-bottom:10px;">
          请勿在产品介绍里发布联系信息，以及重复发布产品信息，若有违规将不予审核通过。
          已经上传的违规信息在编审人员巡回检查时如被发现，仍会被删除。按Enter另起一段，按Shift+Enter回车。
        </p>
      </el-form-item>
      <div class="admin_con">
        <el-form-item label="公司名称：">
          <span>杭州鑫中警广告有限公司</span>
        </el-form-item>
        <el-form-item
          label="人事主管："
          :rules="[
      { required: true, message: '请填写人事主管址', trigger: 'blur' }
    ]"
        >
          <input value="秦先生">
        </el-form-item>
      </div>
      <p style="text-align:center">
        <el-button type="danger" @click="submitForm('ruleForm')">立即发布</el-button>
      </p>
    </el-form>
  </div>
</template>

<script>
// 富文本编辑器
import { quillEditor } from "vue-quill-editor";
export default {
  name: "Fbxx",
  components: {},
  data() {
    return {
      fileList: [],
      ruleForm: {
        // 招聘职位
        position: "",
        // 职业性质
        region: "",
        delivery: false,
        // 性别要求
        sex: "",
        // 学历要求
        education: "",
        //产品介绍
        desc: "",
        // 招聘人数
        num: "",
        // 工作地点
        place: "",
        // 截止日期
        date: "",
        desc: ""
      },
      rules: {
        // 职业性质
        region: [
          { required: true, message: "请选择职业性质", trigger: "change" }
        ],
        // 招聘职位
        position: [
          { required: true, message: "请填写招聘职位", trigger: "blur" }
        ],
        education: [
          { required: true, message: "请选择学历要求", trigger: "change" }
        ],
        num: [
          { required: true, message: "请填写招聘人数", trigger: "blur" },
          { type: "number", message: "招聘人数必须为数字值" }
        ],
        sex: [{ required: true, message: "请选择性别要求", trigger: "change" }],
        // 工作地点
        place: [
          { required: true, message: "请选择职业性质", trigger: "change" }
        ],
        // 截止日期
        date: [{ required: true, message: "请选择截止日期", trigger: "blur" }],
        desc: [
          { required: true, message: "产品介绍不能为空", trigger: "blur" }
        ],
        req: [{ required: true, message: "产品介绍不能为空", trigger: "blur" }]
      },
      // 富文本编辑器
      content: null,
      editorOption: {
        placeholder:
          "填写职位描述，方便专业人才了解您的职位需求，让优秀求职者更快找到您！",
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
          this.$confirm(
            "您发布的信息将在24小时内审核, 如遇节假日, 审核时间将顺延！",
            "发布成功，您的信息已提交审核！",
            {
              confirmButtonText: "查看已发布招聘信息",
              center: true
            }
          )
            .then(() => {
              this.$router.push({
                path: "/zpxx/gl"
              });
            })
            .catch(() => {
              return false;
            });
        } else {
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
h1,
p {
  text-align: left;
}
.xiaoxi {
  line-height: 50px;
  color: #ff5b58;
  font-size: 20px;
  font-weight: 900;
  margin-top: -13px;
}
.xiaoxi b {
  margin-left: 15px;
}
.xiaoxi span {
  font-size: 12px;
  color: #2b5a8c;
}
.el-upload__tip {
  color: #b3c0d1;
  font-size: 14px;
  line-height: 20px;
}
/* 产品信息管理input */
.el-form-item__label {
  color: #2b5a8c;
}
.el-cascader .el-input {
  line-height: 20px;
}

.el-form-item {
  margin-bottom: 25px;
}
.el-form-item__error {
  line-height: 0;
}
.el-button {
  padding: 12px 50px;
}
.el-input {
  width: 300px;
}

/* 弹框样式 */
.el-message-box__btns button:nth-child(2) {
  background: #ff5b58;
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
  box-sizing: border-box;
}

</style>
