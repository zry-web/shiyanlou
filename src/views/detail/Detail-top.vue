<template>
  <div class="full-page" id="box" v-show="show">
    <div class="container">
      <div class="top-content">
        <div class="row">
          <div class="outter">
            <div class="course-box">
              <div class="flask-header">
                <h1>{{list.title}}</h1>
                <span class="bootcamp">{{list.feeType}}</span>
              </div>
              <div class="flask-body">
                <p class="info-meta">
                  <span>{{list.studentCount}}</span>
                  <i>|</i>
                  <span>{{list.attentionCount}}</span>
                  <i>|</i>
                  <span>{{list.author}}</span>
                </p>
              </div>
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
      show: false,
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
    const res = await bootcampDetail(this.$route.query.title);
    console.log(res);
    this.list = res.data.data;
    console.log(res.data.data);
  },
  methods: {
    vip_scroll() {
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;

      if (scrollTop > 50) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.vip_scroll);
  }
};
</script>
<style scoped>
.full-page {
  position: fixed;
  top: 0;
  left: 0;
  height: 72px;
  width: 100%;
  opacity: 0.9;
  background-color: #085441;
  z-index: 1220;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.course-box {
  padding: 6px 0 0 30px;
  color: #fff;
  width: 100%;
}
.top-content {
  width: 100%;
  margin-bottom: 10px;
  width: 100%;
}
.flask-header {
  display: flex;
  align-items: center;
}
.flask-header h1 {
  margin: 0 10px 0 0;
  line-height: 1.6;
  color: #fff;
  font-weight: 500;
  font-size: 22px;
}
.bootcamp {
  background: #f66;
  display: inline-block;
  margin-left: 8px;
  padding: 0 6px;
  border-radius: 10px;
  font-size: 13px;
  color: #fff;
  display: block;
  width: 51px;
  height: 19px;
}
.info-meta {
  margin-bottom: 15px;
  display: flex;
}
.info-meta i {
  display: block;
  width: 1px;
  height: 26px;
  color: #fff;
  padding: 0 10px;
}
.info-meta span {
  color: #fff;
  font-size: 14px;
}
.info-desc {
  margin-bottom: 10px;
  word-wrap: break-word;
  letter-spacing: 1px;
  color: #666;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
}
</style>