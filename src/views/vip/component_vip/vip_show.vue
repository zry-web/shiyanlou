<template>
  <div class="wwwwww fixed-bot opo" v-show="show">
    <h2>加入实验楼会员，快速提升实战技能</h2>
    <button type="button" class="btn btn-purchase btn-danger" v-show="long">立即抢购</button>
    <button
      type="button"
      class="btn btn-purchase btn-warning"
      v-show="!long"
      @click="clickclose(false)"
    >登录并开通</button>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      show: false,
      long: false
    };
  },
  computed: {
    ...mapState("login", ["token"])
  },
  methods: {
    ...mapActions("login", ["clickclose"]),
    vip_scroll() {
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;

      if (scrollTop > 50) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.vip_scroll);
  },
  created() {
    if (this.token) {
      this.long = true;
      this.ilong = false;
    } else {
      this.ilong = true;
      this.long = false;
    }
    console.log(this.token);
  }
};
</script>
<style scoped>
.opo {
  bottom: 0;
}
.wwwwww h2 {
  text-align: center;
  line-height: 1;
  margin-left: 25%;
  display: inline-block;
}
.fixed-bot {
  position: fixed;

  background: url(../../../assets/img/ggg.png);
  width: 100%;
  padding: 12px;
  color: #fff;
  transition: bottom 3s ease-out;
}
.btn-purchase {
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
  padding-left: 3rem;
  padding-right: 3rem;
  border-radius: 20px;
  font-size: 18px;
  color: #fff;
}
</style>