<template>
  <el-row class="layout-header" type="flex" align="middle" justify="space-between">
    <el-col class="left" :span="6">
    <i class="el-icon-s-unfold"></i>
    <span class="title"> 江苏传智播客教育科技股份有限公司
    </span>
    </el-col>
    <el-col class="right" :span="4">
        <el-row type='flew'  justify="end" align="middle">
            <img :src="userInfo.photo ? userInfo.photo : defaultImg" alt="">
            <el-dropdown @command="handle">
               <span>{{userInfo.name}}</span>
                <el-dropdown-menu slot="dropdown">
<el-dropdown-item command="info">个人信息</el-dropdown-item>
    <el-dropdown-item  command="git">Git地址</el-dropdown-item>
    <el-dropdown-item command="lgout">退出</el-dropdown-item>

                </el-dropdown-menu>
            </el-dropdown>
        </el-row>

    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}, // 用户信息
      defaultImg: require('../../assets/img/avatar.jpg') // 先把地址转换成变量
    }
  },
  created () {
    // 查询数据
    this.$axios({
      url: '/user/profile'
      //   headers参数

    }).then(result => {
      console.log(result)
      this.userInfo = result.data // 获取用户个人信息
    })
  },
  methods: {
    handle (commad) {
      if (commad === 'lgout') {
        window.localStorage.removeItem('user-token')
        this.$router.push('/login')
      } else if (commad === 'git') {
        window.location.href = 'http://www.4399.com/'
      }
    }
  }
}
</script>

<style lang='less' scoped>
   .layout-header{
       height: 60px;
       .left{
           font-size: 18px;
           .title{
              margin-left:4px;
              color: #2c3e50;
              font-size:15px;
           }
       }
       .right{
           img{
               height: 40px;
               width: 40px;
          border-radius: 50%;

           }

       }
   }
</style>
