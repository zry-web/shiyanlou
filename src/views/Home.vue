<template>
  <div id="home_page">
    <Hometop></Hometop>

    <Navigtion></Navigtion>
  </div>
</template>

<script type="text/javascript">
import Hometop from "../components/home_page/home_top";
import Navigtion from "../components/home_page/main_navigation";

export default {
  name: "Home",
  components: {
    Hometop,
    Navigtion
  }
};
</script>

<style type="text/css">
</style>
