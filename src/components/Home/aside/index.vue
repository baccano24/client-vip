<template>
  <div>
    <el-container>
      <el-aside class="admin_msg" width="30%" style="margin-left:20px;padding:0 20px;">
        <header>
          <h2 style="margin-left:0;">
            用户信息
            <i class="bell admin_header" :style="{backgroundImage: 'url(' + admin_bell + ')'}"></i>
            <i class="txt admin_header" :style="{backgroundImage: 'url(' + admin_txt + ')'}"></i>
            <span class="change_pwd">改密码</span>
            <span class="logOut">退出</span>
          </h2>
        </header>
        <div class="admin_con" style="padding-left:0;">
          <div class="admin_con1">
            <div class="adm_pic fl" :style="{backgroundImage: 'url(' + adm_pic + ')'}"></div>
            <div class="company fl">
              <p class="com_title">杭州鑫中警广告有广告有限公司</p>
              <p class="com_grade">
                <img :src="imgUrl_grade">
              </p>
            </div>
          </div>
          <div class="admin_con2">
            <p>
              会员级别：装备通VIP
              <span>高级会员</span>
              <span style="margin-left:10px;">
                第
                <i class="hy_year">2</i>年
              </span>
            </p>
            <p>
              会员权限：
              <a href target="_blank">升级装备通</a>
              <span :style="{backgroundImage: 'url(' + admin_zz + ')'}"></span>
            </p>
            <p>
              享受更多特权！
              <a href target="_blank" style="color:#0279f2">点此了解详情</a>
            </p>
          </div>
        </div>
      </el-aside>
      <el-main>
        <header>
          <h2 style="padding:0 20px;">
            委托求购
            <span>更多</span>
          </h2>
        </header>
        <ul id="wt_ul">
          <li v-for="(item,index) in weituo" :key="index">
            <a href>
              <span class="fl">
                <b style="color:#ff7876;margin-right:10px;line-height: 30px;">[求]</b>
                {{item.ctitle}}
              </span>
              <i class="fr">{{item.date}}</i>
            </a>
          </li>
        </ul>
      </el-main>
    </el-container>
    <el-main style="height:25%;margin-top:10px;padding-bottom:10px;padding:0 20px;">
      <header>
        <h2 style="padding:0 20px;">
          采购招标
          <span>更多</span>
        </h2>
      </header>
      <el-container>
        <el-aside width="154px" style="padding-top:10px;">
          <a href target="_blank">
            <img :src="imgUrl_cg">
          </a>
        </el-aside>
        <el-main class="zb_main" style="background:#fff;padding-left:10px;">
          <h3>2019年福建警察学院警用装备采购项目竞争性磋商</h3>
          <p>项目名称项目名称项目名称项目名称项目名称项目名称项目名称项目名称项目名称
            项目名称项目名称项目名称项目名称项目名称项目名称项目名称项目名称项目名称
            项目名称项目名称项目名称项目名称项目名称项目名称项目名称项目名称项目名称
            项目名称项目名称项目名称项目名称项目名称项目名称项目名称项目名称项目名称
            <span>
              ...
              <a href style="color:#0279f2">[详]</a>
            </span>
          </p>
        </el-main>
      </el-container>
    </el-main>
    <el-main style="background:#fff;margin:0 20px;padding-bottom:20px;">
      <ul id="zb_ul">
        <li v-for="(item,index) in caigou" :key="index">
          <a href>
            <b style="color:#ff7876;margin-right:10px;line-height: 30px;">[采购]</b>
            {{item.caigou_sc}}
          </a>
        </li>
        
      </ul>
    </el-main>
    <Content_b style="padding:0 20px;"/>
  </div>
</template>

<script>
import admin_bell from "../../../assets/images/admin_ling.png";
import admin_txt from "../../../assets/images/admin_txt.png";
import admin_zz from "../../../assets/images/zz.jpg";
import adm_pic from "../../../assets/images/adm_pic.png";
// 1366屏时底部联系方式
import Content_b from "../../common/zxkf/Content_b";
// 数据传入方法
import axios from "axios";
// 委托求购模拟api接口
import { getWeiTuo } from "../../../api/weituo";
// 采购招标
import {getCaiGou} from "../../../api/caigou";
export default {
  name: "Aside",
  components: {
    Content_b
  },
  data() {
    return {
      // 用户信息头像
      imgUrl_admin: require("@/assets/images/2xing.jpg"),
      // 公司等级
      imgUrl_grade: require("@/assets/images/2xing.jpg"),
      // 采购招标缩略图
      imgUrl_cg: require("@/assets/images/zb_shouye.jpg"),
      // 用户信息header铃铛
      admin_bell: admin_bell,
      // 用户信息header文件夹
      admin_txt: admin_txt,
      // 会员权限升级装备通图片
      admin_zz: admin_zz,
      // 会员头像
      adm_pic: adm_pic,
      // 委托求购
      weituo: [],
      // 采购招标
      caigou:[]
    };
  },
  created() {
    axios.get("home/weituo").then(res => {
      if (res.code == 1) {
        console.log(res.data);
        this.weituo = res.data;
      }
    });
  },
  mounted() {
    getWeiTuo().then(res => {
       console.log(res.data);
      if (res.code == 1) {
        // console.log(res.data);
        this.weituo = res.data;
      }
    });
    getCaiGou().then(res => {
      if (res.code == 1) {
        // console.log(res.data);
        this.caigou = res.data;
      }
    });
  }
};
</script>

<style scoped>
.el-aside {
  background-color: #fff;
  text-align: center;
}

.el-main {
  padding: 0 20px;
}
header h2 {
  background: #fff;
  line-height: 50px;
  border-bottom: 1px solid #eee;
}
header h2 span {
  font-weight: 100;
  color: #0279f2;
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
}
#wt_ul {
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
  box-sizing: border-box;
}
#wt_ul li {
  width: 40%;
}
#wt_ul li a {
  width: 100%;
  display: block;
  line-height: 35px;
  font-size: 14px;
  overflow: hidden;
}
.zb_main {
  height: 104px;
  width: 100%;
}
.zb_main h3 {
  font-size: 13px;
  line-height: 35px;
  font-weight: 100;
  color: #004c9c;
}
.zb_main p {
  font-size: 14px;
  line-height: 23px;
}
#zb_ul {
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
}
#zb_ul li {
  width: 30%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#zb_ul li a {
  font-size: 13px;
  line-height: 25px;
}
.admin_con {
  box-sizing: border-box;
  padding-left: 20px;
}

.admin_msg header h2 {
  text-align: left;
  margin-left: 20px;
  margin-bottom: 10px;
}
.admin_msg header .admin_header {
  display: inline-block;
  margin-top: 10px;
  width: 20px;
  height: 20px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 20px auto;
  cursor: pointer;
  margin: 0 3px;
}
.admin_msg header .bell {
  margin-left: 14px;
}
.adm_pic {
  width: 60px;
  height: 60px;
  background: #0279f2;
  border: 3px solid #efefef;
  border-radius: 50%;
  margin-right: 20px;
}
.admin_con1 {
  height: 65px;
  overflow: hidden;
  width: 100%;
  margin-bottom: 10px;
}
.admin_con1 .company p {
  line-height: 30px;
  width: 150px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.admin_con2 p {
  text-align: left;
  line-height: 28px;
}
.admin_con2 p:nth-of-type(2) span {
  display: inline-block;
  width: 54px;
  height: 14px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.hy_year {
  color: #ff5b58;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
}
.zb_main p {
  color: #3d70a7;
}
</style>
