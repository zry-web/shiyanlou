<template>
  <div class="plus-serve">
    <div class="server">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="serve-title">楼+的服务</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="col-md-3" v-for="(item, index) in list" :key="index">
              <div class="item-box">
                <img :src="item.img" :alt="item.title" />
                <p class="title">{{ item.title }}</p>
                <p class="desc">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getData } from "../../api/plus/plus";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    getData().then(res => {
      this.list = res.data.data[0].server;
    });
  }
};
</script>
<style scoped>
.server {
  background: url("https://static.shiyanlou.com/frontend/dist/img/72a20b6.png")
    no-repeat;
  padding: 100px 0;
  background-size: 100% 100%;
}
.item-box {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.title {
  margin: 10px 0;
  color: #fff;
  font-size: 18px;
}
.desc {
  color: #a4a4a4;
  font-size: 14px;
}
.serve-title {
  color: white;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 60px;
  text-align: center;
}
</style>
