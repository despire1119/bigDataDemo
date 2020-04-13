<template>
  <div class="map-room">
    <map-tool :map-mod.sync="viewMode" />
    <!-- <video-cover/> -->
    <weather />
    <div id="container" style="height:100%;width:100%" tabindex="0"  />
  </div>
</template>

<script>
import Gmap from './index'
import MapTool from './mapTool'
import VideoCover from './VideoCover'
import { heatmapData } from '@/mockData/heatmapData'
import weather from './weather'
import { Polygon } from './config/hotar'
import { Point } from './config/point'
export default {
  components: {
    MapTool,
    weather,
    VideoCover
  },
  data() {
    return {
      qmap: {},
      viewMode: 'midView',
      realPoint: [],
    infoWindow:null,
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
  computed: {
    heatData() {
      return heatmapData.map(item => {
        return {
          lnglat: [item.lng + 2.4, item.lat - 7.9],
          value: item.count
        }
      })
    }
  },
  watch: {
    viewMode(newValue) {
      this.init()
    },
    realPoint(newValue, oldValue) {
      this.bind()
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    
    bind() {
      console.log(this.realPoint)
      this.realPoint.forEach(p => {
        p.on('click', () => {
          this.pClick(p)
        })
        p.on('mouseover', () => {
         // this.pMouseover(p)
        })
        p.emit('click', {target: p});
      })
    },
    pMouseover(p) {
      console.log(p)
      const ctx = `<div style=\"padding:7px 0px 0px 0px;\"><h4>${p.De.title}</h4>`
      this.qmap.openInfo(ctx, p.De.loc[0], p.De.loc[1])
    },
    pClick(p) {
      if(this.infoWindow ){
        this.infoWindow=null 
        return
      }
      console.log(p.getPosition(), '击中')
      const {lng,lat}=p.getPosition()
      const ctx = `<video style="z-index:99999" src="video/trafficModel.mp4" controls="controls" autoplay="autoplay" loop="loop" preload></video>`
     this.infoWindow= this.qmap.openInfo(ctx,lng,lat)

    },
    init() {
      const bass = this.modeList.find(mod => mod.mod === this.viewMode).bassConfig
      this.qmap = new Gmap(bass)
      this.qmap.createTrafficeLine()
      this.qmap.createArea()
      this.qmap.createMask()
      this.addHotArea()
      this.addLight()
      this.qmap.heatMap(this.heatData)
      switch (this.viewMode) {
        case 'alllView':
          this.qmap.mapAutoSize()
          break

        default:
          break
      }
    },
    addHotArea() {
      Polygon.forEach((pol, i) => {
        this.qmap.createHotArea(pol.config, pol.lnglat)
      })
    },
    addLight() {
      const arr = []
      Point.forEach((point, i) => {
        const icon = this.qmap.createIcon(
          '../images/ico_map_tunnel.png', 32, 32
        )
        const real = this.qmap.addMarker(
          +point.loc[0],
          +point.loc[1],
          99999,
          icon,
          {
            kind: point.type,
            locId: `${point.loc[0]}${point.loc[1]}`,
            title: point.name,
            loc: point.loc,
            info: point.info
          }
        )

        arr.push(real)
      })
      this.realPoint = arr
    },
    moveTo() {
      this.qmap.moveToPoint(116.319665, 39.855919)
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
