<template>
  <div >
    <h1 style="line-height:25px;margin-bottom:20px;">QQ在线客服</h1>
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
    <h1 style="line-height:65px;">24小时手机在线客服</h1>
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
    <p>
      <a href>建议反馈</a>
    </p>
    <el-input
      type="textarea"
      :autosize="{ minRows: 3, maxRows: 2}"
      placeholder="请输入内容"
      v-model="textarea1"
      style="margin-left:10px;width:160px;"
    ></el-input>
    <el-button type="danger" class="btn">提交</el-button>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data(){
    return{
      textarea1: ''
    }
  }
};
</script>

<style scoped>
a:hover {
  color: #333;
}
h1 {
  text-align: center;
  color: #b2c0c8;
  font-size: 15px;
  line-height: 50px;
}
ul {
  box-sizing: border-box;
  padding: 0 13%;
}
ul li {
  line-height: 30px;
  overflow: hidden;
  width: 130px;
}
ul li i {
  font-size: 25px;
}
ul li i a {
  height: 30px;
  line-height: 30px;
  width: 100%;
}
ul:nth-of-type(1) li i {
  color: #ff5b58;
}
ul:nth-of-type(2) li i {
  color: #ffd75b;
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
  margin: 20px 40% 0 40%;
  padding: 5px 10px;
  box-shadow: 2px 2px 2px #999; 
}
</style>
