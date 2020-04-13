<template>
  <div class="map-tool">
    <ol v-for="tool in tools" :style="toolStyle" @click.stop="checkView(tool.name)">{{tool.title}}</ol>
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
        },
        {
          name: 'midView',
          title: '区域视图',
        },
        {
          name: 'smallView',
          title: '细节视图',
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
    checkView(mod) {
      console.log('视图:'+mod)
      this.$emit('change',mod)
    },
   
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