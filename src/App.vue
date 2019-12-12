<template>
  <div id="app">
    <Login></Login>

    <Header v-show="show_index_scroll_bar"></Header>
    <div class="min">
      <router-view></router-view>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Vue from "vue";

import Login from "./views/login/Login";
import VueCookies from "vue-cookies";
import Header from "./views/header/header";
import Footer from "./views/layout/footer";
import Puls from "./views/plus/Plus";

import { mapState, mapActions } from "vuex";
Vue.use(VueCookies);
export default {
  name: "App",
  components: {
    Login,
    Footer,
    Header
  },
  data() {
    return {
      cache_router: ["Home"]
    };
  },
  methods: {
    ...mapActions({
      moniting_scrollbar: "scrollBar/update_scroll_value",
      gettoken: "login/gettoken"
    })
  },
  computed: {
    ...mapState({
      scrolled: state => state.scrollBar.current_scrolled_value > 30,
      token: state => state.login.token,
      show_index_scroll_bar: function(state) {
        if (this.$route.name == "Home") {
          return state.scrollBar.show_scroll_bar;
        } else {
          return true;
        }
      }
    })
  },
  mounted() {
    window.addEventListener(
      "scroll",
      this.utils.throttle(this.moniting_scrollbar, 90)
    );
  },
  created() {
    this.gettoken($cookies.get("token"));
  }
};
</script>

<style scoped>
/* body {
  border: 0;
  height: 100%;
  background: #f9f9f9;
  font-size: 13px;
  line-height: 1.4285;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
    Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
    sans-serif;
} */
.min {
  min-height: 500px;
}
/* #app {
  height: calc(100vh - 263px);
} */
/* 
.header_transition-enter-active,
.header_transition-leave-active {
  transition: opacity 0.3s;
}
.header_transition-enter {
  opacity: 0;
}

.header_transition-to {
  opacity: 1;
}
.header_transition-leave {
  opacity: 1;
}
.header_transition-leave-to {
  opacity: 0;
} */
</style>
