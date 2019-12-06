<template>
  <div class="full-page">
    <div class="bc-banner">
      <div class="banner-content">
        <div class="container">
          <div class="row" style="height:150px">
            <div class="col" style="height:150px">
              <h1 class="title">来一场高效又实战的训练</h1>
              <p class="btn">
                <button type="button" class="btn btn-btn btn-join btn-warning">
                  立即加入
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bc-index">
      <div class="container">
        <div class="bc-list">
          <div class="row list-row">
            <div class="tit col-sm-12 col-md-1">方向：</div>
            <div class="lists col-sm-12 col-md-11">
              <div class="list-item active">全部</div>
              <div class="list-item" v-for="item in list1" :key="item._id">
                {{ item.category }}
              </div>
            </div>
          </div>

          <div class="row list-row">
            <div class="tit col-sm-12 col-md-1">标签：</div>
            <div class="lists col-sm-12 col-md-11">
              <div class="list-item active">全部</div>
              <div class="list-item" v-for="item in list2" :key="item._id">
                {{item.tag}}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bc-content">
      <div class="container">
        <div class="pic row">
          <div class="course-pic col-3" v-for="item in list3" :key="item._id">
            <a href target="_blank" class="course-link">
              <div class="course-item">
                <img
                  :src="item.coverImg"
                  alt
                />
                <div class="course-body">
                  <p class="course-name">{{item.title}}</p>
                  <p class="course-dec">
                    <!-- 本训练营项目是使用 Vue.js
                    实现一个简易的富文本编辑器应用。通过本项目的实战学习，
                    你将掌握 Vue.js
                    框架使用，数据绑定操作，组件式开发等。课程将涉及 Vuex
                    的使用， 让你了解全局状态管理的作用与优势。与其他 Vue
                    项目不同，这是一个纯前端的项目， 主要学习 Vue
                    框架的使用与原生 JS 编写，同时了解 DOM 的相关知识。 -->
                    {{item.descriptions}}
                  </p>
                </div>
                <div class="course-footer">
                  <div class="footer-info status-normal">
                    <p class="price-info">
                      <span>￥69</span>
                    </p>
                    <p class="discount-info">高级会员免费</p>
                  </div>

                  <div class="footer-info status-hover">
                    <span class="course-price">￥69</span>
                    <i class="i"></i>
                    <span class="view-course">立即查看</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <el-pagination
        class="bc-pages"
         @current-change="pageChange"
          background
          layout="prev, pager, next"
          :page-size="16"
          :page-count="31">
        </el-pagination>
        <!-- <div class="bc-pages">
          <nav>
            <ul class="pages-number">
              <li class="page-item">
                <a class="page-link" href> <span>《</span>上一页 </a>
              </li>
              <li class="page-item">
                <a class="page-link active" href>1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href>2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href>3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href>4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href>5</a>
              </li>
              <li class="page-item">
                <a class="page-link" href>
                  下一页
                  <span>》</span>
                </a>
              </li>
            </ul>
          </nav>
        </div> -->
      </div>
    </div>
    <div class="faq-page">
      <div class="faq-content">
        <div class="container">
          <div class="faq-header">
            <h4>训练营FAQ</h4>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="faq-item">
                <p class="faq-title">训练营是实验楼与合作工程师共同打造的项目实战课程。通过训练营的学习，
                  你会完成一个产品原型或一系列编程任务，在项目实战中融会贯通一个
                  领域的IT技术及开发流程。</p>
                <p class="faq-content">
                  <img src="https://static.shiyanlou.com/frontend/dist/img/180f21a.png" alt="">
                  <i style="dispaly:block;margin:0 5px;font-size:16px;">:</i>
                  
                  <span class="inner-content">训练营是实验楼与合作工程师共同打造的项目实战课程。
                    通过训练营的学习，你会完成一个产品原型或一系列编程任务，在项目实战中融会贯通
                    一个领域的IT技术及开发流程。</span>
                </p>
                <br>

              </div>
              <a href="" target="_black" class="faq-more">更多疑问，查看这里>></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import { allMessage } from "../../api/services/move";
