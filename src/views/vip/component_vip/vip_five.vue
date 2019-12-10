<template>
  <div class="vip-faq-container">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="section-title text-center">常见问题</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div class="faq-item-box">
            <p class="title">会员课程和免费课程有什么区别？</p>
            <p>1.会员课程多为项目课，免费课程多为基础课。</p>
            <p>2. 会员课程主要由实验楼团队制作及维护，免费课程由实验楼及合作伙伴共同维护。</p>
            <p>3. 会员可联网并保存环境，会员课程内容不受网络及时间限制。</p>
            <p>4. 会员课程更新频率更高，难度会更大。</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="faq-item-box">
            <p class="title">什么情况下需要保存实验环境？</p>
            <p>1. 当时间不多或实验耗时较长，无法连续完成一个实验时。</p>
            <p>2. 当实验遇到问题但无法及时解决时。</p>
            <p>3. 当需要一台在线开发环境时。</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="faq-item-box">
            <p class="title">环境联网有什么好处？</p>
            <p>1. 实验中随时连接站外资源，例如Github等。</p>
            <p>2. 支持大量联网课程，例如微信微博开发及SaaS开发。</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="faq-item-box">
            <p class="title">购买实验楼训练营或会员是否可开发票？</p>
            <p>
              实验楼训练营或会员费用可以开具发票，如需开具发票，请填写发票需求表单：
              <a
                href="http://cn.mikecrm.com/OUmcld"
                target="_blank"
              >发票信息</a>
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="faq-item-box">
            <p class="title">成功购买会员服务后，是否可以退款？</p>
            <p>
              支付购买成功后，暂不接受退款申请，请详细查看会员服务内容后进行购买，如有任何不清楚的地方欢迎在
              <a
                href="/questions"
                target="_blank"
              >讨论区</a>
              发帖询问。
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="faq-item-box">
            <p class="title">高级会员如何加入训练营？</p>
            <p>办理成为高级会员后，即可在相应的课程详情页免费加入该训练营课程。学习权限在高级会员有效期内一直有效，不限学习时间。高级会员过期后无法开启实验和查看文档，若想继续学习可单独购买或续费高级会员。</p>
          </div>
        </div>
      </div>
      <More></More>
    </div>
  </div>
</template>
<script>
import More from "./vip_more";
export default {
  components: {
    More
  }
};
</script>
<style  scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}
.section-title {
  margin-bottom: 60px;
  color: #676767;
}

.faq-item-box {
  padding: 23px;
  margin-bottom: 30px;
  border-radius: 5px;
  color: #666;
  background: #fff;
}
.title {
  font-size: 18px;
  font-weight: 700;
}
a {
  color: #08bf91;
  text-decoration: none;
  background-color: transparent;
}
</style>