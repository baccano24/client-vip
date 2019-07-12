<template>
  <div>
    <el-col :span="12" class="nav" style="width:100%">
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :default-active="activeIndex"
        :router="true"
        :unique-opened="true"
      >
        <el-menu-item
          index="/"
          style="height:40px;
        line-height:40px;
        text-align:left;
        padding-left:55px;"
        >首页</el-menu-item>
        <template v-for="item in navList">
          <el-submenu
            style="text-align:left"
            :index="item.index"
            :key="item.index"
          >
            <template slot="title">
              <i :class="'iconfont '+item.icon" style="font-size:30px"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group
              style="text-align:left;"
              v-for="(citem,cindex) in item.children"
              :to="citem.path"
              :key="cindex"
            >
              <el-menu-item
                :index='citem.path'
                style="padding-left:55px;height:40px;line-height:40px;"
              >{{citem.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-col>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      navList: [
        {
          index: "1",
          icon: "icon-shuangsechangyongtubiao-",
          name: "信息发布管理",
          children: [
            { path: "/cpxx", name: "产品信息发布管理" },
            { path: "/qgxx", name: "求购信息发布管理" },
            { path: "/zpxx", name: "招聘信息发布管理" },
            { path: "/jmxx", name: "加盟招商发布管理" },
            { path: "/xcxx", name: "相册信息发布管理" },
            { path: "/zsxx", name: "证书信息发布管理" },
            { path: "/qyxx", name: "企业新闻发布管理" }
          ]
        },
        {
          index: "2",
          icon: "icon-jilu",
          name: "留言管理",
          children: [
            { path: "/company", name: "管理公司留言" },
            { path: "/product", name: "管理产品留言" }
          ]
        },
        {
          index: "3",
          icon: "icon-shangpuguanliicon",
          name: "商铺管理",
          children: [
            { path: "/muban", name: "商铺模板管理" },
            { path: "/lianjie/xjlj", name: "商铺友情链接" },
            { path: "/banner", name: "商铺banner管理" },
          ]
        },
        {
          index: "4",
          icon: "icon-huiyuan",
          name: "会员信息管理",
          children: [
            { path: "/xghy", name: "修改会员信息" },
            { path: "/mima", name: "修改登录密码" },
            { path: "/erji", name: "管理二级域名" },
          ]
        }
      ]
    };
  },
  computed: {
    activeIndex() {
      const id= this.$route.params.id
      if (
        this.$route.path === "/cpxx" ||
        this.$route.path === "/cpxx/fb" ||
        this.$route.path === "/cpxx/gl" ||
        this.$route.path === `/cpxx/xg/id=${id}`
      ) {
        return "/cpxx";
      }
      if (
        this.$route.path === "/qgxx" ||
        this.$route.path === "/qgxx/fb" ||
        this.$route.path === "/qgxx/gl"||
        this.$route.path === `/qgxx/xg/id=${id}`
      ) {
        return "/qgxx";
      }
      if (this.$route.path === "/" || this.$route.path === "/home") {
        return "/";
      }
      if (
        this.$route.path === "/zpxx" ||
        this.$route.path === "/zpxx/fb" ||
        this.$route.path === "/zpxx/gl"||
        this.$route.path === `/zpxx/xg/id=${id}`
      ) {
        return "/zpxx";
      }
      if (
        this.$route.path === "/jmxx" ||
        this.$route.path === "/jmxx/fb" ||
        this.$route.path === "/jmxx/gl"||
        this.$route.path === `/jmxx/xg/id=${id}`
      ) {
        return "/jmxx";
      }
      if (
        this.$route.path === "/xcxx" ||
        this.$route.path === "/xcxx/fb" ||
        this.$route.path === "/xcxx/gl"||
        this.$route.path === `/xcxx/xg/id=${id}`
      ) {
        return "/xcxx";
      }
      if (
        this.$route.path === "/zsxx" ||
        this.$route.path === "/zsxx/fb" ||
        this.$route.path === "/zsxx/gl"||
        this.$route.path === `/zsxx/xg/id=${id}`
      ) {
        return "/zsxx";
      }

      if (
        this.$route.path === "/qyxx" ||
        this.$route.path === "/qyxx/fb" ||
        this.$route.path === "/qyxx/gl"||
        this.$route.path === `/qyxx/xg/id=${id}`
      ) {
        return "/qyxx";
      }
      if (this.$route.path === "/company/gl"||this.$route.path === `/company/detail/id=${id}`) {
        return "/company";
      }
      if (this.$route.path === "/product/gl"||this.$route.path === `/product/detail/id=${id}`) {
        return "/product";
      }
      if (this.$route.path === "/muban") {
        return "/muban";
      }
      if (this.$route.path === "/lianjie/xjlj") {
        return "/lianjie/xjlj";
      }
      if (
        this.$route.path === "/banner/glBanner" ||
        this.$route.path === `/banner/id=${id}`
      ) {
        return "/banner";
      }
      if (
        this.$route.path === "/xghy/jb" ||
        this.$route.path === "/xghy/xx" ||
        this.$route.path === "/xghy/lianxi"
      ) {
        return "/xghy";
      }
      if (this.$route.path === "/mima") {
        return "/mima";
      }
      if (this.$route.path === "/erji") {
        return "/erji";
      }
    }
  },
  methods: {
    
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    goTo(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style scoped>
.nav {
  width: 100%;
}
.shouye {
  line-height: 40px;
  background: #479dff;
  color: #fff;
  cursor: pointer;
  text-align: left;
  font-size: 14px;
  box-sizing: border-box;
  padding-left: 40px;
}
</style>
