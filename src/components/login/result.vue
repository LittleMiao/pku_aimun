<template>
  <div>
    <headbar />
    <topblock />
    <div class="success">
      
      <div>
        <div>注册信息提交成功！</div>
        <div>请耐心等待审核，我们将于3个工作日内完成审核。</div>
      </div>
      <el-button class="login_btn" 
      type="primary" 
      round 
      >完成</el-button>
    </div>
    <div class="fail">
      <div>需由领队统一报名，请联系本校领队注册。</div>
      <el-button class="login_btn" 
      type="primary" 
      round 
      >完成</el-button>
    </div>
    <footerInfo />
  </div>
</template>

<script>
import headbar from '../../components/common/headbar'
import footerInfo from '../../components/common/footerInfo'
import topblock from '../../components/common/topblock'
export default {
  components:{
    headbar,
    footerInfo,
    topblock
  }
}
</script>

