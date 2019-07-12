<template>
  <div class="con">
    <div>
      <div class="qqkf fl">
        <h1>QQ在线客服</h1>
        <ul>
          <li>
            <a href="tencent://message/?uin=342753074&Site=www.tezhongzhuangbei.com&Menu=yes">
              <i class="iconfont icon-qq fl"></i>
              <span class="fr">342753074</span>
            </a>
          </li>
          <li>
            <a href="tencent://message/?uin=1577698836&Site=www.tezhongzhuangbei.com&Menu=yes">
              <i class="iconfont icon-qq fl"></i>
              <span class="fr">1577698836</span>
            </a>
          </li>
          <li>
            <a href="tencent://message/?uin=1850476234&Site=www.tezhongzhuangbei.com&Menu=yes">
              <i class="iconfont icon-qq fl"></i>
              <span class="fr">1850476234</span>
            </a>
          </li>
          <li>
            <a href="tencent://message/?uin=1951564260&Site=www.tezhongzhuangbei.com&Menu=yes">
              <i class="iconfont icon-qq fl"></i>
              <span class="fr">1951564260</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="tel fl">
        <h1>24小时手机在线客服</h1>
        <ul>
          <li>
            <a href>
              <i class="iconfont icon-shouji fl"></i>
              <span class="fr">13957168448</span>
            </a>
          </li>
          <li>
            <a href>
              <i class="iconfont icon-shouji fl"></i>
              <span class="fr">13967193180</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="jyfk">
      <p>
        <a href>建议反馈</a>
      </p>
      <el-input
        class="txtarea"
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 3}"
        placeholder="请输入内容"
        v-model="textarea1"
        style="max-width:70%;"
      ></el-input>
      <el-button type="danger" class="btn">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content_b",
  data() {
    return {
      textarea1: ""
    };
  }
};
</script>


<style scoped>
.con {
  width: 100%;
  height: 210px;
  z-index: 99999;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: nowrap;
}
.qqkf {
  width: 50%;
  background: #fff;
  height: 90%;
}

.tel {
  width: 40%;
  background: #fff;
  height: 90%;
}
.jyfk {
  width: 30%;
  position: relative;
  background: #fff;
  height: 90%;
  position: relative;
}

h1 {
  text-align: center;
  color: #b2c0c8;
  font-size: 15px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
}
ul {
  box-sizing: border-box;
  padding: 20px 5%;
}
.qqkf ul li {
  line-height: 30px;
  overflow: hidden;
  float: left;
  box-sizing: border-box;
  padding: 5px 15px;
  width: 140px;
}
.qqkf ul li i {
  font-size: 25px;
  color: #ff5b58;
  margin-right: 8px;
}
.tel ul li {
  line-height: 30px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 5px 10px;
  width: 140px;
  margin: 0 auto;
}
.tel ul li i {
  font-size: 25px;
  color: #fdd75a;
  margin-right: 8px;
}
p {
  text-align: center;
}
p a {
  text-align: center;
  color: #ff5b58;
  font-size: 15px;
  line-height: 50px;
}
.btn {
  position: absolute;
  left: 50%;
  right: 50%;
  margin: auto;
  margin-left: -20px;
  margin-top: 100px;
  padding: 5px 10px;
  box-shadow: 2px 2px 2px #999;   

}
.txtarea {
  position: absolute;
  left: 50%;
  right: 50%;
  margin-top: 10px;
  margin-left: -97px;
}
/* 当屏幕大于1366px时，执行下面 */
@media (min-width: 1366px) {
  .con {
    display: none;
  }
}
/* 当屏幕最小1366px时，执行下面 */
@media (max-width: 1366px) {
  .con {
    display: block;
    width: 100%;
    height: 210px;
    z-index: 99999;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: nowrap;
    box-sizing: border-box;
    padding: 0 10px;
  }
}
</style>
