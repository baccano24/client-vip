<template>
  <div id="table">
    <div class="add">
      <el-form :model="addDetail" ref="addDetail" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="title" label="链接名称：" :rules="[{ required: true, message: '名称不能为空'}]">
          <el-input type="title" v-model="addDetail.title" name="title" placeholder="请输入网站名称！"></el-input>
        </el-form-item>
        <el-form-item prop="address" label="链接网址：" :rules="[{ required: true, message: '网址不能为空'}]">
          <el-input
            type="address"
            v-model="addDetail.address"
            name="address"
            placeholder="请输入网站链接地址！"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="adddetail">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      class="tb-edit"
      :data="newsList"
      style="width: 100%"
      :default-sort="{prop: 'id', order: 'ascending'}"
      highlight-current-row
    >
      <el-table-column prop="title" label="连接名称">
        <template slot-scope="scope">
          <el-input
            class="change_input"
            v-model="scope.row.title"
            placeholder="请输入内容"
            @change="handleEdit(scope.$index, scope.row)"
          ></el-input>
          <span>{{scope.row.title}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="链接网址">
        <template slot-scope="scope">
          <el-input
            class="change_input"
            v-model="scope.row.address"
            placeholder="请输入内容"
            @change="handleEdit(scope.$index, scope.row)"
          ></el-input>
          <span>{{scope.row.address}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="产品排序" sortable width="100px;" class-name="change_paixu">
        <template slot-scope="scope">
          <el-input
            size="small"
            v-model="scope.row.id"
            placeholder="请输入内容"
            @change="handleEdit(scope.$index, scope.row)"
          ></el-input>
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>
      <el-table-column align="right" label="操作" width="210px">
        <template slot-scope="scope">
          <ul class="caozuo">
            <li>
              已审核
              <span>|</span>
            </li>
            <li @click="handleDelete(scope.$index, scope.row)">
              永久删除
              <span>|</span>
            </li>
            <li @click="handleEdit(scope.$index, scope.row);">
              <i id="edit" style="color:#2b5a8c;">修改</i>
              <span>|</span>
            </li>
          </ul>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "Xjlj",
  data() {
    return {
      msg: "", //记录每一条的信息，便于取id
      delarr: [], //存放删除的数据
      addDetail: {},
      editlist: false,
      editDetail: {},
      newsList: [
        {
          title: "在移动设备开发",
          address: "http://www.mps.gov.cn",
          id: "1"
        },
        {
          title: "图形及特效特性",
          address: "http://www.mwarfawrwarps.gov.cn",
          id: "2"
        },
        {
          title: "设备兼容特性",
          address: "http://www.mps.gov.cn",
          id: "3"
        },
        {
          title: "W3C将致力于开发用于实时通信",
          address: "http://www.mps.gov.cn",
          id: "4"
        },
        {
          title: "全新的表单输入对象",
          address: "http://www.mps.gov.cn",
          id: "5"
        }
      ],
      editid: ""
    };
  },
  mounted() {},
  methods: {
    //新增
    adddetail() {
      //这里的思路应该是把this.addDetail传给服务端，然后加载列表this.newsList
      //this.newsList.push(this.addDetail)
      this.newsList.push({
        title: this.addDetail.title,
        address: this.addDetail.address,
        id: Math.floor(Math.random() * 100000 + 1)
      });

      //axios.post('url',this.addDetail).then((res) =>{
      //若返回正确结果，清空新增输入框的数据
      //this.addDetail.title = ""
      //this.addDetail.address = ""
      //})
    },

    //删除
    handleDelete(index, row) {
      this.newsList.splice(index, 1);
      this.idx = index;
      this.msg = row; //每一条数据的记录
      this.delarr.push(this.msg.id); //把单行删除的每条数据的id添加进放删除数据的数组
      console.log(this.delarr);
    },
    // 修改
    handleEdit() {
      $(".tb-edit .el-input").addClass("current");
      $("input").blur(function() {
        $(".tb-edit .el-input").removeClass("current");
      });
    }
  }
};
</script>

<style scoped>
.tb-edit .el-input {
  display: none;
}

.tb-edit .current-row .current {
  display: block;
}

.tb-edit .current-row .current + span {
  display: none;
}
.img_id {
  margin-left: 5px;
  cursor: pointer;
}
.add {
  margin: 10px 0;
  padding: 15px;
}

.title {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.title span {
  float: right;
  cursor: pointer;
}

.content {
  padding: 10px;
}

.content input {
  width: 270px;
  margin-bottom: 15px;
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
</style>
