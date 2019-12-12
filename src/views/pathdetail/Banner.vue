<template>
  <div class="full-page">
    <div class="container">
      <div class="col-12">
        <div class="detail-nav">
          <ul class="nav-ul">
            <li class="nav-item">
              <a href target="_self">学习路径</a>
            </li>
            <li style="color: #6c757d;padding:0 8px;">
              <span style="color: #6c757d;">/</span>
            </li>
            <li>
              <span style="color: #6c757d;">{{list.title}}</span>
            </li>
          </ul>
        </div>
        <div class="detail-pic">
          <div class="pic-box">
            <div class="path-name">
              <h4>{{list.title}}</h4>
            </div>
            <div class="path-desc">{{list.courseDesc}}</div>
          </div>
          <div class="pic-bottom">
            <div class="pic-left" style="float:left">
              <button class="btn btn-path btn-join-path btn-secondary btn1">加入路径</button>
              <span class="pic-join">加入获得路径课程更新提醒</span>
            </div>
            <div class="pic-right">
              <span>{{list.peopleCount}}</span>
              <span style="margin-left: 30px;">{{list.courseCount}}</span>
              <span style="margin: 0 10px 30px;">{{list.learningTime}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { pathDetail } from "../../api/plus/plus";
export default {
  data() {
    return {
      list: []
    };
  },
  async created() {
    // this.$route可以获取当前的路由实例
    //  此对象上包含有路由的信息
    //    路径、地址、参数、名字
    // console.log(this.$route);
    // this.$route.query 可以获取url中传递的参数
    //this.$router.push({
    //     name:'',
    //     query:{}
    // }),获取
    const res = await pathDetail(this.$route.query.pathCourseTit);
    console.log(this.$route.query.pathCourseTit);
    this.list = res.data.data;
    console.log(this.list.data);
  }
};
</script>
<style scoped>
.detail-nav {
  margin: 0 5px;
}
.nav-ul {
  margin: 0;
  padding: 0.75rem 0;
  background: none;
  font-size: 13px;
  display: flex;
  flex-wrap: wrap;
}
.nav-ul li a {
  color: #08bf91;
}
.detail-pic {
  margin: 0 5px;
  background: #fff;
  box-shadow: 0 1px 3px 0 #c2c2c2;
  overflow: hidden;
  flex: 0 0 100%;
  max-width: 100%;
}
.pic-box {
  background-image: url(https://dn-simplecloud.shiyanlou.com/course/1555406419393_PythonBG.png);
  background-size: cover;
  background-repeat: no-repeat;
  height: 250px;
  overflow: hidden;
}
.path-name {
  margin-top: 50px;
  margin-bottom: 40px;
  position: relative;
  width: 100%;
  padding-right: 30px;
  padding-left: 30px;
}
.path-name h4 {
  font-size: 30px;
  color: #fff;
  margin-top: 10px;
}
.path-desc {
  color: #fff;
  font-size: 14px;
  height: 60px;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-right: 30px;
  padding-left: 30px;
}
.pic-bottom {
  height: 100px;
  font-size: 18px;
  padding-top: 32px;
  color: #787878;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.btn1 {
  background: #ff9717;
  width: 210px;
  padding: 7px 12px;
  font-size: 16px;
  border: none;
  border-radius: 0;
  color: #fff;
  font-weight: 400;
  line-height: 1.5;
}
.pic-join {
  font-size: 16px;
  margin-left: 10px;
  color: #787878;
  font-weight: 400;
  line-height: 1.5;
}
.pic-right {
  padding-top: 6px;
  float: right;
}
.pic-right span {
  font-size: 16px;
  color: #666;
  font-weight: 400;
  line-height: 1.5;
}
</style>