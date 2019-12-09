<template>
  <div class="boutique_course_div">
    <Title class="boutique_course_div_title" :title="'精选项目课 | '" :description="'精选会员项目课程，动手中收获'"></Title>
    <div class="normal_card boutique_normal_card">
      <a tag="a" class="normal_card_a" target="_blank">
        <img src="../../assets/img/jin2.png" class="normal_card_img" />
      </a>
    </div>
    <CourseCard
      class="boutique_course_card"
      v-for="(course,index) in content"
      :key="index"
      :data="course"
    ></CourseCard>
  </div>
</template>

<script type="text/javascript">
import Title from "./title/title.vue";
import NormalCard from "./cards/cards.vue";
import CourseCard from "./cards/course_card.vue";

import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      content: state => state.home.content.course2.slice(0, 6)
    })
  },
  components: {
    Title,
    NormalCard,
    CourseCard
  }
};
</script>

<style type="text/css" scoped>
.normal_card {
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
}

.normal_card_a {
  display: block;
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 2px 0 #ddd;
}

.normal_card_a:hover {
  box-shadow: 0 1px 30px 0 #d2d2d2;
}

.normal_card_img {
  width: 100%;
}

/* s                                              */
.boutique_course_div {
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: 30px;
}

.boutique_course_div_title {
  margin-bottom: 30px;
}

.boutique_normal_card {
  width: 50%;
  height: 250px;
}

.boutique_course_card {
  margin: 0 0 20px;
  padding-right: 15px;
  padding-left: 15px;
  width: 25%;
}
</style>
