<template>
  <div class="full-page">
    <div class="louplus-banner">
      <div class="banner-content">
        <div class="container">
          <div class="louplus-center">
            <img
              style="width:230px;height:56px"
              src="https://static.shiyanlou.com/img/louplus/louplus_logo.png"
              alt=""
            />
            <p class="banner-info">
              楼+ 是实验楼精心打造的教学产品，课程由实验楼一线核
              心研发人员或技术专家制作并录制视频且提供助教全程QQ群答疑，
              班主任督学等服务。在楼+的学习中，你会在实验中动手学习，
              在挑战中检验自己的学习成果， 在大项目中体验真实工作流程，
              以此来达到学习的目的，对只看不动手说NO！
            </p>
            <p>
              <button
                type="button"
                class="btn-info btn btn-join font-18 btn-warning"
              >
                查看全部开设课程 >
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-service">
      <div class="service-content">
        <div class="container">
          <div class="service-title">
            <h2 class="inner-title">楼+的服务</h2>
          </div>
          <div class="row-list row">
            <div class="col-md-3">
              <div class="service-item">
                <img
                  src="https://static.shiyanlou.com/frontend/dist/img/91a2700.png"
                  alt=""
                />
                <p class="title">实验+自主挑战</p>
                <p class="desc">学习后及时运用系统知识点全覆盖</p>
              </div>
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
.louplus-banner {
  color: #fff;
  background: url(https://static.shiyanlou.com/frontend/dist/img/269a28c.png);
  height: 450px;
  width: 1349px;
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
.page-service {
  width: 1349px;
  padding: 100px 0;
  background: url(https://static.shiyanlou.com/frontend/dist/img/72a20b6.png)
    no-repeat;
  background-size: 100% 100%;
  text-align: center;
}
.service-title {
  margin-bottom: 60px;
}
.service-title h2 {
  color: rgb(255, 255, 255);
  font-size: 32px;
  font-weight: 500;
  line-height: 1.2;
}
.row-list {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.service-item {
  margin-bottom: 40px;
}
.service-item img {
  width: 120px;
  height: 120px;
}
</style>
