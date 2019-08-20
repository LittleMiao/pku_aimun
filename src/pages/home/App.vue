<template>
  <div id="app">
    <headbar />
    <!-- <img src="../../assets/home/header.jpg" style="height: 120px"> -->
    <naviBar @changeContent="changeContent"/>
    <imgSwiper />
    <mainContent :contentIndex="contentIndex"/>
  </div>
</template>

<script>
import imgSwiper from '../../components/home/imgSwiper'  
import mainContent from '../../components/home/mainContent'
import naviBar from '../../components/home/naviBar'
import headbar from '../../components/common/headbar'

export default {
  name: 'app',
  components: {
    imgSwiper,
    mainContent,
    headbar,
    naviBar
  },
  data(){
    return{
      date: new Date(),
      isLogin: false,
      contentIndex: 0
    }   
  },
  methods:{
    changeContent(data){
      this.contentIndex = data;
    }
  },
  mounted() {  
  },

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
  width 100%
  margin 20px auto 60px auto

</style>
