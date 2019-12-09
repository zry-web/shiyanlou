import axios from "axios";
import { allMessage } from "../../../api/services/move";

export default {
  namespaced: true,
  state: {
    lists: []
  },

  mutations: {
    getname(state, payload) {
      state.lists = payload.data;
    }
  },

  actions: {
    async alltag({ commit }, payload) {
      const res = await allMessage(payload);
      commit("getname", res.data);
    }
  }
};
