;(function() { // 根据配置 重写大小
  const BASS_IMG_W = 22400
  const fontSize = BASS_IMG_W / store.getters.getConfigWidth
  const getstr = getStyle(document.getElementsByTagName('html')[0], 'fontSize')
  console.log(`${+getstr.substring(0, getstr.length - 2) / fontSize} px `)
  document.getElementsByTagName('html')[0].style.fontSize = `${+getstr.substring(0, getstr.length - 2) / fontSize}px`
})()