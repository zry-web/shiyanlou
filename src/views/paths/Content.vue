<template>
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
</template>


<script>
export default {};
</script>>
<style scoped>
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
</style>