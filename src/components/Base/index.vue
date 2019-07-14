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
          <!-- 此处放置el-tabs代码 -->
          <div class="tabsView">
            <el-tabs
              v-model="activeIndex"
              type="border-card"
              closable
              v-if="openTab.length"
              @tab-click="tabClick"
              @tab-remove="tabRemove"
            >
              <el-tab-pane
                v-for="(item, index) in openTab"
                :key="item.name"
                :label="item.name"
                :name="item.route"
              ></el-tab-pane>
            </el-tabs>
          </div>
          <router-view></router-view>
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
    Tab
  },
  methods: {
    //tab标签点击时，切换相应的路由
    tabClick(tab) {
      // console.log("tab",tab);
      // console.log('active',this.activeIndex);
      this.$router.push({ path: this.activeIndex });
    },
    //移除tab标签
    tabRemove(targetName) {
      // console.log("tabRemove",targetName);
      //首页不删
      if (targetName == "/" || targetName == "/home") {
        return;
      }
      this.$store.commit("delete_tabs", targetName);
      if (this.activeIndex === targetName) {
        // 设置当前激活的路由
        if (this.openTab && this.openTab.length >= 1) {
          console.log(
            "=============",
            this.openTab[this.openTab.length - 1].route
          );
          this.$store.commit(
            "set_active_index",
            this.openTab[this.openTab.length - 1].route
          );
          this.$router.push({ path: this.activeIndex });
        } else {
          this.$router.push({ path: "/" });
        }
      }
    }
  },
  mounted() {
    // 刷新时以当前路由做为tab加入tabs
    // 当前路由不是首页时，添加首页以及另一页到store里，并设置激活状态
    // 当当前路由是首页时，添加首页到store，并设置激活状态
    if (this.$route.path !== "/" && this.$route.path !== "/home") {
      this.$store.commit("add_tabs", { route: "/home", name: "首页" });
      this.$store.commit("add_tabs", {
        route: this.$route.path,
        name: this.$route.name
      });
      this.$store.commit("set_active_index", this.$route.path);
    } else {
      this.$store.commit("add_tabs", { route: "/home", name: "首页" });
      this.$store.commit("set_active_index", "/home");
      this.$router.push("/");
    }
  },
  computed: {
    openTab() {
      return this.$store.state.openTab;
    },
    activeIndex: {
      get() {
        return this.$store.state.activeIndex;
      },
      set(val) {
        this.$store.commit("set_active_index", val);
      }
    }
  },
  watch: {
    $route(to, from) {
      //判断路由是否已经打开
      //已经打开的 ，将其置为active
      //未打开的，将其放入队列里
      let flag = false;
      for (let item of this.openTab) {
        if (item.name === to.name) {
          this.$store.commit("set_active_index", to.path);
          flag = true;
          break;
        }
      }
      if (!flag) {
        this.$store.commit("add_tabs", { route: to.path, name: to.name });
        this.$store.commit("set_active_index", to.path);
      }
    }
  }
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
.tabsView {
  height: 30px;
  margin-bottom: 20px;
}

/* 当屏幕最小1366px时，执行下面 */
@media (max-width: 1366px) {
  .el-aside {
    height: 1000px;
  }
}
</style>
