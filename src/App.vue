<template>
  <div id="app" :style="baseSize">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      winW: 22400,
      winH: 6300,
      rate: [1, 1]
    };
  },
  methods: {
    autoSize() {
      this.rate = [window.innerWidth / 22400, window.innerHeight / 6300];
    }
  },
  mounted() {
    this.autoSize();
    window.onresize = () => {
      this.autoSize();
    };
  },
  computed: {
    baseSize() {
      return `width:${this.winW}px;height:${this.winH}px;transform:scale(${this.rate[0]},${this.rate[1]})`;
    }
  }
};
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
</style>
