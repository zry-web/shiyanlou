<template>
  <div class="vip_one">
    <div class="one_vip">
      <div class="vip-header">
        <h2 class="vip_h2">套餐选择</h2>
        <p class="one_vip">
          <a class="nav-link vip_a" href="#">
            <span>登录后可使用实验豆兑换现金优惠券 &gt;</span>
          </a>
        </p>
      </div>
      <div class="vip_two">
        <div class="vip_t_l">
          <div class="l_vip">
            <div class="box-header">
              <h3 class="box-header-title no-margin">
                <img src="https://static.shiyanlou.com/frontend/dist/img/5a1be41.png" alt="标准会员" />
                <!---->
                &nbsp;
                <span>标准会员</span>
              </h3>
            </div>
            <div class="box-body relative">
              <ul class="service-list">
                <li class="service-item">
                  <img src="../../../assets/img/zia.png" />
                  <span class="vertical-middle">免费课程</span>
                </li>
                <li class="service-item">
                  <img src="../../../assets/img/zia.png" />
                  <span class="vertical-middle">会员课程</span>
                </li>
                <li class="service-item">
                  <img src="../../../assets/img/zia.png" />
                  <span class="vertical-middle">实验环境联网</span>
                </li>
                <li class="service-item">
                  <img src="../../../assets/img/zia.png" />
                  <span class="vertical-middle">
                    保存2个环境
                    <span class="font-12" style="color: #999;">（30天）</span>
                  </span>
                </li>
                <li class="service-item">
                  <img src="../../../assets/img/zia.png" />
                  <span class="vertical-middle">SSH 直连</span>
                </li>
                <li data-v-44f36620 class="service-item">
                  <img src="../../../assets/img/zia.png" />
                  <span class="vertical-middle">
                    <a class="text-underline" href="/bootcamp/" target="_blank">训练营</a>
                    <span class="inner-span discount">8</span>折优惠
                  </span>
                </li>
              </ul>
            </div>
            <div class="box-divide relative">
              <div class="divide-line"></div>
            </div>
            <div class="box-footer">
              <div class="vip-price-info flex-column justify-center text-left">
                <p class="vertical-center">
                  <span class="price-label bold color-red">12.12大促</span>
                  <span class="price-current">
                    <span class="plus color-red">¥349</span>
                    /年
                  </span>
                </p>
                <p class="text-left no-margin vertical-center">
                  <span class="price-label">原价</span>
                  <span class="price-original">
                    ¥399
                    &nbsp;/年
                  </span>
                </p>
              </div>
              <p data-v-44f36620 class="vip-purchase relative no-margin">
                <Bot2></Bot2>
              </p>
              <div class="sales-progress">
                <div>
                  <div class="progress">
                    <div class="progress-bar current-pregress" style="width: 23%;"></div>
                  </div>
                  <div class="progress-info color-text">
                    <span>已抢 23%</span>
                    <span class="color-999">限额 200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vip_t_l">
          <div class="l_vip">
            <Vip2></Vip2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vip2 from "./vippp";
import Bot2 from "./button2";
export default {
  components: {
    Vip2,
    Bot2
  }
};
</script>
<style  scoped>
.vip_one {
  width: 100%;
  overflow: hidden;
  min-height: 500px;
}

.one_vip,
.vip_two {
  width: 1170px;
  margin: 0 auto;
}
.vip-header {
  margin-bottom: 8rem;
  color: #676767;
}
.vip-header h2 {
  font-weight: normal;
  text-align: center;
}
.vip-header p {
  text-align: center;
}
.vip_a {
  font-size: 20px;
  color: #676767;
}
.vip_h2 {
  margin-bottom: 1.5rem;
  font-size: 30px;
}
.vip_two {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.vip_t_l {
  flex-basis: 0;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.l_vip {
  margin: 0 auto 15px;
  padding: 30px 0;
  border-radius: 15px;
  max-width: 80%;
  overflow: hidden;
  color: #666;
  background: #fff;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.2);
}
.box-header {
  border-bottom: 2px dashed #dcdcdc;
  padding-bottom: 28px;
}

.box-header-title {
  display: flex;
  justify-content: center;
  font-size: 3rem;
}
.box-header-title img {
  padding-right: 2rem;
  max-width: 100%;
}
.box-body {
  padding-top: 20px;
  position: relative;
}
.service-list {
  height: 288px;
  padding: 0;
  margin: 0 0 0 35%;
  list-style: none;
}

.service-item {
  display: flex;
  line-height: 20px;
}

.service-item span {
  display: flex;
  align-items: center;
  font-size: 1.8rem;
}
.text-underline {
  border-bottom: 1px dashed;
  text-decoration: none;
  color: #666 !important;
}
.inner-span {
  font-size: 2.5rem !important;
  padding: 0.5rem;
  color: #ffc500;
}
.box-divide {
  height: 32px;
}
.divide-line {
  border-bottom: 2px dashed #dcdcdc;
  padding-top: 15px;
}
.box-footer {
  padding: 2rem;
  min-height: 160px;
  margin-bottom: 1.8rem;
}
.flxe-column {
  justify-content: center;
  display: flex;
}
.vertical-center {
  padding-left: 20%;
  color: #a4a4a4;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.color-red {
  color: #f66 !important;
  width: 32%;
  margin-right: 20px;
  font-size: 18px;
}
.plus {
  font-size: 36px;
}
.vertical-center {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.price-label {
  width: 32%;
  margin-right: 20px;
  font-size: 18px;
}
.price-original {
  font-size: 2rem;
  color: #a4a4a4;
  text-decoration: line-through;
}

.progress {
  width: 70%;
  margin-left: 16%;
  height: 15px;
  margin-bottom: 5px;
  border-radius: 10px;
  background-color: #ffe7dc;
}
.progress-bar {
  background-color: #fd8c51;
}
.progress-info {
  display: flex;
  justify-content: space-around;
}
</style>