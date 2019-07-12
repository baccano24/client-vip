<template>
  <div>
    <h1 style="line-height:43px;padding-left:20px;">管理公司留言</h1>

    <el-container>
      <el-main class="qgxx_con">
        <ul>
          <li
            v-for="(item,i) in qgxx_list"
            :class="{'active':$route.path.indexOf(item.path)!=-1}"
            :key="item.i"
            @click="changeComing(i)"
          >{{item.name}}</li>
        </ul>
        <router-view></router-view>
      </el-main>
      <el-aside class="qq" width="200px">
        <Contact style="padding-right:15px;"/>
      </el-aside>
    </el-container>

    <el-container>
      <el-main class="contact_bottom">
        <Content_b/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import glCompany from "../company/glCompany"
// 全屏时右侧联系方式
import Contact from "../../common/zxkf/Contact";
// 1366屏时底部联系方式
import Content_b from "../../common/zxkf/Content_b";
export default {
  name: "company",
  components: {
    Contact,
    Content_b,
    glCompany
  },
  data() {
    return {
      qgxx_list: [
        { name: "管理公司留言", path: "/company/gl", id: 1 }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    handleChange(value) {
      // console.log(value);
    },
   changeComing(index) {
      if (index === 0) {
        this.$router.push({
          path: "/company/gl"
        })
      }
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
.qgxx_con {
  background-color: #fff;
  position: absolute;
  right: 220px;
  left: 240px;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding-top: 0;
}
.qgxx_con ul {
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
}
.qgxx_con ul li {
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
.qgxx_con ul .active {
  border-bottom: 3px solid #479dff !important;
  color: #479dff;
}
/* 当屏幕大于1366px时，执行下面 */
@media (min-width: 1366px) {
  .el-aside {
    height: 720px;
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
  .qgxx_con {
    position: absolute;
    right: 0;
    left: 240px;
  }
  .contact_bottom {
    position: absolute;
    bottom: -820px;
    left: 240px;
    right: 0px;    
  }
}
</style>
