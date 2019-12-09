<template>
  <div class="backend_course_div">
    <Title class="backend_course_div_title" :title="'云计算与大数据'"></Title>

    <div class="backend_normal_card_div">
      <div class="normal_card">
        <a tag="a" class="normal_card_a" target="_blank" href>
          <img src="../../assets/img/HOU2.png" class="normal_card_img" />
        </a>
      </div>
    </div>
    <div class="backend_stretch_card_div">
      <CourseCard
        class="backend_course_card"
        v-for="(course,index) in content"
        :key="index"
        :data="course"
      ></CourseCard>
    </div>
  </div>
</template>

<script type="text/javascript">
import Title from "./title/title.vue";
import CourseCard from "./cards/course_card.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      content: state => state.home.content.course5.slice(0, 6)
    })
  },
  components: {
    Title,
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

.backend_course_div {
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

.backend_course_div_title {
  margin-bottom: 30px;
}

.backend_normal_card_div {
  width: 25%;
  height: 522px;
}

.backend_normal_card {
  width: 100%;
  height: 100%;
}

.backend_stretch_card_div {
  width: 75%;
  display: flex;
  flex-wrap: wrap;
}

.backend_course_card {
  margin: 0 0 20px;
  padding-right: 15px;
  padding-left: 15px;
  width: 33.33%;
}
</style>
