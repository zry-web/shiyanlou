<template>
  <div class="pic">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <div class="pic_o" style="background: rgb(54, 0, 239);">
          <div class="pic_img">
            <img src="../../assets/img/banner1.jpg" alt />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="pic_o" style="background: rgb(48, 35, 83); ">
          <div class="pic_img">
            <img src="../../assets/img/banner2.pn.png" alt />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="pic_o" style="background: rgb(32, 80, 212);">
          <div class="pic_img">
            <img src="../../assets/img/banner3.png" alt />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="pic_o" style="background: rgb(69, 13, 106);">
          <div class="pic_img">
            <img src="../../assets/img/banner4.png" alt />
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev bl" slot="button-prev"></div>
      <div class="swiper-button-next br" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      imgIndex: 1,

      swiperOption: {
        loop: true,
        notNextTick: true,
        autoplay: true,
        effect: "fade",
        initialSlide: 0,
        // effect: "coverflow",
        grabCursor: true,
        setWrapperSize: true,
        speed: 1800,

        paginationType: "bullets",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        paginationClickable: true,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        mousewheelControl: true,
        observeParents: true
      },
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets"
      }
    };
  }
};
</script>
<style scoped>
.pic {
  margin-left: 0;
  width: 100%;
}
.pic_banner {
  position: absolute;
}

.bl {
  position: absolute;
  z-index: 200;
  width: 30px;
  height: 60px;
  left: 30%;
}
.br {
  width: 30px;
  z-index: 200;
  height: 60px;
  position: absolute;
  left: 90%;
}
.pic_o {
  width: 100%;
}
.pic_img {
  margin: 0 auto;
  width: 1140px;
  height: 520px;
}
</style>
