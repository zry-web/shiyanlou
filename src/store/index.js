import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login/login";
import home from "./modules/home/home";
import scrollBar from "./modules/scroll/scroll"
import bootcamp from "./modules/bootcamp/bootcamp";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoged: false
  },
  modules: {
    login,
    home,
    scrollBar,
    bootcamp
  }
});
