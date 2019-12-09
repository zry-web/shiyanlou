<template>
  <div class="page-service">
    <div class="service-content">
      <div class="container">
        <div class="service-title">
          <h2 class="inner-title">楼+的服务</h2>
        </div>
        <div class="row-list row">
          <div class="col-md-3">
            <div class="service-item">
              <img src="https://static.shiyanlou.com/frontend/dist/img/91a2700.png" alt />
              <p class="title">实验+自主挑战</p>
              <p class="desc">学习后及时运用系统知识点全覆盖</p>
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
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.service-item img {
  width: 120px;
  height: 120px;
  vertical-align: middle;
  text-align: center;
  max-width: 100%;
}
.title {
  margin: 10px 0;
  color: #fff;
  font-size: 18px;
}
.desc {
  color: #a4a4a4;
  font-size: 14px;
  margin: 0;
}
</style>