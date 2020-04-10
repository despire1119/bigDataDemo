export default {
  state: {
    roomData: null,
    top5Data: null,
    realtimeData: null,
    roomVedioData: null,
    todayAlarmData: null
  },
  mutations: {
    setRoomData(state, status) {
      state.roomData = status;
    },
    setTop5Data(state, status) {
      state.top5Data = status;
    },
    setRealtimeData(state, status) {
      state.realtimeData = status;
    },
    setRoomVedioData(state, status) {
      state.roomVedioData = status;
    },
    setTodayAlarmData(state, status) {
      state.todayAlarmData = status;
    }
  },
  actions: {
    GETBASS({ commit }, obj) {
      // TODO:setData
      commit("XXXX", obj);
    }
  }
};
