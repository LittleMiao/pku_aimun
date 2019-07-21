<template>
  <div class="page-body">
    <div class="navi-bar">
      <div class="navi-text" @mouseenter="showMenu1" @mouseleave="hideMenu1">关于我们</div>
      <div class="navi-text" @mouseenter="showMenu2" @mouseleave="hideMenu2">北京大学学生模拟联合国交流会</div>
      <div class="navi-text" @click="contentIndex=12">世界模拟联合国大会</div>
      <div class="navi-text" @click="contentIndex=13">联系我们</div>
      <div class="navi-text" @click="contentIndex=14">常见问题</div>
    </div>

    <div class="menu menu-1" v-if="show1 || control1" @mouseenter="showLong1" @mouseleave="hideLong1">
      <div class="item" @click="contentIndex=1">北京大学</div>
      <div class="item" @click="contentIndex=2">模拟联合国大会</div>
      <div class="item" @click="contentIndex=3">秘书长寄语</div>
      <div class="item" @click="contentIndex=4" @mouseenter="showMenu3" @mouseleave="hideMenu3">组委介绍</div>
    </div>
    <div class="menu menu-2" v-if="show2 || control2" @mouseenter="showLong2" @mouseleave="hideLong2">
      <div class="item" @click="contentIndex=7">简介</div>
      <div class="item" @click="contentIndex=8">委员会及议题设置</div>
      <div class="item" @click="contentIndex=9">议事规则</div>
      <div class="item" @click="contentIndex=10">大会日程</div>
      <div class="item"  @click="contentIndex=11" @mouseenter="showMenu4" @mouseleave="hideMenu4">报名注册</div>
    </div>
    <div class="menu menu-3" v-if="show3 || control3" @mouseenter="showLong3" @mouseleave="hideLong3">
      <div class="item" @click="contentIndex=5">AIMUN2020组委会名单</div>
      <div class="item" @click="contentIndex=6">组委成员简介</div>
    </div>
    <div class="menu menu-4" v-if="show4 || control4" @mouseenter="showLong4" @mouseleave="hideLong4">
      <div class="item" @click="contentIndex=11">报名注册须知</div>
      <div class="item" @click="gotoSignup">点击报名</div>
    </div>

    <div class="content">
      <div class="default" v-if="contentIndex===0">
        <div class="content-title">为什么要参加AIMUN？</div>
        <ul>
          <li>深厚的学术基础和底蕴：我们致力于维持AIMUN的超高学术水平。
            除了常规的模拟委员会，AIMUN还设置了特别的大使项目和工作语言为中文的一系列特殊委员会，持续进行对模联活动的学术创新探索。</li>
          <li>多元文化的汇集和交流：AIMUN每年都会接待来自世界各地的600余名代表参加，为这些对国际问题有着共同兴趣的年轻人们提供了一个绝佳平台，
            来自中国大陆、港澳台地区及海外青年才俊一道，将会议塑造为多元文化、多元观念、多元交流、多元收获的地区盛会。</li>
          <li>丰富的国际外交资源支持：作为中国大陆唯一面向大学生的国际性模拟联合国大会，AIMUN每年都邀请到联合国官员、国内外政要及各国大使的出席开幕式并致辞。
            此外，大会也吸引了国内外各界人士的高度关注。</li>
        </ul>
        <div @click="contentIndex=2">了解更多</div>
        <div @click="contentIndex=11" v-if="countdownflag===false">报名注册</div>
        <div v-if="countdownflag===false">距报名截止还有{{countdown}}</div>
        <div v-else-if="countdownflag===true">报名已截止</div>
      </div>

      <pkuInfo v-else-if="contentIndex===1"></pkuInfo>
      <pkuAsia v-else-if="contentIndex===2"></pkuAsia>
      <secretary v-else-if="contentIndex===3"></secretary>
      <committee v-else-if="contentIndex===4"></committee>
      <memberList v-else-if="contentIndex===5"></memberList>
      <memberInfo v-else-if="contentIndex===6"></memberInfo>

      <aimunInfo v-else-if="contentIndex===7"></aimunInfo>
      <topicSetting v-else-if="contentIndex===8"></topicSetting>
      <rules v-else-if="contentIndex===9"></rules>
      <schedule v-else-if="contentIndex===10"></schedule>
      <signupInfo v-else-if="contentIndex===11"></signupInfo>

      <world v-else-if="contentIndex===12"></world>
      <contactus v-else-if="contentIndex===13"></contactus>
      <question v-else-if="contentIndex===14"></question>
    </div> 
  </div>
