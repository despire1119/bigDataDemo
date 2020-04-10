<template>
  <div  class="midScreen">
    <MapRander></MapRander>
  </div>
</template>

<script>
import MapRander from '@/components/map/Gmap.vue'
export default {
  components: {
    MapRander,
  },
};
</script>

<style lang="less" scoped>
.midScreen{
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
