<template>
  <div id="app">
    <Login></Login>

    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Login from "./views/login/Login";
export default {
  components: {
    Login
  }
};
</script>



<style>
</style>
