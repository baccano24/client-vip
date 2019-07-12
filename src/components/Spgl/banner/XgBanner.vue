<template>
  <div style="height:700px;">
    <span class="xgBanner_tab">商铺Banner修改</span>
    <p class="xiaoxi">
      消息中心
      <span>
        <b style="color:#ff5b58;">【优惠】</b>
        <span>111</span>
      </span>
    </p>
    <el-form label-width="120px">
      <el-form-item label="Banner图片：">
        
        <ul class="banner_con" v-for="item in fileList" :key="item.index">
          <li>
            <img :src="item.url">
          </li>
        </ul>
        <el-upload
          class="upLoad"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :limit="1"
        >
          <i class="el-icon-picture-outline"></i>
          <span>上传图片</span>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt>
        </el-dialog>
        <div class="upLoad_wrap"></div>
        <div class="el-upload__tip">
          最大只能上传1MB的图片，
          1190*360像素的图片显示效果最佳!
          <b style="color:#ff5b58">上传图片后点击“提交”即可成功修改图片！</b>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "XgBanner",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [
        {
          url:
            "https://khimg.tezhongzhuangbei.com/image/20180510/20180510154521_21343.jpg",
          id: 1
        }
        // {
        //   url:
        //     "http://img.tezhongzhuangbei.com/image/20190219/7447269cbe66e50cbef19898757b569f.jpg",
        //   id: 2
        // },
        // {
        //   url:
        //     "https://khimg.tezhongzhuangbei.com/image/20180510/20180510154521_21343.jpg",
        //   id: 3
        // }
      ]
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style scoped>
.xgBanner_tab {
  position: absolute;
  text-align: left;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  cursor: pointer;
  border-bottom: 3px solid #2b5a8c;
  color: #479dff;
  border-color: #479dff;
  top: 0;
  left: 170px;
}
.el-upload__tip {
  color: #b2c0c8;
  line-height: 28px;
  text-align: left;
  font-size: 14px;
  margin-top: 160px;
}
button {
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 5px;
}
.banner_title {
  color: #b2c0c8;
  margin: 0 20px;
  line-height: 28px;
  text-align: left;
  font-size: 14px;
  margin-top: 50px;
  overflow: hidden;
}
.banner_con li img{
    width: 400px;
    height: 146px;
    position: absolute;
    left: 0;
    z-index: 0;
}
</style>
