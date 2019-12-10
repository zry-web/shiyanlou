<template>
  <div class="user-path">
    <div class="data-loading">
      <div class="data-content">
        <p class="content-text">
          <span>还没有加入的路径~</span>
          <br />
          <a href="#">查看更多路径</a>
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.data-loading {
  width: 100%;
  height: 100%;
  min-height: 80px;
}
.data-content {
  padding: 0 3px;
}
.content-text {
  color: #666;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: center;
}
.content-text a {
  color: #08bf91;
}
</style>