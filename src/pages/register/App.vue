<template>
  <div>
    <headbar />
    <div>
      <topblock />
      <div>注册</div>
      <div>请注意：停止注册时间为（报名截止前两天就停止注册，待补日期）</div>
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
            <el-input size="medium" type="text" v-model="leaderName" placeholder="" :disabled="!isPKU"></el-input>
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
      <div>
        <div>北京大学AIMUN组委会版权所有 Copyright©️2019-2020</div>
      </div>
    </div>
  </div>

</template>

<script>
import headbar from '../../components/common/headbar'
import topblock from '../../components/common/topblock'
export default {
  components:{
    headbar,
    topblock
  },
  data(){
    return {
      email: '',
      leader: false,
      schoolName: '',
      leaderName: '',
      isPKU: false,
      showResult: false
    }
  }
}
</script>

<style lang="stylus">
.isinPKU
  display flex
  align-items center
</style>

