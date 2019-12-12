<template>
  <div id="course-card">
    <h1>
      <ul class="course clean">
        <router-link
          :to="{
          name:'coursedetail',
          query:{
            tit: item.title,
            tag: item.tag
          }
        }"
          tag="a"
          v-for="item in course.course"
          :key="item._id"
          target="_blank"
        >
          <img :src="item.coverImg" />
          <div class="course-info">
            <p>{{ item.title }}</p>
            <span>{{ item.descriptions }}</span>
          </div>
          <p class="count">
            <i class="el-icon-user-solid"></i>
            {{ item.studentsCount }}
            <span
              class="fr course-type"
              ref="courseType"
              :class="item.courseType=='会员'?'vip':([item.courseType]==''?'':'train')"
            >{{ item.courseType }}</span>
          </p>
        </router-link>
      </ul>
      <div class="pageBtn">
        <el-pagination
          @current-change="changePage"
          class="page"
          background
          layout="prev, pager, next"
          :total="course.totalCount"
          :page-size="20"
          ref="page"
        ></el-pagination>
      </div>
    </h1>
  </div>
</template>
<script>
import { getCourse } from "../../api/course/course";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      course1: [],
      courseTotal: 0
    };
  },
  methods: {
    ...mapMutations("course", ["changeCourse", "changeTagName"]),
    changePage(p) {
      getCourse(p, this.tagName, this.dir).then(res => {
        this.changeCourse({ course: res.data });
        this.courseTotal = this.course.totalCount;
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        const timeTop = setInterval(() => {
          document.body.scrollTop = document.documentElement.scrollTop = top -= 25;
          if (top <= 0) {
            clearInterval(timeTop);
          }
        }, 10);
      });
    }
  },
  computed: {
    ...mapState("course", ["course", "tagName", "dir", "p"])
  },
  created() {
    getCourse(this.p, this.tagName, this.dir).then(res => {
      this.changeCourse({ course: res.data });
      this.courseTotal = res.data.totalCount;
    });
  },
  mounted() {
    console.log(this.$refs.page);
  },
  watch: {
    tagName() {
      this.$refs.page.internalCurrentPage = 1;
      getCourse(this.p, this.tagName, this.dir).then(res => {
        this.changeCourse({ course: res.data });
      });
    },
    dir() {
      this.$refs.page.internalCurrentPage = 1;
      this.changeTagName({ tagName: "全部" });
      getCourse(this.p, this.tagName, this.dir).then(res => {
        this.changeCourse({ course: res.data });
      });
    }
  }
};
</script>
<style scoped>
#course-card {
  margin-top: 20px;
}
#course-card .course {
  width: 1170px;
  margin-left: -15px;
}
#course-card .course a {
  width: 262px;
  float: left;
  position: relative;
  height: 250px;
  overflow: hidden;
  margin-bottom: 20px;
  margin-right: 15px;
  margin-left: 15px;
}
#course-card .course a {
  display: block;
}
#course-card .course a img {
  width: 262px;
  height: 150px;
  position: relative;
}
#course-card .course a .course-info {
  width: 262px;
  box-sizing: border-box;
  padding: 20px 10px 0;
  height: 100px;
  overflow: hidden;
  position: absolute;
  background: #fff;
  transition: all 0.3s;
  top: 130px;
}
#course-card .course a .course-info p {
  width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
}
#course-card .course a .course-info span {
  display: inline-block;
  width: 240px;
  font-size: 15px;
  color: #666;
}
#course-card .course a .count {
  width: 262px;
  position: absolute;
  font-size: 15px;
  color: #666;
  padding-left: 10px;
  color: #666;
  height: 54px;
  background: #fff;
  bottom: 0px;
  line-height: 54px;
}
#course-card .course a:hover {
  box-shadow: 0 4px 20px 4px #ddd;
}
#course-card .course a:hover .course-info {
  margin-top: -60px;
}

.vip {
  height: 28px;
  line-height: 22px;
  margin-right: 20px;
  display: block;
  border-radius: 20px;
  padding: 3px 10px;
  font-size: 12px;
  background: #ffc500;
  color: #fff;
  margin-top: 12px;
}
.train {
  height: 28px;
  line-height: 22px;
  margin-right: 20px;
  display: block;
  border-radius: 20px;
  padding: 3px 10px;
  font-size: 12px;
  background: #f66;
  color: #fff;
  margin-top: 12px;
}
#course-card .pageBtn {
  padding-left: 50%;
}
#course-card .pageBtn .page {
  margin-top: 20px;
  margin-left: -50%;
}
</style>
