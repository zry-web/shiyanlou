import axios from "axios";
import { allMessage } from "../../../api/services/move";
import { tagMassage } from "../../../api/services/move";
import { picMessage } from "../../../api/services/pages";

export default {
  namespaced: true,
  state: {
    list1: {},
    list2: [],
    list3: [],
    pages: 1,
    category: "",
    it: "1",
    allTag: "1"
  },

  mutations: {
    getname(state, payload) {
      state.list1 = payload.data;
      const tag = [];
      payload.data.forEach(item => {
        item.tag.forEach(i => {
          tag.push(i);
          state.list2 = tag;
        });
      });
    },
    gettag(state, payload) {
      state.list2 = payload;
    },
    getpic(state, payload) {
      state.list3 = payload.course;
    },
    getpages(state, payload) {
      state.list3 = payload.course;
      state.pages = payload.pages;
    }
  },

  actions: {
    async alltag({ commit }, payload) {
      const res = await allMessage(payload);
      commit("getname", res.data);

      const result = await tagMassage(payload);
      commit("getpic", result.data);
    },
    async tagMasseges({ commit }, payload) {
      const res = await allMessage();
      const arr = [];
      res.data.forEach(i => {
        if (payload == i.name) {
          arr = i.tag;
        }
      });
      commit("gettag", arr);
    },
    async pageChange({ commit }, payload) {
      const result = await picMessage(p);

      // this.pages = result.data.pages;
      commit("getpages", res.data);
    }
  }
};
