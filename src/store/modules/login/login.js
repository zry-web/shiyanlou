import { reg, login } from "../../../api/login/login";
import cookies from "vue-cookies";
const state = {
  islogin: true
};
const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};
const actions = {
  login({ commit }, userdata) {
    const { username, password } = userdata;
    return new Promise((res, rej) => {
      login({ username, password }).then(res => {
        console.log(res);
      });
    });
  }
};
export default {
  state,
  mutations,
  actions
};
