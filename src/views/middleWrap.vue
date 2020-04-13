<template>
  <div class="midScreen">
    <Title />
    <MapRander />
    <VideoCover v-if="videoCtr" />
  </div>
</template>

<script>
import MapRander from '@/components/map/Gmap'
import VideoCover from '@/components/map/VideoCover'
import Title from '@/components/common/Title'
export default {
  components: {
    MapRander,
    VideoCover,
    Title
  },
  data() {
    return {
      videoCtr: false
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
}
</style>
