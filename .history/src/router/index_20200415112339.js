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
  console.log(to)

  next(
{
  path:to.fullPath,
  query: {w: to.fullPath} // 将要跳转路由的path作为参数，传递到登录页面

}

  )
})
export default router
