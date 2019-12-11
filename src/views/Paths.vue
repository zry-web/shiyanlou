<template>
  <div class="full-page">
    <Banner></Banner>
    <Content></Content>
    <Panel></Panel>
  </div>
</template>
<script>
import Banner from "../views/paths/Banner";
import Content from "../views/paths/Content";
import Panel from "../views/paths/Panel";

export default {
  name: "Paths",
  components: {
    Banner,
    Content,
    Panel
  }
};
</script>
<style scoped>
.full-page {
  width: 100%;
}
</style>