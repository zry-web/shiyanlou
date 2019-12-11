<template>
  <div id="library" class="clean">
    <div class="left fl">
      <button class="allLib" @click="showAll">
        <i class="el-icon-s-unfold"></i>全部教程
      </button>
      <ul>
        <li v-for="(item, index) in data" :key="index">
          <button @click="changeClass(item.topic)">{{ item.topic }}</button>
          <button
            @click="changeClass2(item.topic, item.tags[0].name)"
            class="smlFont"
          >{{ item.tags[0].name }}</button>
          <button
            @click="changeClass2(item.topic, item.tags[1].name)"
            class="smlFont"
          >{{ item.tags[1].name }}</button>
          <div class="hideList clean">
            <p
              v-for="(item2, index) in item.tags"
              :key="index"
              @click="changeClass2(item.topic, item2.name)"
            >
              <img :src="item2.picture_url" />
              <span>{{ item2.name }}</span>
            </p>
          </div>
        </li>
      </ul>
      <button class="more">推荐更多优质教程</button>
    </div>
    <div v-show="right1" class="right fr">
      <div class="right-item" v-for="(item3, index) in dataright" :key="index">
        <div class="title clean">
          <h3 class="fl">{{ item3.topic }}</h3>
          <span class="fr" @click='changeClass(item3.topic)'>更多</span>
        </div>
        <div class="con clean">
          <div class="rig-item clean fl" v-for="(item4, index) in item3.books" :key="index">
            <div class="item-img fl">
              <img :src="item4.tags[0].picture_url" />
              <span></span>
            </div>
            <div class="item-info fl">
              <p>{{item4.name}}</p>
              <span>共{{item4.chapters_count}}章节</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="right2" class="right fr">
      <div class="right-item">
        <div class="title clean">
          <h3 class="fl">{{ name }}</h3>
          <span class="fr">更多</span>
        </div>
        <div class="con clean">
          <div class="rig-item clean fl" v-for="(item, index) in dataright2" :key="index">
            <div class="item-img fl">
              <img :src="item.tags[0].picture_url" />
              <span></span>
            </div>
            <div class="item-info fl">
              <p>{{item.name}}</p>
              <span>共{{item.chapters_count}}章节</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getLibraryList } from "../api/library/library";
export default {
  name: "Library",
  data() {
    return {
      data: "",
      dataright: "",
      dataright2: [],
      name: "",
      right1: true,
      right2: false
    };
  },
  methods: {
    changeClass(name) {
      this.right1 = true;
      this.right2 = false;
      getLibraryList().then(res => {
        this.dataright = res.data.data[0].blocks.filter(value => {
          return value.topic == name;
        });
      });
    },
    changeClass2(name, tag) {
      this.right2 = true;
      this.right1 = false;
      this.name = name;
      this.dataright2.list = [];
      getLibraryList().then(res => {
        var resault = res.data.data[0].blocks.filter(value => {
          return value.topic == name;
        });
        let resault2 = [];
        resault[0].books.forEach(item => {
          if (item.tags[0].name == tag) {
            resault2.push(item);
          }
        });
        this.dataright2 = resault2;
        console.log(this.dataright2);
      });
    },
    showAll() {
      this.right1 = true;
      this.right2 = false;
      getLibraryList().then(res => {
        this.data = res.data.data[0].nav;
        this.dataright = res.data.data[0].blocks;
      });
    }
  },
  created() {
    getLibraryList().then(res => {
      // console.log(res);
      this.data = res.data.data[0].nav;
      this.dataright = res.data.data[0].blocks;
    });
  }
};
</script>
<style scoped lang='scss'>
#library {
  width: 1140px;
  margin: 20px auto 0;
  * {
    outline: none;
  }
  .left {
    width: 262.5px;
    .allLib {
      width: 100%;
      padding: 16px 14px;
      background: #08bf91;
      color: #fff;
      font-size: 16px;
      box-sizing: border-box;
      cursor: pointer;
      border: none;
      text-align: left;
      i {
        margin-right: 5px;
      }
    }
    ul {
      background: #fff;
      li {
        box-sizing: border-box;
        padding: 16px 14px;
        background: #fff;
        position: relative;
        border-bottom: 1px solid hsla(0, 0%, 74.1%, 0.2);
        &:hover {
          width: 264px;
          background: #fbfbfb;
          .hideList {
            display: block;
          }
        }
        button {
          background: none;
          border: none;
          margin-right: 15px;
          font-size: 16px;
          color: #666;
          padding: 0;
          &:hover {
            text-decoration: underline;
            color: #08bf91;
          }
        }
        .smlFont {
          font-size: 15px;
        }
        .hideList {
          display: none;
          position: absolute;
          left: 262.5px;
          top: 0;
          width: 300px;
          padding: 20px 30px 0;
          background-color: #fbfbfb;
          box-shadow: 0 1px 10px 0 hsla(0, 0%, 61.2%, 0.5);
          word-spacing: -4px;
          z-index: 1;
          -webkit-transition: all 0.1s ease-out;
          transition: all 0.1s ease-out;
          p {
            width: 60px;
            height: 60px;
            float: left;
            text-align: center;
            margin-bottom: 20px;
            cursor: pointer;
            img {
              width: 35px;
              height: 35px;
              margin: 0 auto;
            }
            span {
              color: #666;
              font-size: 15px;
            }
          }
        }
      }
    }
    .more {
      display: block;
      width: 100%;
      padding: 12px 0;
      margin-bottom: 10px;
      font-size: 20px;
      background: #08bf91;
      color: #fff;
      border: none;
      margin-top: 10px;
      transition: all 0.3s;
      &:hover {
        background: #069a75;
      }
    }
  }
  .right {
    width: 848px;
    margin-bottom: 10px;
    padding: 30px 30px 20px;
    border: 1px solid #eee;
    background: #fff;
    .right-item {
      .title {
        h3 {
          font-size: 20px;
          color: #666;
        }
        span {
          cursor:pointer;
          font-size: 16px;
          color: #08bf91;
          margin-right: 15px;
          &:hover{
            text-decoration:underline;
          }
        }
      }
      .con {
        margin-left: -15px;
        padding-top: 20px;
        .rig-item {
          cursor: pointer;
          width: 242px;
          height: 96px;
          padding: 11px 13px;
          margin-bottom: 32px;
          margin-right: 15px;
          margin-left: 10px;
          box-shadow: 0 1px 2px 0 #d2d2d2;
          text-decoration: none;
          vertical-align: middle;
          transition: all 0.3s;
          &:hover {
            box-shadow: 0 2px 8px 0 #d2d2d2;
          }
          .item-img {
            height: 100%;
            vertical-align: middle;
            margin-right: 10px;
            line-height: 100%;
            span {
              height: 100%;
              display: inline-block;
              vertical-align: middle;
            }
            img {
              width: 54px;
              height: 54px;
              display: inline-block;
            }
          }
          .item-info {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p {
              font-size: 16px;
              color: #565656;
              width: 149px;
            }
            span {
              font-size: 15px;
              color: #666;
            }
          }
        }
      }
    }
  }
}
</style>