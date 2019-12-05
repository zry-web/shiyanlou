<template>
  <div id="home_page">
    <Hometop></Hometop>
    <Banner></Banner>
    <!-- <Navigation></Navigation> -->
  </div>
</template>

<script type="text/javascript">
import Hometop from "../components/home_page/home_top";
import Banner from "../components/home_page/banner";
// import Navigation from "../components/home_page/main_navigation";

export default {
  name: "Home",
  components: {
    Hometop,
    Banner
  }
};
</script>

<style type="text/css">
</style>
