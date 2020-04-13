<template>
  <div class="map-tool">
    <ol
      v-for="tool in tools"
      :key="tool.name"
      :style="toolStyle(tool)"
      @click.stop="checkView(tool.name)"
    />
  </div>
</template>

<script>
export default {
  props: {
    mapMod: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tools: [
        {
          name: 'allView',
          title: '全屏视图'
        },
        {
          name: 'midView',
          title: '区域视图'
        },
        {
          name: 'smallView',
          title: '细节视图'
        }
      ]
    }
  },
  computed: {
    toolStyle() {
      return function(item) {
        return `width:${100 /
          this.tools.length}%;height:100%;background: url('../images/${
          item.name
        }.png') no-repeat center center; background-size: 35% ;   opacity:${item.active ? '1' : '0.5'} ; border-bottom: ${item.active ? '0.08rem #f2f6fb solid;' : '0'} `
      }
    }
  },
  watch: {
    mapMod(newValue) {
      this.tools = this.tools.map(t => {
        return newValue === t.name
          ? Object.assign(t, { active: true })
          : Object.assign(t, { active: false })
      })

      console.log(this.tools)
    }
  },
  created() {
    this.tools = this.tools.map(t => {
      return this.mapMod === t.name
        ? Object.assign(t, { active: true })
        : Object.assign(t, { active: false })
    })
  },
  methods: {
    checkView(mod) {
      console.log('视图:' + mod)
      this.$emit('update:mapMod', mod)
    }
  }
}
</script>

<style lang="less" scoped>
.map-tool {
  width: 19rem;
  height: 3.56rem;
//  background: rgba(24, 70, 95, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  //border-bottom: 0.08rem #124060 solid;
  ol {
    cursor: pointer;

  }
}
</style>
