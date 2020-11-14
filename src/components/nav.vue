<template>
  <div class="wrap">
    <div class="nav">
      <div class="nav-main">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          text-color="#787878"
          active-text-color="#585858 "
          router
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">学校概况</template>
            <el-menu-item index="/sc-intro">学校简介</el-menu-item>
            <el-menu-item index="/sc-leader">学校领导</el-menu-item>
            <el-menu-item index="/sc-logo">学校标识</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">行政楼</template>
              <el-menu-item index="/dean">教务处</el-menu-item>
              <el-menu-item index="/Finance">财务部</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="/schoollife">校园生活</el-menu-item>
          <el-menu-item index="/Library">图书馆</el-menu-item>
          <el-menu-item index="/recruitment">人才招聘</el-menu-item>
          <el-menu-item index="/admission">学生招生</el-menu-item>
          <el-menu-item index="/Cooperation" disabled>合作交流</el-menu-item>
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/",
      input2: "",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.nav-main a{
  text-decoration:none;
}
.wrap {
  width: 1400px;
  margin: 0 auto;
  position: relative;
}
.el-input.el-input--prefix {
  box-sizing: border-box;
  width: 300px;
  display: inline-block;
  line-height: 62px;
  right: -140px;
}
.el-menu-demo.el-menu--horizontal.el-menu > li {
  box-sizing: border-box;
  width: 120px;
  text-align: center;
}
</style>