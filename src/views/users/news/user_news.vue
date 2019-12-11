<template>
  <div class="user-news">
    <div class="nav-container">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link
            :to="{name:'user_course'}"
            class="nav-link"
            :class="num == 1? 'nav-link-active':''"
          >
            <span @click="test(1)">课程</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'user_path'}"
            class="nav-link"
            :class="num ==2 ?'nav-link-active' :''"
          >
            <span @click="test(2)">路径</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'user_report'}"
            class="nav-link"
            :class="num ==3 ?'nav-link-active' :''"
          >
            <span @click="test(3)">报告</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'user_talk'}"
            class="nav-link"
            :class="num ==4 ?'nav-link-active' :''"
          >
            <span @click="test(4)">讨论</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'user_match'}"
            class="nav-link"
            :class="num ==5?'nav-link-active' :''"
          >
            <span @click="test(5)">比赛</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'user_courses'}"
            class="nav-link"
            :class="num ==6 ?'nav-link-active' :''"
          >
            <span @click="test(6)">教程</span>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iscolor: true,
      num: 1
    };
  },
  methods: {
    test(num) {
      this.num = num;
    }
  },
  created() {
    this.num = location.href.slice(
      location.href.length - 1,
      location.href.length
    );
  }
};
</script>
<style scoped>
.nav-container {
  flex-grow: 1;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.nav-list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav-item {
  margin-bottom: -1px;
  font-weight: 400;
}
.nav-link {
  border-bottom: 1px solid transparent;
  color: #4c5157;
  margin-right: 48px;
  padding: 0 0 4px;
  display: block;
  font-size: 16px;
  position: relative;
}
.nav-link-active {
  border-bottom-color: #0c9;
}
.nav-link:hover {
  border-bottom-color: #0c9;
}
</style>