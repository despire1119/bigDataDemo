<template>
  <video v-if="avalue" class="video" src="video/trafficModel.mp4" controls="controls" autoplay="autoplay" loop="loop" preload />
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      avalue: this.value
    }
  },
  
}
</script>

<style lang="less" scoped>
.video {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 999;
}
// video {
//   width: 100%;
//   height: 100%;
// }
</style>
