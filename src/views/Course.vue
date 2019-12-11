<template>
  <div id="course_page">
    <div class="course-sele">
      <SelectDir></SelectDir>
      <SelectTag></SelectTag>
      <div class="sort clean">
        <el-radio-group v-model="radio4" size="mini" class="sortBox fl">
          <el-radio-button class="sortBtn" label="综合"></el-radio-button>
          <el-radio-button class="sortBtn" label="最新"></el-radio-button>
          <el-radio-button class="sortBtn" label="最热"></el-radio-button>
        </el-radio-group>
        <el-select v-model="value" placeholder="请选择" class="sele fl" size="mini">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button round class="join fr">加入私有课</el-button>
      </div>
    </div>
    <CourseCard></CourseCard>
  </div>
</template>
<script>
import _ from "lodash";
import CourseCard from "./Course/Course_card";
import { allMessage } from "../api/services/move";
import axios from "axios";
import SelectDir from "./Course/Select_dir.vue";
import SelectTag from "./Course/Select_tag.vue";
export default {
  name: "Course",
  data() {
    return {
      radio4: "综合",
      options: [
        {
          value: "选项1",
          label: "全部"
        },
        {
          value: "选项2",
          label: "免费"
        },
        {
          value: "选项3",
          label: "会员"
        },
        {
          value: "选项4",
          label: "私有"
        }
      ],
      value: "全部"
    };
  },
  methods: {
    showMore() {
      this.showMoreText = !this.showMoreText;
      this.iClass = !this.iClass;
      this.isMh = !this.isMh;
    },
    handleClick(tab, event) {}
  },
  components: {
    CourseCard,
    SelectDir,
    SelectTag
  }
};
</script>
<style scoped>
.clearfix:after {
  content: "";
  display: block;
  visibility: hidden;
  overflow: hidden;
  height: 0;
  clear: both;
}
.fll {
  float: left;
}
.flr {
  float: right;
}
#course_page {
  margin: 20px auto 20px;
  max-width: 1140px;
}
#course_page .course-sele {
  margin-bottom: 10px;
  padding: 30px 30px 20px;
  border: 1px solid #eee;
  background: #fff;
}
#course_page .sort {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ededed;
}
#course_page .sele {
  margin-left: 660px;
  padding: 0 !important;
  width: 90px;
}
#course_page .sele el-input {
  margin: 0 !important;
  border: none !important;
}
#course_page .join {
  height: 30px;
  line-height: 30px;
  padding: 0 25px !important;
}
</style>