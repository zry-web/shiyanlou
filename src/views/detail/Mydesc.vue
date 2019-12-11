<template>
  <div class="full-page">
    <div class="container">
      <div class="desc-content">
        <div class="content-header">
          <span class="content-title">课程介绍</span>
        </div>
        <div class="content-body">
          <p>
            从零开始实现一个完整的问答社区项目，包含用户评论、点赞、回复、签到，收藏、
            加精、置顶、搜索，登录注册和邮件激活、密码找回等功能。
          </p>
          <h2>先学课程</h2>
          <p>推荐先学习 Python Flask Web 框架。</p>

          <h2>先学课程</h2>
          <p>推荐先学习 Python Flask Web 框架。</p>

          <h2>先学课程</h2>
          <p>推荐先学习 Python Flask Web 框架。</p>

          <h2>先学课程</h2>
          <ul class="body-ul">
            <li>课程价格：当前优惠价格 79 元。</li>
            <li>课程价格：当前优惠价格 79 元。</li>
            <li>
              课程价格：当前优惠价格 79 元
              <a href target="_blank">购买咨询</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="teacher-content">
        <div class="teacher-header">
          <span class="teacher-title">课程教师</span>
        </div>
        <div class="teacher-body">
          <div class="body-left">
            <a href target="_blank">
              <img src alt />
            </a>
          </div>
          <div class="body-right">
            <p class="teacher-info">
              <span class="name">余漪</span>
              <span class="count">共发布过 1 门课程</span>
            </p>
            <a href target="_blank" class="view-course">查看老师的所有课程 ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.container {
  padding-right: 30px;
  padding-left: 30px;
  margin-right: auto;
  margin-left: auto;
}
.desc-content {
  margin-bottom: 10px;
  padding: 30px 30px 20px;
  border: 1px solid #eee;
  background: #fff;
  width: 71.5%;
}
.content-header {
  align-items: center;

  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
}
.content-title {
  color: #565656;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
}
.content-body p {
  line-height: 24px;
  letter-spacing: 1px;
  color: #565656;
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 16px;
}
.content-body h2 {
  margin-top: 25px;
  font-size: 16px;
  line-height: normal;
  margin-bottom: 8px;
  font-weight: 500;
}
.body-ul {
  background: #fbfbf8;
  padding-bottom: 10px;
  padding-top: 10px;
  color: #817f74;
  line-height: 2;
  margin-bottom: 16px;
}
.body-ul li {
  color: #817f74;
  line-height: 2;
  font-size: 16px;
  font-weight: 400;
}
.body-ul li a {
  font-size: 14px;
  padding: 0 4px;
  color: #08bf91;
}
.teacher-content {
  margin-bottom: 10px;
  padding: 30px 30px 20px;
  border: 1px solid #eee;
  background: #fff;
  width: 71.5%;
}
.teacher-header {
  align-items: center;

  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
  margin-bottom: 20px;
}
.teacher-title {
  color: #565656;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
}
.body-right {
  margin-left: 20px;
}
.name {
  color: #3a3a3a;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}
.count {
  color: #999;
  margin-left: 5px;
  font-size: 12px;
}
.view-course {
  margin-top: 10px;
  font-size: 14px;
  color: #999;
  font-weight: 400;
  line-height: 1.5;
}
</style>