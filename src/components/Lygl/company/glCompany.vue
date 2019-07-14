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
      <div class="search_wrap">
        <input class="search" v-model="search" placeholder="查找公司留言" />
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
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="留言标题：">
              <span>{{ props.row.ptname }}</span>
            </el-form-item>
            <el-form-item label="留言时间：">
              <span>{{ props.row.time }}</span>
            </el-form-item>
            <el-form-item label="留言人：">
              <span>{{ props.row.contact_name }}</span>
            </el-form-item>
            <el-form-item label="留言人性别：">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="联系电话：">
              <span>{{ props.row.e_mail }}</span>
            </el-form-item>
            <el-form-item label="手机：">
              <span>{{ props.row.e_mail }}</span>
            </el-form-item>
            <el-form-item label="邮箱：">
              <span>{{ props.row.e_mail }}</span>
            </el-form-item>
            <el-form-item label="QQ/MSN：">
              <span>{{ props.row.e_mail }}</span>
            </el-form-item>
            <el-form-item label="联系地址：">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="留言内容：">
              <span>{{ props.row.ptname }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="ptname" label="留言标题"></el-table-column>
      <el-table-column prop="validity" label="留言时间"></el-table-column>
      <el-table-column align="right" label="操作" width="260px">
        <template slot-scope="scope">
          <ul class="caozuo">
            <li>
              <b class="yes">已处理</b>
              <b class="no">未处理</b>
              <span>|</span>
            </li>
            <li @click="handleDelete(scope.$index, scope.row)">
              永久删除
              <span>|</span>
            </li>
            <li
              @click="handleEdit(scope.$index, scope.row);goTo('/company/detail/id='+scope.row.com_id)"
            >
              查看详情
              <span>|</span>
            </li>
          </ul>
        </template>
      </el-table-column>
    </el-table>

    <div class="common_btn" style="margin-top: 20px">
      <el-button @click="delAll()">批量删除</el-button>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currpage"
          :page-sizes="[10,20, 30, 40]"
          :page-size="pagesize"
          layout="sizes, prev, pager, next"
          background
          :total="tableData.length"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getTableData } from "../../../api/table_qgxx";
export default {
  name: "glCompany",
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
      pagesize: 10,
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
      console.log(index, row);
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
.caozuo li:nth-of-type(3) span {
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
.tb-edit footer {
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
.glqg_con .el-table {
  height: 580px;
}
.common_btn .el-button {
  margin-right: 270px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}
.el-form--inline .el-form-item__label{
  width: 100px;
}
</style>
