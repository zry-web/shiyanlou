<template>
  <div class="signon">
    <div class="input_bar">
      <div class="form-group">
        <input
          class="form-control text_input"
          type="text"
          v-model="user.username"
          placeholder="请输入手机/邮箱"
        />
      </div>
      <div class="form-group">
        <input
          class="form-control text_input"
          type="password"
          v-model="user.password"
          placeholder="请输入密码"
        />
      </div>
    </div>
    <div class="custom_control_div">
      <div>
        <input
          type="checkbox"
          name="autologin"
          value="true"
          class="autologinbutton"
        />
        <label class="autologin_label">下次自动登录</label>
      </div>
      <div>
        <a
          class="forget_password"
          target="_blank"
          href="https://www.shiyanlou.com/user/forget-password/"
          >忘记密码</a
        >
      </div>
    </div>
    <a class="enter_button" href="javascript:;" @click="login(logindata)"
      >进入实验楼</a
    >
    <div class="more_log">
      <a href="#">短信验证码登录</a>
      <a href="#">海外手机登录</a>
    </div>
    <Qulick></Qulick>
  </div>
</template>

<script>
import { login } from "../../api/login/login";

import Qulick from "./Quicklog";
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  components: {
    Qulick
  },
  methods: {
    login
  }
};
</script>

<style type="text/css" scoped>
.input_group {
  display: flex;
  margin-bottom: 15px;
}

.text_input {
  font-size: 14px;
}

.text_input::placeholder {
  color: #c6c6c6;
}

.text_input:focus {
  box-shadow: none;
  border-color: #08bf91;
}
.enter_button {
  display: block;
  width: 100%;
  color: #fff;
  background: #0c9;
  padding: 6px 12px;
  font-size: 14px;
  text-align: center;
  border: 1px solid #0c9;
  border-radius: 20px;
  margin: 10px 0;
}

.enter_button:hover {
  background: #007558;
  color: #fff;
}

.custom_control_div {
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 14px;
}

.autologin_label {
  position: relative;
}

.autologin_label:before {
  content: "";
  border-radius: 0.25rem;
  border: 1px solid #adb5bd;
  background-color: #fff;
  pointer-events: none;
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  top: 0.25rem;
  left: -1.1rem;
  display: block;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

.label_checked:before {
  color: #fff;
  background-color: #08bf91;
  border-color: #08bf91;
}

/* */
.forget_password {
  color: #c6c6c6;
}

.more_log {
  margin: 5px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}
.more_log a {
  font-size: 14px;
  color: #c6c6c6;
}
</style>
