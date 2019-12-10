<template>
  <div class="user">
    <div class="body">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="user-info">
              <a href class="user-image">
                <img
                  src="https://dn-simplecloud.shiyanlou.com/gravatarim3x7WqIvPML.jpg?imageView2/1/w/200/h/200"
                  alt
                />
              </a>
              <div class="user-detail">
                <div class="user-mate">
                  <span>{{ list.nickname }}</span>
                  <span>L1</span>
                  <span>开通会员</span>
                  <span></span>
                </div>
                <span class="user-join"
                  >{{
                    String(list.createdAt).substring(0, 10)
                  }}
                  加入实验楼</span
                >
              </div>
              <div class="user-medals">
                <span>还没有获得勋章</span>
              </div>
            </div>
            <Userlou></Userlou>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Userlou from "./userlou";
import { mapState } from "vuex";
import { getUserData } from "../../api/user/user";
export default {
  components: {
    Userlou
  },
  data() {
    return {
      list: []
    };
  },
  computed: {
    ...mapState({
      token: state => state.login.token
    })
  },
  created() {
    getUserData({ token: this.token }).then(res => {
      this.list = res.data.data;
      console.log(this.token);
      console.log(res);
    });
  }
};
</script>

<style scoped>
.body {
  min-height: calc(100vh - 263px);
  margin: 30px 0 20px;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.user-info {
  display: flex;
  margin: 0 -10px 10px;
  padding: 20px;
  height: 150px;
  border: 1px solid #eee;
  background: #fff;
  align-items: center;
}
.user-image {
  position: relative;
  width: 80px;
  height: 80px;
  color: #08bf91;
  text-decoration: none;
  background-color: transparent;
  vertical-align: middle;
  text-align: center;
  margin-right: 30px;
}
.user-image img {
  width: 100%;
  border-radius: 50%;
  border-style: none;
}
/* .user-detail {

} */
.user-mate {
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 8px;
}
.user-mate span:nth-of-type(1) {
  color: #a4a4a4;
  vertical-align: middle;
  margin-right: 10px;
}
.user-mate span:nth-of-type(2) {
  margin: 0 5px;
  color: #fec42d;
  vertical-align: middle;
  margin-right: 15px;
}
.user-mate span:nth-of-type(3) {
  vertical-align: -1px;
  font-size: 12px;
  color: #337ab7;
  text-decoration: none;
}
.user-jion {
  margin-top: 15px;
  line-height: 20px;
  letter-spacing: 0.5px;
  font-size: 14px;
  color: #666;
}
.user-medals {
  margin-left: 45%;
  width: 270px;
  height: 110px;
  text-align: center;
  border: 1px dashed #eee;
  border-radius: 5px;
}
.user-medals span {
  display: inline-block;
  padding: 30px 0 16px;
  line-height: 35px;
  font-size: 14px;
  color: #a4a4a4;
}
</style>
