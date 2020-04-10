import Vuex from "vuex";
import Vue from "vue";
import getters from "./getters";
import dataCenter from "./modules/datacenter";
import ScreenGlobal from "./modules/screenGlobal";

Vue.use(Vuex);
const myStore = new Vuex.Store({
  modules: {
    dataCenter,
    ScreenGlobal
  },
  getters
});

export default myStore;
