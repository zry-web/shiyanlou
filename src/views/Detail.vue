<template>
  <div class="full-page">
    <Nav></Nav>
    <Study></Study>
    <Course></Course>
    <MyDesc></MyDesc>
    <Pinglun></Pinglun>
    <Pics></Pics>
    <Sides></Sides>
    <Tops></Tops>
  </div>
</template>
<script>
import Nav from "../views/detail/Nav";
import Study from "../views/detail/Study";
import Course from "../views/detail/Course";
import MyDesc from "../views/detail/Mydesc";
import Pinglun from "../views/detail/Pinglun";
import Pics from "../views/detail/Pics";
import Sides from "../views/detail/Detail-side";
import Tops from "../views/detail/Detail-top";
export default {
  name: "Detail",
  components: {
    Nav,
    Study,
    Course,
    MyDesc,
    Pinglun,
    Pics,
    Sides,
    Tops
  }
};
</script>
<style scoped>
.full-page {
  width: 100%;
}
</style>