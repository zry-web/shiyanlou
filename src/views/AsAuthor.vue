<template>
  <div id="as-author">
    <div class="banner">
      <h2>实验楼作者招募</h2>
      <p>不做观望者，做圈子里的价值传递者</p>
    </div>
    <div class="hope">
      <h3>我们希望你</h3>
      <ul class="clean">
        <li>
          <img src="@/assets/img/icon_Huanying_1_Yuanchuang.png" />
          <p>热衷分享，最好有写技术博客的经历</p>
        </li>
        <li>
          <img src="@/assets/img/icon_Huanying_2_Huangjing.png" />
          <p>有大型项目开发经验</p>
        </li>
        <li>
          <img src="@/assets/img/icon_Huanying_3_LilunShijian.png" />
          <p>至少精通一门主流技术</p>
        </li>
      </ul>
    </div>
    <div class="acquisition clean">
      <h3>你将获得</h3>
      <ul class="clean clean">
        <li>
          <div>
            <img src="@/assets/icon_Huode_1_money.png" />
          </div>
          <p>丰厚的分成收益</p>
        </li>
        <li>
          <div>
            <img src="@/assets/img/icon_Huode_1_money.png" />
          </div>
          <p>迅速增长的粉丝与业内知名度</p>
        </li>
        <li>
          <div>
            <img src="@/assets/img/on_Huode_1_money.png" />
          </div>
          <p>技术梳理带来的能力提升</p>
        </li>
        <li>
          <div>
            <img src="@/assets/img/HOU.png" />
          </div>
          <p>授人以渔的成就感</p>
        </li>
      </ul>
    </div>
    <div class="show">
      <h3>优秀投稿项目展示</h3>
      <div class="pro">
        <router-link :to="coursedetail"></router-link>
      </div>
    </div>
    <div class="contribute">
      <h2>投稿方式</h2>
      <div class="ewm clean">
        <div class="ewm-left fl">
          <p>添加微信商议</p>
          <p>DJ Candy MC 小龙</p>
        </div>
        <div class="ewm-right fr">
          <img src="@/assets/img/ewm.png" />
        </div>
      </div>
    </div>
    <div class='lc'>
      <img src='@/assets/img/BGS}M[$96$N@V(5JAYLVRBD.png'>
    </div>
    <div class='wt'>
      <img src='@/assets/img/wt.png'>
    </div>
  </div>
</template>
<script>
export default {
  name: "Louplus",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
#as-author {
  margin: 0px auto;
  .banner {
    left: 0;
    padding: 150px 0;
    color: #fff;
    background-size: 100% 100%;
    text-align: center;
    background: url("../assets/img/logo.png");
    h2 {
      font-size: 50px;
      margin-bottom: 15px;
    }
    p {
      font-size: 30px;
      margin: 30px 0;
    }
  }
  .hope {
    padding: 100px;
    background: rgb(255, 255, 255);
    text-align: center;
    h3 {
      margin-bottom: 60px;
      color: #333;
      font-size: 30px;
      text-align: center;
    }
    ul {
      width: 1140px;
      margin: 0 auto;
      li {
        float: left;
        width: 380px;
        img {
          margin: 0 auto;
          margin-bottom: 50px;
        }
      }
    }
  }
  .acquisition {
    padding: 100px;
    background: rgb(247, 247, 247);
    h3 {
      margin-bottom: 60px;
      color: #333;
      font-size: 30px;
      text-align: center;
    }
    ul {
      width: 1140px;
      margin: 0 auto;
      li {
        margin: 0 42px;
        float: left;
        text-align: center;
        div {
          width: 200px;
          height: 150px;
          margin: 0 auto;
          background: #fff;
          border-radius: 5px;
          text-align: center;
          line-height: 150px;
          margin-bottom: 35px;
          img {
            display: inline-block;
            margin: 0 auto;
          }
        }
      }
    }
  }
  .show {
    background: #fff;
    padding: 100px;
    h3 {
      margin-bottom: 60px;
      color: #333;
      font-size: 30px;
      text-align: center;
    }
  }
  .contribute {
    padding: 100px;
    background: #f7f7f7;
    h2 {
      margin-bottom: 60px;
      color: #333;
      font-size: 30px;
      text-align: center;
    }
    .ewm {
      width: 375px;
      margin: 0 auto;
      padding: 25px 30px;
      color: #565656;
      background: #fff;
      font-size: 18px;
      border-radius: 10px;
      .ewm-left {
        padding-top:20px;
        p {
          margin-bottom: 10px;
          font-size: 18px;
          color: #565656;
        }
      }
      .ewm-right {
        img {
          width: 110px;
          height: 110px;
        }
      }
    }
  }
  .lc{
    width:100%;

    img{
      width:100%;
      margin:0 auto;
    }
  }
  .wt{
    width:100%;
    img{
      width:100%;
    }
  }
}
</style>