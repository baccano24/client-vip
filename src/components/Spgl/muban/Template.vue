<template>
  <div class="template_con">
    <p class="xiaoxi">
      消息中心
      <span>
        <b style="color:#ff5b58;">【优惠】</b>
        <span>111</span>
      </span>
    </p>
    <ul>
      <li @mouseover="change" @mouseout="hide">
        <div class="img_wrap"></div>
        <img src="https://user.tezhongzhuangbei.com/static/client_vip/images/spmoban/new-view.jpg">
        <div class="btn" @mouseover="movebtn" @mouseout="leavebtn">
          <span>[VIP专享]</span>
          <b>预览</b>
          <b>应用</b>
        </div>
      </li>
      <li>
        <img
          src="https://user.tezhongzhuangbei.com/static/client_vip/images/spmoban/new-view-blue2.jpg"
        >
      </li>
      <li>
        <img src="https://user.tezhongzhuangbei.com/static/client_vip/images/spmoban/31pass.jpg">
      </li>
      <li>
        <img src="https://user.tezhongzhuangbei.com/static/client_vip/images/spmoban/19Z.jpg">
      </li>
      <li>
        <img src="https://user.tezhongzhuangbei.com/static/client_vip/images/spmoban/new-2-b.jpg">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Template",
  methods: {
    change() {
      $(".template_con ul li .btn").css("display", "block");
      $(".template_con ul li .img_wrap").css("background-image","linear-gradient(to top, #479dff, #fff)").css("opacity",".3");
    },
    hide() {
      $(".template_con ul li .btn").css("display", "none");
      $(".template_con ul li .img_wrap").css("background","#479dff").css("opacity",".2");
    },
    movebtn(){
      $(".template_con ul li .img_wrap").css("background-image","linear-gradient(to top, #479dff, #fff)").css("opacity",".3");
    },
    leavebtn(){
      $(".template_con ul li .img_wrap").css("background","#479dff").css("opacity",".2");
    }
  }
};
</script>

<style scoped>
.template_con ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
}
.template_con ul li {
  width: 23%;
  height: 250px;
  float: left;
  border: 1px solid #fff;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
}
.template_con ul li img {
  width: 100%;
}
.template_con ul li .img_wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #479dff;
  opacity: 0.2;
  z-index: 10;
}

.template_con ul li .btn {
  position: absolute;
  bottom: 10px;
  z-index: 999;
  display: none;
}
.template_con ul li .btn span {
  font-size: 15px;
  color: #fff;
  font-weight: 900;
  margin-left: 5px;
}
.template_con ul li .btn b {
  display: inline-block;
  background: #87befc;
  padding: 5px 15px;
  margin-left: 15px;
  color: #fff;
  cursor: pointer;
}
.template_con ul li .btn b:nth-of-type(2) {
  margin-left: 3px;
  background: #ff8987;
}
</style>
