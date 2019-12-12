<template>
  <transition name="fade">
    <div class="login-wrap" v-show="upshou">
      <transition name="slide-fade">
        <div class="nav_bar">
          <div class="close_log_div">
            <span class="vip_l">会员购买</span>
            <span class="close_log_span" @click="vip_s(false)">×</span>
          </div>
          <div class="vip_o">
            <div class="vip_span">
              <span>开通时长</span>
            </div>
            <div class="vip_a">
              <span @click="cli(349)">1年</span>
              <span @click="cli(699)">2年</span>
            </div>
          </div>
          <div class="vip_use">
            <div>
              <span>使用优惠码/邀请码</span>
            </div>
          </div>
          <div class="vip_use">
            <div class="zhi">
              <span>支付方式</span>
            </div>
            <div class="fuk">
              <span>支付宝</span>
              <span>微信</span>
              <span>蚂蚁花呗</span>
            </div>
          </div>
          <div class="pull">
            <span>付款</span>
            <span>￥{{trr}}</span>
          </div>
          <div class="nav_bar_ul">
            <a href="#">确认购买</a>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      mod: {
        mod1: "$399",
        mod2: "$699"
      },
      trr: ""
    };
  },
  computed: {
    ...mapState({
      upshou: state => state.scrollBar.cool
    })
  },
  methods: {
    ...mapActions("scrollBar", ["vip_s"]),
    cli(data) {
      this.trr = data;
    }
  }
};
</script>

<style scoped>
/* 屏幕淡入淡出 */
.fade-leave-active {
  transition: all 0.4s ease-out;
}
.fade-leave-active {
  opacity: 1;
}
.fade-leave-active {
  opacity: 0;
}
.slide-fade-enter-active .slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translate(0, -35%);
  opacity: 0.3;
}
.slide-fade-enter-to,
.slide-fade-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.nav_bar {
  width: 60%;
  position: relative;
  height: 600px;
  background: #fff;
  margin: 6% auto;
}
.login-wrap {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.5);
}

.login {
  opacity: 1;
  width: 350px;
  margin: 120px auto 80px;
  background: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.close_log_div {
  text-align: right;
  padding: 16px;
  color: #000;
  border-bottom: 2px solid #ccc;
  font-size: 16px;
  cursor: pointer;
}
.vip_l {
  font-size: 26px;
  padding: 10px;
  float: left;
}
.close_log_span {
  font-size: 26px;
  padding: 10px;
}
.vip_span {
  font-size: 19px;
  padding: 20px;
}
.pull {
  font-size: 49px;
  padding: 20px;
}
.vip_use {
  font-size: 19px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.vip_a {
  padding: 20px;
  border-bottom: 2px solid #ccc;
}
.vip_a span {
  padding: 10px 25px;
  color: #000;
  margin-left: 30px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}
.vip_a span:hover {
  border: 1px solid green;
  color: green;
}
.zhi {
  padding: 10px;
}
.zhi span {
  padding: 10px;
  margin-bottom: 20px;
}
.fuk {
  margin-top: 10px;
}
.fuk span {
  padding: 10px 25px;
  color: #000;
  margin-left: 30px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}
.fuk span:hover {
  border: 1px solid green;
  color: green;
}
.nav_bar_ul {
  display: flex;
  position: absolute;
  z-index: 999;
  bottom: 0;
  right: 50px;
  justify-content: space-around;
  background: crimson;
  border: none;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  height: 58px;
}

.nav_bar_ul a {
  display: block;
  padding: 15px;
  font-size: 18px;
  color: #fff;
}
</style>
