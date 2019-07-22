<template>
  <div class="head-tip">
    <div id="time">{{date | formateDate }}</div>
    <div class="log-info" > 
      <div class="log-item" @click="toLogin" v-if="!isLogin"> 登录 </div>
      <div class="log-item" @click="toRegister" v-if="!isLogin"> 注册 </div>
      <div class="log-item" @click="toPersonal" v-else-if="isLogin">个人中心</div>
      <div class="log-item" @click="toHelp"> 帮助 </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      date: new Date(),
      isLogin: false
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
    toRegister(){
      location.href="/register.html"
    },
    toLogin(){
      location.href="/login.html"
    }
  }
}
</script>

<style lang="stylus">
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

