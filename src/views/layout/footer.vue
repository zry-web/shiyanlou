<template>
  <div class="footer">
    <div class="footer_div">
      <div class="logo_other_site_div">
        <img class="logo_img" src="https://static.shiyanlou.com/img/logo-white.svg" />
        <p class="logo_other_site_description_p">动手做实验，轻松学IT</p>
        <div class="chat_tools_div">
          <div class="wechat_qr_div">
            <a href="javascript:;">
              <i class="fa fa-weixin"></i>
            </a>
          </div>
          <div class="weibo_div">
            <a href="javascript:;">
              <i class="fab fa-weibo"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="category_div company_description">
        <p class="main_category">公司</p>
        <a href class="single_item_a">关于我们</a>
        <a href class="single_item_a">联系我们</a>
        <a href class="single_item_a">加入我们</a>
      </div>
      <div class="category_div cooperation_div">
        <p class="main_category">合作</p>
        <a href class="single_item_a">成为作者</a>
        <a href class="single_item_a">教师合作</a>
        <a href class="single_item_a">友情链接</a>
        <a href class="single_item_a">开发者</a>
      </div>
      <div class="category_div service_div">
        <p class="main_category">服务</p>
        <a href class="single_item_a">企业版</a>
        <a href class="single_item_a">实战训练营</a>
        <a href class="single_item_a">会员服务</a>
        <a href class="single_item_a">实验报告</a>
        <a href class="single_item_a">常见问题</a>
        <a href class="single_item_a">隐私条款</a>
      </div>
      <div class="category_div learning_path_div">
        <p class="main_category">学习路径</p>
        <a href class="single_item_a">Python学习路径</a>
        <a href class="single_item_a">Linux学习路径</a>
        <a href class="single_item_a">大数据学习路径</a>
        <a href class="single_item_a">java学习路径</a>
        <a href class="single_item_a">PHP学习路径</a>
        <a href class="single_item_a">全部</a>
      </div>
    </div>
    <div class="site_information">小龙设计团队专属打造</div>
  </div>
</template>

<script type="text/javascript">
export default {};
</script>

<style type="text/css" scoped>
.footer {
  background: #333;
  padding-top: 20px;
}

.footer_div {
  width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
}

/* */
.logo_other_site_div {
  width: 33.333333%;
}

.logo_img {
  height: auto;
  padding: 15px;
}

.logo_other_site_description_p {
  margin: 0 0 12px 15px;
  color: #0c9;
  font-size: 28px;
}

/* */
.main_category {
  font-size: 18px;
  margin-bottom: 10px;
  color: hsla(0, 0%, 100%, 0.5);
}

.category_div {
  width: 16.66666%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
}

.single_item_a {
  display: inline-block;
  color: #999;
  font-size: 14px;
  margin-bottom: 3px;
}

.single_item_a:hover {
  color: #fff;
}

/* 网站信息部分，备案等 */

.site_information {
  background: #171919;
  box-sizing: border-box;
  margin-top: 20px;
  height: 50px;
  text-align: center;
  color: #666;
  line-height: 50px;
}

/* 微信和微博 */
.chat_tools_div {
  display: flex;
}

.wechat_qr_div,
.weibo_div {
  width: 30px;
  height: 30px;
  font-size: 16px;
  background: #636469;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  margin: 0 15px;
}

.fa-weixin {
  color: #36bd4c;
}

.fa-weibo {
  color: #ee4451;
}
</style>
