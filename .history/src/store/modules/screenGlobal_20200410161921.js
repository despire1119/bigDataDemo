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
    }
  },
  actions: {
    GETBASS({ commit }, obj) {
      commit('XXXX', obj)
    }
  }
}
