<template>
  <div class="scroll_bar item-id">
    <div class="scroll_bar_div">
      <div class="scroll_navigation_div">
        <a class="scroll_navigation_logo_a" href="/">
          <img
            src="https://static.shiyanlou.com/img/shiyanlou_logo.svg"
            class="scroll_navigation_img"
          />
        </a>
        <ul class="scroll_selection_menu">
          <li id="courses_li" class="scroll_sub_selection_li scroll_navigation_li">
            <a tag="a" id="courses_button" class="scroll_sub_selection_a">
              课程
              <span class="spread"></span>
            </a>
            <ul class="scroll_sub_ul">
              <li class="scroll_sub_li">
                <router-link tag="a" class="scroll_sub_a" :to="{name:'course'}">全部课程</router-link>
              </li>
              <li class="scroll_sub_li">
                <router-link :to="{ name: 'Paths' }" class="scroll_sub_a">学习路径</router-link>
              </li>
            </ul>
          </li>
          <li id="lou_puls_li" class="scroll_sub_selection_li scroll_navigation_li">
            <router-link
              :to="{ name: 'Bootcamp' }"
              id="lou_puls_button"
              class="scroll_sub_selection_a"
            >训练营</router-link>
          </li>
          <li id="lou_puls_li" class="scroll_sub_selection_li scroll_navigation_li"></li>
          <li id="lou_puls_li" class="scroll_sub_selection_li scroll_navigation_li">
            <router-link
              id="lou_puls_button"
              class="scroll_sub_selection_a"
              :to="{ name: 'plus' }"
            >楼+</router-link>
          </li>
          <li id="trail_li" class="scroll_sub_selection_li scroll_navigation_li">
            <router-link :to="{name:'vip'}" id="VIP_button" class="scroll_sub_selection_a">会员</router-link>
          </li>
          <li id="community_li" class="scroll_sub_selection_li scroll_navigation_li">
            <a tag="a" class="scroll_sub_selection_a" id="community_button">
              社区
              <span class="spread"></span>
            </a>

            <ul class="scroll_sub_ul">
              <li class="scroll_sub_li">
                <a tag="a" class="scroll_sub_a">讨论</a>
              </li>
              <li class="scroll_sub_li">
                <a tag="a" class="scroll_sub_a" href="#/library">教程库</a>
              </li>
              <li class="scroll_sub_li">
                <a tag="a" class="scroll_sub_a">直播</a>
              </li>
              <li class="scroll_sub_li">
                <a tag="a" class="scroll_sub_a">比赛</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="feature_div">
        <div class="feature_sign_div">
          <ul class="feature_ul">
            <li class="feature_li">
              <a href id="tab_version_button" class="feature_a">企业版</a>
            </li>
            <li class="feature_li">
              <div id="_search_bar">
                <input
                  type="text"
                  name="search"
                  id="_search_input"
                  autocomplete="off"
                  placeholder="搜索 课程/问答"
                  v-model="searchs"
                  @keyup.enter="search()"
                />
                <label id="search_button" @click="search()">
                  <i class="fa fa-search"></i>
                </label>
              </div>
            </li>

            <div class="unlogged_in_div" v-if="!login_state">
              <li class="feature_li">
                <a href="javascript:;" class="feature_a" @click="clicklog()">登录</a>
              </li>
              <li class="feature_li" id="register_li">
                <a
                  href="javascript:;"
                  id="_register_button"
                  class="feature_a"
                  @click="clickreg()"
                >注册</a>
              </li>
            </div>
            <div class="logged_div" v-if="login_state">
              <li class="feature_li history_courses_li">
                <a href="javascript:;" class="history_courses_a feature_a">我的课程</a>
                <HistoryCoursesCard class="scroll_bar_history_courses_card"></HistoryCoursesCard>
              </li>
              <li class="feature_li">
                <a href="javascript:;" class="feature_a bell_a">
                  <i class="far fa-bell"></i>
                </a>
              </li>
              <li class="feature_li avatar_li">
                <router-link tag="a" class="feature_a avatar_a" :to="{ name: 'user_course' }">
                  <img
                    class="avatar_img"
                    :src="imgsrc"
                    :title="
                      $cookies.get('token') ? userlist.nickname : 'Avatar'
                    "
                  />
                </router-link>
                <UserCard class="user_card"></UserCard>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapActions, mapState } from "vuex";
