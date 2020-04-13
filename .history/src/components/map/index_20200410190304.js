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
  const opts = {
      subdistrict: 1,   //返回下一级行政区
      showbiz:false  //最后一级返回街道信息
  }
 const district = new AMap.DistrictSearch(opts);//注意：需要使用插件同步下发功能才能这样直接使用
  district.search('中国', function(status, result) {
      if(status=='complete'){
          getData(result.districtList[0]);
        
          
      }
  })
  console.log(district);
  }
}
function getData(data,level) {
  var bounds = data.boundaries;
  if (bounds) {
      for (var i = 0, l = bounds.length; i < l; i++) {
          var polygon = new AMap.Polygon({
              map: map,
              strokeWeight: 1,
              strokeColor: '#0091ea',
              fillColor: '#80d8ff',
              fillOpacity: 0.2,
              path: bounds[i]
          });
          polygons.push(polygon);
      }
      map.setFitView();//地图自适应
  }
 
  //清空下一级别的下拉列表
  if (level === 'province') {
      citySelect.innerHTML = '';
      districtSelect.innerHTML = '';
      areaSelect.innerHTML = '';
  } else if (level === 'city') {
      districtSelect.innerHTML = '';
      areaSelect.innerHTML = '';
  } else if (level === 'district') {
      areaSelect.innerHTML = '';
  }

  var subList = data.districtList;
  if (subList) {
      var contentSub = new Option('--请选择--');
      var curlevel = subList[0].level;
      var curList =  document.querySelector('#' + curlevel);
      curList.add(contentSub);
      for (var i = 0, l = subList.length; i < l; i++) {
          var name = subList[i].name;
          var levelSub = subList[i].level;
          var cityCode = subList[i].citycode;
          contentSub = new Option(name);
          contentSub.setAttribute("value", levelSub);
          contentSub.center = subList[i].center;
          contentSub.adcode = subList[i].adcode;
          curList.add(contentSub);
      }
  }
  
}