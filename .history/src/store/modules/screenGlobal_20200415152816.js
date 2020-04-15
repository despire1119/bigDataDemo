const MIN_SET_W = 1344
const MIN_SET_H =378
export default {
  state: {
    ScreenRate: [1, 1],
    configWidth: 2240,
    configHeight: 630,
    windowHeight: 0,
    windowWidth: 0
  },
  mutations: {
    setScreenRate(state, status) {
      state.ScreenRate = status
    },
    setWindowHeight(state, status) {
      state.windowHeight = status
    },
    setWindowWidth(state, status) {
      status <  MIN_SET_W  ? state.windowWidth = MIN_SET_W : state.windowWidth =status
    },
    setConfigWidth(state, status) {
      state.configWidth = status
    },
    setConfigHeight(state, status) {
      state.configHeight = status
    }
  },
  actions: {
    GETBASS({ commit }, obj) {
      commit('XXXX', obj)
    }
  }
}
