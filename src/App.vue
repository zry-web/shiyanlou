<template>
  <div id="app">
    <Login></Login>
    <transition name="header_transition">
      <Header></Header>
    </transition>

    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>

<script>
import Login from "./views/login/Login";
import Header from "./components/header/header";
import Footer from "./components/layout/footer";
import Puls from "./views/plus/Plus";

export default {
  name: "App",
  components: {
    Login,
    Footer,
    Header,
    Puls
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
