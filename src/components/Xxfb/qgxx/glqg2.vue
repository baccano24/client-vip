<template>
  <div>
      124
      <!-- <ul v-for="item in tableData" :key="item.id">
          <li>{{item.com_name}}</li>
      </ul> -->
    
    <template>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="日期" width="120" prop="ptname"></el-table-column>
        <el-table-column prop="resend" label="姓名" width="120"></el-table-column>
        <el-table-column prop="validity" label="地址" show-overflow-tooltip></el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
    </template>
  </div>
</template>
  </div>
</template>

<script>
import axios from "axios";
import { getTableData } from "../../../api/table_qgxx";
export default {
  name: "Glqg2",
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      axios.get("qgxx/table").then(res => {
        console.log(res.data);
        this.tableData = res.data.data;
      });
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<style scoped>
</style>
