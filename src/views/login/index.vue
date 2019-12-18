<template>
<div class="login">
     <el-card class="login-card">
         <div class="title">
             <img src="../../assets/img/logo_index.png" alt="">
         </div>
         <el-form style="margin-top:20px">
             <el-form-item>
                 <el-input placeholder="请输入手机号">

                 </el-input>
             </el-form-item>
             <el-form-item>
                 <el-input style="width:70%" placeholder="请输入验证码"></el-input>
                 <el-button style="float:right" type="danger">发送验证码</el-button>
             </el-form-item>
              <el-form-item>
                <el-checkbox>我不同意我不同意我不同意此条款</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%">登录</el-button>
            </el-form-item>
         </el-form>
     </el-card>
     </div>

</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.login{
    background-image: url('../../assets/img/login_bg.jpg');
    height: 100vh;
    background-size:cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-card{
        width: 440px;
        height: 350px;
    }
    .title{
        text-align: center;
        img{
            height: 45px;
        }
    }
}
</style>
