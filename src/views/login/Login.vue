<template>
  <transition name="fade">
    <div class="login-wrap" v-show="false">
      <transition name="slide-fade">
        <div class="login" v-show="isclick">
          <div class="nav_bar">
            <div class="close_log_div">
              <span class="close_log_span" @click="close_login()">×</span>
            </div>
            <ul class="nav_bar_ul">
              <li class="nav_bar_li" :class="on_or_up == 'on' ? 'nav_bar_li_active' : ''">
                <a
                  href="#"
                  :class="on_or_up == 'on' ? 'nav_bar_a ' : ''"
                  @click="on_or_up = 'on'"
                >登录</a>
              </li>
              <li class="nav_bar_li" :class="on_or_up == 'up' ? 'nav_bar_li_active' : ''">
                <a
                  href="#"
                  :class="on_or_up == 'up' ? 'nav_bar_a ' : ''"
                  @click="on_or_up = 'up'"
                >注册</a>
              </li>
            </ul>
          </div>
          <Signon v-show="on_or_up == 'on'"></Signon>
          <Signup v-show="on_or_up == 'up'"></Signup>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import Signon from "./Signon";
import Signup from "./Signup";
import { mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      isclick: true,
      on_or_up: "on"
    };
  },
  computed: {
    // ...mapState({
    //   on_or_up: state => state.login.on_or_up
    // })
  },
  components: {
    Signon,
    Signup
  },
  methods: {
    logclick() {
      this.on_or_up = "on";
    },
    regclick() {
      this.on_or_up = "up";
    },
    close_login() {
      this.isclick = false;
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
  color: #000;
  font-size: 16px;
  cursor: pointer;
  height: 20px;
}

.nav_bar_ul {
  display: flex;
  justify-content: space-around;
  border: none;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  height: 58px;
}

.nav_bar_li {
  width: 25%;
  text-align: center;
}
.nav_bar_li a {
  display: block;
  padding: 15px;
  font-size: 18px;
  color: #555;
}
.nav_bar_li .nav_bar_a {
  display: block;
  padding: 15px;
  font-size: 18px;
  color: #0c9;
}

.nav_bar_li_active {
  border-bottom: 1px solid #0c9;
  color: #0c9;
}
</style>
