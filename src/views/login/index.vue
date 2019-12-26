<template>
<div class="login">
     <el-card class="login-card">
         <div class="title">
             <img src="../../assets/img/logo_index.png" alt="">
         </div>
         <el-form ref="myForm" style="margin-top:20px" :model="loginForm" :rules="loginRules">
             <el-form-item prop="mobile">
                 <el-input  v-model="loginForm.mobile" placeholder="请输入手机号">

                 </el-input>
             </el-form-item>
             <el-form-item prop="code">
                 <el-input v-model="loginForm.code" style="width:70%" placeholder="请输入验证码"></el-input>
                 <el-button style="float:right" type="danger">发送验证码</el-button>
             </el-form-item>
              <el-form-item prop="check">
                <el-checkbox v-model="loginForm.check" >请同意以下条款</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button @click="submitLogin" type="primary" style="width:100%">登录</el-button>
            </el-form-item>
         </el-form>
     </el-card>
     </div>

</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false// 是否勾选
      },
      loginRules: {
        mobile: [{ required: true,
          message: '请输入手机号' }, {
          pattern: /^1[3456789]\d{9}$/,
          message: '格式不对'
        }],
        code: [{ required: true, message: '请输入验证码' }, {
          pattern: /^\d{6}$/,
          message: '格式不对'
        }],
        check: [{ validator: function (rule, value, callback) {
          if (value) {
            // 认为校验通过，放过去
            callback()// 直接执行callback
          } else {
            // 认为校验不通过，要提示信息
            callback(new Error('请点击这里'))
          }
        } }]
      }
    }
  },
  methods: {
    submitLogin () {
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          // 认为前端校验登录成功
          this.$axios({
            url: '/authorizations',
            method: 'post',
            data: this.loginForm
          }).then(result => {
            window.localStorage.setItem('user-token', result.data.token)
            this.$router.push('/home')
          })
        }
      })
    }
  }

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
