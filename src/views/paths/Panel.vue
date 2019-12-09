<template>
  <div class="path-panel">
    <div class="path-r path-vip">
      <div class="paths path-icon">
        <a href>
          <img src="https://static.shiyanlou.com/frontend/dist/img/2a64526.png" alt="会员" />
        </a>
      </div>
      <div class="path-content vip-content">开通会员，即刻开始学习</div>
    </div>

    <div class="path-r path-webchat">
      <div class="paths path-icon">
        <a href>
          <img src="https://static.shiyanlou.com/frontend/dist/img/3494656.png" alt="会员" />
        </a>
      </div>
      <div class="path-content image-content1">
        <img src="https://static.shiyanlou.com/frontend/dist/img/ba1ade2.png" alt />
      </div>
    </div>

    <div class="path-r path-program">
      <div class="paths path-icon">
        <a href>
          <img src="https://static.shiyanlou.com/frontend/dist/img/06f781d.png" alt="会员" />
        </a>
      </div>
      <div class="path-content image-content2">
        <img src="https://static.shiyanlou.com/frontend/dist/img/a1f633f.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.path-panel {
  position: fixed;
  right: 10px;
  bottom: calc(50% - 220px);
  width: 50px;
  z-index: 1034;
}
.path-r {
  background: #fff;
  border-radius: 5px;
  padding: 10px 0;
  margin-bottom: 5px;
  height: 50px;
  width: 50px;
  box-shadow: -2px 2px 8px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.path-container {
  width: 100%;
  height: 100%;
}
.paths a {
  height: 30px;
  width: 50px;
  color: #08bf91;
  text-decoration: none;
  background-color: transparent;
  display: block;
  display: flex;
  justify-content: center;
}
.paths a img {
  vertical-align: middle;
}

.path-content {
  position: absolute;
  top: 10%;
  padding: 2px 5px;
  border: 1px solid #eee;
  border-radius: 5px;
  font-size: 0.9rem;
  color: #08bf91;
  background: #fff;
  opacity: 0;
  transition: all 0.3s ease-out 0s;
}
.vip-content {
  left: -150px;
}
.path-r:hover .path-content {
  opacity: 1;
}

.image-content1 {
  padding: 0;
  left: -162px;
  top: 0;
}
.image-content2 {
  padding: 0;
  left: -162px;
  top: 65px;
}
.image-content img {
  color: #ddd;
}
</style>>