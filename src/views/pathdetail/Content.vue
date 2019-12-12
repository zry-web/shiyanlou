<template>
  <div class="full-page">
    <div class="container">
      <div class="path-content">
        <div class="col-md-9 col-ul">
          <div class="path-index">
            <ul class="nav-ul">
              <li>路径详情</li>
              <li>评论(246)</li>
            </ul>
            <div class="tab-content">
              <div class="tab-left">
                <div class="tab-item" v-for="(item,index) in list" :key="index">
                  <div class="item-title">
                    <span class="lines"></span>
                    <span class="jieduan">{{item.title}}</span>
                    <span class="lines"></span>
                  </div>
                  <div class="row">
                    <div
                      style="margin-bottom: 20px;"
                      class="col-sm-12 col-md-4"
                      v-for="(item1,index) in item.course"
                      :key="index"
                    >
                      <div class="item-shadow">
                        <div class="pic-item">
                          <a href target="_blank">
                            <div class="course-item">
                              <div class="item-top">
                                <img
                                  src="https://dn-simplecloud.shiyanlou.com/course/1542592561365_【370】-【Python图片转字符画】.png"
                                  alt
                                />
                              </div>
                              <div class="item-buttom">
                                <div class="item-info">
                                  <h6 class="course-name">{{item1.title}}</h6>
                                  <div class="course-desc">
                                    本课程用 50 行 Python 代码完成图片转字符画
                                    小工具。通过本实验将学习到 Linux 命令行操作
                                    ，Python 基础，pillow 库的使用，argparse
                                    库的使用。本课程难度简单，属于 Python
                                    中基础课程。
                                  </div>
                                </div>
                                <div class="course-data">
                                  <span class="course-count">
                                    <i>
                                      <img
                                        style="width:18px;height:18px;margin-right:5px"
                                        src="../../../src/assets/img/liulan.png"
                                        alt
                                      />
                                    </i>

                                    <span>86249</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="end-btn">完成学习</div>
              </div>
              <div class="tab-right"></div>
            </div>
          </div>
        </div>
        <div class="col-md-3" style="padding: 0 0 0 5px;">
          <div class="side-img">
            <a href>
              <img
                style="width:263px;height:130px"
                src="https://static.shiyanlou.com/img/louplus/recommend/rec-louplus-python-v1.png"
                alt
              />
            </a>
          </div>
          <div class="side-box">
            <div class="box-header">
              <span>近期活动</span>
            </div>
            <div class="box-body">
              <ul></ul>
            </div>
          </div>
          <div class="loujia-box">
            <div class="loujia-header">
              <span class="loujia-title">近期楼+</span>
            </div>
            <div class="loujia-body">
              <ul class="loujia-list">
                <li>
                  <a href>
                    <span class="li-block">楼+之Python实战第17期</span>
                    <span class="li-block">01月15日</span>
                  </a>
                </li>
                <li>
                  <a href>
                    <span class="li-block">楼+之深度学习实战第4期</span>
                    <span class="li-block">01月13日</span>
                  </a>
                </li>
                <li>
                  <a href>
                    <span class="li-block">楼+之机器学习实战第12期</span>
                    <span class="li-block">01月16日</span>
                  </a>
                </li>
                <li>
                  <a href>
                    <span class="li-block">楼+之Python基础（随到随学班）</span>
                    <span class="li-block">12月31日</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="img-box">
            <div class="img-box" style="padding: 10px 0;">
              <div class="img-code">
                <img
                  style="margin:0 25px"
                  src="https://static.shiyanlou.com/frontend/dist/img/e7fda6c.png"
                  alt
                />
                <span class="code-desc">关注公众号，手机看教程</span>
              </div>
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
      list: [],
      list1: []
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
    this.list = res.data.data.stage;
    this.list1 = res.data.data.stage;
    console.log(this.list1);
  }
};
</script>
<style scoped>
.full-page {
  margin-top: 20px;
}
.path-content {
  margin: 0 15px;
}
.col-ul {
  padding: 0 5px 0 0;
}
.path-index {
  position: relative;
  margin-bottom: 10px;
  padding: 30px;
  background: #fff;
  border: 1px solid #eee;
}
.nav-ul {
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-wrap: wrap;
}
.nav-ul li {
  margin: 0 48px -1px 0;
  position: relative;
  display: block;
  color: #4c5157;
  background-color: transparent;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid transparent;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  border-bottom-color: #0c9;
}
.item-title {
  margin: 100px 0 50px;
  font-size: 20px;
  color: #787878;
  text-align: center;
  font-weight: 400;
  line-height: 1.5;
}
.lines {
  width: 15%;
  display: inline-block;
  border-top: 1px solid #ccc;
  margin-bottom: 5px;
  font-size: 20px;
  color: #787878;
}
.jieduan {
  font-size: 20px;
  color: #787878;
  margin: 0 5px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.pic-item {
  position: relative;
  overflow: hidden;
}
.item-shadow {
  box-shadow: rgb(238, 238, 238) 0px 2px 2px 0px;
}
/* .course-item {
  margin-bottom: 20px;
} */
.item-buttom {
  height: 100px;
  bottom: 0;
  background: #fff;
  -webkit-transition: bottom 0.3s;
  transition: bottom 0.3s;
}
.item-info {
  position: absolute;
  height: 100%;
  padding: 20px 10px 0;
  bottom: -135px;
  background: #fff;
  z-index: 9;

  transition: all 0.3s ease-in 0.1s;
  /* display: none; */
}
.course-name {
  display: block;
  width: 100%;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
.course-data {
  position: absolute;
  display: block;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 53px;
  padding: 0 10px;
  font-size: 12px;
  color: #9b9da2;
  background: #fff;
  z-index: 10;
}
.course-count {
  display: flex;
  margin-top: 20px;
}
.pic-item:hover .item-info {
  bottom: -80px;
  display: block;
}
.end-btn {
  display: block;
  width: 200px;
  height: 45px;
  margin: 100px auto;
  line-height: 42px;
  text-align: center;
  border: 1px solid #08bf91;
  border-radius: 50px;
  font-size: 20px;
  color: #08bf91;
  cursor: default;
}
.side-img {
  margin-bottom: 10px;
}
.side-box {
  width: 100%;
  margin-bottom: 10px;
  padding: 15px;
  background: #fff;
}
.box-header {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 0 10px;
  border-bottom: 1px solid #eee;
  font-size: 16px;
  font-weight: 900;
  line-height: 1.5;
  color: #212529;
}
.loujia-box {
  width: 100%;
  margin-bottom: 10px;
  padding: 15px;
  background: #fff;
}
.loujia-header {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 0 10px;
  border-bottom: 1px solid #eee;
}
.loujia-title {
  font-size: 16px;
  color: #666;
  font-weight: 700;
  line-height: 1.5;
}
.loujia-body {
  padding: 10px 0;
  font-size: 14px;
}
.loujia-list li a {
  padding: 12px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #4c5157;
  text-decoration: none;
  display: flex !important;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 14px;
  cursor: pointer;
}
.loujia-list li a span:nth-child(1) {
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #4c5157;
}
.loujia-list li a span:nth-child(2) {
  color: orange;
}
.loujia-list li:hover {
  background: #ccc;
}
.img-box {
  width: 100%;
  margin-bottom: 10px;
  padding: 15px;
  background: #fff;
}
.code-desc {
  display: block;
  font-size: 16px;
  color: #4c5157;
  text-align: center;
}
</style>