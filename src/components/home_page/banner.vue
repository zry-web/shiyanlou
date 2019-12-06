<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <img src="../../assets/img/banner1.jpg" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/img/banner2.pn.png" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/img/banner3.png" alt />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        notNextTick: true,
        autoplay: true,
        effect: "coverflow",
        grabCursor: true,
        setWrapperSize: true,
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
        delay: 1500,
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
