<template>
  <div class="louplus-banner">
    <div class="banner-content">
      <div class="container">
        <div class="louplus-center">
          <img
            style="width:230px;height:56px"
            src="https://static.shiyanlou.com/img/louplus/louplus_logo.png"
            alt
          />
          <p class="banner-info">
            楼+ 是实验楼精心打造的教学产品，课程由实验楼一线核
            心研发人员或技术专家制作并录制视频且提供助教全程QQ群答疑，
            班主任督学等服务。在楼+的学习中，你会在实验中动手学习，
            在挑战中检验自己的学习成果， 在大项目中体验真实工作流程，
            以此来达到学习的目的，对只看不动手说NO！
          </p>
          <p>
            <button type="button" class="btn-info btn btn-join font-18 btn-warning">查看全部开设课程 ></button>
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
.louplus-banner {
  color: #fff;
  background: url(https://static.shiyanlou.com/frontend/dist/img/269a28c.png);
  height: 450px;
  width: 100%;
}
.banner-content {
  padding: 60px 0;
}
.louplus-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.banner-info {
  width: 66%;
  margin: 40px auto;
  line-height: 2;
  letter-spacing: 0.6px;
  color: #565656;
  font-size: 18px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}
.btn-info {
  width: 290px;
  height: 50px;
  border-radius: 25px;
  letter-spacing: 0.6px;
  color: #fff;
  background-color: #6090e9 !important;
  border-color: #6090e9;
  font-size: 18px;
}
</style>