<template>
  <div>
    <el-container class="body_all">
      <el-aside width="220px" style="min-width:190px;border-right:1px solid #eee">
        <div class="logo_wrap">
          <img class="logo" :src="imgUrl" />
        </div>
        <Admin />
        <Nav ref="nav" />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main style="padding:0;background:#fff;">
          <!-- <Tab /> -->
          <tags-view />

          <keep-alive :include="cachedViews">
            <router-view :key="key" />
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from "../Base/aside/Nav";
import Admin from "../Base/aside/Admin";
import Header from "../Base/header/index";
import Tab from "../Base/tab/index";
import tagsView from "../Base/tagView/index";
export default {
  name: "Base",
  data() {
    return {
      // logo图片
      imgUrl: require("@/assets/images/logo.png")
    };
  },
  components: {
    // 左侧导航栏
    Nav,
    // 登录显示
    Admin,
    // 头部组件
    Header,
    // 选项卡
    Tab,
    tagsView
  },
  methods: {}
};
</script>

<style scoped>
.el-header {
  color: #2b5a8c;
  text-align: center;
  line-height: 60px;
  background: #fff;
}

.el-aside {
  color: #2b5a8c;
  text-align: center;
  background: #fff;
}

.el-main {
  background-color: #fff;
  color: #2b5a8c;
  text-align: center;
  padding-bottom: 0;
}

body > .el-container {
  margin-bottom: 40px;
}
.body_all {
  position: absolute;
  width: 100%;
  /* height: 100%; */
}
.logo_wrap {
  position: relative;
  height: 60px;
  width: 100%;
}
.logo {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.tab {
  background: olive;
  width: 100%;
  height: 30px;
  padding-left: 20px;
  box-sizing: border-box;
}
ul li {
  float: left;
  padding: 0 20px;
  padding-right: 0;
  background: yellowgreen;
  cursor: pointer;
  margin-right: 20px;
  height: 100%;
  line-height: 30px;
}
.tab ul li i {
  color: #333;
  font-weight: 900;
  font-size: 15px;
  margin-left: 10px;
}

/* 当屏幕最小1366px时，执行下面 */
@media (max-width: 1366px) {
  .el-aside {
    height: 1000px;
  }
}
</style>
