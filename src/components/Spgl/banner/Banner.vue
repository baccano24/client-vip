<template>
  <div class="banner">
    <p class="xiaoxi">
      消息中心
      <span>
        <b style="color:#ff5b58;">【优惠】</b>
        <span>111</span>
      </span>
    </p>
    <el-form label-width="120px">
      <el-form-item label="Banner图片：">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
          :show-file-list="false"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            最大只能上传1MB的图片，
            1190*360像素的图片显示效果最佳!
            <b
              style="color:#ff5b58"
            >上传图片后点击“添加”即可成功添加图片!（上限三幅图片）</b>
          </div>
        </el-upload>
      </el-form-item>
    </el-form>
    <p class="banner_title">
      <span class="fl">Banner图片</span>
      <span class="fr">操作</span>
    </p>
    <ul class="banner_con" v-for="(item,index) in fileList" :key="item.index">
      <li>
        <img :src="item.url">
        <p>未通过</p>
        <p>
          <a :href="item.url" target="_blank">查看原图</a>
        </p>
        <p @click="goTo('/banner/id='+item.id)">修改</p>
        <p @click="delet(index)">删除</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      fileList: [
        {
          url:"https://khimg.tezhongzhuangbei.com/image/20180510/20180510154521_21343.jpg",
          id: 1
        },
        {
          url:"http://img.tezhongzhuangbei.com/image/20190219/7447269cbe66e50cbef19898757b569f.jpg",
          id: 2
        },
        {
          url:"https://khimg.tezhongzhuangbei.com/image/20180510/20180510154521_21343.jpg",
          id: 3
        }
      ]
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    delet(index) {
      this.fileList.splice(index, 1);
      console.log(this.fileList);
    },
    // 修改按钮跳转
    goTo(path) {
      this.$router.replace(path);
    },
  }
};
</script>

<style scoped>
.el-upload__tip {
  color: #b2c0c8;
  line-height: 28px;
  text-align: left;
  font-size: 14px;
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
.banner_title span:nth-of-type(2) {
  width: 20%;
  text-align: center;
}
.banner_con {
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
}
.banner_con li {
  height: 300px;
  border: 1px solid #fff;
}
.banner_con li img {
  width: 80%;
  height: 100%;
  text-align: left;
  float: left;
}
.banner_con p:nth-of-type(1) {
  margin-top: 80px;
}
.banner_con p {
  width: 100%;
  text-align: center;
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 20px;
}
.banner_con p:hover {
  text-decoration: underline;
}
.el-upload-list {
  display: none !important;
}
</style>
