<template>
  <div>
    <header class="navbar-wrapper">
      <div class="navbar navbar-fixed-top">
        <div class="container-fluid cl">
          <span class="title">钟表商城管理后台</span>
          <div class="tit1">
            <el-dropdown class="user">
              <span class="el-dropdown-link">
                admin<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </header>
    <el-row style="width:100%">
      <el-col :span=6>
        <aside class="aside">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color='#eeeeee'
            :unique-opened	='true' router theme="dark">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-film"></i>
                <span>首页内容展示管理</span>
              </template>
                <el-menu-item index="/bannerList">首页轮播图管理</el-menu-item>
                <el-menu-item index="1-2">首页官方推荐管理</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-shop"></i>
                <span>商品管理</span>
              </template>
                <el-menu-item index="2-1">分类管理</el-menu-item>
                <el-menu-item index="/goodsList">商品列表</el-menu-item>
                <el-menu-item index="/brandList">品牌管理</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>订单管理</span>
              </template>
                <el-menu-item index="/orderList">订单列表</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>会员管理</span>
              </template>
                <el-menu-item index="4-1">会员列表</el-menu-item>
                <el-menu-item index="4-2">删除的会员</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span>统计报表</span>
              </template>
                <el-menu-item index="5-1">订单销量统计</el-menu-item>
            </el-submenu>
          </el-menu>
        </aside>
      </el-col>
      <el-col :span=18 style="margin-left: 220px;width:82%">
        <div class="content">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-wrapper{
  height: 45px;
}
.navbar{
  background: #2d6dcc;
}
.navbar-fixed-top{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
}
.container-fluid{
  padding-right: 100px;
  padding-left: 50px;
  margin: 10px auto;
  color: #fff;
  display:flex;
  justify-content: space-between;
}
.cl{
  zoom: 1;
}
.title{
  font-size: 18px;
  margin-left: 50px;
}
.tit1{
  .user{
    color: #fff;
    font-size: 16px;
  }
}
.aside{
  position: fixed;
  z-index: 1030;
  width: 200px!important;
  height: 100vh;
  border: 1px solid rgba(238,238,238,0.98);
  background-color:  rgba(238,238,238,0.98);
}
.content{
  // margin-left: 220px;
  // margin-top: 5px;
  padding: 10px;
}

</style>
