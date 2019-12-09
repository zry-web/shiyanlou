<template>
  <div class="bc-index">
    <div class="container">
      <div class="bc-list">
        <div class="row list-row">
          <div class="tit col-sm-12 col-md-1">方向：</div>
          <div class="lists col-sm-12 col-md-11">
            <div class="list-item active">全部</div>
            <div class="list-item" v-for="item in list1" :key="item._id">{{ item.category }}</div>
          </div>
        </div>

        <div class="row list-row">
          <div class="tit col-sm-12 col-md-1">标签：</div>
          <div class="lists col-sm-12 col-md-11">
            <div class="list-item active">全部</div>
            <div class="list-item" v-for="item in list2" :key="item._id">{{item.tag}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { allMessage } from "../../api/services/move";
export default {
  data() {
    return {
      list1: [],
      list2: []
    };
  },
  async created() {
    const res = await allMessage();
    this.list1 = _.uniqBy(res.data.data, "category"); // res.data.data;
    this.list2 = _.uniqBy(res.data.data, "tag"); // res.data.data;
  }
};
</script>

<style scoped>
.bc-list {
  margin-top: 20px;
  padding: 20px 30px 10px;
  background: #fff;
  border: 1px solid #eee;
}
.list-row {
  display: flex;
  flex-wrap: wrap;
}
.lists {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  margin-left: -40px;
}
.list-item {
  margin: 0 4px 10px 0;
  padding: 1px 10px;
  border-radius: 15px;
  background-color: #fff;
  transition: background 0.5s ease;
  font-size: 16px;
  color: #666;
  cursor: pointer;
}
.tit {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
}
.active {
  color: #fff;
  background-color: #08bf91;
}
.list-item:hover {
  color: #fff;
  background-color: #08bf91;
}
</style>>