<template>
  <div>
    <headbar />
    <topblock />
    <div v-if="stage===0">
      <div>请大家务必在报名之前仔细阅读报名注册须知。</div>
      <div>如有查询，请联系AIMUN 2020代表联系总监陈宣伊、邱敬甯、张玉琢。</div>
      <a href="">报名须知</a>
      <div @click="stage=1">开始报名</div>
    </div>
    <div v-else-if="stage===1">
      <div>第一部分：基本信息录入</div>
      <div>
        <el-form labelWidth="200px" label-position="left" :model="firstStage" :disabled="pathinfo==='person'">
          <div>
            <div>1. </div>
            <el-form-item label="学校名称 Name of School">
              <el-input size="medium" type="text" v-model="firstStage.schoolName" placeholder="" clearable></el-input>
            </el-form-item>
          </div>
          <div>
            <div>2.</div>
            <el-form-item label="领队名称 Name of the Leader">
              <el-input size="medium" type="text" v-model="firstStage.leaderName" placeholder="" clearable></el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div @click="stage=2">下一页</div>
    </div>
    <div v-else-if="stage===2">
      <div>代表个人信息</div>
      <div>
        <el-form labelWidth="200px" label-position="left" :disabled="pathinfo==='person'">
          <div>
            <div>1. </div>
            <el-form-item label="姓名">
              <el-input size="medium" type="text" v-model="secondStage[addNum].personName" placeholder="" clearable></el-input>
            </el-form-item>
          </div>
          <div>
            <div>2.</div>
            <el-form-item label="性别" >
              <el-radio v-model="secondStage[addNum].gentle" label="male" >男</el-radio>
              <el-radio v-model="secondStage[addNum].gentle" label="female" >女</el-radio>
            </el-form-item>
          </div>
          <div>
            <div>3.</div>
            <el-form-item label="国籍" >
              <el-input size="medium" type="text" v-model="secondStage[addNum].nation" placeholder="" clearable></el-input>
            </el-form-item>
          </div>
          <div>
            <div>4.</div>
            <el-form-item label="专业" >
              <el-input size="medium" type="text" v-model="secondStage[addNum].major" placeholder="" clearable></el-input>
            </el-form-item>
          </div>
          <div>
            <div>5.</div>
            <el-form-item label="年级" >
              <el-radio v-model="secondStage[addNum].grade" label="2016级及以上本科生" >2016级及以上本科生</el-radio>
              <el-radio v-model="secondStage[addNum].grade" label="2017级本科生" >2017级本科生 </el-radio>
              <el-radio v-model="secondStage[addNum].grade" label="2018级本科生" >2018级本科生 </el-radio>
              <el-radio v-model="secondStage[addNum].grade" label="2019级本科生" >2019级本科生 </el-radio>
              <el-radio v-model="secondStage[addNum].grade" label="硕士研究生/博士研究生" >硕士研究生/博士研究生 </el-radio>
            </el-form-item>
          </div>
          <div>
            <div>6.</div>
            <el-form-item label="电话" >
              <el-input size="medium" type="text" v-model="secondStage[addNum].phone" placeholder="" clearable></el-input>
            </el-form-item>
          </div>
          <div>
            <div>7.</div>
            <el-form-item label="邮箱" >
              <el-input size="medium" type="text" v-model="secondStage[addNum].mail" placeholder="" clearable></el-input>
            </el-form-item>
          </div>
          <div>
            <div>8.</div>
            <el-form-item label="微信号" >
              <el-input size="medium" type="text" v-model="secondStage[addNum].wechat" placeholder="" clearable></el-input>
            </el-form-item>
          </div>
          <div>
            <div>9.</div>
            <el-form-item label="该代表是否有过以往模联参会经历？
              如有，请写明会议名称、参会时间、参会身份。" >
              <el-radio v-model="secondStage[addNum].experience.has" :label="true" >是</el-radio>
              <el-form :inline="true" :model="secondStage[addNum].experience" class="demo-form-inline" :disabled="!secondStage[addNum].experience.has">
                <el-form-item label="参会年份">
                  <el-input v-model="secondStage[addNum].experience.year" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="大会名称">
                  <el-input v-model="secondStage[addNum].experience.confName" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="担任角色">
                  <el-select v-model="secondStage[addNum].experience.role" placeholder="担任角色">
                    <el-option label="Delegate" value="Delegate"></el-option>
                    <el-option label="Chair/Dais Head" value="Chair"></el-option>
                    <el-option label="Dais Member" value="Dais Member"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
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
          <div>
            <div>10.</div>
            <el-form-item label="备注" >
              <el-input size="medium" type="text" v-model="secondStage[addNum].moreinfo" placeholder="" clearable></el-input>
              <div>如果该代表有饮食如清真餐等方面的特别需求，请在此注明</div>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div @click="submitPerson">继续添加</div>
      <div @click="stage=3">下一页</div>
    </div>
    <div v-else-if="stage===3">
      <div>第二部分：参会意愿统计</div>
      <el-form :disabled="pathinfo==='person'">
        <el-form-item :label="pos" v-for="(pos,index) in thirdStage.label" :key="pos">
          <el-select v-model="thirdStage.selectNum[index]" placeholder="0" @change="updateAva(index)">
            <el-option :label="0" :value="0" ></el-option>
            <el-option :label="i" :value="i" v-for="i in thirdStage.availNum[index]" :key="i"></el-option>
          </el-select>
        </el-form-item>
        <div @click="submitAll">完成</div>
      </el-form>
    </div>
    <div v-else-if="stage===4">
      <div>您已成功提交报名信息，请等待确认。</div>
      <div @click="gotoHome">关闭此页面</div>
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
      stage: this.$route.query.from==="person"? 1: 0,
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

