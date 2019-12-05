<template>
  <div class="full-page">
    <div class="paths-banner"></div>
    <div class="container">
      <div class="path-container">
        <div class="col-sm-12 col-md-3">
          <a href class="path-item">
            <img src="https://dn-simplecloud.shiyanlou.com/1487741005890.png" />
            <div class="path-name">新手入门</div>
            <div class="path-courses">6门课程</div>
          </a>
        </div>
        <div class="col-sm-12 col-md-3">
          <a href class="path-item">
            <img src="https://dn-simplecloud.shiyanlou.com/1487741005890.png" />
            <div class="path-name">新手入门</div>
            <div class="path-courses">6门课程</div>
          </a>
        </div>
        <div class="col-sm-12 col-md-3">
          <a href class="path-item">
            <img src="https://dn-simplecloud.shiyanlou.com/1487741005890.png" />
            <div class="path-name">新手入门</div>
            <div class="path-courses">6门课程</div>
          </a>
        </div>
        <div class="col-sm-12 col-md-3">
          <a href class="path-item">
            <img src="https://dn-simplecloud.shiyanlou.com/1487741005890.png" />
            <div class="path-name">新手入门</div>
            <div class="path-courses">6门课程</div>
          </a>
        </div>
      </div>
    </div>

    <div class="path-panel">
      <div class="path-r path-vip">
        <div class="paths path-icon">
          <a href>
            <img
              src="https://static.shiyanlou.com/frontend/dist/img/2a64526.png"
              alt="会员"
            />
          </a>
        </div>
        <div class="path-content vip-content">开通会员，即刻开始学习</div>
      </div>

      <div class="path-r path-webchat">
        <div class="paths path-icon">
          <a href>
            <img
              src="https://static.shiyanlou.com/frontend/dist/img/3494656.png"
              alt="会员"
            />
          </a>
        </div>
        <div class="path-content image-content1">
          <img
            src="https://static.shiyanlou.com/frontend/dist/img/ba1ade2.png"
            alt
          />
        </div>
      </div>

      <div class="path-r path-program">
        <div class="paths path-icon">
          <a href>
            <img
              src="https://static.shiyanlou.com/frontend/dist/img/06f781d.png"
              alt="会员"
            />
          </a>
        </div>
        <div class="path-content image-content2">
          <img
            src="https://static.shiyanlou.com/frontend/dist/img/a1f633f.png"
            alt
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {allMessage} from "../../services/movie"
export default {
  name: "paths",
  components: {},
  data(){
    return {
      list:[]
    }
  },
  async created() {
    // 使用async/await优化Promise请求
    const res = await allMessage();
    this.list = res.data.category;
  }
};
</script>

<style scoped>
.full-page {
  width: 1349px;
}
.paths-banner {
  widows: 100%;
  height: 340px;
  background: url(https://static.shiyanlou.com/img/path_bg.png) no-repeat;
  background-position: 50% 0;
  margin-top: -20px;
  margin-bottom: -30px;
}
.path-container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.path-item {
  height: 253px;
  position: relative;
  bottom: 0;
  display: block;
  text-align: center;
  background: #fff;
  margin-bottom: 20px;
  box-shadow: 0 1px 2px 0 #ddd;
  transition: all 0.3s;
  cursor: pointer;
}
.path-item img {
  display: block;
  width: 100%;
  height: 130px;
}
.path-item:hover {
  bottom: 10px;
  box-shadow: 0 4px 20px 4px #ddd;
}
.path-name {
  padding: 30px 0 15px;
  color: #666;
  font-size: 18px;
}
.path-courses {
  padding: 0 0 30px;
  color: #a4a4a4;
  font-size: 14px;
}
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
  text-align: center;
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
</style>
