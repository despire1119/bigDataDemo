<template>
  <div class="slide-menu">
    <ol v-for="(m,i) in menu" :key="i" :style="style" @click="checkMenu(m)">{{ m.title }}</ol>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    style() {
      return `width:${100 / this.menu.length}%;height:100%`
    }
  },
  methods: {
    checkMenu(m) {
      this.$router.push({ path: `${m.path}` })
    }
  }

}
</script>

<style lang="less" scoped>
.slide-menu{
  cursor: pointer;
  width: 100rem;
  height: 10rem;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0rem;
  z-index: 99999;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  transform: translate(0,-98%);
  ol{
  //  background: coral;
    text-align: center;
    color: white;
    line-height: 10rem;
  }
  &:hover{
     animation:slideDown 0.2s linear 0s 1 forwards;
  }
}
</style>
