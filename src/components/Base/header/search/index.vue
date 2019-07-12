<template>
  <div>
    <el-input
      :placeholder="holder"
      v-model="input"
      id="input-select"
      @keyup.enter.native="searchEnterFun"
      
    >
      <el-select class="choice" v-model="label" slot="prepend">
        <el-option label="产品" value="1" @click.native="tab()"></el-option>
        <el-option label="公司" value="2" @click.native="tab()"></el-option>
        <el-option label="采购" value="3" @click.native="tab()"></el-option>
        <el-option label="求购" value="4" @click.native="tab()"></el-option>
        <!-- <el-select class="filter-item" v-model="value" clearable>
          <el-option v-for="item in options" :key="item.num" :label="item.name" :value="item.id"></el-option>
        </el-select>-->
      </el-select>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      label: "产品",
      input: "",
      holder: "请输入要搜索的产品名称"
    };
  },
  methods: {
    // 搜索功能
    searchEnterFun: function(e) {
      var keyCode = window.event ? e.keyCode : e.which;
      var input_select=document.getElementById("input-select");
      var choice = document.getElementsByClassName("el-input__inner");
      if (keyCode == 13 && choice[0].value == "产品") {
        window.open(
          "https://product.tezhongzhuangbei.com/cpjs.html?keyword=" + this.input
        );
      }
      if (keyCode == 13 && choice[0].value == "公司") {
        window.open(
          "https://company.tezhongzhuangbei.com/qysx.html?keyword=" + this.input
        );
      }
      if (keyCode == 13 && choice[0].value == "采购") {
        window.open(
          "https://zb.tezhongzhuangbei.com/cgzb.html?gjz=" + this.input
        );
      }
      if (keyCode == 13 && choice[0].value == "求购") {
        window.open(
          "https://zb.tezhongzhuangbei.com/wtqg.html?gjz=" + this.input
        );
      }
    },
    // 点击动态切换input-select的placeholder
    tab:function(){
      var input_select=document.getElementById("input-select");
      var choice = document.getElementsByClassName("el-input__inner");
      if (choice[0].value == "产品"){
        input_select.placeholder="请输入要搜索的产品名称"
      };
      if (choice[0].value == "公司"){
        input_select.placeholder="请输入要搜索的公司名称"
      };
      if (choice[0].value == "采购"){
        input_select.placeholder="请输入要搜索的采购信息"
      };
      if (choice[0].value == "求购"){
        input_select.placeholder="请输入要搜索的求购产品名称"
      }
    },
  }
};
</script>

<style scoped>
.el-select .el-input {
  width: 80%;
  outline: none;
}
.input-with-select .el-input-group__prepend {
  width: 40px;
}

</style>
