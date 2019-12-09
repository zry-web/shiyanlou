<template>
  <div class="full-page">
    <Banner></Banner>
    <Index></Index>

    <Faq></Faq>
  </div>
</template>

<script>
import Banner from "../views/bootcamp/Banner";
import Index from "../views/bootcamp/Index";

import Faq from "../views/bootcamp/Faq";
export default {
  name: "Bootcamp",
  components: {
    Banner,
    Index,

    Faq
  }
};
</script>

<style scoped>
.full-page {
  width: 100%;
}
</style>