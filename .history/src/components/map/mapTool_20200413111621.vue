<template>
  <div class="map-tool">
    <ol v-for="tool in tools" :style="toolStyle" @click.stop="tool.event">{{tool.title}}</ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tools: [
        {
          name: 'allView',
          title: '全屏视图',
          event: this.checkAllView
        },
        {
          name: 'midView',
          title: '区域视图',
          event: this.checkMidView
        },
        {
          name: 'smallView',
          title: '细节视图',
          event: this.checkSmallView
        }
      ]
    }
  },
  computed: {
    toolStyle() {
      return `width:${100/this.tools.length}%;height:100%`
    }
  },
  methods: {
    checkAllView() {
      console.log('全屏视图')
      this.$emit('change','all')
    },
    checkMidView() {
      console.log('区域视图')
      this.$emit('change','mid')
    },
    checkSmallView() {
      console.log('细节视图')
      this.$emit('change','small')
    }
  }
}
</script>

<style lang="less" scoped>
.map-tool {
  width: 15rem;
  height: 5rem;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  
  ol{
    //box-sizing: border-box;
    border: 1rem yellow solid;
    cursor: pointer;
    background: yellowgreen;
  }
}
</style>