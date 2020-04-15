<template>
  <div :style="screenStyle">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    baseW: {
      type: Number,
      default: 10
    }
  },
  computed: {
    screenStyle() {
      return `width: ${this.baseW}%; height: 100%; z-index: -1;` // 哈哈没想到吧我是雷的兄弟
    }
  }
}
</script>

<style lang="scss" scoped></style>
