<template>
  <div class="user-courses">
    <div class="modules-nav-bar">
      <div class="nav-tabs">
        <div class="tabs-left">
          <span class="tab-item" :class="change==1 ? 'tab-item-active':''">我的收藏(0)</span>
        </div>
      </div>
      <div class="data-loading" v-show="change == 1">
        <div class="data-content">
          <p class="content-text">
            <span>没有收藏的教程~</span>
            <br />
            <a href="#">查看更多教程</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      change: 1
    };
  }
};
</script>
<style scoped>
.nav-tabs {
  display: flex;
  justify-content: space-between;
  padding: 10px 0 16px;
  border: none;
}
.tab-item {
  display: inline-block;
  padding: 6px 16px;
  font-size: 14px;
  color: #999;
  cursor: pointer;
}
.tab-item-active {
  color: #0c9;
  background: #e7f8f2;
}

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
.match-list {
  margin-bottom: 15px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: #666;
  display: flex;
  justify-content: space-around;
}
</style>