<template>
  <div class="col">
    <div class="vip-box vip-package-box">
      <div class="box-header">
        <h3 class="box-header-title no-margin">
          <!---->
          <img src="https://static.shiyanlou.com/frontend/dist/img/2a64526.png" alt="高级会员" />
          &nbsp;
          <span>高级会员</span>
        </h3>
      </div>
      <div class="box-body relative">
        <ul class="service-list text-left">
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
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAXBJREFUWAntlD1Ow0AQhWNMTwECajoKKPAZuIotGyHTUCBRuCFVJCSSwnYJFeYOcADkilvQ0WAX/uFNwkYmssnuyi4izUqbbDIzbz6/HXk04sUOsAPsADvADrAD7MBGOhAEwZYKuKGSrJPr+/5BnudPqD3Dvoii6FlGR+kpZASbOQSVZdlbXdfn2LsE1oz/dx4MzPO8Q4JC82MBYBhGIs7rvrfXJYi467pHVVVdQfw9DEO6ms5FUEVRvCKhCTVB3ayzaCUg7VhZlve4jkvAPTqO87Cis/zZBYXZul4mSRykwaD1KfQIsA2OZqrNKVUo6qMCdoP8jy44MeiI/7k+HSjqofS6sG17DzU0OydUTAszNzVNc9yXUwtVRTAqaoPD31/YOxSnBdiJrlMLBQ0wKuyAm2v2AUVCSlc57/z70QbXFxS1MJvNVM5pmn5blvUCmFPsfdTexXF8q6IxeG6SJNoPODgcN2AH2AF2gB3YEAd+AHKtf/4jUj86AAAAAElFTkSuQmCC"
            />
            <span class="vertical-middle">SSH 直连</span>
          </li>
          <li class="service-item">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAXBJREFUWAntlD1Ow0AQhWNMTwECajoKKPAZuIotGyHTUCBRuCFVJCSSwnYJFeYOcADkilvQ0WAX/uFNwkYmssnuyi4izUqbbDIzbz6/HXk04sUOsAPsADvADrAD7MBGOhAEwZYKuKGSrJPr+/5BnudPqD3Dvoii6FlGR+kpZASbOQSVZdlbXdfn2LsE1oz/dx4MzPO8Q4JC82MBYBhGIs7rvrfXJYi467pHVVVdQfw9DEO6ms5FUEVRvCKhCTVB3ayzaCUg7VhZlve4jkvAPTqO87Cis/zZBYXZul4mSRykwaD1KfQIsA2OZqrNKVUo6qMCdoP8jy44MeiI/7k+HSjqofS6sG17DzU0OydUTAszNzVNc9yXUwtVRTAqaoPD31/YOxSnBdiJrlMLBQ0wKuyAm2v2AUVCSlc57/z70QbXFxS1MJvNVM5pmn5blvUCmFPsfdTexXF8q6IxeG6SJNoPODgcN2AH2AF2gB3YEAd+AHKtf/4jUj86AAAAAElFTkSuQmCC"
            />
            <span class="vertical-middle">
              <a class="text-underline" href="/bootcamp/" target="_blank">训练营</a>
              课程
              <span class="inner-span free">免费</span>
              学习
            </span>
            <div class="bootcamps-value">*总价值 ¥6000+，且持续上新</div>
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
              <span class="premium color-red">¥699</span>
              /年
            </span>
          </p>
          <p class="text-left no-margin vertical-center">
            <span class="price-label">原价</span>
            <span class="price-original">
              ¥1024
              &nbsp;/年
            </span>
          </p>
        </div>
        <p class="vip-purchase relative no-margin">
          <Bot3></Bot3>
          <!-- <button type="button" class="btn btn-purchase btn-danger" v-show="long">立即抢购</button>
          <button
            type="button"
            class="btn btn-purchase btn-danger btn-lg"
            v-show="!long"
            @click="clickclose(false)"
          >登录并开通</button>-->
          <img
            alt="价格描述"
            src="https://dn-simplecloud.shiyanlou.com/course/1575858839722_pc-会员福利提示.png"
            class="price-desc-img"
          />
        </p>
        <div class="sales-progress">
          <div>
            <div class="progress">
              <div class="progress-bar current-pregress" style="width: 45%;"></div>
            </div>
            <div class="progress-info color-text">
              <span>已抢 45%</span>
              <span class="color-999">限额 200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Bot3 from "./button2";
export default {
  components: {
    Bot3
  }
};
</script>
<style  scoped>
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
/* .vertical-middle {
  margin-left: 40px;
  color: #a4a4a4;
  font-size: 12px;
} */

.inner-span {
  font-size: 1.2rem;
  font-weight: 600;
  color: #f66;
}
.bootcamps-value {
  position: absolute;
  left: 180px;
  top: 240px;
  color: #a4a4a4;
  font-size: 12px;
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
.vip-purchase {
  position: relative;
}

.btn-purchase {
  position: relative;
  margin-left: 80px;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 55%;
  color: #fff;
  border-radius: 25px;
}
.price-desc-img {
  position: absolute;
  bottom: 65%;
  right: 0;
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