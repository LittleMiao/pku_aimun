<template>
  <div class="login-page">
    <headbar />
    <topblock />
    <div class="login-form">
      <el-form labelWidth="80px" label-position="left">
        <el-form-item label="用户名">
          <el-input size="medium" type="text" v-model="userName" placeholder="邮箱" clearable></el-input>
        </el-form-item>
        <el-form-item v-if="visible" label="密码">
          <el-input size="medium" type="password" v-model="password" placeholder="请输入密码" 
          maxlength=20 minlength=8>
            <i slot="suffix" title="显示密码" @click="changePass" style="cursor:pointer;"
              class="el-input__icon iconfont pku-aimun-iconicon-test1"></i>
          </el-input>
        </el-form-item>
        <el-form-item v-else label="密码">
          <el-input size="medium" type="text" v-model="password" placeholder="请输入密码"
            maxlength=20 minlength=8>
            <i slot="suffix" title="隐藏密码" @click="changePass" style="cursor:pointer;"
              class="el-input__icon iconfont pku-aimun-iconicon-test" src=""></i>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button class="login_btn" 
        @click.native="login" 
        type="primary" 
        round 
        :loading="isBtnLoading">登录</el-button>
      <div class="hint">
        <div @click="gotoRegister">如无账号，请先注册</div>
        <div>请注意：停止注册时间为（报名截止前两天就停止注册，待补日期）</div>
      </div>
    </div>
    <footerinfo />
  </div>
</template>


<script>
import topblock from '../../components/common/topblock'
import headbar from '../../components/common/headbar'
import footerinfo from '../../components/common/footerInfo'
export default {
  components:{
    headbar,
    topblock,
    footerinfo
  },
  data() {
    return {
      userName: '',
      password: '',
      isBtnLoading: false,
      visible: true
    }
  },
  created () {
    if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
      this.userName = JSON.parse( localStorage.getItem('user')).userName;
      this.password = JSON.parse( localStorage.getItem('user')).password;
    }
  },
  computed: {
    btnText() {
      if (this.isBtnLoading) return '登录中...';
      return '登录';
    }
  },
  methods: {
    changePass() {
      this.visible = !this.visible;
    },
    login() {
      if (!this.userName) {
        this.$message.error('请输入用户名');
        return;
      }
      if (!this.password) {
        this.$message.error('请输入密码');
        return;
      }
    },
    gotoRegister(){
      location.href="./register.html"
    }
  }
}
</script>

<style lang="stylus">
.login-page

  .login-form
    margin 20px 40px
    display flex
    flex-direction column
    justify-content center
    align-items center
    .el-input
      .el-input__inner
        width 300px
      .el-input__suffix
        left 275px
        i
          width 20px
          height 20px
          .icon-xianshi
            background url('../../assets/login/notshow.jpg') center no-repeat
    .el-button--primary
      background-color #a52a2a
      border-color #a52a2a
      width 120px
    .hint
      color grey
      font-size 12px
      line-height 16px
      margin 40px auto
</style>

