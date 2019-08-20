<template>
  <div class="register-page">
    <headbar />
    <topblock />
    <div class="register-body">
      <div class="main-title">注册</div>
      <div class="main-hint">请注意：停止注册时间为（报名截止前两天就停止注册，待补日期）</div>
      <div class="register-form">
        <el-form labelWidth="200px" label-position="left">
          <el-form-item label="是否是领队" >
            <el-radio v-model="leader" :label="true" >是</el-radio>
            <el-radio v-model="leader" :label="false" >否</el-radio>
          </el-form-item>
          <el-form-item label="学校姓名">
            <el-input size="medium" type="text" v-model="schoolName" placeholder="" clearable></el-input>
          </el-form-item>
          <el-form-item label="领队姓名">
            <el-input size="medium" type="text" v-model="leaderName" placeholder="" clearable></el-input>
          </el-form-item>
          <el-form-item label="是否是校内模联组织成员？
            如是，请说明职位。">
            <div class="isinPKU">
              <el-radio v-model="isPKU" :label="true" >是</el-radio>
              <el-input size="medium" type="text" v-model="position" placeholder="" :disabled="!isPKU"></el-input>
            </div>
            <el-radio v-model="isPKU" :label="false" >否</el-radio>
          </el-form-item>
          <el-form-item label="联系邮箱">
            <el-input size="medium" type="text" v-model="email" placeholder="" clearable></el-input>
          </el-form-item>
        </el-form>
        <el-button class="login_btn" 
        @click.native="login" 
        type="primary" 
        round 
        >完成</el-button>
      </div>
      <footerinfo />
    </div>
  </div>
</template>

<script>
import headbar from '../../components/common/headbar'
import topblock from '../../components/common/topblock'
import footerinfo from '../../components/common/footerInfo'
export default {
  components:{
    headbar,
    topblock,
    footerinfo
  },
  data(){
    return {
      email: '',
      leader: false,
      schoolName: '',
      leaderName: '',
      isPKU: false,
      showResult: false,
      position: ''
    }
  }
}
</script>

<style lang="stylus">
.isinPKU
  display flex
  align-items center
.register-page
  .register-body
    margin 20px 40px
  .main-title
    font-size 28px
    font-weight bold
    margin-bottom 20px
  .main-hint
    font-size 12px
    color grey
  .register-form
    display flex
    flex-direction column
    justify-content center
    align-items center
    margin auto
    .el-form-item__label
      width 180px
    .el-form-item__content
      margin-left 180px
      width 300px
      .el-radio__input.is-checked .el-radio__inner
        background-color #a52a2a
        border-color #a52a2a
      .el-radio__input.is-checked+.el-radio__label
        color #a52a2a
      .el-input__inner:focus
        border-color #a52a2a
    .el-button--primary
      background-color #a52a2a
      border-color #a52a2a
      width 120px
</style>

