import Vue from 'vue'
import VueBus from 'vue-bus'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.less'
import { getStyle } from '@/utils/util'
import common from '@/mixins/common'
import { autoSize } from '@/utils/autoFontSize'
Vue.config.productionTip = false

Vue.use(VueBus)
Vue.mixin(common)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

;(function(){ // 根据配置 重写大小
  const BASS_IMG_W = 22400
  const fontSize = BASS_IMG_W / store.getters.getConfigWidth
  const getstr = getStyle(document.getElementsByTagName('html')[0], 'fontSize')
  console.log(`${+getstr.substring(0, getstr.length - 2) / fontSize} px `)
  document.getElementsByTagName('html')[0].style.fontSize = `${+getstr.substring(0, getstr.length - 2) / fontSize}px`
})()
