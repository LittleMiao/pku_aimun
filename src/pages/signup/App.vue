<template>
  <div class="signup-page">
    <headbar />
    <topblock />
    <div class="signup-body">
      <div class="main-title">报名</div>
      <div class="main-hint">
        <div>请大家务必在报名之前仔细阅读报名注册须知。</div>
        <div>如有查询，请联系AIMUN 2020代表联系总监陈宣伊、邱敬甯、张玉琢。</div>
      </div>
      <div class="main-content" v-if="stage===0">
        <a class="infomation signup-btn" href="">报名须知</a>
        <div class="signup-btn" @click="stage=1">开始报名</div>
      </div>
      <div class="main-content" v-else-if="stage===1">
        <div class="sub-title">第一部分：基本信息录入</div>
        <div class="info-form">
          <el-form labelWidth="200px" label-position="left" :model="firstStage" :disabled="pathinfo==='person'">
            <div class="list-form">
              <div class="list-num">1. </div>
              <el-form-item :label="'学校名称 \n Name of School'">
                <el-input size="medium" type="text" v-model="firstStage.schoolName" placeholder="" clearable></el-input>
              </el-form-item>
            </div>
            <div class="list-form">
              <div class="list-num">2.</div>
              <el-form-item v-bind:label="'领队名称 \n Name of the Leader'">
                <el-input size="medium" type="text" v-model="firstStage.leaderName" placeholder="" clearable></el-input>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="signup-btn" @click="stage=2">下一页</div>
      </div>
      <div class="main-content" v-else-if="stage===2">
        <div class="sub-title">代表个人信息</div>
        <div class="info-form">
          <el-form labelWidth="200px" label-position="left" :disabled="pathinfo==='person'">
            <div class="list-form">
              <div class="list-num">1. </div>
              <el-form-item :label="'姓名\n Name'">
                <el-input size="medium" type="text" v-model="secondStage[addNum].personName" placeholder="" clearable></el-input>
              </el-form-item>
            </div>
            <div class="list-form">
              <div class="list-num">2.</div>
              <el-form-item :label="'性别\n Gentle'" >
                <el-radio v-model="secondStage[addNum].gentle" label="male" >男</el-radio>
                <el-radio v-model="secondStage[addNum].gentle" label="female" >女</el-radio>
              </el-form-item>
            </div>
            <div class="list-form">
              <div class="list-num">3.</div>
              <el-form-item :label="'国籍\n Nationalty'" >
                <el-input size="medium" type="text" v-model="secondStage[addNum].nation" placeholder="" clearable></el-input>
              </el-form-item>
            </div>
            <div class="list-form">
              <div class="list-num">4.</div>
              <el-form-item :label="'专业\n Major'" >
                <el-input size="medium" type="text" v-model="secondStage[addNum].major" placeholder="" clearable></el-input>
              </el-form-item>
            </div>
            <div class="list-form">
              <div class="list-num">5.</div>
              <el-form-item :label="'年级\n Grade'" >
                <el-radio v-model="secondStage[addNum].grade" label="2016级及以上本科生" >2016级及以上本科生</el-radio>
                <el-radio v-model="secondStage[addNum].grade" label="2017级本科生" >2017级本科生 </el-radio>
                <el-radio v-model="secondStage[addNum].grade" label="2018级本科生" >2018级本科生 </el-radio>
                <el-radio v-model="secondStage[addNum].grade" label="2019级本科生" >2019级本科生 </el-radio>
                <el-radio v-model="secondStage[addNum].grade" label="硕士研究生/博士研究生" >硕士研究生/博士研究生 </el-radio>
              </el-form-item>
            </div>
            <div class="list-form">
              <div class="list-num">6.</div>
              <el-form-item :label="'电话\n Tel'" >
                <el-input size="medium" type="text" v-model="secondStage[addNum].phone" placeholder="" clearable></el-input>
              </el-form-item>
            </div>
            <div class="list-form">
              <div class="list-num">7.</div>
              <el-form-item :label="'邮箱\n Email'" >
                <el-input size="medium" type="text" v-model="secondStage[addNum].mail" placeholder="" clearable></el-input>
              </el-form-item>
            </div>
            <div class="list-form">
              <div class="list-num">8.</div>
              <el-form-item :label="'微信号\n Wechat'" >
                <el-input size="medium" type="text" v-model="secondStage[addNum].wechat" placeholder="" clearable></el-input>
              </el-form-item>
            </div>
            <div class="list-form">
              <div class="list-num">9.</div>
              <el-form-item :label="'该代表是否有模联参会经历? \n 如有，请写明会议名称、参会时间及身份。\n Experience in MUN'" >
                <el-radio v-model="secondStage[addNum].experience.has" :label="true" >是</el-radio>
                <div class="exp-detail">
                  <el-form :inline="true" :model="secondStage[addNum].experience" class="demo-form-inline" :disabled="!secondStage[addNum].experience.has">
                    <el-form-item :label="'参会年份\n Year'">
                      <el-input v-model="secondStage[addNum].experience.year" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item :label="'大会名称\n Conference Name'">
                      <el-input v-model="secondStage[addNum].experience.confName" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item :label="'担任角色\n Role'">
                      <el-select v-model="secondStage[addNum].experience.role" placeholder="担任角色">
                        <el-option label="Delegate" value="Delegate"></el-option>
                        <el-option label="Chair/Dais Head" value="Chair"></el-option>
                        <el-option label="Dais Member" value="Dais Member"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-form>
                </div>
                <el-radio v-model="secondStage[addNum].experience.has" :label="false" >否 </el-radio>
              </el-form-item>
              <el-form :inline="true" :model="secondStage[addNum].prize" v-if="secondStage[addNum].experience.role==='Delegate'" >
                <el-form-item label="是否获奖" >
                  <el-radio v-model="secondStage[addNum].prize.has" :label="true" >是</el-radio>
                  <el-radio v-model="secondStage[addNum].prize.has" :label="false" >否</el-radio>
                </el-form-item>
                <el-form-item label="所获奖项" v-if="secondStage[addNum].prize.has" >
                  <el-radio v-model="secondStage[addNum].prize.kind" label="BD" >BD</el-radio>
                  <el-radio v-model="secondStage[addNum].prize.kind" label="OD" >OD</el-radio>
                  <el-radio v-model="secondStage[addNum].prize.kind" label="HM" >HM</el-radio>
                  <el-radio v-model="secondStage[addNum].prize.kind" label="others">
                    <el-form-item label="其他" :disabled="secondStage[addNum].prize.kind!=='others'">
                      <el-input v-model="secondStage[addNum].prize.others" placeholder="请填写"></el-input>
                    </el-form-item>
                  </el-radio>
                </el-form-item>
              </el-form>
            </div>
            <div class="list-form">
              <div class="list-num">10.</div>
              <el-form-item :label="'备注\n More'" >
                <div class="need" >
                  <el-input size="medium" type="text" v-model="secondStage[addNum].moreinfo" placeholder="" clearable></el-input>
                  <div class="need-hint">如果该代表有饮食如清真餐等方面的特别需求，请在此注明</div>
                </div>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="btns">
          <div class="signup-btn" @click="submitPerson">继续添加</div>
          <div class="signup-btn" @click="stage=3">下一页</div>
        </div>
      </div>
      <div class="main-content" v-else-if="stage===3">
        <div class="sub-title">第二部分：参会意愿统计</div>
        <div class="will-form">
        <el-form :disabled="pathinfo==='person'">
          <el-form-item class="will-list" :label="pos" v-for="(pos,index) in thirdStage.label" :key="pos">
            <el-select v-model="thirdStage.selectNum[index]" placeholder="0" @change="updateAva(index)">
              <el-option :label="0" :value="0" ></el-option>
              <el-option :label="i" :value="i" v-for="i in thirdStage.availNum[index]" :key="i"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="signup-btn" @click="submitAll">完成</div>
        </div>
      </div>
      <div class="main-content" v-else-if="stage===4">
        <div>您已成功提交报名信息，请等待确认。</div>
        <div class="signup-btn" @click="gotoHome">关闭此页面</div>
      </div>
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
    return{
      pathinfo: this.$route.query.from,
      // stage: this.$route.query.from==="person"? 1: 0,
      stage: 0,
      addNum: 0,
      firstStage:{
        schoolName: '',
        leaderName: '',
      },
      secondStage:[{
        personName: '',
        gentle: '',
        nation: '',
        major: '',
        grade: '',
        phone: '',
        mail: '',
        wechat: '',
        moreinfo: '',
        experience:{
          has: false,
          year: '',
          confName: '',
          role: ''
        },
        prize:{
          has: false,
          kind: '',
          others: ''
        }
      }],
      thirdStage:{
        availNum: [0, 0],
        selectNum: [0, 0],
        label: ['AB','CD']
      }
    }
  },
  methods:{
    submitPerson(){
      
      this.addNum = this.addNum+1;
      let ele = {
        personName: '',
        gentle: '',
        nation: '',
        major: '',
        grade: '',
        phone: '',
        mail: '',
        wechat: '',
        moreinfo: '',
        experience:{
          has: false,
          year: '',
          confName: '',
          role: ''
        },
        prize:{
          has: false,
          kind: '',
          others: ''
        }
      };
      this.secondStage.push(ele);
    },
    submitAll(){
      this.stage=4;
    },
    updateAva(idx){
      if(idx === 0){
        console.log("0")
        this.thirdStage.availNum[1] = this.addNum - this.thirdStage.selectNum[0];
      }
      if(idx === 1){
        console.log("1")
        this.thirdStage.availNum[0] = this.addNum - this.thirdStage.selectNum[1];
      }
    },
    gotoHome(){
      location.href="./home.html"
    }
  },
  mounted(){
    console.log(this);
    this.thirdStage.availNum[0] = this.addNum;
    this.thirdStage.availNum[1] = this.addNum;

  }
}
</script>

