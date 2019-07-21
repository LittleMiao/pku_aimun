<template>
  <div id="app">
    <div class="head-tip">
      <div id="time">{{date | formateDate }}</div>
      <div class="log-info"> 
        <div class="log-item" @click="toLogin"> 登录 </div>
        <div class="log-item" @click="toSignUp"> 注册 </div>
        <div class="log-item" @click="toHelp"> 帮助 </div>
      </div>
    </div>
    <imgSwiper />
    <mainContent />
  </div>
</template>

<script>
import imgSwiper from '../../components/home/imgSwiper'  
import mainContent from '../../components/home/mainContent'

export default {
  name: 'app',
  components: {
    imgSwiper,
    mainContent
  },
  data(){
    return{
      date: new Date()
    }   
  },
  mounted() {  
      var _this = this;   
      this.timer = setInterval(function () {
          _this.date = new Date();  
      },1000);
  },
  beforeDestory:function () { //清除定时器
      if (this.timer){
          clearInterval(this.timer);  //在Vue实例销毁前，清除定时器
      }
  },
  filters:{
    formateDate(){
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var day = date.getHours();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      //整理数据并返回
      return year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;
    },
  },
  methods:{
    toHelp(){
      location.href="/help.html"
    },
    toSignUp(){
      location.href="/signup.html"
    },
    toLogin(){
      location.href="/login.html"
    }
  }
}
</script>

<style lang="stylus">
#app 
  // font-family 'Avenir', Helvetica, Arial, sans-serif
  // font-family PingFangSC-Regular
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  width 90%
  margin 60px auto 60px auto

  .head-tip
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .log-info
      display flex
      flex-direction row
      justify-content space-evenly
      .log-item
        width 50px
  .swiper-slide
    height 400px


</style>
