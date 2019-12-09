import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login/login";
import home from "./modules/home/home";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoged: false
  },
  modules: {
    login,
    home
  }
});