<style lang="stylus">
body
  .el-select-dropdown__item.selected
    color #a52a2a
  .signup-page 

  .signup-body
    margin 20px 40px
    .main-title
      font-size 28px
      font-weight bold
      margin-bottom 20px
    .main-hint
      font-size 12px
      color grey
      line-height 16px
    .main-content
      margin 40px auto
      display flex
      flex-direction column
      justify-content center
      align-items center
      .will-form
        display flex
        flex-direction column
        justify-content center
        align-items center
        .el-form
          margin-bottom 20px
        .will-list
          display flex
          margin 20px auto
      .el-select .el-input.is-focus .el-input__inner
        border-color #a52a2a
      .el-select .el-input__inner:focus
        border-color #a52a2a
      
      .btns
        display flex
        div:last-child
          margin-left 20px
      .signup-btn
        padding 13px 23px
        text-decoration none 
        background-color #a52a2a
        border-color #a52a2a
        width 120px
        border-radius 20px
        color #fff
        display inline-block
        line-height 1
        text-align center
        margin 20px auto
        font-size 14px
      .infomation
        margin-bottom 40px
      .sub-title
        margin-bottom 30px
        font-size 22px
      .list-form
        display flex
        flex-direction row
        align-items center
        margin-left 40px
        .el-form-item__label
          white-space pre-line
          line-height 20px
          height 40px
          // width 180px
        .el-form-item__content
          margin-left 180px
          // width 600px
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
        .list-num
          color #606266
          margin-right 20px
          padding-bottom 20px
        .need
          display flex
          justify-content space-between
          .el-form-item__content
            margin-left 0
          .need-hint
            color grey
            font-size 12px
            width 600px
            margin-left 20px
        .exp-detail
          display flex
          flex-direction row
          .el-form-item__content
            margin-left 0
</style>

