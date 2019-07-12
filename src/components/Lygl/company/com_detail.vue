<template>
  <div class="xgxx_con">
    <span class="xgxx_tab">留言详情信息</span>
    <p class="xiaoxi">
      消息中心
      <span>
        <b style="color:#ff5b58;">【优惠】</b>
        <span>111</span>
      </span>
    </p>
    <el-form label-width="100px" class="fbqg-ruleForm" style="text-align: left;">
      <div class="admin_con" v-for="item in admin" :key="item.id">
        <el-form-item label="留言标题：">
          <span>{{item.com_name}}</span>
        </el-form-item>
        <el-form-item label="留言时间：">
          <span>{{item.contact_name}}</span>
        </el-form-item>
        <el-form-item label="留言人：">
          <span>{{item.address}}</span>
        </el-form-item>
        <el-form-item label="留言人性别：">
          <span>{{item.address}}</span>
        </el-form-item>
        <el-form-item label="联系电话：">
          <span>{{item.e_mail}}</span>
        </el-form-item>
        <el-form-item label="手机：">
          <span>{{item.e_mail}}</span>
        </el-form-item>
        <el-form-item label="电子邮箱：">
          <span>{{item.e_mail}}</span>
        </el-form-item>
        <el-form-item label="QQ/MSN：">
          <span>{{item.e_mail}}</span>
        </el-form-item>
        <el-form-item label="联系地址：">
          <span>{{item.e_mail}}</span>
        </el-form-item>
        <el-form-item label="留言内容：">
          <span>{{item.e_mail}}</span>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
// Admin信息模拟api接口
import { getAdmin } from "../../../api/admin_qg";
export default {
  name: "com_detail",
  components: {},
  data() {
    return {
      admin: []
    };
  },
  created() {
    axios.get("qgxx/fabu").then(res => {
      console.log(res.data);
      this.admin = res.data;
    });
  },
  methods: {}
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
  left: 135px;
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
