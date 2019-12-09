<template>
  <div id="select_dir" class="clean">
    <span class="fl">方向:</span>
    <button
      ref="dirBtn"
      @click="change(allTagId, category1)"
      :class="{active:allTagId == ac}"
      class="dirList"
    >全部</button>
    <button
      ref="dirBtn"
      @click="change(item.id, item.name)"
      :class="{active:item.id == ac}"
      class="dirList"
      v-for="item in direction"
      :key="item._id"
    >{{ item.name }}</button>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
import { getCourse } from "../../api/course/course";
export default {
  name: "select_dir",
  data() {
    return {
      direction: [],
      ac: "1231ad",
      allTagId: "1231ad",
      category1: "",
      dirName: ""
    };
  },
  created() {
    this.tagName1 = this.tagName;
    axios.get("http://122.51.169.217:3000/api/list").then(res => {
      let data = res.data.data;
      data.forEach(item => {
        this.direction.push({ name: item.name, id: item._id });
      });
    });
    getCourse().then(res => {
      this.changeCourse({ course: res.data });
    });
  },
  computed: {
    ...mapState("course", ["course", "tagName", "p", "dir"])
  },
  methods: {
    ...mapMutations("course", ["changeCourse", "changeDir"]),
    change(id, dirName) {
      this.changeDir({ dir: dirName });
      this.addClass(id, dirName);
      this.dirName = dirName;
    },
    addClass(id, dirName) {
      this.ac = id;
    }
  },
  watch: {
    // tagName() {
    //   getCourse(this.tagName, this.dirName).then(res => {
    //     this.changeCourse({ course: res.data });
    //   });
    // },
    // dirName() {
    //   getCourse(this.p, this.tag, this.dirName).then(res => {
    //     this.changeCourse({ course: res.data });
    //   });
    // }
  }
};
</script>
<style scoped>
#select_dir span {
  margin-right: 20px;
}
#select_dir .dirList {
  height: 30px;
  border: none;
  margin-right: 5px;
  background: none;
  padding: 0 10px;
  transition: all 0.3s;
  border-radius: 20px;
  outline: none;
}
#select_dir .dirList:hover {
  color: #fff;
  background: #08bf91;
}
.active {
  color: #fff;
  background: #08bf91 !important;
}
</style>