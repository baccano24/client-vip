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
      <el-form-item label="信息标题：" prop="name">
        <span style="margin-right:10px;">诚征</span>
        <el-input placeholder="如：爆炸物毒品探测仪" v-model="ruleForm.name"></el-input>
        <span style="margin-left:10px;">代理</span>
      </el-form-item>
      <el-form-item label="信息有效期：" prop="time">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.time"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="基本投资额：" prop="investment">
        <el-select v-model="ruleForm.investment" placeholder="请选择基本投资额">
          <el-option label="未定" value="investment0"></el-option>
          <el-option label="0-0.5万" value="investment1"></el-option>
          <el-option label="0.5-1万" value="investment2"></el-option>
          <el-option label="1-5万" value="investment3"></el-option>
          <el-option label="5-10万" value="investment4"></el-option>
          <el-option label="10-50万" value="investment5"></el-option>
          <el-option label="50-100万" value="investment6"></el-option>
          <el-option label="大于100万" value="investment7"></el-option>
        </el-select>
        <span style="margin-left:10px;">元</span>
      </el-form-item>

      <el-form-item label="项目区域要求：" prop="area">
        <el-select v-model="ruleForm.area" placeholder="请选择项目区域要求">
          <el-option label="全国" value="area0"></el-option>
          <el-option label="长三角" value="area1"></el-option>
          <el-option label="珠三角" value="area2"></el-option>
          <el-option label="北京" value="area3"></el-option>
          <el-option label="天津" value="area4"></el-option>
          <el-option label="河北" value="area5"></el-option>
          <el-option label="山西" value="area6"></el-option>
          <el-option label="内蒙古" value="area7"></el-option>
          <el-option label="辽宁" value="area8"></el-option>
          <el-option label="吉林" value="area9"></el-option>
          <el-option label="黑龙江" value="area10"></el-option>
          <el-option label="江苏" value="area11"></el-option>
          <el-option label="上海" value="area12"></el-option>
          <el-option label="浙江" value="area13"></el-option>
          <el-option label="安徽" value="area14"></el-option>
          <el-option label="福建" value="area15"></el-option>
          <el-option label="江西" value="area16"></el-option>
          <el-option label="山东" value="area17"></el-option>
          <el-option label="河南" value="area18"></el-option>
          <el-option label="湖北" value="area19"></el-option>
          <el-option label="湖南" value="area20"></el-option>
          <el-option label="广东" value="area21"></el-option>
          <el-option label="广西" value="area22"></el-option>
          <el-option label="海南" value="area23"></el-option>
          <el-option label="重庆" value="area24"></el-option>
          <el-option label="四川" value="area25"></el-option>
          <el-option label="贵州" value="area26"></el-option>
          <el-option label="云南" value="area27"></el-option>
          <el-option label="西藏" value="area28"></el-option>
          <el-option label="陕西" value="area29"></el-option>
          <el-option label="甘肃" value="area30"></el-option>
          <el-option label="青海" value="area31"></el-option>
          <el-option label="宁夏" value="area32"></el-option>
          <el-option label="新疆" value="area33"></el-option>
          <el-option label="香港" value="area34"></el-option>
          <el-option label="澳门" value="area35"></el-option>
          <el-option label="台湾" value="area36"></el-option>
          <el-option label="其他" value="area37"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="保证金额：" prop="num">
        <el-input type="num" v-model.number="ruleForm.num"></el-input>
        <span style="margin-left:10px;">元</span>
      </el-form-item>
      <el-form-item label="加盟费：" prop="price">
        <el-input type="price" v-model.number="ruleForm.price"></el-input>
        <span style="margin-left:10px;">元</span>
      </el-form-item>

      <el-form-item label="产品品牌：">
        <el-input type="text" v-model="ruleForm.brand"></el-input>
      </el-form-item>

      <el-form-item label="品牌发源地：">
        <el-input type="text" v-model="ruleForm.cradle"></el-input>
      </el-form-item>

      <el-form-item label="预期回报率：">
        <el-input type="text" v-model="ruleForm.return"></el-input>
        <span style="margin-left:10px;">%</span>
      </el-form-item>
      <el-form-item label="预期回报周期：">
        <el-input type="text" v-model="ruleForm.cycle"></el-input>
        <span style="margin-left:10px;">年</span>
      </el-form-item>
      <el-form-item label="特许权使用费：">
        <el-input type="text" v-model="ruleForm.use"></el-input>
        <span style="margin-left:10px;">%</span>
      </el-form-item>
      <el-form-item label="特许经营时间：">
        <el-input type="text" v-model="ruleForm.times"></el-input>
        <span style="margin-left:10px;">年</span>
      </el-form-item>
      <el-form-item label="合同期限：">
        <el-input type="text" v-model="ruleForm.timeLimit"></el-input>
        <span style="margin-left:10px;">年</span>
      </el-form-item>
      <el-form-item label="加盟商总数：">
        <el-input type="text" v-model="ruleForm.joinTrader"></el-input>
        <span style="margin-left:10px;">家</span>
      </el-form-item>

      <el-form-item label="经营模式：" prop="business">
        <el-checkbox-group v-model="ruleForm.business">
          <el-checkbox label="经销" name="business"></el-checkbox>
          <el-checkbox label="代理" name="business"></el-checkbox>
          <el-checkbox label="特许" name="business"></el-checkbox>
          <el-checkbox label="合作" name="business"></el-checkbox>
          <el-checkbox label="自由连锁" name="business"></el-checkbox>
          <el-checkbox label="直营" name="business"></el-checkbox>
          <el-checkbox label="其他" name="business"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="发展模式：" prop="develop">
        <el-checkbox-group v-model="ruleForm.develop">
          <el-checkbox label="经销" name="develop"></el-checkbox>
          <el-checkbox label="区域代理" name="develop"></el-checkbox>
          <el-checkbox label="自由代理" name="develop"></el-checkbox>
          <el-checkbox label="单店特许" name="develop"></el-checkbox>
          <el-checkbox label="区域开发" name="develop"></el-checkbox>
          <el-checkbox label="二级特许" name="develop"></el-checkbox>
          <el-checkbox label="其他" name="develop"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="产品图片：" prop="upLoad">
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
          <span>{{item.contact_name}}</span>
        </el-form-item>
        <el-form-item label="联系地址：">
          <span>{{item.address}}</span>
        </el-form-item>
        <el-form-item label="联系电话：" :rules="[{ required: true }]">
          <span>{{item.fax}}</span>
        </el-form-item>
        <el-form-item label="传真：">
          <span>{{item.fax}}</span>
        </el-form-item>
        <el-form-item label="手机：">
          <span>{{item.fax}}</span>
        </el-form-item>
        <el-form-item label="电子邮箱：" :rules="[{ required: true }]">
          <span>{{item.e_mail}}</span>
        </el-form-item>
        <p class="change_admin"  @click="goTo('/xghy/lianxi')">修改联系方式</p>
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
  name: "Fbjm",
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
        // 项目区域要求
        area: "",
        //详细说明
        desc: "",
        // 产品数量
        num: "",
        // 有效期
        time: "",
        delivery: false,
        // 联系人
        contact: "",
        // 加盟费
        price: "",
        // 经营类别
        business: [],
        // 发展类别
        develop: []
      },
      // 表单验证
      rules: {
        time: [{ required: true, message: "请选择有效期", trigger: "change" }],
        name: [
          { required: true, message: "请输入产品名称", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
        ],
        desc: [{ required: true, message: "详细说明不能为空" }],
        contact: [
          { required: true, message: "联系人不能为空", trigger: "blur" }
        ],
        num: [
          { required: true, message: "请输入保证金额", trigger: "blur" },
          { type: "number", message: "保证金额必须为数字值" }
        ],
        price: [
          { required: true, message: "请输入加盟费", trigger: "blur" },
          { type: "number", message: "加盟费必须为数字值" }
        ]
      },
      // admin模拟数据
      // 富文本编辑器
      content: null,
      editorOption: {
        placeholder:
          "填写详细招商说明，方便用户了解您的需求，让意向合作者更快找到您！",
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
      console.log(res.data);
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
          this.$confirm(
            "您发布的信息将在24小时内审核, 如遇节假日, 审核时间将顺延！",
            "发布成功，您的信息已提交审核！",
            {
              confirmButtonText: "查看已发布加盟招商",
              cancelButtonText: "继续发布加盟招商",
              center: true
            }
          )
            .then(() => {
              this.$router.push({
                path: "/jmxx/gl"
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
.change_admin{
    color: #ff5b58;
    text-indent: 20px;
    cursor: pointer;
}
.change_admin:hover{
    text-decoration:underline;
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
