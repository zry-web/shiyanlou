<template>
  <div id="select_tag" class="clean">
    <span class="fl">标签:</span>
    <div class="fl sele_tag" :class="{mh: isMh}">
      <button
        @click="change(allTagId, allCourse)"
        :class="{active:allTagId == ac}"
        class="tagList"
      >全部</button>
      <button
        @click="change(index,item)"
        :class="{active:index == ac}"
        class="tagList"
        v-for="(item,index) in tag"
        :key="index"
      >{{ item }}</button>
    </div>
    <div class="showBox" @click="changeHei">
      <el-button class="more" size="mini" v-show="showBtn" round>
        <i class="el-icon-arrow-down"></i>更多
      </el-button>
      <el-button class="sliUp" size="mini" round v-show="!showBtn">
        <i class="el-icon-arrow-up"></i>收起
      </el-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Vuex from "vuex";
import { mapState, mapMutations } from "vuex";
import { getCourse } from "../../api/course/course";
export default {
  name: "select-tag",
  data() {
    return {
      tag: [],
      showBtn: true,
      isMh: true,
      radio4: "综合",
      ac: "9999",
      allTagId: "9999",
      allCourse: "全部",
      tagname: ""
    };
  },
  created() {
    axios.get("http://122.51.169.217:3000/api/list").then(res => {
      let data = res.data.data;
      data.forEach(item => {
        item.tag.forEach(item2 => {
          this.tag.push(item2.name);
        });
      });
    });
  },

  computed: {
    ...mapState("course", ["tagName", "dir", "ac1", "page", "course"])
  },
  methods: {
    ...mapMutations("course", ["changeTagName", "changeCourse"]),
    change(id, name) {
      this.addClass(id);
      this.changeTagName({ tagName: name });
      this.tagname = name;
    },
    changeHei() {
      this.showBtn = !this.showBtn;
      this.isMh = !this.isMh;
    },
    addClass(id) {
      this.ac = id;
    }
  },
  watch: {
    dir() {
      axios.get("http://122.51.169.217:3000/api/list").then(res => {
        let data = res.data.data;
        data.forEach(item => {
          if (this.dir) {
            if (item.name == this.dir) {
              this.tag = [];
              item.tag.forEach(item2 => {
                this.tag.push(item2.name);
              });
            }
          }
          if (!this.dir) {
            item.tag.forEach(item2 => {
              this.tag.push(item2.name);
            });
          }
        });
      });
      this.ac = "9999";
    },
    tagname() {
      this.changeTagName({ tagName: this.tagname });
      // getCourse(this.page, this.tagName, this.dir).then(res => {
      //   console.log(res);
      //   this.changeCourse({ course: res.data });
      //   console.log(this.course);
      // });
    }
  }
};
</script>
<style scoped>
#select_tag {
  margin-top: 20px;
  position: relative;
}
#select_tag span {
  margin-right: 20px;
}
#select_tag .sele_tag {
  width: 980px;
  overflow: hidden;
}
.mh {
  max-height: 120px;
}
.sele_tag .tagList {
  height: 30px;
  border: none;
  margin-right: 5px;
  background: none;
  padding: 0 10px;
  transition: all 0.3s;
  border-radius: 20px;
  outline: none;
  margin-bottom: 10px;
  font-size:15px;
  color:#666;
}
.sele_tag .tagList:hover {
  color: #fff;
  background: #08bf91;
}
.active {
  color: #fff !important;
  background: #08bf91 !important;
}
#select_tag .showBox {
  width: 66px;
  height: 30px;
  position: absolute;
  right: -2px;
  bottom: 0px;
}
#select_tag .more,
#select_tag .sliUp {
  border-color: #a4a4a4;
  color: #a4a4a4;
  margin: 0;
}

#select_tag .more:hover,
#select_tag .sliUp:hover {
  background: none;
  color: #a4a4a4;
  border-color: #a4a4a4;
}
#select_tag .sortCourse {
  padding-top: 10px;
  border-top: 1px solid #ededed;
  height: 30px;
}
</style>