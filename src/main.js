import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import rest from "./assets/rest.css";
import axios from "axios";
import utils from '@/utils/base.js'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";



axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.min.css";

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.utils = utils

new Vue({
  rest,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
