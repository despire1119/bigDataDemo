import Vue from 'vue'
import VueBus from 'vue-bus'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.less'
import { getStyle } from '@/utils/util'
import common from '@/mixins/common'
Vue.config.productionTip = false
import "./utils/autoFontSize.js"
Vue.use(VueBus)
Vue.mixin(common)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


