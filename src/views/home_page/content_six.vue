<template>
  <div class="learning_path_course_div">
    <Title
      class="learning_path_course_div_title"
      :title="'学习路径 | '"
      :description="'精准而系统的学习路径，从0到大牛'"
    ></Title>

    <CourseCard
      class="learning_path_course_card"
      v-for="(path, index) in content"
      :key="index"
      :data="path"
    ></CourseCard>
  </div>
</template>

<script type="text/javascript">
import Title from "./title/title.vue";
import CourseCard from "./cards/six.vue";

import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      content: state => state.home.content.course6.slice(0, 4).reverse()
    })
  },
  components: {
    Title,
    CourseCard
  }
};
</script>

<style type="text/css" scoped>
.learning_path_course_div {
  display: flex;
  flex-wrap: wrap;
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
}

.learning_path_course_div_title {
  margin-bottom: 30px;
}

.learning_path_course_card {
  width: 25%;
}
</style>
