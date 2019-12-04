<template>
  <div class="signon">
    <div class="input_bar">
      <div class="form-group">
        <input class="form-control text_input" type="text" placeholder="请输入手机/邮箱" />
      </div>
      <div class="form-group">
        <input class="form-control text_input" type="password" placeholder="请输入密码" />
      </div>
    </div>
    <a class="enter_button" href="javascript:;">注册</a>
    <Qulick></Qulick>
  </div>
</template>

<script>
import Qulick from "./Quicklog";
export default {
  components: {
    Qulick
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
  margin-bottom: 30px;
}

.enter_button:hover {
  background: #007558;
  color: #fff;
}
</style>