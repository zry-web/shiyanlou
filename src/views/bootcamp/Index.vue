<template>
  <div class="bc-index">
    <div class="container">
      <div class="bc-list">
        <div class="row list-row">
          <div class="tit col-sm-12 col-md-1">方向：</div>
          <div class="lists col-sm-12 col-md-11">
            <div class="list-item active" @click="alltag()">全部</div>
            <div v-for="item in list1" :key="item._id">
              <div class="list-item" @click="tagMasseges(item.name)">{{ item.name }}</div>
            </div>
          </div>
        </div>

        <div class="row list-row">
          <div class="tit col-sm-12 col-md-1">标签：</div>
          <div class="lists col-sm-12 col-md-11">
            <div class="list-item active">全部</div>
            <div class="list-item" v-for="(item1,index) in list2" :key="index">{{item1.name}}</div>
          </div>
        </div>
      </div>
      <div style="padding:20px 0 30px">
        <div class="pic row">
          <div class="course-pic col-3" v-for="item in list3" :key="item._id">
            <router-link
              target="_blank"
              class="course-link"
              :to="{name:'Detail', query: {
              title: item.title
            }}"
            >
              <div class="course-item">
                <img :src="item.coverImg" alt />
                <div class="course-body">
                  <p class="course-name">{{item.title}}</p>
                  <p class="course-dec">{{item.descriptions}}</p>
                </div>
                <div class="course-footer">
                  <div class="footer-info status-normal">
                    <p class="price-info">
                      <span>￥69</span>
                    </p>
                    <p class="discount-info">高级会员免费</p>
                  </div>

                  <div class="footer-info status-hover">
                    <span class="course-price">￥69</span>
                    <i class="i"></i>
                    <span class="view-course">立即查看</span>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <el-pagination
          class="bc-pages"
          background
          layout="prev, pager, next"
          :page-count="pages"
          @current-change="pageChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
// import _ from "lodash";
// import { allMessage } from "../../api/services/move";
// import { tagMassage } from "../../api/services/move";
// import { picMessage } from "../../api/services/pages";
// import { oneMassage } from "../../api/services/move";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("bootcamp", ["list1", "list2", "list3", "pages"])
  },
  async created() {
    // 初始化的时候获取所有的tag标签
    this.alltag();
  },
  methods: {
    ...mapActions("bootcamp", [
      "alltag",
      "tagMasseges",
      "picMasseges",
      "pageChange"
    ])

    // async pageChange(p) {
    //   const result = await picMessage(p);
    //   this.list = result.data.course;
    //   this.pages = result.data.pages;
    // }
  }
};
</script>

<style sthiscoped>
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
.bc-content {
  padding: 20px 0 30px;
}
.pic {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.course-pic {
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.course-item {
  border: 1px solid #eee;
  color: #666;
  background-color: #fff;
  transition: box-shadow 0.2s ease-out;
}
.course-item img {
  width: 100%;
}
.course-body {
  padding: 10px 15px;
  cursor: pointer;
}
.course-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 16px;
}
.course-dec {
  height: 63px;
  overflow: hidden;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  font-weight: 400;
}
.price-info {
  width: 100%;

  text-align: center;
}
.price-info span {
  font-size: 24px;
  box-sizing: border-box;
  color: #f66;
  font-weight: 400;
  display: block;
  line-height: 1;
}
.discount-info {
  color: #f66;
  font-size: 14px;
  text-align: center;
  line-height: 1;
  margin: 10px 0 0;
}
.course-footer {
  height: 80px;
  overflow: hidden;
  position: relative;
}
.status-hover {
  position: absolute;
  left: 0;
  top: 80px;
  height: 80px;
  width: 260px;
  background: #f66;
  color: #fff;
  z-index: 10;
  transition: top 0.5s linear;
}
.course-pic {
  height: 372px;
}
.course-link:hover .status-hover {
  top: 0px;
}
.status-hover {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.course-price {
  font-size: 24px;
  font-weight: 400;
}
.i {
  width: 1px;
  height: 50%;
  background: #fff;
  display: block;
}
.view-course {
  font-size: 18px;
  font-weight: 400;
}
.bc-pages {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 10px 0 0;
}
.pages-number {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
}
.page-item {
  margin: 0 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
}
.page-link {
  background: #fff;
  color: #565a61;
  border: 0;
  font-size: 14px;
  position: relative;
  display: block;
  padding: 8px 12px;
  margin-left: -1px;
  line-height: 1.25;
}
.active {
  background: #08bf91;
  color: #fff;
}
.page-link:hover {
  background: #08bf91;
  color: #fff;
}
</style>>