import { getuser } from "../../api/login/login";
import { getUserData } from "../../api/user/user";
import Vue from "vue";
import VueCookies from "vue-cookies";
import HistoryCoursesCard from "../home_page/cards/userid";
import UserCard from "../home_page/cards/usercard";
$cookies.config("0", "/");
Vue.use(VueCookies);
export default {
  computed: {
    ...mapState("login", ["token"])
  },
  components: {
    HistoryCoursesCard,
    UserCard
  },
  // computed: {
  //   ...mapState({
  //     token: state => state.login.token
  //   })
  // },
  data() {
    return {
      isshou: false,
      userlist: [],
      searchs: "",
      imgsrc: ""
    };
  },
  // mounted() {
  //   window.addEventListener("scroll", this.handleScroll);
  // },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapActions("login", ["clickclose", "changeclick"]),
    // handleScroll() {
    //   var scrollTop =
    //     window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop;
    //   if (scrollTop > 100) {
    //     this.isshou = true;
    //   } else this.isshou = false;
    // },
    search: function() {
      this.$router.push({
        name: "search",
        query: { keywords: this.searchs }
      });
    },

    clickreg() {
      this.clickclose(false), this.changeclick("up");
    },
    clicklog() {
      this.clickclose(false), this.changeclick("on");
    }
  },
  created() {
    var user = {
      token: $cookies.get("token")
    };
    getuser(user).then(res => {
      this.userlist = res.data.data;
    });
    if (this.token) {
      this.login_state = true;
    } else {
      this.login_state = false;
    }
    getUserData({ token: this.token }).then(res => {
      if (res.data.data.imgsrc) {
        this.imgsrc = res.data.data.imgsrc;
      }
    });
    this.imgsrc =
      "https://dn-simplecloud.shiyanlou.com/gravatarim3x7WqIvPML.jpg?imageView2/1/w/200/h/200";
  }
};
</script>
<style type="text/css" scoped>
.item-id {
  position: sticky;
  z-index: 1211;
  top: 73px;
}
.scroll_bar {
  /*position: fixed;*/
  top: 0;
  height: 73px;
  background: #fff;
  width: 100%;
  box-shadow: #333 4px 0 20px;
}

.scroll_bar_div {
  display: flex;
  width: 1170px;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
}

/* 导航区域 */
.scroll_navigation_div {
  display: flex;
}

.scroll_navigation_logo_a {
  display: block;
  padding: 10px 0;
  border: 0;
  height: 70px;
}

.scroll_navigation_img {
  display: block;
  width: 120px;
}

.scroll_selection_menu {
  display: flex;
}

.scroll_sub_selection_li {
  margin-top: 5px;
  padding: 18px 10px;
}

/* 导航区域子菜单 */

.scroll_sub_selection_a {
  color: #3a3a3a;
  position: relative;
  font-size: 16px;
  padding: 20px 15px;
  line-height: 1.9;
}

.scroll_sub_selection_a:hover {
  color: #08bf91;
}

.scroll_sub_ul {
  display: none;
  position: absolute;
  top: 57px;
  width: 150px;
  background: #fff;
  padding: 0;
  margin: 0;
  box-shadow: 0 15px 16px 0 rgba(0, 0, 0, 0.18);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  z-index: 1000;
}

#community_li:hover ul {
  display: block;
}

#courses_li:hover ul {
  display: block;
}

/* 子按钮社区和课程部分的 ↓ 箭头 span */

.spread {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}

.scroll_sub_a {
  display: block;
  color: #3a3a3a;
  width: 90%;
  padding: 15px 0 15px 10px;
  font-size: 14px;
}

.scroll_sub_a:hover {
  color: #08bf91;
}

.scroll_sub_li:hover {
  background: #f7f7f7;
}

/* 右边功能区 */
.feature_div {
  margin-right: 15px;
}

.feature_ul {
  display: flex;
}

.feature_li {
  padding: 10px 15px 7px 15px;
  margin-top: 12px;
  border-radius: 6px;
}

.feature_a {
  text-align: center;
  /*padding: 26px 15px;*/
  line-height: 35px;
  color: #3a3a3a;
  font-size: 16px;
}

.feature_a:hover {
  color: #08bf91;
}

/* 登陆与未登录的 UI */

.unlogged_in_div {
  display: flex;
}

.logged_div {
  display: flex;
}

.bell_a {
  font-size: 22px;
}

.bell_a:hover {
  color: #08bf91;
}

.avatar_li {
  padding-top: 10px;
}

.avatar_li:hover .user_card {
  visibility: visible;
  position: absolute;
  right: 0;
  opacity: 1;
}
.avatar_a {
  display: block;
}

.avatar_img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.history_courses_li:hover .scroll_bar_history_courses_card {
  display: flex;
}

.avatar_li {
  position: relative;
}

.avatar_li:hover .scroll_bar_user_card {
  visibility: visible;
  opacity: 1;
}

/* */

#tab_version_button {
  font-size: 15px;
  color: #a4a4a4;
}

#tab_version_button:hover {
  color: #08bf91;
}

#register_li {
  background: #08bf91;
}

#_register_button {
  color: #fff;
}

/* 搜索框部分 */
#_search_bar {
  position: relative;
  margin-left: -10px;
  margin-top: -2px;
  margin-right: -5px;
}

#_search_input {
  font-size: 14px;
  box-sizing: border-box;
  width: 200px;
  height: 34px;
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #555;
  outline: none;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}

#_search_input:focus {
  border: 1px solid #08bf91;
  box-shadow: 0 0 0 1px #21d6a8;
}

#_search_button {
  position: absolute;
  top: 5px;
  right: 10px;
  margin-right: 4px;
  font-size: 16px;
  color: #3a3a3a;
}
</style>
