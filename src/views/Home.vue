<template>
  <div id="home_page">
    <Hometop></Hometop>
    <div class="banner">
      <Banner></Banner>
    </div>
    <Conc1></Conc1>
    <Conc2></Conc2>
    <Conc3></Conc3>
    <Conc7></Conc7>
    <Conc4></Conc4>
    <Conc5></Conc5>
    <Conc8></Conc8>
    <Conc6></Conc6>
    <Footer></Footer>

    <!-- <Navigation></Navigation> -->
  </div>
</template>

<script type="text/javascript">
import Hometop from "../views/home_page/home_top";
import Banner from "../views/home_page/banner";
import Conc1 from "../views/home_page/content_one";
import Conc2 from "../views/home_page/content_two";
import Conc3 from "../views/home_page/content_three";
import Conc4 from "../views/home_page/content_four";
import Conc7 from "../views/home_page/content_seven";
import Conc5 from "../views/home_page/content.five";
import Conc6 from "../views/home_page/content_six";
import Conc8 from "../views/home_page/content_eight";
import Footer from "../views/home_page//footr";

// import Navigation from "../components/home_page/main_navigation";

export default {
  name: "Home",
  components: {
    Hometop,
    Banner,
    Conc1,
    Conc2,
    Conc3,
    Conc4,
    Conc5,
    Conc6,
    Conc7,
    Conc8,
    Footer
  },
  mounted: function() {
    this.$store.dispatch("home/get_data");
    
  }
};
</script>

<style type="text/css">
.home_page {
  min-height: 1000px;
}
.banner {
  width: 100%;
  position: relative;
}
</style>
