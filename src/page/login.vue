<template>
  <div>
    <el-card class="login-form-layout">
      <el-form autoComplete="on"
               :model="loginForm"
               :rules="loginRules"
               ref="loginForm"
               label-position="left">
        <h2 class="login-title color-main">钟表商城</h2>
        <el-form-item prop="username">
          <el-input name="username"
                    type="text"
                    v-model="loginForm.username"
                    autoComplete="on"
                    placeholder="请输入用户名"
                    prefix-icon="el-icon-user">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password"
                    :type="pwdType"
                    @keyup.enter.native="handleLogin"
                    v-model="loginForm.password"
                    autoComplete="on"
                    placeholder="请输入密码"
                    prefix-icon="el-icon-unlock">
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px;text-align: center">
          <el-button style="width: 45%" type="primary" :loading="loading" @click.native.prevent="handleLogin">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  // import {setSupport,getSupport,setCookie,getCookie} from '@/utils/support';

  export default {
    name: 'login',
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        },
        loginRules: {
          username: [
            { required: true, trigger: 'blur', message: '请输入用户名' },
          ],
          password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
        },
        loading: false,
        pwdType: 'password',
        dialogVisible:false,
        supportDialogVisible:false
      }
    },
    created() {
      // this.loginForm.username = getCookie("username");
      // this.loginForm.password = getCookie("password");
      // if(this.loginForm.username === undefined||this.loginForm.username==null||this.loginForm.username===''){
      //   this.loginForm.username = 'admin';
      // }
      // if(this.loginForm.password === undefined||this.loginForm.password==null){
      //   this.loginForm.password = '';
      // }
    },
    methods: {
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (!valid) return false;
          // getLogin({
          //   userName:this.loginForm.username,
          //   password:this.loginForm.password
          // }).then(res=>{
          //   if(res && res.code=== 200){
          //     this.$message({
          //       type: 'success',
          //       message: '登录成功'
          //     });
          //     this.$router.push('/home')
          //   }else{
          //     this.$message.error(res.msg)
          //   }
          // })
          this.$message.success('登录成功')
          this.$router.push('/home')
        })
      },
      handleTry(){
        this.dialogVisible =true
      },
      dialogConfirm(){
        this.dialogVisible =false;
        setSupport(true);
      },
      dialogCancel(){
        this.dialogVisible = false;
        setSupport(false);
      }
    }
  }
</script>

<style scoped>
  .login-form-layout {
    position: absolute;
    left: 0;
    right: 0;
    width: 360px;
    margin: 140px auto;
    border-top: 10px solid #409EFF;
  }

  .login-title {
    text-align: center;
  }

  .login-center-layout {
    background: #409EFF;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 200px;
    
  }
</style>
