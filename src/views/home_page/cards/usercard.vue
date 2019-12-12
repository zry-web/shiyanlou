<template>
  <div class="user_card_div">
    <div class="arrow"></div>
    <div class="user_operation_card">
      <div class="user_base_info_card">
        <!--
                    avatar nickname+level
                    avatar <p></p>
        -->
        <a tag="a">
          <img class="avatar" :src="imgsrc" />
        </a>
        <div class="base_info_card">
          <div class="base_info_card_header">
            <span class="nickname"></span>
            <span class="level"></span>
          </div>
          <p class="learn_time_p">今日有效学习时间100分钟</p>
        </div>
      </div>
      <div class="vip_button_div">
        <router-link tag="p" to="vip" class="vip_button_p">
          <i class="fas fa-power-off"></i> 启动保存的环境
        </router-link>
      </div>
      <div class="user_operation">
        <!--
                    1 2
                    3 4
                    flex wrap 50% 50%
        -->
        <a tag="a" class="user_operation_button" href="#/user/1">我的主页</a>
        <a tag="a" class="user_operation_button" href="#/user/profile">个人设置</a>
        <a tag="p" href="#/vip" class="user_operation_button vip_user_operation_button">会员中心</a>
        <router-link tag="p" :to="{name:'asauthor'}" class="user_operation_button">成为作者</router-link>
      </div>
      <div class="exit_button">
        <a href="javascript:;" @click="log_out()">退出登录</a>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import Vue from "vue";
import VueCookies from "vue-cookies";
import { getUserData } from "../../../api/user/user";
import { mapState } from "vuex";

Vue.use(VueCookies);
import { mapActions } from "vuex";

export default {
  data() {
    return {
      imgsrc: ""
    };
  },
  methods: {
    ...mapActions("login", ["logout"]),
    log_out() {
      if (this.$cookies.isKey("token")) {
        this.$cookies.remove("token");
        let token = "";
        this.logout(token);
        window.location.reload();
      } else {
      }
    }
  },
  created() {
    getUserData({ token: this.token }).then(res => {
      console.log(res);
      if (res.data.data.imgsrc) {
        this.imgsrc = res.data.data.imgsrc;
      }
    });
    this.imgsrc =
      "https://dn-simplecloud.shiyanlou.com/gravatarim3x7WqIvPML.jpg?imageView2/1/w/200/h/200";
  },
  computed: {
    ...mapState('login', ['token'])
  }
};
</script>
<style type="text/css" scoped>
.user_card_div {
  visibility: hidden;
  transition: visibility 0s, opacity 0.5s linear;
  position: absolute;
  opacity: 0;
  width: 300px;
  height: 300px;
  padding: 20px;
  top: 83px;
  right: -115px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 4px 1px #ccc;
  z-index: 999 !important;
}

.arrow {
  width: 0;
  height: 0;
  margin-top: -48px;
  margin-left: 223px;
  position: absolute;
}

.arrow:before,
.arrow:after {
  content: " ";
  border: 13px solid transparent;
  position: absolute;
  margin-bottom: -10px;
}

.arrow:before {
  border-bottom-width: 15px;
  border-bottom-color: #999;
}

.arrow:after {
  border-bottom-width: 15px;
  border-bottom-color: #fff;
}

.user_operation_card {
  display: flex;
  flex-direction: column;
}

.user_base_info_card {
  display: flex;
}

.base_info_card {
  display: flex;
  flex-direction: column;
}

.nickname {
  color: #666;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.level {
  color: #fec42d;
  font-size: 14px;
  font-weight: 700;
}

.learn_time_p {
  color: #a4a4a4;
  font-size: 12px;
  margin-top: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
}

/* vip button */
.vip_button_div {
  margin: 10px 0;
}

.vip_button_p {
  color: #fff;
  background: #08bf91;
  padding: 8px 0;
  text-align: center;
  border: 1px solid #fff;
  font-size: 14px;
  border-radius: 100px;
}

.vip_button_p:hover {
  cursor: pointer;
}

/* user operation */
.user_operation {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.user_operation_button {
  width: 40%;
  padding: 5px 10px;
  border: 1px solid #ccc;
  font-size: 14px;
  color: #3a3a3a;
  border-radius: 25px;
  text-align: center;
  margin-bottom: 1rem;
}

.user_operation_button:hover {
  cursor: pointer;
}

.vip_user_operation_button {
  border: 1px solid #f66;
  color: #f66;
}

/**/
.exit_button {
  padding-top: 20px;
  text-align: end;
}

.exit_button a {
  font-size: 14px;
  color: #a4a4a4;
}
</style>
