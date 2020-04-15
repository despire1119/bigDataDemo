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
      state.windowWidth = status
    },
    setConfigWidth(state, status) {
      state.configWidth =  status <  MIN_SET_W  ?  MIN_SET_W : status
    },
    setConfigHeight(state, status) {
      state.configHeight =  status <  MIN_SET_H  ?  MIN_SET_H : status

    }
  },
  actions: {
    GETBASS({ commit }, obj) {
      commit('XXXX', obj)
    }
  }
}
