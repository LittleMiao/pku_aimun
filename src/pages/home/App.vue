<template>
  <div id="app">
    <headbar/>
    <imgSwiper />
    <mainContent />
  </div>
</template>

<script>
import imgSwiper from '../../components/home/imgSwiper'  
import mainContent from '../../components/home/mainContent'
import headbar from '../../components/common/headbar'

export default {
  name: 'app',
  components: {
    imgSwiper,
    mainContent,
    headbar
  },
  data(){
    return{
      date: new Date(),
      isLogin: false
    }   
  },
  mounted() {  
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

</style>
