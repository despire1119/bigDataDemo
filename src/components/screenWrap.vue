<template>
  <div :style="screenStyle">
    <slot></slot>
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
      return `width: ${this.baseW}%; height: 100%`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
