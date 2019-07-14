<template>
  <div>
    <div class="search fl">
      <Search />
    </div>
    <div class="header_you fr">
      <ul class="header_nav">
        <li>
          <a href="https://app.tezhongzhuangbei.com/" target="_blank">手机APP</a>
        </li>
        <li>
          <a href="https://www.tezhongzhuangbei.com/" target="_blank">特种装备网</a>
        </li>
        <li>
          <a href="https://xinzhongjing.tezhongzhuangbei.com/" target="_blank">我的商铺</a>
        </li>
        <li>
          <a href="https://www.tezhongzhuangbei.com/zbt.html" target="_blank">会员中心</a>
        </li>
        <li>
          <a href="https://www.tezhongzhuangbei.com/daohang.html" target="_blank">网站导航</a>
        </li>
      </ul>
      <div class="tel fl" style="color: #2b5a8c;">
        <img :src="imgUrl_hw" class="hw" />
        全国免费咨询：
      </div>
      <span>400-8778-258</span>
      <el-popover
        placement="left-start"
        offset="3"
        width="180"
        trigger="hover"
        visible-arrow="true"
        content=" "
      >
        <ul class="tk_header">
          <li>
            <a href="https://www.tezhongzhuangbei.com/bzxx.html" target="_blank">关于本站</a>
          </li>
          <li>
            <a href="https://www.tezhongzhuangbei.com/wenhua.html" target="_blank">中特文化</a>
          </li>
          <li>
            <a href="https://www.tezhongzhuangbei.com/zbt_shenqing.html" target="_blank">会员申请</a>
          </li>
          <li>
            <a href="https://www.tezhongzhuangbei.com/wmgg.html" target="_blank">广告服务</a>
          </li>
          <li>
            <a href="https://www.tezhongzhuangbei.com/falv.html" target="_blank">法律声明</a>
          </li>
          <li>
            <a href="https://www.tezhongzhuangbei.com/lianxi.html" target="_blank">联系我们</a>
          </li>
          <li>
            <a
              href="https://bbs.tezhongzhuangbei.com/forum.php?mod=forumdisplay&fid=33"
              target="_blank"
            >帮助信息</a>
          </li>
          <li>
            <a href="https://www.tezhongzhuangbei.com/daohang.html" target="_blank">站点导航</a>
          </li>
          <li>
            <a href="https://www.tezhongzhuangbei.com/yingcai.html" target="_blank">诚聘英才</a>
          </li>
          <li>
            <a href="https://www.tezhongzhuangbei.com/banquan.html" target="_blank">版权所属</a>
          </li>
          <li>
            <a href="https://www.tezhongzhuangbei.com/meiti.html" target="_blank">媒体报道</a>
          </li>
          <li>
            <a href="https://www.tezhongzhuangbei.com/wmgg_cgal.html" target="_blank">成功案例</a>
          </li>
        </ul>
        <el-button class="btn_xq" style="padding:0;border-radius:50%;" slot="reference">
          <img style="margin-top:-1px;margin-left:-1px;" :src="imgUrl" />
        </el-button>
      </el-popover>
      <el-popover placement="top" width="160" v-model="visible2">
        <p style="text-align:center;margin:10px;">是否退出登录！</p>
        <div style="text-align: center; margin: 0">
          <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
          <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
        </div>
        <el-button slot="reference" style="padding:0;" class="logOut">
          <img style="margin-top:-1px;margin-left:-1px;" :src="imgUrl_logout" />
        </el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>
// 头部搜索框
import Search from "../header/search/index";
import {mapState} from 'vuex'
export default {
  name: "Header",
  data() {
    return {
      visible2: false,
      // 扩展按钮
      imgUrl: require("@/assets/images/header_xq.png"),
      // 注销按钮
      imgUrl_logout: require("@/assets/images/logout.png"),
      // 1366屏时免费咨询图标
      imgUrl_hw: require("@/assets/images/hw-icon.png")
    };
  },
  components: {
    Search
  },
  computed:{
    // ...mapState({
    //   appName: state=> state.test.appName
    // }),
    // appName(){
    //   return this.$store.state.test.appName
    // }
  },
  methods: {
    
  }
};
</script>

<style scoped>
.search {
  width: 30%;
  height: 100%;
}
.header_you {
  width: 65%;
  height: 100%;
  font-family: "微软雅黑";
  position: relative;
}
.header_nav li {
  float: left;
  cursor: pointer;
  font-size: 14px;
  margin-right: 1%;
}
.tel {
  font-size: 14px;
  margin-left: 3%;
}
span {
  display: block;
  float: left;
  line-height: 60px;
  font-weight: 900;
  color: #ff5b58;
  font-size: 20px;
}
.btn_xq {
  width: 27px;
  height: 27px;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 7%;
  border: 0;
}

.tk_header {
  line-height: 30px;
}
.tk_header li {
  float: left;
  width: 50%;
  text-align: center;
  cursor: pointer;
}
.tk_header li a {
  color: #fff;
}
.tk_header li a:hover {
  font-weight: 900;
}
.logOut {
  width: 27px;
  height: 27px;
  background: #fff;
  border: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 0%;
}
.hw {
  opacity: 0;
}

/* 当屏幕最小1366px时，执行下面 */
@media (max-width: 1366px) {
  .header_nav {
    display: none;
  }
  .header_you {
    width: 53%;
  }
  .hw {
    margin-right: 15px;
    opacity: 1;
  }
}
</style>
