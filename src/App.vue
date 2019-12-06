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
<<<<<<< HEAD
import Header from "./components/header/header";
import Footer from "./components/layout/footer";
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
import Header from "./components/header/header";
import Footer from "./components/layout/footer";
=======
<<<<<<< HEAD
import Header from "./components/header/header";
import Footer from "./components/layout/footer";
=======
>>>>>>> 06dcf8098323e767a89f037571e584b8c8b86e23
import Header from "./compents/header/header";
import Footer from "./compents/layout/footer";
>>>>>>> 10aaf9c0ac63a90174d32a4fd8f9173689ecb6af
>>>>>>> f073b9353e55253aa06412f109db9ec148a50877
>>>>>>> 3add66fac1de30032ff05ee3751f17215f32dbee
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
