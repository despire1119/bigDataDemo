import AMap from 'AMap'

export default class Qmap {
  constructor(config, viewMode) {
    this._viewMode = viewMode || 'nom'
    this.map = new AMap.Map(config.id, {
      center: [config.x, config.y],
      resizeEnable: true,
      mapStyle: 'amap://styles/a57117bc1404186edcb1cacc22910e4c',
      zoom: config.zoom,
      pitch: config.pitch,
      viewMode: config.mode
    })
  }
  set viewMode(val) {
    this.changeView(val)
  }
  get viewMode() {
    return this._viewMode
  }
  changeView(val) {
    this._viewMode=val
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
    trafficLayer.setMap(this.map)
  }
  createArea(){
    AMap.plugin('AMap.DistrictSearch', function () {
      // 创建行政区查询对象
      var district = new AMap.DistrictSearch({
        // 返回行政区边界坐标等具体信息
        extensions: 'all',
        // 设置查询行政区级别为 区 
        level: 'district'
      })
    
      district.search('朝阳区', function(status, result) {
        // 获取朝阳区的边界信息
        var bounds = result.districtList[0].boundaries
        var polygons = []
        if (bounds) {
          for (var i = 0, l = bounds.length; i < l; i++) {
           //生成行政区划polygon
           let _this=this
           var polygon = new AMap.Polygon({
             map: _this.map,
             strokeWeight: 1,
             path: bounds[i],
             fillOpacity: 0.7,
             fillColor: '#CCF3FF',
             strokeColor: '#CC66CC'
           })
           polygons.push(polygon)
         }
         // 地图自适应
         this.map.setFitView()
       }
     })
    })
  }
}
