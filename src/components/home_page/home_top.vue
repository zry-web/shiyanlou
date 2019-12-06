<template>
  <div id="navigation_bar" class="navigation_bar_header">
    <div id="navigation_logo_sign">
      <div id="navigation_logo">
        <a id="navigation_logo_a" href="/">
          <img src="https://static.shiyanlou.com/img/shiyanlou_logo.svg" class="home_img" />
        </a>
        <span id="logo_text">做实验，学编程</span>
      </div>

      <div id="navigation_sign">
        <ul id="sign_menu">
          <li class="navigation_li">
            <a href="#2" id="tab_button">企业版</a>
          </li>

          <div class="navigation_bar_unlogged_in_div">
            <li class="navigation_li">
              <a href="#" id="sign_button">登录</a>
            </li>
            <li class="navigation_li">
              <a href="#" id="register_button">注册</a>
            </li>
          </div>
          <div class="navigation_bar_logged_div">
            <li class="navigation_feature_li history_courses_li">
              <a href="javascript:;" class="navigation_feature_a">我的课程</a>
            </li>
            <li class="navigation_feature_li">
              <a href="javascript:;" class="navigation_feature_a bell_a">
                <i class="far fa-bell"></i>
              </a>
            </li>
            <li class="navigation_feature_li avatar_li">
              <a class="navigation_feature_a navigation_avatar_a">
                <img class="navigation_avatar_img" title="Avatar" />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <div id="selection_bar">
      <ul id="selection_menu">
        <li id="all_courses_li" class="navigation_li">
          <a id="all_courses_button">
            <i id="all_courses_i" class="fa fa-th"></i>
            全部课程
          </a>
          <div class="to_lists">
            <ul class="to_list">
              <li v-for="(nav,index) in lists" :key="index" class="course_categories_li">
                <div class="course_categories_div">
                  <a class="main_course_button course_button">{{ nav.name}}</a>
                  <a
                    v-for=" (sub, s_index) in nav.tag.slice(0, 2)"
                    :key="s_index"
                    class="course_button"
                  >{{ sub.name }}</a>
                </div>
                <div class="www">
                  <p class="www_p">{{ nav.name }}</p>
                  <div class="www_div">
                    <span
                      v-for="(sub_category, s_c_index) in nav.tag"
                      :key="s_c_index"
                      class="www_span"
                    >
                      <a class="www_a">{{ sub_category.name }}</a>
                    </span>
                  </div>
                  <p class="www_p">课程推荐</p>
                  <p
                    v-for="(recom, r_index) in nav.recommend_courses"
                    :key="r_index"
                    class="sub_course_p"
                  >
                    <a target="_blank" class="sub_recommend_course_a">{{ recom.name }}</a>
                  </p>
                </div>
              </li>
              <li class="course_categories_footer">
                <div class="course_categories_footer_div">
                  <a href="#42" class="course_categories_footer_a">经营专区</a>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li id="trail_li" class="sub_selection_li navigation_li">
          <router-link
            id="trail_button"
            class="sub_selection_a"
            :to="{ name: 'paths' }"
            >路径</router-link
          >
        </li>
        <li id="trail_li" class="sub_selection_li navigation_li">
          <router-link
            :to="{ name: 'bootcamp' }"
            id="trail_button"
            class="sub_selection_a"
            >训练营</router-link
          >
        </li>
        <li id="trail_li" class="sub_selection_li navigation_li">
          <a id="trail_button" class="sub_selection_a">训练营</a>
        </li>
        <li id="lou_puls_li" class="sub_selection_li navigation_li">
          <router-link
            href="#7"
            :to="{ name: 'louplus' }"
            id="lou_puls_button"
            class="sub_selection_a"
            >楼+</router-link
          >
        </li>
        <li id="trail_li" class="sub_selection_li navigation_li">
          <a href="#6" id="VIP_button" class="sub_selection_a">会员</a>
        </li>
        <li id="community_li" class="sub_selection_li navigation_li">
          <a id="community_button" class="sub_selection_a">
            社区
            <span class="spread"></span>
          </a>
          <ul id="sub_community_ul">
            <li class="sub_community_li">
              <a class="sub_community_a">讨论</a>
            </li>
            <li class="sub_community_li">
              <a class="sub_community_a">教程库</a>
            </li>
            <li class="sub_community_li">
              <a class="sub_community_a">直播</a>
            </li>
            <li class="sub_community_li">
              <a class="sub_community_a">比赛</a>
            </li>
          </ul>
        </li>
      </ul>
      <div id="search_bar">
        <label id="search_button">
          <i class="fa fa-search"></i>
        </label>
        <input
          type="text"
          name="search"
          id="search_input"
          autocomplete="off"
          placeholder="搜索 课程/问答"
        />
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { lists } from "../../api/home/home_header";
import { mapState } from "vuex";
export default {
  data() {
    return {
      lists: [],
      nav: []
    };
  },
  computed: {
    ...mapState({})
  },
  async created() {
    lists().then(res => {
      this.lists = res.data.data;
      this.nav = res.data.data;
      // for (let item in this.lists) {
      //   console.log(this.lists[item].name);
      // }

      console.log(this.lists);
    });
  }
};
</script>

