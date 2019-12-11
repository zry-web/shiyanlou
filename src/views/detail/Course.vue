<template>
  <div class="full-page">
    <div class="container">
      <div class="course-content">
        <div class="course-header">
          <span class="header-left">课程内容</span>
          <div class="header-right">
            <div>
              <a href class="top-add">自学困难重重？点这里，6周打通机器学习技术路径</a>
              <span class="top-count" style="margin-left:15px">共10个章节</span>
            </div>
          </div>
        </div>
        <div class="content-body">
          <div class="course-item">
            <div class="item-top">
              <div class="top-left">
                <span class="span-img">
                  <img src alt />
                </span>
                <span class="span-index">实验 1</span>
                <span class="span-txt">序目</span>
              </div>
            </div>
          </div>
          <div class="course-item">
            <div class="item-top">
              <div class="top-left">
                <span class="span-img">
                  <img src alt />
                </span>
                <span class="span-index">实验 1</span>
                <span class="span-txt">TensorFlow 2 基础概念语法</span>
              </div>
              <div class="top-right">
                <a href>需加入课程后学习，点击加入</a>
              </div>
            </div>
            <div class="item-bottom">
              <p>知识点: 1.TensorFlow2简介 2.张量 3.EagerExecution 4.自动微分 5.常用模块</p>
            </div>
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
.course-content {
  width: 71.5%;
  margin-bottom: 10px;
  padding: 30px 30px 20px;
  border: 1px solid #eee;
  background: #fff;
}
.course-header {
  align-items: center;

  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
  font-weight: 500;
  display: flex;
  flex-wrap: wrap;
}
.header-left {
  color: #565656;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
}
.header-right {
  display: flex;
  justify-content: space-around;
  margin-left: 20px;
  flex-wrap: wrap;
}
.top-add {
  color: #6ea6ed;
  font-size: 13px;
}
.top-count {
  color: #a4a4a4;
  font-weight: 400;
  font-size: 16px;
}
.course-item {
  margin-top: 15px;
  border: 1px solid #eee;
}
.item-top {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  min-height: 58px;
  background-color: #f7f7f7;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}
.span-index {
  margin-left: 12px;
  color: #999;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}
.span-txt {
  margin-left: 20px;
  max-width: 76%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #666;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}
.top-right {
  margin-right: 10px;
}
.top-right a {
  color: #08bf91;
  font-size: 14px;
}
.item-bottom {
  padding: 10px 20px;
  color: #a5a5a5;
  font-size: 14px;
}
</style>