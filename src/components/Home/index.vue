<template>
  <div class="home">
    <h1 style="line-height:43px;padding-left:20px;">首页</h1>
    <p class="title_wrap"><span class="titl">首页</span></p>
    <div style="background:#f5f6fa;overflow:hidden;">
      <p class="xiaoxi">
        消息中心
        <span>
          <b style="color:#ff5b58;">【优惠】</b>
          <span v-for="items in xiaoXi" :key="items.id" style="margin-left:0px;">{{items.showInfo}}</span>
        </span>
      </p>
      <el-container>
        <el-container>
          <el-aside width="80%">
            <Aside class="home_con"/>
          </el-aside>
          <el-main style="border-right:15px solid #f5f6fa;">
            <Contact class="qq" style="padding-right:15px;"/>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// 消息优惠模拟api接口
import { getXiaoXi } from "../../api/xiaoxi";
// 全屏时右侧联系方式
import Contact from "../common/zxkf/Contact";
// 右侧内容主体
import Aside from "../Home/aside/index";

export default {
  name: "Home",
  data() {
    return {
      xiaoXi: []
    };
  },
  components: {
    Contact,
    Aside
  },
  mounted() {
    getXiaoXi().then(res => {
      if (res.code == 1) {
        // console.log(res.data);
        this.xiaoXi = res.data;
      }
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
  line-height: 45px;
  background: #fff;
}
.title_wrap{
  width: 100%;
  background: #fff;
  padding-left: 20px;
  box-sizing: border-box;
}
.home .titl {
  display: block;
  line-height: 35px;
  font-size: 15px;
  color: #479dff;
  box-sizing: border-box;
  padding: 0 10px;
  width: 104px;
  border-bottom: 3px solid #479dff;
  background: #fff;
  text-align: center;
  
}
.xiaoxi {
  line-height: 50px;
  color: #ff5b58;
  font-size: 20px;
  font-weight: 900;
  padding-left: 20px;
  /* background: #fff; */
}
.xiaoxi span {
  font-size: 12px;
  color: #2b5a8c;
  margin-left: 2em;
}

.el-aside {
  color: #2b5a8c;
  text-align: left;
  /* background-color: yellowgreen; */
}

.el-main {
  background-color: #fff;
  color: #2b5a8c;
  text-align: left;
}

/* 当屏幕最小1366px时，执行下面 */
@media (max-width: 1366px) {
  .qq {
    display: none;
  }
  .home_con {
    position: absolute;
    right: 0;
    left: 20%;
    background: #f5f6fa;
    margin-left: -6px;
  }
  
}
</style>
