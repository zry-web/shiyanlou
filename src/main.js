import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import rest from "./assets/rest.css";

Vue.config.productionTip = false;

new Vue({
  rest,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
