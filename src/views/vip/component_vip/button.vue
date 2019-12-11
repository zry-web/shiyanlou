<template>
  <div>
    <button type="button" class="btn vip-btn" v-show="!long" @click="clickclose(false)">登录并开通</button>
    <button type="button" class="btn vip-btn" v-show="long" @click="roll()">立刻开通</button>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      show: false,
      long: false,
      timer: null
    };
  },
  computed: {
    ...mapState("login", ["token"])
  },
  methods: {
    ...mapActions("login", ["clickclose"]),

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
    roll() {
      let newspace = 580;
      clearInterval(this.timer);

      this.timer = setInterval(() => {
        let oldspace =
          document.documentElement.scrollTop || document.body.scrollTop;
        let speed = Math.ceil((newspace - oldspace) / 10);
        document.documentElement.scrollTop = document.body.scrollTop =
          oldspace + speed;
        if (oldspace >= newspace - 20) {
          clearInterval(this.timer);
        }
      }, 20);
    }
  },

  created() {
    if (this.token) {
      this.long = true;
      this.ilong = false;
    } else {
      this.ilong = true;
      this.long = false;
    }
  }
};
</script>
<style scoped>
.btn {
  background-color: #ff9c4a;
  border-color: #ff9c4a;
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  margin-top: 5%;
}
.vip-btn {
  width: 60%;
  margin: 1.25rem;
  margin-left: 6rem;
  border-radius: 20px;
  color: #fff;
  outline: none;
}
.vip-btn:active {
  outline: none;
}
.btn-purchase {
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
  padding-left: 3rem;
  padding-right: 3rem;
  border-radius: 20px;
  font-size: 18px;
  color: #fff;
}
</style>