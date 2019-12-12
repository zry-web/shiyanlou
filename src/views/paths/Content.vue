<template>
  <div class="container">
    <div class="path-container">
      <div class="col-sm-12 col-md-3" v-for="(item,index) in list" :key="index">
        <router-link
          href
          class="path-item"
          :to="{name:'Pathdetail',
          query:{
          pathCourseTit:item.pathCourseTit
        }}"
        >
          <img :src="item.pathCourseImg" />
          <div class="path-name">{{item.pathCourseTit}}</div>
          <div class="path-courses">{{item.pathCourseCount}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getPaths } from "../../api/services/move";

export default {
  data() {
    return {
      list: []
    };
  },

  async created() {
    const res = await getPaths();
    this.list = res.data.data[0].pathCourse;
    console.log(this.list);
  }
};
</script>
<style scoped>
.path-container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.path-item {
  height: 253px;
  position: relative;
  bottom: 0;
  display: block;
  text-align: center;
  background: #fff;
  margin-bottom: 20px;
  box-shadow: 0 1px 2px 0 #ddd;
  transition: all 0.3s;
  cursor: pointer;
}
.path-item img {
  display: block;
  width: 100%;
  height: 130px;
}
.path-item:hover {
  bottom: 10px;
  box-shadow: 0 4px 20px 4px #ddd;
}
.path-name {
  padding: 30px 0 15px;
  color: #666;
  font-size: 18px;
}
.path-courses {
  padding: 0 0 30px;
  color: #a4a4a4;
  font-size: 14px;
}
</style>