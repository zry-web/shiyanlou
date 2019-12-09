<template>
  <div class="user-course">
    <div class="modules-nav-bar">
      <div class="nav-tabs">
        <div class="tabs-left">
          <span
            class="tab-item"
            :class="change==1 ? 'tab-item-active':''"
            @click="changeactive(1)"
          >历史学习(1)</span>
          <span
            class="tab-item"
            :class="change==2 ? 'tab-item-active':''"
            @click="changeactive(2)"
          >关注列表(0)</span>
          <span
            class="tab-item"
            :class="change==3 ? 'tab-item-active':''"
            @click="changeactive(3)"
          >已购买(0)</span>
        </div>
        <div class="tabs-right">
          <span class="tab-item">加入私有课</span>
        </div>
      </div>
      <div class="data-loading">
        <div class="data-content">
          <div class="row"></div>
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
  border-bottom: 1px solid #eee;
}
.row {
  padding: 25px 0;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
</style>