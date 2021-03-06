import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login/login";
import course from './modules/course/course';
import home from "./modules/home/home";
import scrollBar from "./modules/scroll/scroll"
import bootcamp from "./modules/bootcamp/bootcamp";
import search from "./modules/search/search"


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoged: false,
  },
  modules: {
    login,
    course,
    home,
    scrollBar,
    bootcamp,
    scrollBar,
    search


  }
});