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
  </div>
</template>

<script>
import Login from "./views/login/Login";
import Paths from "./views/nav/Paths";
import Bootcamp from "./views/nav/Bootcamp";
export default {
  components: {
    Login,
    Paths,
    Bootcamp
  }
};
</script>



<style>
</style>
