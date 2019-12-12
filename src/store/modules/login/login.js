import Vue from "vue";
import VueCookies from "vue-cookies";
$cookies.config("0", "/");
Vue.use(VueCookies);
const state = {
  islogin: true,
  on_or_up: "on",
  isclick: false,
  token: ""
};
const mutations = {
  change_on_up_state(state, onOrUp) {
    state.on_or_up = onOrUp;
  },
  clickClose(state, payload) {
    state.isclick = !payload;
  },
  getToken(state, payload) {
    state.token = payload;
  },
  logOut(state, payload) {
    state.token = payload;
  }
};
const actions = {
  changeclick(context, onOrUp) {
    context.commit("change_on_up_state", onOrUp);
  },
  clickclose({ commit }, payload) {
    commit("clickClose", payload);
  },
  gettoken({ commit }, payload) {
    commit("getToken", payload);
  },
  logout({ commit }, payload) {
    commit("logOut", payload);
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
