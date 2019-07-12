<template>
  <div class="tab_wrap">
    <div style="margin-bottom: 20px;"></div>
    <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
      <el-tab-pane
        v-for="(item, index) in editableTabs2"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >{{item.content}}</el-tab-pane>
    
    </el-tabs>
    
  </div>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {
      editableTabsValue2: "0",
      editableTabs2: [
        {
          title: "首页",
          name: "0"
        }
      ],
      tabIndex: 0
    };
  },
  mounted: function() {
    this.getTab();
  },
  watch: {
    $route(to, from) {
      if (to.path === "/cpxx/fb") {
        this.editableTabs2.push({
          title: "产品信息发布管理",
          name: "1"
        });
      }
      if (this.$route.path === "/qgxx/fb") {
        this.editableTabs2.push({
          title: "求购信息发布管理",
          name: "2"
        });
      }
      if (this.$route.path === "/zpxx/fb") {
        this.editableTabs2.push({
          title: "招聘信息发布管理",
          name: "3"
        });
      }
      if (this.$route.path === "/jmxx/fb") {
        this.editableTabs2.push({
          title: "加盟招商发布管理",
          name: "4"
        });
      }
      if (this.$route.path === "/xcxx/fb") {
        this.editableTabs2.push({
          title: "相册信息发布管理",
          name: "5"
        });
      }
      if (this.$route.path === "/zsxx/fb") {
        this.editableTabs2.push({
          title: "证书信息发布管理",
          name: "6"
        });
      }
      if (this.$route.path === "/qyxx/fb") {
        this.editableTabs2.push({
          title: "企业新闻发布管理",
          name: "7"
        });
      }
      if (this.$route.path === "/company/fb") {
        this.editableTabs2.push({
          title: "管理公司留言",
          name: "8"
        });
      }
      if (this.$route.path === "/product/fb") {
        this.editableTabs2.push({
          title: "管理产品留言",
          name: "9"
        });
      }
      if (this.$route.path === "/muban") {
        this.editableTabs2.push({
          title: "商铺模板管理",
          name: "10"
        });
      }
    }
  },
  methods: {
    getTab() {
      
    },
    removeTab(targetName) {
      let tabs = this.editableTabs2;
      let activeName = this.editableTabsValue2;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.editableTabsValue2 = activeName;
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
    }
  }
};
</script>

<style scoped>
</style>
