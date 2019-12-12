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
      <div class="data-loading" v-show="change == 1">
        <div class="data-content">
          <div class="row">
            <div class="col-lg-4">
              <a href="#">
                <img src="https://dn-simplecloud.shiyanlou.com/ncn1.jpg" alt="Linux 基础入门（新版）" />
              </a>
            </div>
            <div class="col">
              <div class="course-title">
                <span>
                  <a href="#" class="course-name">Linux 基础入门（新版）</a>
                  <span class="course-tag free">免费</span>
                </span>
                <span class="course-shangci">上次学到：基本概念及操作</span>
              </div>
              <div class="course-related">
                <span>
                  0篇实验报告
                  <i class="glyphicon glyphicon-chevron-down"></i>
                </span>
                <span>
                  0个提问
                  <i class="glyphicon glyphicon-chevron-down"></i>
                </span>
              </div>
            </div>
            <div class="col">
              <span class="more">更多</span>
              <a href="#" class="operate-bottom">继续实验</a>
            </div>
          </div>
        </div>
      </div>
      <div class="data-loading" v-show="change == 2">
        <div class="data-content">
          <p class="content-text">
            <span>还没有相关的课程记录~</span>
            <br />
            <a href="#">查看全部课程</a>
          </p>
        </div>
      </div>
      <div class="data-loading" v-show="change == 3">
        <div class="data-content">
          <p class="content-text">
            <span>还没有相关的课程记录~</span>
            <br />
            <a href="#">查看全部课程</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { putUserData, saves } from "../../../api/user/user";
import { mapState } from "vuex";
import { log } from "util";
export default {
  data() {
    return {
      change: 1
    };
  },
  computed: {
    ...mapState("login", ["token"])
  },
  methods: {
    changeactive(num) {
      this.change = num;
    }
    // getuser() {
    //   saves(this.token).then(res => {
    //     console.log(res);
    //   });
    // }
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
.col-lg-4 a img {
  width: 100%;
}
.col {
  flex-basis: 0;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 100%;
}
.course-title {
  color: #666;
}
.course-name {
  white-space: nowrap;
  font-size: 16px;
}
.course-tag {
  margin-left: 8px;
  padding: 3px 6px;
  vertical-align: 1px;
  border-radius: 10px;
  font-size: 13px;
  color: #fff;
}
.free {
  background: #80c269;
}
.course-title > span {
  display: block;
  cursor: pointer;
}
.course-title > span:nth-child(2) {
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 14px;
}
.course-related {
  font-size: 14px;
  color: #999;
}

.course-related span {
  font-size: 14px;
  color: #999;
  margin-left: 8px;
  cursor: pointer;
}
.col {
  position: relative;
}
.more {
  top: 0;
  color: #999;
  position: absolute;
  right: 12px;
  font-size: 14px;
  text-decoration: none;
}
.operate-bottom {
  display: inline-block;
  width: 130px;
  bottom: 8px;
  padding: 4px;
  text-align: center;
  color: #fff;
  border-radius: 28px;
  background: #08bf91;
  position: absolute;
  right: 12px;
  font-size: 14px;
  text-decoration: none;
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