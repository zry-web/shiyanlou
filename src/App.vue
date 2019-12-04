<template>
  <div id="app">
    <!-- <Login></Login> -->

    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <router-link to="/paths">路径</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Login from "./views/login/Login";
import Paths from "./views/nav/Paths";
export default {
  components: {
    Login,
    Paths
  }
};
</script>



<style>
</style>
