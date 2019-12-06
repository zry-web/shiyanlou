import { reg, login } from "../../../api/login/login";
import cookies from "vue-cookies";
const state = {
  islogin: true,
  on_or_up: "on",
  isclick: true
};
const mutations = {
  change_on_up_state(state, onOrUp) {
    state.on_or_up = onOrUp;
  },
  clickClose(state, payload) {
    state.isclick = !payload;
  }
};
const actions = {
  changeclick(context, onOrUp) {
    context.commit("change_on_up_state", onOrUp);
  },
  clickclose({ commit }, payload) {
    commit("clickClose", payload);
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
