<template>
  <div class="search_div">
    <SearchPage></SearchPage>
  </div>
</template>
<script type="text/javascript">
import SearchPage from "./search/search";

import { mapActions } from "vuex";

export default {
  components: {
    SearchPage
  },
  methods: {
    ...mapActions({
      change_search: "search/change_search"
    })
  },
  watch: {
    $route: function() {
      document.title = `${this.$route.query.keywords}的搜索结果 - 实验楼`;
      this.change_search(this.$route.query.keywords);
    }
  },
  mounted: function() {
    this.change_search(this.$route.query.keywords);
  }
};
</script>
<style type="text/css">
.search_div {
  margin-top: 3%;
}
</style>
