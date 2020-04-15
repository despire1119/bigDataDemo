const getters = {
  getScreenRate: state => state.ScreenGlobal.ScreenRate,
  getConfigWidth: state => state.ScreenGlobal.configWidth,
  getConfigHeight: state => state.ScreenGlobal.configHeight,
  getWindowHeight: state => state.ScreenGlobal.windowHeight,
  getWindowWidth: state => state.ScreenGlobal.windowWidth,
  getFontRemRate: state => state.ScreenGlobal.windowWidth
}
export default getters
