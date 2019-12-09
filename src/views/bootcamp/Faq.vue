<template>
  <div class="faq-page">
    <div class="faq-content">
      <div class="container">
        <div class="faq-header">
          <h4>训练营FAQ</h4>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="faq-item">
              <p class="faq-title">
                训练营是实验楼与合作工程师共同打造的项目实战课程。通过训练营的学习，
                你会完成一个产品原型或一系列编程任务，在项目实战中融会贯通一个
                领域的IT技术及开发流程。
              </p>
              <p class="faq-content">
                <img src="https://static.shiyanlou.com/frontend/dist/img/180f21a.png" alt />
                <i style="dispaly:block;margin:0 5px;font-size:16px;">:</i>

                <span class="inner-content">
                  训练营是实验楼与合作工程师共同打造的项目实战课程。
                  通过训练营的学习，你会完成一个产品原型或一系列编程任务，在项目实战中融会贯通
                  一个领域的IT技术及开发流程。
                </span>
              </p>
              <br />
            </div>
            <a href target="_black" class="faq-more">更多疑问，查看这里>></a>
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
.faq-page {
  padding: 50px 0;
  background: #fff;
}
.faq-header {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: center;
}
.faq-header h4 {
  padding: 8px 16px;
  margin-bottom: 30px;
  color: #fff;
  background: #08bf91;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}
.faq-title {
  color: #08bf91;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 16px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
}
.faq-content {
  color: #666;
  margin-top: 0;
  margin-bottom: 16px;
  box-sizing: border-box;
  display: flex;
}
.faq-content img {
  width: 39px;
  height: 34px;
}
.inner-content {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #666;
  box-sizing: border-box;
}
.faq-more {
  color: #08bf91;
  text-decoration: none;
  background-color: transparent;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
}
</style>