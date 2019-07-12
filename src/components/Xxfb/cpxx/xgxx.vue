<template>
  <div class="xgxx_con">
    <span class="xgxx_tab">修改产品信息</span>
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
      <el-form-item label="产品类别：" prop="region">
        <el-cascader
          v-model="ruleForm.region"
          placeholder="选择类别/选择小类/选择子类"
          :options="options"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="产品名称：" prop="name">
        <el-input placeholder="如：爆炸物毒品探测仪" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="产品型号：" prop="xinghao">
        <el-input v-model="ruleForm.xinghao"></el-input>
      </el-form-item>
      <el-form-item label="产品图片：">
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
          <el-button size="small" type="primary" style="padding:10px">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">最大上传2MB的图片，4:3比例最佳！</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="产品报价：" prop="num">
        <el-input type="text" v-model.number="ruleForm.num" placeholder="请填写产品价格（数字）！"></el-input>
        <span style="margin-left:10px;">元</span>
      </el-form-item>
      <el-form-item label="产品品牌：" prop="brand">
        <el-input v-model="ruleForm.brand"></el-input>
      </el-form-item>
     <el-form-item label="产品介绍：" prop="desc">
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
        <el-button type="danger" @click="submitForm('ruleForm')">确认修改</el-button>
        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 富文本编辑器
