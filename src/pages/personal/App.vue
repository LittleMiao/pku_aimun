<template>
  <div>
    <headbar />
    <topblock />
    <div>
      <div>个人中心</div>
      <div>
        <div>基本信息</div>
        <ul>
          <li>学校姓名：XXX</li>
          <li>领队姓名：XXX</li>
          <li>是否是校内模联组织成员：是/否</li>
          <li>职位：XXX（若是）</li>
          <li>联系邮箱：XXX</li>
        </ul>
      </div>
      <div>
        <div>当前状态</div>
        <table>
          <tbody>
            <tr>
              <td></td>
              <td>注册信息</td>
              <td>报名信息</td>
              <td>委员会分配</td>
              <td>缴费</td>
            </tr>
            <tr>
              <td>状态</td>
              <td>已通过审核</td>
              <td>报名信息已确认</td>
              <td>分配结果已公布</td>
              <td>缴费成功</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div @click="gotoSignup">查看报名信息</div>
      <div >查看分配结果</div>
    </div>
    <footerInfo />
  </div>
</template>

<script>
import headbar from '../../components/common/headbar'
import topblock from '../../components/common/topblock'
import footerInfo from '../../components/common/footerInfo'
export default {
  components:{
    headbar,
    topblock,
    footerInfo,
  },
  data(){
    return {
      register: false,
      signup: false,
      commit: false,
      pay: false
    }
  }
}
</script>

