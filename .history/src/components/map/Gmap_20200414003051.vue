<template>
  <div class="map-room">
    <map-tool :map-mod.sync="viewMode" />
    <weather />
    <div id="container" style="height:100%;width:100%" tabindex="0" />
  </div>
</template>

<script>
import Gmap from './index'
import MapTool from './mapTool'
import weather from './weather'
import { Polygon } from "./config/hotar"
import AMap from 'AMap'
export default {
  components: {
    MapTool, weather
  },
  data() {
    return {
      qmap: {},
      viewMode: 'midView',
      modeList: [
        {
          mod: 'allView',
          bassConfig: {
            id: 'container',
            x: 118.792199,
            y: 32.050678,
            zoom: 11,
            pitch: 65,
            mode: '2D'
          }
        },
        {
          mod: 'midView',
          bassConfig: {
            id: 'container',
            x: 118.796601,
            y: 32.058548,
            zoom: 20,
            pitch: 65,
            mode: '3D'
          }
        },
        {
          mod: 'smallView',
          bassConfig: {
            id: 'container',
            x: 118.792199,
            y: 32.050678,
            zoom: 17,
            pitch: 65,
            mode: '3D'
          }
        }
      ]
    }
  },
  watch: {
    viewMode(newValue) {
      this.init()
    }
  },
  mounted() {
    this.init()

  },
  methods: {
    init() {
      const bass = this.modeList.find(mod => mod.mod === this.viewMode).bassConfig
      this.qmap = new Gmap(bass)
      this.qmap.createTrafficeLine()
      this.qmap.createArea()
      this.qmap.createMask()
      this.addHotArea()
      switch (this.viewMode) {
        case 'alllView':
          this.qmap.mapAutoSize()
          break

        default:
          break
      }
    },
    addHotArea(){
      Polygon.forEach((pol,i )=> {
        debugger
        this.qmap.createHotArea(pol.config,pol.lnglat)
      })
    },
    moveTo() {
      this.qmap.moveToPoint(116.319665, 39.855919)
    },
  
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
