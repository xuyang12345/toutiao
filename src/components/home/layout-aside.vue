<template>
  <div class='layout-aside'>
      <div class='title'>
          <img :src="collaspse? smallImg :bigImg" alt="">
      </div>
      <el-menu :collapse="collaspse" router :style="{width:collaspse? '60px' :'230px'}" background-color="#353b4e" text-color="#adafb5" active-text-color="#ffd04b">
       <el-menu-item index="/home">
       <i class="el-icon-s-home"></i>
       <span>首页</span>
       </el-menu-item>
       <el-submenu index='1'>
           <template slot="title">
               <i class="el-icon-s-order"></i>
               <span>内容管理</span>
               </template>
           <el-menu-item index="/home/publish">发布文章</el-menu-item>
           <el-menu-item index="/home/articles">内容评论</el-menu-item>
           <el-menu-item index="/home/comment">评论列表</el-menu-item>
           <el-menu-item index="/home/material">素材管理</el-menu-item>
       </el-submenu>
       <el-submenu index='2'>

        <template slot="title">
            <i class='el-icon-s-flag'></i>
<span >粉丝管理</span>
        </template>
           <el-menu-item index="/home/picture">图文数据</el-menu-item>
           <el-menu-item index="/home/fansiinfo">粉丝画像</el-menu-item>
           <el-menu-item index="/home/fansilife">粉丝概况</el-menu-item>
           <el-menu-item index="/home/fanlist">粉丝列表</el-menu-item>
       </el-submenu>
       <el-menu-item index="/home/account">
       <template >
           <i class='el-icon-s-custom'></i>
          <span slot="title">账户信息</span>
           </template>
       </el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {
  props: ['collaspse'],
  data () {
    return {
      bigImg: require('../../assets/img/logo_admin.png'),
      smallImg: require('../../assets/img/toutiao.png')
    }
  }
}
</script>

<style lang='less' scoped>
.layout-aside{
    overflow: hidden;
    .el-menu{
        border-right:none;
    }
.title{
    text-align: center;
    background-color: #2e2f32;
    padding: 10px 0;
    img{
        height: 35px;
    }
}
}
</style>
