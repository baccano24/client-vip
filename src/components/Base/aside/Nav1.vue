<template>
  <div>
    <el-col :span="12" class="nav" style="width:100%">
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :default-active="activeIndex"
        :router="true"
      >
      <!-- :default-active="$route.path" -->
        <el-menu-item
          index="/"
          style="height:40px;
        line-height:40px;
        text-align:left;
        padding-left:55px;"
        >首页</el-menu-item>
        <el-submenu index="1" style="text-align:left">
          <template slot="title">
            <i class="iconfont icon-shuangsechangyongtubiao-" style="font-size:30px"></i>
            <span>信息发布管理</span>
          </template>
          <el-menu-item-group style="text-align:left;">
            <el-menu-item
              index="/cpxx"
              style="padding-left:55px;height:40px;line-height:40px;"
            >产品信息发布管理</el-menu-item>
            <el-menu-item
              index="/qgxx"
              style="padding-left:55px;height:40px;line-height:40px;"
            >求购信息发布管理</el-menu-item>
            <el-menu-item
              index="/zpxx"
              style="padding-left:55px;height:40px;line-height:40px;"
            >招聘信息发布管理</el-menu-item>
            <el-menu-item
              index="/jmxx"
              style="padding-left:55px;height:40px;line-height:40px;"
            >加盟招商发布管理</el-menu-item>
            <el-menu-item
              index="/xcxx"
              style="padding-left:55px;height:40px;line-height:40px;"
            >相册信息发布管理</el-menu-item>
            <el-menu-item
              index="/zsxx"
              style="padding-left:55px;height:40px;line-height:40px;"
            >证书信息发布管理</el-menu-item>
            <el-menu-item
              index="/qyxx"
              style="padding-left:55px;height:40px;line-height:40px;"
            >企业新闻发布管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2" style="text-align:left">
          <template slot="title">
            <i class="iconfont icon-jilu" style="font-size:25px;"></i>
            <span>留言管理</span>
          </template>
          <el-menu-item-group style="text-align:left">
            <el-menu-item
              index="/company"
              style="padding-left:55px;height:40px;line-height:40px;"
            >管理公司留言</el-menu-item>
            <el-menu-item
              index="/product"
              style="padding-left:55px;height:40px;line-height:40px;"
            >管理产品留言</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3" style="text-align:left">
          <template slot="title">
            <i class="iconfont icon-shangpuguanliicon" style="font-size:25px"></i>
            <span>商铺管理</span>
          </template>
          <el-menu-item-group style="text-align:left">
            <el-menu-item
              index="/muban"
              style="padding-left:55px;height:40px;line-height:40px;"
            >商铺模板管理</el-menu-item>
            <el-menu-item
              index="/lianjie/xjlj"
              style="padding-left:55px;height:40px;line-height:40px;"
            >商铺友情链接</el-menu-item>
            <el-menu-item
              index="/banner"
              style="padding-left:55px;height:40px;line-height:40px;"
            >商铺banner管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4" style="text-align:left">
          <template slot="title">
            <i class="iconfont icon-huiyuan" style="font-size:20px"></i>
            <span>会员信息管理</span>
          </template>
          <el-menu-item-group style="text-align:left">
            <el-menu-item
              index="/xghy"
              style="padding-left:55px;height:40px;line-height:40px;"
            >修改会员信息</el-menu-item>
            <el-menu-item
              index="/mima"
              style="padding-left:55px;height:40px;line-height:40px;"
            >修改登录密码</el-menu-item>
            <el-menu-item
              index="/erji"
              style="padding-left:55px;height:40px;line-height:40px;"
            >管理二级域名</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "Nav",
  computed:{
    activeIndex(){
      if(this.$route.path==='/cpxx'||this.$route.path==='/cpxx/fb'||this.$route.path==='/cpxx/gl'||this.$route.path==='/cpxx/xg/id=:id'){
        return '/cpxx'
      }
      if(this.$route.path==='/qgxx'||this.$route.path==='/qgxx/fb'||this.$route.path==='/qgxx/gl'){
        return '/qgxx'
      }
      if(this.$route.path==='/'||this.$route.path==='/home'){
        return '/'
      }
      if(this.$route.path==='/zpxx'||this.$route.path==='/zpxx/fb'||this.$route.path==='/zpxx/gl'){
        return '/zpxx'
      }
      if(this.$route.path==='/jmxx'||this.$route.path==='/jmxx/fb'||this.$route.path==='/jmxx/gl'){
        return '/jmxx'
      }
      if(this.$route.path==='/xcxx'||this.$route.path==='/xcxx/fb'||this.$route.path==='/xcxx/gl'){
        return '/xcxx'
      }
      if(this.$route.path==='/zsxx'||this.$route.path==='/zsxx/fb'||this.$route.path==='/zsxx/gl'){
        return '/zsxx'
      }
      
      if(this.$route.path==='/qyxx'||this.$route.path==='/qyxx/fb'||this.$route.path==='/qyxx/gl'){
        return '/qyxx'
      }
      if(this.$route.path==='/company'){
        return '/company'
      }
      if(this.$route.path==='/product'){
        return '/product'
      }
      if(this.$route.path==='/muban'){
        return '/muban'
      }
      if(this.$route.path==='/lianjie/xjlj'){
        return '/lianjie/xjlj'
      }
      if(this.$route.path==='/banner/glBanner'||this.$route.path==='/banner/id=:id'){
        return '/banner'
      }
      if(this.$route.path==='/xghy/jb'||this.$route.path==='/xghy/xx'||this.$route.path==='/xghy/lianxi'){
        return '/xghy'
      }
      if(this.$route.path==='/mima'){
        return '/mima'
      }
      if(this.$route.path==='/erji'){
        return '/erji'
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