import { quillEditor } from "vue-quill-editor";
export default {
  name: "Xgxx",
  components: {},
  data() {
    return {
      fileList: [],
      ruleForm: {
        // 产品名称
        name: "",
        // 产品类别
        region: "",
        delivery: false,
        // 产品型号
        xinghao: "",
        //产品介绍
        desc: "",
        // 产品报价
        num: "",
        // 产品品牌
        brand: ""
      },
      rules: {
        // 产品类别
        region: [
          { required: true, message: "请选择产品类别", trigger: "change" }
        ],
        name: [
          { required: true, message: "请输入产品名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        xinghao: [
          { required: true, message: "请输入产品型号", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        desc: [
          { required: true, message: "产品介绍不能为空" },
          { min: 20, message: "不得少于20个字符", trigger: "blur" }
        ]
      },
      // 富文本编辑器
      content: null,
      editorOption: {
        placeholder:
          "请填写产品介绍，方便客户全面的了解您的产品，让他们更快找到您！产品介绍不得少于20个字符！",
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
      // 产品类别
      options: [
        {
          value: "jishushebei",
          label: "反恐技术设备",
          children: [
            {
              value: "feizhimingxing",
              label: "非致命性武器",
              children: [
                {
                  value: "fangbao",
                  label: "警用防爆喷射器"
                },
                {
                  value: "dianzi",
                  label: "智能电子控制器"
                },
                {
                  value: "buzhuowang",
                  label: "捕捉网发射器"
                },
                {
                  value: "shengbo",
                  label: "非致命声波武器"
                },
                {
                  value: "weibo",
                  label: "非致命微波武器"
                },
                {
                  value: "jiguang",
                  label: "非致命激光武器"
                }
              ]
            },
            {
              value: "zhencha",
              label: "侦查探测器材",
              children: [
                {
                  value: "zhenting",
                  label: "侦听器材"
                },
                {
                  value: "shipin",
                  label: "视频侦查设备"
                },
                {
                  value: "yeshi",
                  label: "夜视侦查设备"
                },
                {
                  value: "shengbo2",
                  label: "声波探测器材"
                },
                {
                  value: "diancibo",
                  label: "电磁波探测器材"
                }
              ]
            },
            {
              value: "miaozhun",
              label: "观测瞄准器材",
              children: [
                {
                  value: "yeshiguanmiao",
                  label: "夜视观瞄器材"
                },
                {
                  value: "fuzhu",
                  label: "辅助观瞄器材"
                },
                {
                  value: "zhanshuceliang",
                  label: "战术测量器材"
                },
                {
                  value: "zhanshuzhaoming",
                  label: "战术照明器材"
                },
                {
                  value: "tongyongwangyuan",
                  label: "通用望远/测距器材"
                }
              ]
            },
            {
              value: "tuji",
              label: "作战突击器械",
              children: [
                {
                  value: "zhanshushengjiang",
                  label: "战术升降设备"
                },
                {
                  value: "pomenpochuang",
                  label: "破门/破窗设备"
                },
                {
                  value: "jingyindianzuan",
                  label: "静音电钻"
                },
                {
                  value: "paotou",
                  label: "抛投器"
                },
                {
                  value: "maoyan",
                  label: "猫眼反窥镜"
                },
                {
                  value: "chuanqiangleida",
                  label: "穿墙雷达"
                }
              ]
            },
            {
              value: "fangbaoxinhao",
              label: "防爆、信号专用弹",
              children: [
                {
                  value: "xinhaodan",
                  label: "信号弹"
                },
                {
                  value: "yanwudan",
                  label: "训练用烟雾弹"
                }
              ]
            },
            {
              value: "wurenji",
              label: "无人机防御系统/拦截设备",
              children: [
                {
                  value: "fanwurenji",
                  label: "反无人机系统"
                }
              ]
            },
            {
              value: "qita",
              label: "其他反恐设备",
              children: [
                {
                  value: "",
                  label: ""
                }
              ]
            }
          ]
        },
        {
          value: "tongxin",
          label: "通信设备",
          children: [
            {
              value: "jiqun",
              label: "数字集群通信设备",
              children: [
                {
                  value: "tongxindiantai",
                  label: "集群通信电台"
                },
                {
                  value: "duijiangji",
                  label: "集群对讲机"
                },
                {
                  value: "chezaitai",
                  label: "集群车载台"
                },
                {
                  value: "tongxinwangluo",
                  label: "集群通信网络系统"
                }
              ]
            },
            {
              value: "changgui",
              label: "常规通信设备",
              children: [
                {
                  value: "tongxindiantai",
                  label: "常规通信电台"
                },
                {
                  value: "duijiangji2",
                  label: "常规对讲机"
                },
                {
                  value: "chezaitai2",
                  label: "常规车载台"
                },
                {
                  value: "tongxinwangluo2",
                  label: "常规通信网络系统"
                }
              ]
            },
            {
              value: "weixingtongxin",
              label: "卫星通信设备",
              children: [
                {
                  value: "weixingdianhua",
                  label: "卫星电话"
                },
                {
                  value: "yixingdianhua",
                  label: "铱星电话"
                },
                {
                  value: "haishiweixing",
                  label: "海事卫星系统"
                }
              ]
            },
            {
              value: "jizhan",
              label: "基站",
              children: [
                {
                  value: "jizhanc",
                  label: "基站"
                }
              ]
            },
            {
              value: "tuxiangchuanshu",
              label: "图像传输/接收设备",
              children: [
                {
                  value: "danbingtuxiang",
                  label: "单兵图像传输设备"
                },
                {
                  value: "chezaituxiang",
                  label: "车载图像传输设备"
                },
                {
                  value: "wuxianshipin",
                  label: "无线视频传输设备"
                },
                {
                  value: "fasheji",
                  label: "发射机"
                },
                {
                  value: "jiancejieshou",
                  label: "检测接收机"
                }
              ]
            },
            {
              value: "zhihuidiaodu",
              label: "指挥调度设备",
              children: [
                {
                  value: "gonganzhihui",
                  label: "公安指挥调度系统"
                },
                {
                  value: "dianhuadiaodu",
                  label: "电话调度系统"
                },
                {
                  value: "wuxiandiaodu",
                  label: "无线调度系统"
                },
                {
                  value: "shuzidianhua",
                  label: "数字电话会议系统"
                },
                {
                  value: "hujiaozhongxin",
                  label: "呼叫中心系统"
                },
                {
                  value: "yingjizonghe",
                  label: "应急综合指挥调度系统"
                }
              ]
            },
            {
              value: "erjihuami",
              label: "耳机、话咪",
              children: [
                {
                  value: "erji",
                  label: "耳机"
                },
                {
                  value: "huami",
                  label: "话咪设备"
                }
              ]
            },
            {
              value: "hanhuaguangbo",
              label: "喊话/广播装置",
              children: [
                {
                  value: "hanhuaqi",
                  label: "喊话器"
                },
                {
                  value: "gonggongguangbo",
                  label: "公共广播系统"
                }
              ]
            },
            {
              value: "gps/gis",
              label: "GPS/GIS",
              children: [
                {
                  value: "chezaiyiti",
                  label: "车载一体GPS"
                },
                {
                  value: "shouchi",
                  label: "手持GPS"
                },
                {
                  value: "lanya",
                  label: "蓝牙GPS"
                },
                {
                  value: "gis",
                  label: "GIS"
                }
              ]
            },
            {
              value: "qitatongxin",
              label: "其他通信设备及配件",
              children: [
                {
                  value: "zhongjitai",
                  label: "中继台"
                },
                {
                  value: "dianyuan",
                  label: "电源"
                },
                {
                  value: "jieshoutianxian",
                  label: "接收天线"
                }
              ]
            }
          ]
        },
        {
          value: "anjianpaibao",
          label: "安检排爆",
          children: [
            {
              value: "rentianquan",
              label: "人体安全检查系统",
              children: [
                {
                  value: "anjianmen",
                  label: "安检门"
                },
                {
                  value: "taihezi",
                  label: "太赫兹人体安全检查设备"
                },
                {
                  value: "weiborenti",
                  label: "微波人体安全检查系统"
                }
              ]
            }
          ]
        }
      ]
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
            "您修改的信息将在24小时内审核, 如遇节假日, 审核时间将顺延！",
            "修改成功，您的信息已提交审核！",
            {
              confirmButtonText: "返回管理产品信息",
              center: true
            }
          )
            .then(() => {
              this.$router.push({
                path: "/cpxx/gl"
              });
            })
            .catch(() => {
              
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
.xgxx_con .xgxx_tab {
  position: absolute;
  text-align: left;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  cursor: pointer;
  border-bottom: 3px solid #2b5a8c;
  color: #479dff;
  border-color: #479dff;
  top: 0;
  left: 255px;
}
</style>
