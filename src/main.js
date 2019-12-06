import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import rest from "./assets/rest.css";
import axios from "axios";
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;

new Vue({
  rest,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
