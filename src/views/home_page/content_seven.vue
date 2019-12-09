<template>
  <div class="backend_course_div">
    <Title class="backend_course_div_title" :title="'基本功 |'" :description="'行业专家打造的免费基础课程，注册即可学习'"></Title>
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
import CourseCard from "./cards/card_seven.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      content: state => state.home.content.course2.slice(6, 10)
    })
  },
  components: {
    Title,
    CourseCard
  }
};
</script>

<style type="text/css" scoped>
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
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.backend_course_card {
  margin: 0 0 20px;
  padding-right: 15px;
  padding-left: 15px;
  width: 25%;
}
</style>