<style type="text/css" scoped>
.home_img {
  width: 150px;
}
/*总导航区域*/
#navigation_bar {
  display: flex;
  flex-wrap: wrap;
  background: #f7f7f7;
  height: 144px;
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
}
.course_categories_div {
  height: 100%;
  margin-top: -1px;
  border-bottom: 1px solid #bcbcbc;
  display: flex;
  align-items: center;
}

.navigation_li {
  float: left;
}

.course_button {
  font-size: 12px;
  color: #fff;
  margin-right: 10px;
  margin-left: 5px;
}
.main_course_button {
  font-size: 16px;
}

/* logo 切换/登陆/注册 区域 */
#navigation_logo_sign {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 1170px;
  height: 84px;
}

/* logo */
#navigation_logo {
  display: inline-flex;
  justify-content: flex-start;
}

#navigation_logo_a {
  display: block;
  border: 0;
  padding: 10px 0;
  margin-top: 8px;
  height: 70px;
}

#logo_text {
  display: block;
  font-size: 18px;
  color: #274a59;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
}

/* 登陆注册区域 */
#navigation_sign {
  align-self: center;
}

/* 切换按钮 */
#tab_button {
  border: 1px solid #08bf31;
  color: #08bf91;
  padding: 6px 22px;
  border-radius: 30px;
  margin: 5px 25px auto auto;
  font-size: 16px;
}

/* 登陆按钮 */
#sign_button {
  font-size: 16px;
  color: #3a3a3a;
  padding: 12px 25px;
}

/* 注册按钮 */
#register_button {
  padding: 12px 25px;
  font-size: 16px;
  color: #ffffff;
  background: #08bf91;
}

/* 登陆前后切换的UI */
#sign_menu {
  display: flex;
  align-items: center;
}

.navigation_bar_unlogged_in_div {
  display: flex;
}

.navigation_bar_logged_div {
  display: flex;
  align-items: center;
}

.navigation_feature_li {
  padding: 20px 15px;
}

.navigation_feature_a {
  text-align: center;
  /*padding: 26px 15px;*/
  line-height: 32px;
  color: #3a3a3a;
  font-size: 16px;
  width: 100%;
  height: 100%;
}

.bell_a {
  font-size: 22px;
}

.navigation_avatar_img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.history_courses_li:hover {
  cursor: pointer;
}

.history_courses_li:hover > .history_courses_card {
  display: flex;
}

.history_courses_li:hover > .navigation_feature_a {
  color: #08bf91;
}

.avatar_li:hover .user_card {
  visibility: visible;
  opacity: 1;
}

/* 选择区域 */
#selection_bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #fff;
  height: 60px;
}

/* 全部课程按钮 */
#all_courses_li {
  display: flex;
  height: 60px;
  width: 260px;
  background: #08bf91;
  font-size: 16px;
  position: relative;
}

#all_courses_i {
  color: #fff;
}

#all_courses_button {
  display: block;
  color: #fff;
  padding: 20px 15px;
  width: 260px;
}

/* 其他选项 包括 路径/社区等 */
.sub_selection_li {
  display: flex;
  height: 60px;
}

.sub_selection_a {
  color: #3a3a3a;
  font-size: 16px;
  padding: 20px 15px;
}

.sub_selection_a:hover {
  color: #08bf91;
}

/* 社区的二级子菜单 */
.sub_community_li {
  width: 100%;
  clear: left;
  font-size: 16px;
  /*padding: 15px 0 15px 15px;*/
}

