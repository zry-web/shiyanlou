<template>
  <div class="full-page">
    <div class="container">
      <div class="buttom-content">
        <div class="buttom-header">
          <ul class="nav-list">
            <li class="nav-item">
              <a href target="_self" class="active">
                课程评论
                <span class="nav-count">(0)</span>
              </a>
            </li>
            <li class="nav-item">
              <a href target="_self">
                课程评论
                <span class="nav-count">(0)</span>
              </a>
            </li>
            <li class="nav-item">
              <a href target="_self">
                课程评论
                <span class="nav-count">(0)</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="buttom-body"></div>
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
.buttom-content {
  margin-bottom: 10px;
  padding: 30px 30px 20px;
  border: 1px solid #eee;
  background: #fff;
  width: 71.5%;
}
.buttom-header {
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.nav-list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
}
.nav-item {
  margin-bottom: 1px;
}
.nav-item a {
  color: #4c5157;
  margin-right: 48px;
  padding: 0 0 4px;
  font-size: 20px;
  font-weight: 500;
}
.nav-item a span {
  font-size: 18px;
  color: #999;
}
.active {
  background-color: #fff;
  border-bottom: 1px solid #0c9;
}
.nav-item a:hover {
  background-color: #fff;
  border-bottom: 1px solid #0c9;
}
</style>
