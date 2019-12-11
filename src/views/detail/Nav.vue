<template>
  <div class="full-page">
    <div class="container">
      <div class="content">
        <ul class="nav">
          <li class="nav-item">
            <a href>全部课程</a>
          </li>
          <li>
            <span>/</span>
          </li>
          <li class="nav-item">
            <a href>Flask</a>
          </li>
          <li>
            <span>,</span>
          </li>
          <li class="nav-item">
            <a href>Pathoy</a>
          </li>
          <li>
            <span>,</span>
          </li>
          <li class="nav-item">
            <a href>Web</a>
          </li>
          <li>
            <span>/</span>
          </li>
          <li class="nav-item">
            <span>Flask实现一个问答社区</span>
          </li>
        </ul>
        <div class="flask-content">
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
            <p class="info-desc">
              从零开始实现一个完整的问答社区项目，包含用户评论、点赞、回复、签到，
              收藏、加精、置顶、搜索，登录注册和邮件激活、密码找回等功能。
              本课程主要使用 Flask 完成问答社区项目，适合对 Web 开发有一定基础，
              想进一步加强理解与运用的同学。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>>
<style scoped>
.full-page {
  width: 100%;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.content {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.nav {
  margin: 0;
  padding: 12px 0;
  font-size: 13px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.flask-content {
  margin-bottom: 10px;
  padding: 30px 30px 20px;
  border: 1px solid #eee;
  background: #fff;
  width: 71.5%;
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