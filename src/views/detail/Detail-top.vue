<template>
  <div class="full-page">
    <div class="container">
      <div class="top-content">
        <div class="flask-header">
          <h1>Flask 实现一个问答社区</h1>
          <span class="bootcamp">训练营</span>
        </div>
        <div class="flask-body">
          <p class="info-meta">
            <span>3 人学过</span>
            <i></i>
            <span>13人关注</span>
            <i></i>
            <span>作者: 余漪</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.full-page {
  position: fixed;
  top: 100px;
  left: 0;
  height: 72px;
  width: 100%;
  opacity: 0.9;
  background-color: #085441;
  z-index: 1031;
}
.top-content {
  width: 100%;
  margin-bottom: 10px;
  padding: 15px;
  background: #fff;
  margin-left: -100px;
  width: 27.6%;
}
.flask-header {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.flask-header h1 {
  margin: 0 10px 0 0;
  line-height: 1.6;
  color: #565656;
  font-weight: 500;
  font-size: 22px;
}
.bootcamp {
  background: #f66;
  display: inline-block;
  margin-left: 8px;
  padding: 0 6px;
  border-radius: 10px;
  font-size: 13px;
  color: #fff;
  display: block;
  width: 51px;
  height: 19px;
}
.info-meta {
  margin-bottom: 15px;
  display: flex;
}
.info-meta i {
  display: block;
  width: 1px;
  height: 26px;
  color: #000;
  padding: 0 5px;
}
.info-meta span {
  color: #a4a4a4;
  font-size: 14px;
}
.info-desc {
  margin-bottom: 10px;
  word-wrap: break-word;
  letter-spacing: 1px;
  color: #666;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
}
</style>