import {bc_list} from "../../api/services/move.js";
export default {
  name: "bootcamp",
  components: {
    
  },
  data() {
    return {
      list1: [],
      list2:[],
      list3:[],
      pages:1
    };
  },
  async created() {
    const res = await allMessage();
    this.list1 = _.uniqBy(res.data.data, "category"); // res.data.data;
    this.list2 = _.uniqBy(res.data.data, "tag"); // res.data.data;
    const result=await bc_list();
    this.list3=result.data.data;
    this.pages=result.pages;
    console.log(this.list3);
  },
  methods:{
    async pageChange(p){
       const result=await bc_list(p);
      this.list3=result.data.data;
      this.pages=result.pages;
    }
  }
  
};
</script>
<style scoped>
.full-page {
  width: 1349px;
}
.bc-banner {
  background: url("https://static.shiyanlou.com/frontend/dist/img/0107b80.png");
  height: 310px;
  padding: 80px 0;
  text-align: center;
}
.title {
  margin-bottom: 45px;
  font-size: 50px;
  letter-spacing: 1.08px;
  text-shadow: 0 4px 0 #0f957c;
  color: #fff;
}
.btn {
  width: 1170px;
  height: 34px;
  margin: 0 0 10px;
}
.btn button {
  width: 240px;
  height: 45px;
  width: 240px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 18px;
  border-radius: 25px;
  letter-spacing: 4px;
  cursor: pointer;
  color: #212529;
}
.bc-list {
  margin-top: 20px;
  padding: 20px 30px 10px;
  background: #fff;
  border: 1px solid #eee;
}
.list-row {
  display: flex;
  flex-wrap: wrap;
}
.lists {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  margin-left: -40px;
}
.list-item {
  margin: 0 4px 10px 0;
  padding: 1px 10px;
  border-radius: 15px;
  background-color: #fff;
  transition: background 0.5s ease;
  font-size: 16px;
  color: #666;
  cursor: pointer;
}
.tit {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
}
.active {
  color: #fff;
  background-color: #08bf91;
}
.list-item:hover {
  color: #fff;
  background-color: #08bf91;
}
.bc-content {
  padding: 20px 0 30px;
}
.pic {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.course-pic {
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.course-item {
  border: 1px solid #eee;
  color: #666;
  background-color: #fff;
  transition: box-shadow 0.2s ease-out;
}
.course-item img {
  width: 100%;
}
.course-body {
  padding: 10px 15px;
  cursor: pointer;
}
.course-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 16px;
}
.course-dec {
  height: 63px;
  overflow: hidden;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  font-weight: 400;
}
.price-info {
  width: 100%;

  text-align: center;
}
.price-info span {
  font-size: 24px;
  box-sizing: border-box;
  color: #f66;
  font-weight: 400;
  display: block;
  line-height: 1;
}
.discount-info {
  color: #f66;
  font-size: 14px;
  text-align: center;
  line-height: 1;
  margin: 10px 0 0;
}
.course-footer {
  height: 80px;
  overflow: hidden;
  position: relative;
}
.status-hover {
  position: absolute;
  left: 0;
  top: 80px;
  height: 80px;
  width: 260px;
  background: #f66;
  color: #fff;
  z-index: 10;
  transition: top 0.5s linear;
}
.course-pic {
  height: 372px;
}
.course-link:hover .status-hover {
  top: 0px;
}
.status-hover {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.course-price {
  font-size: 24px;
  font-weight: 400;
}
.i {
  width: 1px;
  height: 50%;
  background: #fff;
  display: block;
}
.view-course {
  font-size: 18px;
  font-weight: 400;
}
.bc-pages {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 10px 0 0;
}
.pages-number {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
}
.page-item {
  margin: 0 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
}
.page-link {
  background: #fff;
  color: #565a61;
  border: 0;
  font-size: 14px;
  position: relative;
  display: block;
  padding: 8px 12px;
  margin-left: -1px;
  line-height: 1.25;
}
.active {
  background: #08bf91;
  color: #fff;
}
.page-link:hover {
  background: #08bf91;
  color: #fff;
}
.faq-page{
  padding: 50px 0;
    background: #fff;
}
.faq-header{
  display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    justify-content: center
}
.faq-header h4{
  padding: 8px 16px;
    margin-bottom: 30px;
    color: #fff;
    background: #08bf91;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.2;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,
    Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,
    Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}
.faq-title{
  color: #08bf91;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 16px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,
  Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,
  Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  font-weight: 400;
    line-height: 1.5;
    text-align: left;
}
.faq-content{
  color: #666;
  margin-top: 0;
  margin-bottom: 16px;
  box-sizing: border-box;
  display: flex
}
.faq-content img{
  width: 39px;
  height: 34px;
}
.inner-content{
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #666;
    box-sizing: border-box;
    
}
.faq-more{
  color: #08bf91;
    text-decoration: none;
    background-color: transparent;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
}
</style>
