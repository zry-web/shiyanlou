<template>
  <div class="plus-course">
    <div class="plus-course-content">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="course-header">
              <h2>楼+课程</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4" v-for="(item, index) in list" :key="index">
            <div class="course-item-outer">
              <a href="#">
                <div class="course-item-inner">
                  <div class="inner-header">
                    <img :src="item.img" :alt="item.tit" />
                  </div>
                  <div class="inner-body">
                    <p class="course-item-name">{{ item.tit }}</p>
                    <p class="course-item-slogan">{{ item.tit2 }}</p>
                    <div class="inner-content">
                      <p class="course-item-summary">{{ item.sum }}</p>
                      <p class="course-item-desc">{{ item.desc }}</p>
                    </div>
                  </div>
                  <div class="inner-footer">
                    <div class="price-info">
                      <p class="current-price">
                        <span>限时优惠</span>
                        <span
                          >￥{{
                            item.currentPrice.replace(/[^0-9]/gi, "")
                          }}</span
                        >
                      </p>
                      <p class="original-price">￥{{ item.price }}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="course-item-outer">
              <a href="#">
                <div class="more">
                  <p>更多领域，尽请期待</p>
                  <p>戳 <span>这里</span> 告诉我们你想要的</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getData } from "../../api/plus/plus";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    getData().then(res => {
      this.list = res.data.data[0].course;
      let num = 200;
      this.list.forEach(i => {
        i.price = parseInt(i.currentPrice.replace(/[^0-9]/gi, "")) + num;
        num += 200;
      });
    });
  }
};
</script>
<style scoped>
.plus-course {
  padding: 70px 0 30px;
  color: #fff;
}
.course-header {
  margin-bottom: 60px;
  color: #6090e9;
}
.course-header h2 {
  font-size: 32px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 60px;
  text-align: center;
}
.course-item-outer {
  margin-bottom: 30px;
  background-color: #fff;
}
.course-item-inner {
  border: 1px solid #eee;
  color: #666;

  transition: box-shadow 0.2s ease-out;
}
.course-item-inner:hover {
  box-shadow: 0 1px 10px 0 #d2d2d2;
}
.inner-header {
  position: relative;
  height: 200px;
}
.inner-header img {
  width: 100%;
  height: 100%;
}
.inner-body {
  padding: 18px 20px;
}
.course-item-name {
  text-align: center;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  font-size: 16px;
  color: #666;
}
.course-item-slogan {
  margin-bottom: 15px;
  font-size: 15px;
  position: relative;
  text-align: right;
}
.inner-content {
  height: 157px;
  margin-bottom: 15px;
  overflow: hidden;
  position: relative;
}
.course-item-summary {
  margin-bottom: 10px;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: #999;
  font-size: 14px;
}
.course-item-desc {
  line-height: 1.5;
  letter-spacing: 0.5px;
  font-size: 14px;
  position: relative;
  text-align: left;
}
.inner-footer {
  height: 79px;
  padding: 10px 20px;
  border-top: 2px solid #eee;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.price-info {
  width: 100%;
}
.current-price {
  color: #f66;
  text-align: right;
}
.current-price span:nth-of-type(1) {
  display: inline;
  vertical-align: middle;
  font-size: 14px;
}
.current-price span:nth-of-type(2) {
  display: inline;
  vertical-align: middle;
  font-weight: 700;
  font-size: 24px;
}
.original-price {
  color: #999;
  text-decoration: line-through;
  font-size: 14px;
  text-align: right;
}
.more {
  height: 560px;
  letter-spacing: 0.6px;
  color: #999;
  border: 1px dashed #9e9e9e;
  transition: box-shadow 0.2s ease-out;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  font-size: 16px;
}
.more:hover {
  box-shadow: 0 1px 10px 0 #d2d2d2;
}
.more p {
  letter-spacing: 0.6px;
  color: #999;
  margin-bottom: 16px;
}
.more p span {
  color: #6090e9;
  text-decoration: underline;
  vertical-align: baseline;
}
</style>
