<template>
  <ol class="slide-menu">
    <li v-for="(m,i) in menu" :key="i" @click="checkMenu(m)">
      <img :src="m.url" :alt="m.title" :title="m.title">
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  // computed: {
  //   style() {
  //     return `width:${100 / this.menu.length}%;height:100%`
  //   }
  // },
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
  width: 56.33rem;
  height: 7.13rem;
  margin-left: -28.16rem;
  position: absolute;
  left: 50%;
  bottom: 0rem;
  z-index: 99999;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-image: url('../../../public/images/menu_bg.png');
  background-size: contain;
  background-repeat: no-repeat;
  transform: translate(0, 85%);
  transition: all 0.2s cubic-bezier(0.18, 1.1, 0.51, 1.29);
  li{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    line-height: 10rem;
    width: 4rem;
    height: 4rem;
    margin: 0 1.8rem;
    img{
      width: auto;
      height: 3.5rem;
    }
  }
  &:hover{
    transform: translate(0, 5%);
    //  animation:slideUp 0.2s linear 0s 1 forwards;
  }
}
</style>
