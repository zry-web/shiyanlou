<template>
  <div class="vip">
    <section class="vip_page">
      <div class="vip_img">
        <img src="../../assets/img/vip.png" alt class="vipp" />
      </div>
      <div class="vip_login">
        <div class="vip_card">
          <div class="vip_con">
            <div class="vip_cont">
              <div class="vip_l">
                <img src="../../assets/img/vip2.png" class="avatar" />
                <img src="../../assets/img/vip1.png" class="vip-icon" />
              </div>
              <div class="vip_r">
                <p data-v-5c78816c>欢迎来到实验楼</p>
                <small data-v-5c78816c>做实验，学编程</small>
              </div>
            </div>
            <p class="no-margin">
              <Bot></Bot>
              <!-- <button
                type="button"
                class="btn vip-btn"
                v-show="!long"
                @click="clickclose(false)"
              >登录并开通</button>
              <button type="button" class="btn vip-btn" v-show="long" @click="roll()">立刻开通</button>-->
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="vip_page grab">
      <Vip1></Vip1>
      <Vip2></Vip2>
    </section>
    <section class="page-section vip-features">
      <vip3></vip3>
    </section>
    <section class="page-section vip-features">
      <vip4></vip4>
    </section>
    <section class="page-section vip-features">
      <vip5></vip5>
    </section>
    <Vip6></Vip6>
  </div>
</template>
<script>
import Vip1 from "./component_vip/vip_one.vue";
import Vip3 from "./component_vip/vip_three.vue";
import Vip4 from "./component_vip/vip_four.vue";
import Vip5 from "./component_vip/vip_five.vue";
import Vip6 from "./component_vip/vip_show";
import Vip2 from "./component_vip/vip_z";
import Bot from "./component_vip/button";
import { mapState, mapActions } from "vuex";
export default {
  // data() {
  //   return {
  //     show: false,
  //     long: false,
  //     timer: null
  //   };
  // },
  // computed: {
  //   ...mapState("login", ["token"])
  // },
  // methods: {
  //   ...mapActions("login", ["clickclose"]),

  // ScrollTop(number = 0, time) {
  //   if (!time) {
  //     document.body.scrollTop = document.documentElement.scrollTop = number;
  //     return number;
  //   }
  //   const spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
  //   let spacingInex = time / spacingTime; // 计算循环的次数
  //   let nowTop = document.body.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置
  //   let everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离
  //   let scrollTimer = setInterval(() => {
  //     if (spacingInex > 0) {
  //       spacingInex--;
  //       ScrollTop((nowTop += everTop));
  //     } else {
  //       clearInterval(scrollTimer); // 清除计时器
  //     }
  //   }, spacingTime);
  // }
  //   roll() {
  //     let newspace = 580;
  //     clearInterval(this.timer);

  //     this.timer = setInterval(() => {
  //       let oldspace =
  //         document.documentElement.scrollTop || document.body.scrollTop;
  //       let speed = Math.ceil((newspace - oldspace) / 10);
  //       document.documentElement.scrollTop = document.body.scrollTop =
  //         oldspace + speed;
  //       if (oldspace >= newspace - 20) {
  //         clearInterval(this.timer);
  //       }
  //     }, 20);
  //   }
  // },
  components: {
    Vip1,
    Vip2,
    Vip3,
    Vip4,
    Vip5,
    Vip6,
    Bot
  }
  // created() {
  //   if (this.token) {
  //     this.long = true;
  //     this.ilong = false;
  //   } else {
  //     this.ilong = true;
  //     this.long = false;
  //   }
  // }
};
</script>
<style scoped>
.grab {
  padding-top: 5rem;
}
.vip {
  width: 100%;
  background: rgba(249, 249, 249, 1);
}
.vip_page {
  background: rgba(249, 249, 249, 0.5);
  width: 100%;
  margin: 0 auto;
  position: relative;
}
.vip_img {
  background: url(../../assets/img/vip_bg.png);
  width: 100%;
}
.vipp {
  width: 1000px;
  display: block;
  margin: 0 auto;
}
.vip_login {
  width: 421px;
  border-radius: 8px;
  background: #fff;
  position: absolute;
  right: 12%;
  top: 50%;
  transform: translateY(-50%);
}
.vip_card {
  position: relative;
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  border-radius: 8px;
  color: #666;
}
.vip_con {
  flex: 1 1 auto;
  padding: 1.25rem;
}
.vip_cont {
  display: flex;
  justify-content: center;
}

.vip_l {
  margin-right: 10px;
  position: relative;
}
.avatar {
  width: 100%;
  border-radius: 50%;
}
.vip-icon {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 25px;
  height: 25px;
}
.vip_r {
  text-align: left !important;
  font-size: 16px;
  padding-top: 2%;
}
.no-margin {
  margin: 0 !important;
}
</style>