</template>
<script>
import { setTimeout } from 'timers';
import pkuInfo from './pkuInfo';
import secretary from './secretary';
import committee from './committee';
import memberInfo from './memberInfo';
import pkuAsia from './pkuAsia';
import memberList from './memberList'

import aimunInfo from './aimunInfo';
import topicSetting from './topicSetting';
import rules from './rules';
import schedule from './schedule';
import signupInfo from './signupInfo';

import world from './world';
import contactus from './contactus';
import question from './question';


export default {
  data(){
    return{
      show1:false,
      show2:false,
      show3:false,
      show4:false,
      control1:false,
      control2:false,
      control3:false,
      control4:false,
      contentIndex: 0,
      countdown: "",
      countdownflag: false,
      endTime: 1569859199000
    }    
  },
  components:{
    pkuInfo,
    secretary,
    committee,
    memberInfo,
    memberList,
    pkuAsia,
    aimunInfo,
    topicSetting,
    rules,
    schedule,
    signupInfo,
    world,
    contactus,
    question
  },
  methods:{
    gotoSignup(){
      location.href="./signup.html"
    },
    timeDown () {
      const endTime = new Date(this.endTime)
      const nowTime = new Date();
      let leftTime = parseInt((endTime.getTime()-nowTime.getTime())/1000)
      let d = parseInt(leftTime/(24*60*60))
      let h = this.formate(parseInt(leftTime/(60*60)%24))
      let m = this.formate(parseInt(leftTime/60%60))
      let s = this.formate(parseInt(leftTime%60))

      if(leftTime <= 0){
        this.countdownflag = true
      }
      else{
        this.countdownflag = false
      }
      this.countdown = `${d}天${h}小时${m}分${s}秒`
      // this.countdown = endTime
    },
    formate (time) {
      if(time>=10){
        return time
      }else{
        return `0${time}`
      }
    },

    showMenu1(){
      setTimeout(()=>{
        this.show1 = true;
        this.show2 = false;
        },300);
    },
    showMenu2(){
      setTimeout(()=>{
        this.show2 = true;
        this.show1 = false;
        },300);
    },
    showMenu3(){
      setTimeout(()=>{
      this.show3 = true
      },300);
    },
    showMenu4(){
      setTimeout(()=>{
      this.show4 = true
      },300);
    },
    showLong1(){
      this.control1=true;
    },
    showLong2(){
      this.control2=true;
    },
    showLong3(){
      this.control1=true;
      this.control3=true;
    },
    showLong4(){
      this.control2=true;
      this.control4=true;
    },
    hideLong1(){
      this.control1=false;
    },
    hideLong2(){
      this.control2=false;
    },
    hideLong3(){
      this.control1=false;
      this.control3=false;
    },
    hideLong4(){
      this.control2=false;
      this.control4=false;
    },
    hideMenu1(){
      setTimeout(()=>{
        this.show1 = false;
        this.show3 = false;
        },2000);
    },
    hideMenu2(){
      setTimeout(()=>{
      this.show2 = false
      this.show4 = false
      },2000);
    },
    hideMenu3(){
      setTimeout(()=>{
      this.show3 = false
      },2000);
    },
    hideMenu4(){
      setTimeout(()=>{
      this.show4 = false
      },2000);
    },
  },
  mounted(){
    setInterval(()=>{
      this.timeDown();
    },1000);
    
    console.log(this);
  }
}
</script>

<style lang="stylus">
.page-body
  width 100%
  margin-top 60px
  background-color grey
  border 1px solid black
  .navi-bar
    font-size 20px
    display flex
    flex-direction row
    justify-content space-evenly
    align-items center
    
    .navi-text
      border 1px solid black
      width 20%
      height 60px
      display flex
      align-items center
      justify-content center
  .menu
    background-color white
    width 20%
    text-align left
    margin-top 20px
    position absolute
    :hover
      display block
    .item 
      margin-left 20px
      height 30px
  .menu-1
    left 5%
  .menu-2
    left 25%
  .menu-3
    left 25%
    top 690px
  .menu-4
    left 45%
    top 720px
    
  .content
    font-size 18px
    line-height 24px
    margin 40px
    text-indent 36px
</style>

