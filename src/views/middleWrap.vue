<template>
  <div class="midScreen">
    <Title />
    <MapRander />
  </div>
</template>

<script>
import MapRander from '@/components/map/Gmap.vue'
import Title from '@/components/common/Title'
export default {
  components: {
    MapRander,
    Title
  }
}
</script>

<style lang="less" scoped>
.midScreen {
  width: 100%;
  height: 100%;
  position: relative;
  border: 20px #000000 solid;
}
</style>
