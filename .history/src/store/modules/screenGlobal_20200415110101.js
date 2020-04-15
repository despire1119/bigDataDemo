// const getQueryStringByName = function(name) {
//   var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
//   var r = window.location.search.substr(1).match(reg)
//   var context = ''
//   if (r != null) context = r[2]
//   reg = null

//   return context == null || context === '' || context === 'undefined'
//     ? ''
//     : context
// }
export default {
  state: {
    ScreenRate: [1, 1],
    // configWidth: getQueryStringByName('w') || 2240,
    // configHeight: getQueryStringByName('h') || 630,
    configWidth: 2240,
    configHeight:  630,
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
