<template>
  <div class="full-page">
    <div class="container">
      <div class="study-content">
        <div class="study-header">
          <span>你将学到的</span>
        </div>
        <div class="study-body">
          <div class="row">
            <div class="col-points col-sm-12 col-md-6">
              <ul class="col-ul">
                <li>
                  <i>√</i>
                  <span>Flask 蓝图</span>
                </li>
                <li>
                  <i>√</i>
                  <span>Flask-Mail 发送邮件</span>
                </li>
              </ul>
            </div>
            <div class="col-points col-sm-12 col-md-6">
              <ul class="col-ul">
                <li>
                  <i>√</i>
                  <span>Flask-Uploads 文件上传</span>
                </li>
                <li>
                  <i>√</i>
                  <span>Whoosh 搜索功能</span>
                </li>
              </ul>
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
.study-content {
  width: 71.5%;
  margin-bottom: 10px;
  padding: 30px 30px 20px;
  border: 1px solid #eee;
  background: #fff;
}
.study-header {
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
  margin-bottom: 20px;
}
.study-header span {
  color: #565656;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
}
.study-body {
  padding: 20px 0;
  background-color: #f7f7f7;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col-points {
  flex: 0 0 50%;
  max-width: 50%;
}
.col-ul {
  margin: 0;
  padding-left: 5%;
}
.col-ul li {
  color: #565656;
  font-weight: 500;
  font-size: 16px;
  display: flex;
}
.col-ul li:nth-child(2) {
  margin-top: 15px;
}
.col-ul li span {
  display: block;
  color: #565656;
  font-weight: 500;
  font-size: 16px;
}
.col-ul li i {
  color: aqua;
  margin-right: 20px;
}
</style>