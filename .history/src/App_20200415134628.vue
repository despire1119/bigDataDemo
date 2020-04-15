<template>
  <div id="app" :style="baseSize()">
    <router-view v-if="refresh" />
    <slide-menu :menu="screenRouter" />
  </div>
</template>
<script>
import SlideMenu from '@/components/slideMenu/slideMenu'
import { SCREEN_ROUTER } from '@/utils/screenConfig'
export default {
  components: {
    SlideMenu
  },
  watch: {
    $route:{
      handler:function(route) {
        const {w,h}=route.query
        if(+w !== this.CONFIG_WIDTH || +h !==this.CONFIG_HEIGHT){
          console.log("设置");
          
        }
      },
      deep:true
    }
  },
  data() {
    return {
      refresh: true,
      screenRouter: SCREEN_ROUTER
    }
  },
  provide() {
    return {
      reload: this.reload
    }
  },
  computed: {
    baseSize() {
      return function(w = this.CONFIG_WIDTH, h = this.CONFIG_HEIGHT) {
        return `width:${w}px;height:${h}px;transform:scale(${this.CONFIG_RATE[0]},${this.CONFIG_RATE[1]})`
      }
    }
  },
  mounted() {
    this.autoSize()

    window.onresize = () => {
      this.autoSize()
    }
  },
  methods: {
    reload() {
      this.refresh = false
      this.$nextTick(() => {
        this.refresh = true
      })
    },
    autoSize() {
      const [winW, winH] = [window.innerWidth, window.innerHeight]
      this.$store.commit('setWindowHeight', winH)
      this.$store.commit('setWindowWidth', winW)
      const rate = [
        this.WINDOW_WIDTH / this.CONFIG_WIDTH,
        this.WINDOW_HEIGHT / this.CONFIG_HEIGHT
      ]
      this.$store.commit('setScreenRate', rate)
    }
  }
}
</script>

<style lang="less">
#app {
  background-color: #ddd;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  transform-origin: 0 0;
}
.cover{
  position: absolute;
  top: 15rem;
  left: 0;
  right: 0;
  background-color: #fff;
}
</style>
