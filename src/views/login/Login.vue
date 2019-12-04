<template>
  <div class="login-wrap" v-show="isclick">
    <div class="login">
      <div class="nav_bar">
        <div class="close_log_div">
          <span class="close_log_span">×</span>
        </div>
        <ul class="nav_bar_ul">
          <li class="nav_bar_li">
            <a href="javascript:viod(0);" class="nav_bar_a">登录</a>
          </li>
          <li class="nav_bar_li">
            <a href="javascript:viod(0)" class="nav_bar_a">注册</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isclick: true
    };
  }
};
</script>

<style>
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
  margin: 80px auto;
  margin-top: 50px;
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
  margin-bottom: 10px;
}
</style>