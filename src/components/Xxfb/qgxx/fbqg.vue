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
      label-width="100px"
      class="fbqg-ruleForm"
      style="text-align: left;"
    >
      <div class="guanjian_box">
        <el-form-item label="关键词一：" prop="guanjian1" class="guanjian">
          <el-input v-model="ruleForm.guanjian1"></el-input>
        </el-form-item>
        <el-form-item label="关键词二：" class="guanjian">
          <el-input v-model="ruleForm.guanjian2"></el-input>
        </el-form-item>
        <el-form-item label="关键词三：" class="guanjian">
          <el-input v-model="ruleForm.guanjian3"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="产品名称：" prop="name">
        <el-input placeholder="如：爆炸物毒品探测仪" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="求购数量：" prop="num">
        <el-input type="num" v-model.number="ruleForm.num"></el-input>
      </el-form-item>
      <el-form-item label="产品价格：" prop="price">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item label="产品规格：" prop="guige">
        <el-input v-model="ruleForm.guige"></el-input>
      </el-form-item>
      <el-form-item label="有效期：" prop="time">
        <el-select v-model="ruleForm.time" placeholder="请选择有效期">
          <el-option label="10天" value="ten"></el-option>
          <el-option label="20天" value="twenty"></el-option>
          <el-option label="1个月" value="onemouth"></el-option>
          <el-option label="3个月" value="threemouth"></el-option>
          <el-option label="6个月" value="sixmouth"></el-option>
          <el-option label="12个月" value="oneyear"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品图片：">
        <el-upload
          class="upload-pic"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
        >
          <i class="el-icon el-icon-picture-outline"></i>
          <div class="el-upload__text">
            最大上传2MB的图片
            <br>4:3比例最佳
          </div>
        </el-upload>
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
          请勿在详细说明里发布联系信息，以及重复发布说明信息，若有违规将不予审核通过。
          已经上传的违规信息在编审人员巡回检查时如被发现，仍将会被删除。按Enter另起一段，按Shift+Enter回车。
        </p>

        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
      </el-form-item>

      <div class="admin_con" v-for="item in admin" :key="item.id">
        <el-form-item label="公司名称：">
          <span>{{item.com_name}}</span>
        </el-form-item>
        <el-form-item label="联系人：" :rules="[{ required: true }]">
          <input type="text" :value=item.contact_name>
        </el-form-item>
        <el-form-item label="联系地址：">
          <input type="text" :value=item.address />
        </el-form-item>
        <el-form-item label="联系电话：">
          <input type="text" value="010-18649684" />
        </el-form-item>
        <el-form-item label="传真：">
          <input type="text" :value=item.fax />
        </el-form-item>
        <el-form-item label="手机：">
          <input type="text" value="19246156942" />
        </el-form-item>
        <el-form-item label="电子邮箱：" :rules="[{ required: true }]">
          <input type="text" :value=item.e_mail />
        </el-form-item>
      </div>
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
  name: "Fbqg",
  components: {},
  data() {
    return {
      // 上传图片
      fileList: [],
      // Admin
      admin: [],
      // 表单数据
      ruleForm: {
        // 产品名称
        name: "",
        // 关键词
        guanjian1: "",
        guanjian2: "",
        guanjian3: "",
        //产品介绍
        desc: "",
        // 产品数量
        num: "",
        // 产品价格
        price: "",
        // 产品规格
        guige: "",
        // 有效期
        time: "",
        delivery: false,
        // 联系人
        contact: ""
      },
      // 表单验证
      rules: {
        time: [{ required: true, message: "请选择有效期", trigger: "change" }],
        name: [
          { required: true, message: "请输入产品名称", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
        ],
        guanjian1: [
          { required: true, message: "请输入关键词一", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
        ],
        desc: [{ required: false, message: "求购介绍不能为空" }],
        contact: [
          { required: true, message: "联系人不能为空", trigger: "blur" }
        ]
      },
      // admin模拟数据
      // 富文本编辑器
      content: null,
      editorOption: {
        placeholder:
          "填写详细说明，方便供应商了解您的需求，让供应商更快找到您！",
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
      },
      
    };
  },
  created() {
    axios.get("qgxx/fabu").then(res => {
         console.log(res.data);
         this.admin=res.data;
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
          this.$confirm(
            "您发布的信息将在24小时内审核, 如遇节假日, 审核时间将顺延！",
            "发布成功，您的信息已提交审核！",
            {
              confirmButtonText: "查看已发布求购信息",
              cancelButtonText: "继续发布求购信息",
              center: true
            }
          )
            .then(() => {
              this.$router.push({
                path: "/qgxx/gl"
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
  width: 300px;
  color: #b7c4cb;
  height: 35px;
  border-color: #b7c4cb;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
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
