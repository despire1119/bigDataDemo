<template>
  <div class="map-room" @click="addmarker">
    <map-tool/>
    <div id="container" style="height:100%;width:100%" tabindex="0" />
  </div>
</template>

<script>
import Gmap from './index'
import MapTool from './mapTool'
export default {
  components: {
    MapTool,
  },
  data() {
    return {
      qmap: {}
    }
  },
  mounted() {
    this.init()

    // setInterval(() => {
    //   const random = Math.random() * 0.005
    //   const that = this
    //   return (function(x) {
    //     console.log(106.546331 + x)
    //     that.qmap.addMarker(106.546331 + x, 29.558136 + x)
    //     that.qmap.moveToPoint(106.546331 + x, 29.558136 + x)
    //   })(random)
    // }, 3000)
  },
  methods: {
    init() {
      const bass = {
        id: 'container',
        x: 118.792199,
        y: 32.050678,
        zoom: 17,
        pitch: 65,
        mode: '3D'
      }
      this.qmap = new Gmap(bass)
      this.qmap.createTrafficeLine()
      this.qmap.createArea()
      this.qmap.createMask()
       this.qmap.createSubArea('六合区')
    },
    moveTo() {
      this.qmap.moveToPoint(116.319665, 39.855919)
    },
    addmarker() {
      this.qmap.addMarker(
        106.546331 + Math.random() * 0.005,
        29.558136 + Math.random() * 0.005
      )
    }
  }
}
</script>

<style lang="less" scoped>
.map-room {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
