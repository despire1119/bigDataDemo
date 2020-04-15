import Vue from 'vue'
import { SCREEN_ROUTER } from '@/utils/screenConfig'
import VueRouter from 'vue-router'
import store  from '@/store'
Vue.use(VueRouter)
const routes = []
SCREEN_ROUTER.forEach(route => {
  const obj = {
    ...route,
    component: () => import ('../pages/' + route.name + '.vue')
  }
  routes.push(obj)
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // if (!to.meta.youKnowWho ) { 
  //   to.meta.youKnowWho= true 
 console.log(to)
  // let objTo={...to}
  // objTo.query.w='er'
  // next(
  //   objTo
  // )
  // }
  
  next({ query: 'dxdd' })
})
export default router
