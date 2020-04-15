<template>
  <div class="midScreen">
    <Title />
    <MapRander />
  </div>
</template>

<script>
import MapRander from '@/components/map/Gmap'
import Title from '@/components/common/Title'
export default {
  components: {
    MapRander,
    Title
  },
  data() {
    return {
      videoCtr: false
    }
  },
  mounted() {
    // this.videoCtr = true
  },
  methods: {
    popHandler(type) {
      console.log('11212', type)
      this.videoCtr = !this.videoCtr
    }
  }
}
</script>

<style lang="less" scoped>
.midScreen {
  width: 100%;
  height: 100%;
  position: relative;
  border: 0.2rem #000000 solid;
  z-index: 0
}
</style>
