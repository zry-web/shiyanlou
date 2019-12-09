<template>
  <div class="full-page">
    <Banner></Banner>
    <Service></Service>
    <Course></Course>
  </div>
</template>
<script>
import Banner from "../views/louplus/Banner";
import Service from "../views/louplus/Service";
import Cource from "../views/louplus/Course";

export default {
  name: "Louplus",
  components: {
    Banner,
    Service,
    Cource
  }
};
</script>

<style scoped>
.full-page {
  width: 100%;
}
</style>