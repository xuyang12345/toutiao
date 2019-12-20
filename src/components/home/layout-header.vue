<template>
  <el-row class="layout-header" type="flex" align="middle" justify="space-between">
    <el-col class="left" :span="6">
    <i class="el-icon-s-unfold"></i>
    <span class="title"> 江苏传智播客教育科技股份有限公司
    </span>
    </el-col>
    <el-col class="right" :span="4">
        <el-row type='flew'  justify="end" align="middle">
            <img src="../../assets/img/avatar.jpg" alt="">
            <el-dropdown>
                <span>哈哈</span>
                <el-dropdown-menu slot="dropdown">
<el-dropdown-item>个人信息</el-dropdown-item>
    <el-dropdown-item>Git地址</el-dropdown-item>
    <el-dropdown-item>退出</el-dropdown-item>

                </el-dropdown-menu>
            </el-dropdown>
        </el-row>

    </el-col>
  </el-row>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
   .layout-header{
       height: 60px;

       .left{
           font-size: 18px;
           .title{
               margin-left:4px;
               height: 40px;
               border-radius: 50%;
               margin-right: 5px;
           }
       }
   }
</style>
