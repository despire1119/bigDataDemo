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
    this.searchCity = config.searchCity || '南京市'
  }
  set viewMode(val) {
    this.changeView(val)
  }

  get viewMode() {
    return this._viewMode
  }

  changeView(val) {
    this._viewMode = val
  }
  createIcon(imgUrl, imgSize = 27, size = 27) {
    const vsize = new AMap.Size(imgSize, imgSize)
    return new AMap.Icon({
      image: imgUrl,
      imgSize: vsize,
      size: vsize
    })
  }
  addMarker(x, y, z, icon = '', config = {}) {
    const marker = new AMap.Marker({
      map: this.map,
      position: [x, y],
      showPositionPoint: true,
      icon,
      zIndex: z,
      ...config
    })

    this.realpoint.push(marker)
    return marker
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
  createArea() {
    this.districtSearch(this.searchCity, res => {
      // 获取南京市的边界信息
      const bounds = res.districtList[0].boundaries
      const polygons = []
      if (bounds) {
        for (var i = 0, l = bounds.length; i < l; i++) {
          // 生成行政区划polygon
          const polygon = new AMap.Polygon({
            map: this.map,
            strokeWeight: 2,
            path: bounds[i],
            fillOpacity: 0,
            fillColor: '#CCF3FF',
            strokeColor: '#73c4fb'
          })
          polygons.push(polygon)
        }
      }
    })
  }
  mapAutoSize() {
    // 地图自适应
    this.map.setFitView()
  }
  createSubArea(
    area,
    config = {
      map: this.map,
      strokeWeight: 2,
      fillOpacity: 0,
      fillColor: '#CCF3FF',
      strokeColor: '#73c4fb'
    }
  ) {
    this.districtSearch(area, res => {
      const bounds = res.districtList[0].boundaries
      const polygons = []
      if (bounds) {
        for (var i = 0, l = bounds.length; i < l; i++) {
          // 生成行政区划polygon
          const polygon = new AMap.Polygon(config)
          polygons.push(polygon)
        }
        // 地图自适应
        this.map.setFitView()
      }
    })
  }
  createMask() {
    this.districtSearch(this.searchCity, res => {
      const outer = [
        new AMap.LngLat(-360, 90, true),
        new AMap.LngLat(-360, -90, true),
        new AMap.LngLat(360, -90, true),
        new AMap.LngLat(360, 90, true)
      ]
      const holes = res.districtList[0].boundaries

      const pathArray = [outer]
      pathArray.push.apply(pathArray, holes)
      const polygon = new AMap.Polygon({
        pathL: pathArray,
        strokeColor: '#00eeff',
        strokeWeight: 1,
        fillColor: '#161f47',
        fillOpacity: '0.8'
      })
      polygon.setPath(pathArray)
      this.map.add(polygon)
    })
  }
  districtSearch(string, callback) {
    this.map.plugin('AMap.DistrictSearch', () => {
      // 创建行政区查询对象
      const district = new AMap.DistrictSearch({
        // 返回行政区边界坐标等具体信息
        extensions: 'all',
        // 设置查询行政区级别为 区
        level: 'district'
      })
      district.search(string, (status, result) => {
        callback && typeof callback === 'function' && callback(result)
      })
    })
  }
  openInfo(htmlMsg, x, y) {
    console.log('sdfsdf')
    const infoWindow = new AMap.InfoWindow({
      isCustom: true, // 使用自定义窗体
      content: htmlMsg,
      offset: new AMap.Pixel(0, -25)
    })

    infoWindow.open(this.map, [x, y])
    return infoWindow
  }
  removeInfoWindow(infoWindow) {
    infoWindow.close()
  }
  createHotArea(config,lnglat){
    const path = []
    for (let [index,point] of lnglat.entries()) {
      debugger
      path.push(new AMap.LngLat(point.lng, point.lat))    
    }
    const {strokeWeight,strokeColor,strokeOpacity,fillColor,fillOpacity} =config
    const polygon = new AMap.Polygon({
      path: path,
      strokeColor,
      strokeWeight,
      fillColor,
      fillOpacity,
      strokeOpacity
    })
   
    this.map.add(polygon)
  }

  
}

