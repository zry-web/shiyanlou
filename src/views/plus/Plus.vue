<template>
  <div class="plus">
    <div class="banner">
      <div class="inner">
        <div class="container">
          <div class="row">
            <div class="col">
              <img src="https://static.shiyanlou.com/img/louplus/louplus_logo.png" alt="楼+" />
              <p>楼+ 是实验楼精心打造的教学产品，课程由实验楼一线核心研发人员或技术专家制作并录制视频， 且提供助教全程QQ群答疑，班主任督学等服务。在楼+的学习中，你会在实验中动手学习，在挑战中检验自己的学习成果， 在大项目中体验真实工作流程，以此来达到学习的目的，对只看不动手说NO！</p>
              <div>
                <button class="inbtn">查看全部展开课程</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="server">
      <div class="container">
        <div class="row">
          <div class="col">楼+的服务</div>
        </div>
        <div class="row">
          <div class="col">
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="kecheng"></div>
  </div>
</template>

<style scoped>
.plus {
  width: 100%;
}
.banner {
  color: #fff;
  background: url("https://static.shiyanlou.com/frontend/dist/img/269a28c.png");
  height: 450px;
}
.inner {
  padding: 60px 0;
}
.container {
  max-width: 1090px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col {
  flex-basis: 0;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.col img {
  max-width: 100%;
  vertical-align: middle;
  text-align: center;
  margin: 0 auto;
}
.col p {
  width: 70%;
  margin: 40px auto;
  line-height: 2;
  letter-spacing: 0.6px;
  color: #565656;
  font-size: 18px;
}
.inbtn {
  width: 290px;
  height: 50px;
  display: block;
  margin: 0 auto;
  border-radius: 25px;
  letter-spacing: 0.6px;
  color: #fff;
  background-color: #6090e9;
  border-color: #6090e9;
  font-size: 18px;
}
.server {
  background: url("https://static.shiyanlou.com/frontend/dist/img/72a20b6.png");
}
</style>