.sub_community_a {
  display: block;
  color: #3a3a3a;
  width: 90%;
  padding: 15px 0 15px 15px;
}

.sub_community_a:hover {
  color: #08bf91;
}

.sub_community_li:hover {
  background: #f7f7f7;
}

#sub_community_ul {
  display: none;
  position: absolute;
  top: 144px;
  width: 150px;
  background: #fff;
  padding: 0;
  margin: 0;
  box-shadow: 0 15px 16px 0 rgba(0, 0, 0, 0.18);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  z-index: 10;
}

#community_li:hover ul {
  display: block;
}

/* 搜索框区域 */
#search_bar {
  align-self: center;
  margin-right: 5px;
  height: 34px;
  width: 232px;
  position: relative;
}

#search_button {
  align-self: center;
  position: absolute;
  /*    right: 30px;
    height: 34px;*/
  /*bottom: 10px;*/
  right: 10px;
  top: 5px;
  font-size: 16px;
  color: #3a3a3a;
}

#search_input {
  width: 232px;
  padding: 6px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #555;
  outline: none;
  font-size: 14px;
}

#search_input:focus {
  border: 1px solid #08bf91;
  box-shadow: 0 0 0 1px #21d6a8;
}
#course_categories {
  z-index: 5;
  background: rgba(37, 37, 37, 0.36);
  width: 260px;
}
/*                                                     一级 */
.to_lists {
  width: 260px;
  position: absolute;
  z-index: 14;
}
.to_list {
  width: 260px;
  position: absolute;
  top: 60px;
}
.course_categories_li {
  height: 58px;
  padding: 18px 12px 0;
  margin-top: -1px;
  position: relative;
}
/* 大分类里 div1 的设置*/
.course_categories_div {
  height: 100%;
  margin-top: -1px;
  border-bottom: 1px solid #bcbcbc;
  display: flex;
  align-items: center;
}
.course_button {
  font-size: 12px;
  color: #fff;
  margin-right: 10px;
  margin-left: 5px;
}
.main_course_button {
  font-size: 16px;
}
.course_categories_li:hover {
  background: #fff;
}
.course_categories_li:hover div {
  border: none;
}
.course_categories_li:hover a {
  cursor: pointer;
  color: #666;
}
.course_categories_li:hover a:hover {
  color: #08bf91;
}
/*                                  二级                                      */
/* div2 里的 hover 出来的二级子菜单 */

.www {
  width: 400px;
  background: #fff;
  position: absolute;
  padding: 20px;
  left: 260px;
  top: 0;
  display: none;
  z-index: 5;
}
.course_categories_li:hover .www {
  display: flex;
  flex-direction: column;
}
/* div2 里的 hover 出来的二级子菜单 */
.www_p {
  display: inline-block;
  height: 22px;
  width: auto;
  line-height: 22px;
  padding: 0 10px;
  background: #eee;
  margin: 0 0 20px;
  margin-right: auto;
  font-size: 14px;
  text-align: center;
}
.www_span {
  display: flex;
  /*align-self: center;*/
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.www_div {
  display: flex;
  /*align-self: center;*/
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.www_p {
  margin-bottom: 10px;
}
.www_a {
  display: inline-block;
  border-left: 1px solid #666;
  border-right: 1px solid #666;
  padding: 0 10px;
  font-size: 12px;
  margin-left: -1px;
  margin-bottom: 10px;
}
.sub_course_p {
  margin-bottom: 10px;
}
.sub_course_a {
  display: inline-block;
  border-left: 1px solid #666;
  border-right: 1px solid #666;
  padding: 0 10px;
  font-size: 12px;
  margin-left: -1px;
  margin-bottom: 10px;
}
.sub_recommend_course_a {
  display: inline-block;
  margin-bottom: 10px;
}

/* footer div 里的一些设置 */
.course_categories_footer {
  padding: 18px 12px 0;
}
.course_categories_footer_div {
  display: flex;
  justify-content: space-around;
  margin-right: auto;
  margin-left: auto;
}
.course_categories_footer_a {
  display: inline-block;
  color: #fff;
  width: 88px;
  height: 26px;
  border: 1px solid #fff;
  border-radius: 28px;
  text-align: center;
  font-size: 12px;
  line-height: 26px;
}
.course_categories_footer_a:hover {
  background: #fff;
  color: #666;
}
</style>
