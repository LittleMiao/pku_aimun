import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import Router from 'vue-router'

import 'element-ui/lib/theme-chalk/index.css'
import '../../assets/icon/iconfont.css'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(Router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})