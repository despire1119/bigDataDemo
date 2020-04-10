import AMap from 'AMap'

export default class Qmap {
  constructor(config) {
    this.map = new AMap.Map(config.id, {
      center: [config.x, config.y],
      resizeEnable: true,
      mapStyle: 'amap://styles/a57117bc1404186edcb1cacc22910e4c',
      zoom: config.zoom,
      pitch: config.pitch,
      viewMode: config.mode
    })
  }
  addMarker(x, y) {
    const marker = new AMap.Marker({
      position: [x, y],
      color: 'red'
    })
    this.map.add(marker)
  }
  moveToPoint(x, y) {
    const mybounds = new AMap.Bounds([x, y], [x, y])
    this.map.setBounds(mybounds)
  }
  createTrafficeLine() {
    const trafficLayer = new AMap.TileLayer.Traffic({
      zIndex: 10
    })
    trafficLayer.setMap(this.map);
  }
}
