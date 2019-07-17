<template>
  <div class="tb-edit glqg_con">
    <p class="xiaoxi">
      消息中心
      <span>
        <b style="color:#ff5b58;">【优惠】</b>
        <span>111</span>
      </span>
    </p>
    <header>
      <ul>
        <li :style="table_cpxx">求购信息</li>
        <li>未通过产品</li>
        <li>待审核产品</li>
      </ul>
      <div class="search_wrap">
        <input class="search" v-model="search" placeholder="查找求购信息">
        <span>
          <i class="el-iconfont el-icon-search"></i>
        </span>
      </div>
    </header>
    <el-table
      ref="multipleTable"
      :data="tableData.filter(data => !search || data.ptname.toLowerCase().includes(search.toLowerCase())).slice((currpage-1)*pagesize,currpage*pagesize)"
      tooltip-effect="dark"
      style="width: 100%;"
      @selection-change="handleSelectionChange"
      highlight-current-row
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="ptname" label="信息标题" width="230"></el-table-column>
      <el-table-column prop="time" label="递交时间" ></el-table-column>
      <el-table-column prop="validity" label="有效期限" width="100"></el-table-column>
      <el-table-column prop="resend" label="求购重发"  width="100"></el-table-column>
      <el-table-column align="right" label="操作" width="260px">
        <template slot-scope="scope">
          <ul class="caozuo">
            <li>
              <b class="yes">已审核</b>
              <b class="no">未审核</b>
              <span>|</span>
            </li>
            <li>
              图
              <span>|</span>
            </li>
            <li @click="handleDelete(scope.$index, scope.row)">
              永久删除
              <span>|</span>
            </li>
            <li @click="handleEdit(scope.$index, scope.row);goTo('/qgxx/xg/id='+scope.row.com_id)">
              修改
              <span>|</span>
            </li>
          </ul>
        </template>
      </el-table-column>
    </el-table>

    <div class="common_btn" style="margin-top: 20px">
      <el-button @click="delAll()">批量删除</el-button>
      <el-button class="time">批量重发</el-button>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currpage"
          :page-sizes="[20, 30, 40]"
          :page-size="pagesize"
          layout="sizes, prev, pager, next"
          background
          :total="tableData.length"
        ></el-pagination>
      </div>
    </div>
    <footer>
      <ul>
        <li>
          <span>重发：</span>信息不变，时间更新，让您排名靠前，每天限重发一次！
        </li>
        <li>
          <span>报价：</span>添加报价信息，让您的产品更受买家信赖！
        </li>
        <li>
          <span>修改：</span>已发布内容可随时更改，不限次数！
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import { getTableData } from "../../../api/table_qgxx";
export default {
  name: "Glqg",
  components: {},
  data() {
    return {
      imgUrl_id: require("@/assets/images/table_id.png"),
      // 表格数据
      tableData: [],
      msg: "", //记录每一条的信息，便于取id
      delarr: [], //存放删除的数据
      multipleSelection: [],
      // 搜索框
      search: "",
      // 分页
      currpage: 1,
      pagesize: 20,
      // header背景图
      table_cpxx: {
        backgroundImage:
          "url(" + require("../../../assets/images/table_cpxx.png") + ")",
        backgroundRepeat: "no-repeat"
      }
    };
  },
  //在实例被创建之后被调用
  created: function() {
    this.getTableData(this.tableData);
  },
  methods: {
     getTableData() {
      axios.get("qgxx/table").then(res => {
        // console.log(res.data);
        this.tableData = res.data.data;
      });
    },
    // 修改按钮跳转
    goTo(path) {
      this.$router.replace(path);
      
    },
    // 操作
    handleEdit(index, row) {
      // console.log(index, row);
    },
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
      this.idx = index;
      this.msg = row; //每一条数据的记录
      this.delarr.push(this.msg.com_id); //把单行删除的每条数据的id添加进放删除数据的数组
      console.log(this.delarr);
    },
    delAll() {
      const length = this.multipleSelection.length;
      for (let i = 0; i < length; i++) {
        this.delarr.push(this.multipleSelection[i].com_id);
        console.log(this.delarr);
        //  this.tableData.splice(this.delarr[i],i)
      }
    },
    // 修改排序信息
    change_id() {
      $(".tb-edit .el-input").addClass("current");
      $("input").blur(function() {
        $(".tb-edit .el-input").removeClass("current");
      });
    },
    // checkbox选框
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 分页按钮
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currpage = val;
    }
  }
};
</script>

<style scoped>
.caozuo {
    float: right;
}
.caozuo li {
  float: left;
  cursor: pointer;
  box-sizing: border-box;
}
.caozuo li:hover {
  text-decoration: underline;
}
.caozuo li span {
  margin: 7px;
  font-size: 5px;
  display: inline-block;
  -webkit-transform: scale(0.5);
  color: #b2c0c8;
  font-weight: 900;
}
.caozuo li:nth-of-type(4) span {
  opacity: 0;
  margin-right: 0;
}

.img_id {
  margin-left: 5px;
  cursor: pointer;
}
.tb-edit .el-input {
  display: none;
}

.tb-edit .current-row .current {
  display: block;
}

.tb-edit .current-row .current + span {
  display: none;
}
.common_btn {
  text-align: left;
  box-sizing: border-box;
  padding-left: 20px;
  position: relative;
}
.time {
  margin-right: 180px;
}
.tb-edit header {
  height: 50px;
  background: #fff;
  padding: 0 20px;
}
.search_wrap {
  float: right;
  height: 30px;
}
.search_wrap .search {
  height: 30px;
  border: 1px solid #b2c0c8;
  border-radius: 5px;
  float: left;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
  padding-left: 10px;
  color: #b2c0c8;
  outline: none;
}
.search_wrap span {
  display: block;
  float: left;
  background: #479dff;
  text-align: center;
  height: 30px;
  padding: 0 10px;
  border: 1px solid #479dff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 20px;
}
.search_wrap span i {
  color: #fff;
  line-height: 30px;
}
.tb-edit header ul {
  float: left;
}
.tb-edit header ul li {
  float: left;
  padding: 0 20px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 14px;
}
.tb-edit header ul li:nth-of-type(1) {
  background-position-y: 5px;
  padding-left: 30px;
  color: #479dff;
}
.tb-edit footer{
  box-sizing: border-box;
  padding-left: 20px;
}
.tb-edit footer ul li {
  float: left;
  padding: 32px 0;
  margin-right: 4%;
}
.tb-edit footer ul li:nth-of-type(3) {
  margin-right: 0;
}
.tb-edit footer ul li span {
  color: #ff6866;
}
.caozuo .yes {
  display: none;
}
</style>
