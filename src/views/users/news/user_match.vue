<template>
  <div class="user-match">
    <div class="modules-nav-bar">
      <div class="nav-tabs">
        <div class="tabs-left">
          <span
            class="tab-item"
            :class="change==1 ? 'tab-item-active':''"
            @click="changeactive(1)"
          >参加的比赛</span>
          <span
            class="tab-item"
            :class="change==2 ? 'tab-item-active':''"
            @click="changeactive(2)"
          >提交记录</span>
        </div>
      </div>
      <div class="data-loading" v-show="change == 1">
        <div class="data-content">
          <p class="content-text">
            <span>还没有参加过比赛~</span>
            <br />
            <a href="#">查看全部比赛</a>
          </p>
        </div>
      </div>
      <div class="data-loading" v-show="change == 2">
        <div class="data-content">
          <ul class="match-list">
            <li>实验名称</li>
            <li>来自比赛／课程</li>
            <li>状态</li>
            <li>计入排名</li>
            <li>提交时间</li>
          </ul>
          <p class="content-text">
            <span>还没有提交记录~</span>
            <br />
            <a href="#">前往比赛</a>
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
  },
  methods: {
    changeactive(num) {
      this.change = num;
    }
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