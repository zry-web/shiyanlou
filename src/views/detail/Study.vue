<template>
  <div class="full-page">
    <div class="container">
      <div class="study-content">
        <div class="study-header">
          <span>你将学到的</span>
        </div>
        <div class="study-body">
          <div class="rows" v-for="(item,index) in list" :key="index">
            <div class="col-points">
              <ul class="col-ul">
                <li>
                  <i>√</i>
                  <span>{{item.name}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { bootcampDetail } from "../../api/plus/plus";
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
    const res = await bootcampDetail(this.$route.query.title);
    console.log(res);
    this.list = res.data.data.studed;
    console.log(res.data.data.studed);
  }
};
</script>
<style scoped>
.container {
  padding-right: 30px;
  padding-left: 30px;
  margin-right: auto;
  margin-left: auto;
}
.study-content {
  width: 71.5%;
  margin-bottom: 10px;
  padding: 30px 30px 20px;
  border: 1px solid #eee;
  background: #fff;
}
.study-header {
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
  margin-bottom: 20px;
}
.study-header span {
  color: #565656;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
}
.study-body {
  padding: 20px 0;
  background-color: #f7f7f7;
}
.rows {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col-points {
  width: 100%;
}
.col-ul {
  margin: 0;
  padding-left: 5%;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.col-ul li {
  color: #565656;
  font-weight: 500;
  font-size: 16px;
  display: flex;
}
.col-ul li:nth-child(2) {
  margin-top: 15px;
}
.col-ul li span {
  display: block;
  color: #565656;
  font-weight: 500;
  font-size: 16px;
}
.col-ul li i {
  color: aqua;
  margin-right: 20px;
}
</style>