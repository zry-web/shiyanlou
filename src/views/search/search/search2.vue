<template>
  <div class="search_page_main_search_div">
    <p class="search_page_main_search_header">"{{ keywords }}"的搜索结果({{ search_result.length }}):</p>

    <div class="search_page_main_search_content_div">
      <ul class="search_page_main_search_nav_ul">
        <li class="search_page_main_search_nav_li">
          <a href="javascript:;" class="search_page_main_search_nav_a" @click="tab_nav('course')">课程</a>
        </li>
        <li class="search_page_main_search_nav_li">
          <a
            href="javascript:;"
            class="search_page_main_search_nav_a"
            @click="tab_nav('question')"
          >问答</a>
        </li>
      </ul>
      <div class="search_page_main_courses_search_result_div">
        <CourseCard
          class="search_page_result_card"
          v-for="(course, index) in search_result"
          :key="index"
          :data="course"
        ></CourseCard>
      </div>
      <div class="search_page_main_question_search_result_div">
        <QaItem v-for="(question, index) in search_result.results" :key="index" :data="question"></QaItem>
      </div>
      <TabPage :next="() => {  }" :prev="() => {  }"></TabPage>
    </div>
  </div>
</template>
<script type="text/javascript">
import CourseCard from "../../home_page/cards/card_seven";
import QaItem from "../card/repout";
import TabPage from "../card/tab_page";

import { mapState, mapActions } from "vuex";

import utils from "@/utils/base.js";

export default {
  components: {
    CourseCard,
    QaItem,
    TabPage
  },
  data: function() {
    return {
      keywords: this.$route.keywords
    };
  },
  computed: {
    ...mapState({
      search_result: state => state.search.search_result.slice(0, 15),
      prev: function(state) {
        const i = 10;
        if (state.search.search_result.length > 15) {
          search_result: state =>
            state.search.search_result.slice(0 + i, 15 + i);
        }

        // if (p) {
        //   p = utils.translate_query(p.split("?")[1]);
        //   return {
        //     page: p.page ? p.page : 1
        //     // type: p.type ? p.type : this.nav
        //   };
      },

      next: function(state) {
        let n = state.search.search_result.next;
        if (n) {
          n = utils.translate_query(n.split("?")[1]);
          return {
            page: n.page ? n.page : 1
          };
        }
        return "";
      }
    })
  },
  methods: {
    ...mapActions({
      change_search_result: "search/change_search"
    })
  },
  watch: {
    $route: function() {
      this.keywords = this.$route.query.keywords;
    }
  },
  created: function() {
    // console.log(1)
    this.keywords = this.$route.query.keywords;
    if (!this.$route.query.keywords) {
      // to 404
      this.$router.push({ name: "notfound" });
    }
  }
};
</script>
<style type="text/css" scoped>
.search_page_main_search_content_div {
  background: #fff;
  width: 74%;
  border: 1px solid #eee;
  padding: 30px;
}

.search_page_main_search_nav_ul {
  display: flex;
  font-size: 1rem;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
}

.search_page_main_search_nav_li {
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
  margin-right: 48px;
}

.search_page_main_search_nav_li:hover {
  border-bottom-color: #0c9;
}

.search_page_main_search_nav_li_active {
  border-bottom-color: #0c9;
}

.search_page_main_search_nav_a {
  color: #4c5157;
}

.search_page_main_courses_search_result_div {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}

.search_page_main_question_search_result_div {
  display: flex;
  /*flex-wrap: wrap;*/
  flex-direction: column;
  margin-left: -15px;
  margin-right: -15px;
}

.search_page_main_search_header {
  font-size: 18px;
}

.search_page_result_card {
  width: 33.333%;
  padding: 0 15px;
  margin-bottom: 20px;
}
</style>
