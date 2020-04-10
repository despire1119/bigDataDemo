import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.less'

import common from '@/mixins/common'
Vue.config.productionTip = false

Vue.mixin(common)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log(document.getElementsByTagName('html')[0].style.fontSize);

