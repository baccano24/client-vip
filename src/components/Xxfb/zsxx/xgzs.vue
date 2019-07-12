<template>
  <div>
      <span class="xgxx_tab">修改证书信息</span>
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
      label-width="140px"
      class="demo-ruleForm"
      style="text-align: left;"
    >
      <el-form-item label="证书类别：" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择证书类别">
          <el-option label="税务登记证" value="dengji"></el-option>
          <el-option label="经营许可类" value="xuke"></el-option>
          <el-option label="产品类证书" value="chanpin"></el-option>
          <el-option label="其他证书" value="other"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="证书名称：" prop="position">
        <el-input v-model="ruleForm.position"></el-input>
      </el-form-item>
      <el-form-item label="证书生效时间：" prop="date">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.date"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="证书有效期截止：" prop="date2">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.date2"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="证书编号：">
        <el-input v-model="ruleForm.num"></el-input>
      </el-form-item>
      <el-form-item label="发证机构：" prop="institutions">
        <el-input v-model="ruleForm.institutions"></el-input>
      </el-form-item>

      <el-form-item label="发证机构联系电话：" prop="tel">
        <el-input type="tel" v-model.number="ruleForm.tel"></el-input>
      </el-form-item>

      <el-form-item label="发证机构网址：" prop="url">
        <el-input v-model="ruleForm.url"></el-input>
      </el-form-item>

      <el-form-item label="证书图片：" class="com_name">
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
          <div slot="tip" class="el-upload__tip" style="color:#b7c4cb;">
            最大只能上传2MB的图片!
            <b style="color:#ff5b58;">要求请参照下方模板说明!</b>
          </div>
        </el-upload>
      </el-form-item>

      <el-form-item label="证书说明：" prop="desc">
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
          请勿在证书说明里发布联系信息，以及重复发布说明信息，若有违规将不予审核通过。
          已经上传的违规信息在编审人员巡回检查时如被发现，仍将会被删除。按Enter另起一段，按Shift+Enter回车。
        </p>
      </el-form-item>
      <p style="text-align:center;margin-bottom:20px;">
        <el-button type="danger" @click="submitForm('ruleForm')">立即发布</el-button>
      </p>
      <el-form-item label="参考证书模版说明：">
          <img src="../../../assets/images/muban_zs.png" />
          <ul style="color:#b2c0c8;margin-top:20px;">
              <li>证书图片务必保持清晰，完整和正面；</li>
              <li>营业执照涉及贵公司在工商部门的注册记录，上传请慎重；</li>
              <li>证书图片和所选证书类别相符合；</li>
              <li>相同的证书图片不重复添加。</li>
          </ul>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 富文本编辑器
import { quillEditor } from "vue-quill-editor";
export default {
  name: "Xgzs",
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
        //证书说明
        desc: "",
        // 证书编号
        num: "",
        // 发证机构网址
        url: "",
        // 截止日期
        date: "",
        date2: "",
        desc: "",
        // 发证机构
        institutions: ""
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
        // 发证机构
        institutions: [
          { required: true, message: "请填写发证机构", trigger: "blur" }
        ],
        education: [
          { required: true, message: "请选择学历要求", trigger: "change" }
        ],
        sex: [{ required: true, message: "请选择性别要求", trigger: "change" }],
        // 截止日期
        date: [{ required: true, message: "请选择截止日期", trigger: "blur" }],
        req: [{ required: true, message: "职位介绍不能为空", trigger: "blur" }]
      },
      // 富文本编辑器
      content: null,
      editorOption: {
        placeholder: "填写证书说明!",
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
    submitForm(formName, files, fileList) {
      if ($(".el-upload-list li").length == 0) {
        this.$message({
          showClose: true,
          message: "请上传图片后再提交！",
          type: "error"
        });
        return false;
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$confirm(
            "您发布的信息将在24小时内审核, 如遇节假日, 审核时间将顺延！",
            "发布成功，您的信息已提交审核！",
            {
              confirmButtonText: "查看已发布证书信息",
              center: true
            }
          )
            .then(() => {
              this.$router.push({
                path: "/zsxx/gl"
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
.com_name {
  position: relative;
}
.com_name::before {
  content: "*";
  color: #f56c6c;
  position: absolute;
  top: 10px;
  left: 50px;
}
</style>
