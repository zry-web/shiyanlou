<template>
  <div id="app">
    <Login></Login>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/paths">路径</router-link>|
      <router-link to="/bootcamp">训练营</router-link>|
    </div>
    <router-view />

    <!-- <Login></Login> -->
    <transition name="header_transition">
      <Header></Header>
    </transition>
    <!-- <Hometop></Hometop> -->
    <!-- <keep-alive :include="cache_router"> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Login from "./views/login/Login";

import Paths from "./views/nav/Paths";
import Bootcamp from "./views/nav/Bootcamp";

import Header from "./compents/header/header";
import Footer from "./compents/layout/footer";

export default {
  name: "App",
  components: {
    Login,
    Paths,
    Bootcamp,
    Footer,
    Header
  },
  data() {
    return {
      cache_router: ["Home"]
    };
  }
};
</script>

<style scoped>
#app {
  height: 2000px;
}

.header_transition-enter-active,
.header_transition-leave-active {
  transition: opacity 2s;
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
}
</style>
