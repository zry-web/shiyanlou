import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login/login";
import course from './modules/course/course';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoged: false,
  },
  modules: {
    login,
    course
  }
});