import Vue from 'vue'
import { SCREEN_ROUTER } from '@/utils/screenConfig'
import VueRouter from 'vue-router'
import store from '@/store'
import { autoSize } from '@/utils/autoFontSize'
Vue.use(VueRouter)
const cw = store.getters.getConfigWidth
const ch = store.getters.getConfigHeight
const routes = [
  { path: '/', redirect: { path: '/home', query: { w: cw, h: ch } } }
]
SCREEN_ROUTER.forEach(route => {
  const obj = {
    ...route,
    component: () => import('../pages/' + route.name + '.vue')
  }
  routes.push(obj)
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const { w, h } = to.query
  if (+w !== cw || +h !== ch) {
    store.commit('setConfigWidth',w)
    store.commit('setConfigHeight',h)
    autoSize()
    next()
  }

  next()
})
export default router
