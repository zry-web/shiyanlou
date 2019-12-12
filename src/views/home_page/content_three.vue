<template>
  <div class="recently_recommend_courses">
    <Title
      class="recently_recommend_course_div_title"
      :title="'近期好课 | '"
      :description="'及时学习，跟进时代的脚步'"
    ></Title>

    <div class="outer_recently_recommend_courses_div">
      <transition-group
        :name="turn_direction=='right' ? 'recently_recommend_courses_transition_right' : 'recently_recommend_courses_transition_left'"
        tag="ul"
        class="recently_recommend_courses_ul"
      >
        <li
          v-for="(courses, index) in content.course"
          :key="index "
          class="recently_recommend_courses_li"
          v-show="current_index==index"
        >
          <CourseCard
            class="recently_recommend_courses_card"
            v-for="(course,index) in courses"
            :key="index"
            :data="course"
          ></CourseCard>
        </li>
      </transition-group>
      <div class="tab_courses_div">
        <a @click="turn_left" href="javascript:1" class="tab_courses_a tab_courses_a_left">
          <span class="tab_courses_button tab_courses_button_left"></span>
        </a>
        <a @click="turn_right" href="javascript:1" class="tab_courses_a tab_courses_a_right">
          <span class="tab_courses_button tab_courses_button_right"></span>
        </a>
      </div>

      <div class="shadow_div" :class="has_turn? 'shadow_div_left':''"></div>
      <div class="shadow_div2" :class="has_turn? 'shadow_div_right':''"></div>
    </div>
  </div>
</template>

<script type="text/javascript">
import CourseCard from "./cards/course_card2.vue";
import Title from "./title/title.vue";
import { mapState } from "vuex";
import { get_content_3 } from "../../api/home/home_header";
export default {
  data() {
    return {
      current_index: 0,
      turn_direction: "right",
      has_turn: false
    };
  },
  //    created() {
  //     get_content_3("?category = 后端开发").then(res => {
  //       this.getdata(res);
  //     });
  //   },
  computed: {
    ...mapState({
      content: state => state.home.content.course3
    })
  },
  components: {
    Title,
    CourseCard
  },

  methods: {
    turn_left: function() {
      this.turn_direction = "left";
      this.has_turn = true;
      if (this.current_index - 1 >= 0) {
        this.current_index -= 1;
      } else {
        this.current_index = this.content["course"].length - 1;
      }
      let _this = this;
      setTimeout(function() {
        _this.has_turn = false;
      }, 600);
      console.log(course);
    },

    turn_right: function() {
      this.turn_direction = "right";
      this.has_turn = true;
      if (this.current_index + 1 > this.content["course"].length - 1) {
        this.current_index = 0;
      } else {
        this.current_index += 1;
      }
      let _this = this;
      setTimeout(function() {
        _this.has_turn = false;
      }, 600);
    }
  }
};
</script>

<style type="text/css" scoped>
/* 最外层设置 */
.recently_recommend_courses {
  display: flex;
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  padding: 0 15px;
  margin-bottom: 30px;
}

/* 标题 */
.recently_recommend_course_div_title {
  margin-bottom: 30px;
}

/* 轮播图左右过渡 */

.recently_recommend_courses_transition_left-move,
.recently_recommend_courses_transition_right-move {
  transition: translateX 0.6s;
}

/* 左过渡 */
.recently_recommend_courses_transition_left-enter-to {
  transition: all 0.6s ease;
  transform: translateX(0);
}

.recently_recommend_courses_transition_left-leave-to {
  transition: all 0.6s ease;
  transform: translateX(-100%);
}

.recently_recommend_courses_transition_left-enter {
  transform: translateX(100%);
}

.recently_recommend_courses_transition_left-leave {
  transform: translateX(0);
}

/* 右过渡 */
.recently_recommend_courses_transition_right-enter-to {
  transition: all 0.6s ease;
  transform: translateX(0);
}

.recently_recommend_courses_transition_right-leave-to {
  transition: all 0.6s ease;
  transform: translateX(100%);
}

.recently_recommend_courses_transition_right-enter {
  transform: translateX(-100%);
}

.recently_recommend_courses_transition_right-leave {
  transform: translateX(0);
}

/*  课程显示区域 */

.recently_recommend_courses_li {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  position: absolute;
}

.outer_recently_recommend_courses_div {
  position: relative;
  height: 270px;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

/* 单个课程card设置 */
.recently_recommend_courses_card {
  width: 25%;
  margin: 0 0 20px;
  padding-right: 15px;
  padding-left: 15px;
}

/* 鼠标hover时显示左右切换按钮 */
.outer_recently_recommend_courses_div:hover .tab_courses_div {
  display: block;
}

/* 左右切换按钮 */

.tab_courses_div {
  display: none;
}

.tab_courses_a {
  position: absolute;
  display: block;
  height: 60px;
  width: 60px;
  top: 50%;
  bottom: 50%;
  border-radius: 30px;
  background: #9e9c9c;
  opacity: 0.6;
  text-align: center;
  line-height: 1.8;
  z-index: 5;
}

.tab_courses_button {
  height: 30px;
  width: 30px;
  font-size: 30px;
  color: #fff;
  /*text-align: center;*/
}

.tab_courses_a_left {
  left: 15px;
  transform: translate(0, -50%);
}

.tab_courses_button_left:before {
  content: "<";
}

.tab_courses_a_right {
  right: 15px;
  transform: translate(0, -50%);
}

.tab_courses_button_right:before {
  content: ">";
}

/* 放置在课程两侧的阴影区域，用于提醒这个一个可滚动的区域。 */

.shadow_div,
.shadow_div2 {
  position: absolute;
  width: 20px;
  height: 250px;
  opacity: 0.3;
  transition: all 0.3s ease-in-out;
}

.shadow_div {
  left: 15px;
  /*left: 0;*/
  background-image: linear-gradient(270deg, transparent, #777);
}

.shadow_div_left {
  left: 0;
}

.shadow_div2 {
  right: 15px;
  /*right: 0;*/
  background-image: linear-gradient(90deg, transparent, #777);
}

.shadow_div_right {
  right: 0;
}
</style>
