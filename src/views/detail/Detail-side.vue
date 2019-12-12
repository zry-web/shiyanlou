<template>
  <div class="full-page" :style="show">
    <div class="container">
      <div class="side-content">
        <div class="side-body">
          <div class="side-top">
            <img
              style="width:305px;height:173px;"
              src="https://dn-simplecloud.shiyanlou.com/courses/uid770606-20191111-1573441965331"
              alt
            />
            <img
              style="width:100px;height:65px;position:absolute;bottom:0;left:0"
              src="https://dn-simplecloud.shiyanlou.com/course/1575599474033_pc-训练营8折优惠.png"
              alt
            />
          </div>
          <div class="side-buttom">
            <div class="course-info">
              <p class="p1">
                <span class="new-price">￥63.2</span>
                <span class="old-price">￥79</span>
                <span class="tag-price">特价</span>
              </p>
              <p class="p2">
                <span>免费&nbsp;&nbsp;&nbsp;</span>
                <img
                  style="width:71px;height:21px;margin-left:10px"
                  src="https://static.shiyanlou.com/frontend/dist/img/eb8486c.png"
                  alt
                />
                <img src alt />
              </p>
              <p class="p3">
                开通高级会员，立享免费学
                <a href>去开通</a>
              </p>
              <button
                class="btn btn-danger btn-join-course btn-purchase full-width color-fff btn1"
              >立即购买</button>
              <button class="btn btn-outline-secondary btn-trial-course full-width btn2">试学课程</button>
              <!-- <div class="course-none">
                <span>￥63.36</span>
                <img src="https://static.shiyanlou.com/frontend/dist/img/3ee60d7.png" alt />
              </div>-->
            </div>
            <div class="course-desc">
              <ul class="desc-list">
                <li class="classic">8 个在线动手实验</li>
                <li class="challenge">4 个实战场景挑战</li>
              </ul>
            </div>
            <div class="course-actions">
              <img src alt />
              <span class="guanzhu">关注</span>
            </div>
          </div>
        </div>
      </div>
      <div class="pic-content">
        <div class="side-img-wrapper">
          <a href>
            <img
              class="img-style"
              src="https://static.shiyanlou.com/frontend/dist/img/dd1c8c0.png"
              alt
            />
          </a>
        </div>

        <div class="side-img-wrapper">
          <a href>
            <img
              class="img-style"
              src="https://static.shiyanlou.com/frontend/dist/img/ee3b558.png"
              alt
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // show2: {
      //   position: "fixed",
      //   top: "137px"
      // },
      show: {
        position: "absoult",
        top: "137px"
      }
    };
  },
  methods: {
    vip_scroll() {
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      console.log(scrollTop);

      if (scrollTop > 137 && scrollTo) {
        this.show = {
          position: "fixed",
          top: "10px"
        };
      } else {
        this.show = {
          position: "absoult",
          top: "137px"
        };
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
  position: absolute;
  top: 137px;
  left: 900px;
  z-index: 1230;
}
.side-content {
  width: 100%;
  margin-bottom: 10px;
  padding: 15px;
  background: #fff;
  margin-left: -100px;
  width: 28.6%;
}
.side-content {
  padding: 0px 0;
  font-size: 14px;
}
.side-top {
  position: relative;
  padding: 5px 5px 0;
}
.side-buttom {
  padding: 1rem 1rem 5px;
}
.course-info {
  position: relative;
}
.p1 {
  margin-top: 0;
  margin-bottom: 1rem;
}
.new-price {
  color: #f66;
  font-weight: 700;
  font-size: 24px;
}
.old-price {
  margin-left: 5px;
  text-decoration: line-through;
  vertical-align: 3px;
  font-size: 14px;
  color: #a4a4a4;
  font-weight: 400;
  line-height: 1.5;
}
.tag-price {
  display: inline-block;
  margin-left: 15px;
  padding: 0 2px;
  border: 1px solid #f66;
  vertical-align: 5px;
  font-size: 12px;
  color: #f66;
}
.p2 {
  cursor: pointer;
  position: relative;
  margin-top: 0;
  margin-bottom: 1rem;
  display: flex;
}
.course-none {
  /* display: none; */
  position: absolute;
  bottom: 35px;
  left: 0;
  min-width: 180px;
  padding: 3px 10px;
  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.18);
  background-color: #fff;
  display: flex;
}
.p2:hover .course-none {
  display: block;
}
.p3 {
  padding: 4px 8px;
  background-color: #f9f9f9;
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.p3 a {
  color: #fd8c51;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
}
.btn {
  display: block;
  margin-bottom: 10px;
  padding-top: 12px;
  padding-bottom: 12px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}
.btn1 {
  background-color: #f66;
  border-color: #f66;
}
.btn2 {
  color: #6c757d;
  border-color: #6c757d;
}
.course-desc {
  margin-top: 15px;
  color: #a4a4a4;
}
.desc-list li {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
}
.guanzhu {
  color: #a4a4a4;

  font-size: 16px;
}
.course-actions {
  text-align: center;
  margin-top: 50px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}
.pic-content {
  margin-left: -100px;
}
.img-style {
  display: block;
  margin-bottom: 10px;
  width: 315px;
  height: 146px;
}
</style>