<template>
  <div>
    <button type="button" class="btn btn-purchase btn-danger" v-show="long">立即抢购</button>
    <button
      data-v-44f36620
      type="button"
      class="btn btn-purchase btn-warning btn-lg"
      @click="clickclose(false)"
      v-show="!long"
    >登录并开通</button>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      long: false
    };
  },
  computed: {
    ...mapState("login", ["token"])
  },
  methods: {
    ...mapActions("login", ["clickclose"])
  },

  created() {
    if (this.token) {
      this.long = true;
      this.ilong = false;
    } else {
      this.ilong = true;
      this.long = false;
    }
  }
};
</script>
<style  scoped>
.btn-purchase {
  position: relative;
  margin-left: 80px;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 55%;
  color: #fff;
  border-radius: 25px;
}
</style>