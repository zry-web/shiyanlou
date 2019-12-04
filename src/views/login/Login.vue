<template>
  <div class="login-wrap" v-show="isclick">
    <div class="login">
      <div>
        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
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
</style>