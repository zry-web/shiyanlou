<template>
  <div class="vip-data-container">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="section-title text-center">
            在这里，会员每月平均完成实验
            <span>10</span>个，
            实验时间
            <span>2000+</span>分钟
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="user-item col-sm-12 col-md-4">
          <div class="user-evaluation-box text-center">
            <div class="user-info justify-center flex-column vertical-center">
              <a
                title="id: 1"
                href="/users/1"
                target="_blank"
                height="80"
                class="user-avatar-link"
                style="--width:80px;"
              >
                <img src="https://static.shiyanlou.com/img/user-img.png" class="user-avatar-image" />
                <div class="vip-icon-container">
                  <img
                    src="https://static.shiyanlou.com/frontend/dist/img/2a64526.png"
                    width="28.799999999999997px"
                    class="vip-icon"
                  />
                </div>
              </a>
              <p class="user-name">
                <span class="name font-16">汪想想</span>
                &nbsp;
                <span class="level font-14">L107</span>
              </p>
            </div>
            <div class="evaluation">
              <p
                class="no-margin font-14"
              >“加入实验楼两年多，从小白到熟练使用Linux，Vim和Git，还用Python实现了很多有趣的项目。会员算是监督，在更好的课程中收获更多。”</p>
            </div>
          </div>
        </div>
        <div class="user-item col-sm-12 col-md-4">
          <div class="user-evaluation-box text-center">
            <div class="user-info justify-center flex-column vertical-center">
              <a
                title="id: 2"
                href="/users/2"
                target="_blank"
                height="80"
                class="user-avatar-link"
                style="--width:80px;"
              >
                <img
                  src="https://static.shiyanlou.com/img/user-img02.png"
                  class="user-avatar-image"
                />
                <div class="vip-icon-container">
                  <img
                    src="https://static.shiyanlou.com/frontend/dist/img/5a1be41.png"
                    width="28.799999999999997px"
                    class="vip-icon"
                  />
                </div>
              </a>
              <p class="user-name">
                <span class="name font-16">Wenxin2017</span>
                &nbsp;
                <span class="level font-14">L70</span>
              </p>
            </div>
            <div class="evaluation">
              <p
                class="no-margin font-14"
              >“ 会员功能虽然很多，最看重还是课程和保存环境。学的课程越多，越觉得值。会员课程更新比先前快多了，但机器学习的课程还是太少。”</p>
            </div>
          </div>
        </div>
        <div class="user-item col-sm-12 col-md-4">
          <div class="user-evaluation-box text-center">
            <div class="user-info justify-center flex-column vertical-center">
              <a
                title="id: 3"
                href="/users/3"
                target="_blank"
                height="80"
                class="user-avatar-link"
                style="--width:80px;"
              >
                <img
                  src="https://static.shiyanlou.com/img/user-img03.png"
                  class="user-avatar-image"
                />
                <div class="vip-icon-container">
                  <img
                    src="https://static.shiyanlou.com/frontend/dist/img/2a64526.png"
                    width="28.799999999999997px"
                    class="vip-icon"
                  />
                </div>
              </a>
              <p class="user-name">
                <span class="name font-16">明路</span>
                &nbsp;
                <span class="level font-14">L152</span>
              </p>
            </div>
            <div class="evaluation" data-v-9defc99e>
              <p
                class="no-margin font-14"
              >"超喜欢实验楼，最初想试Linux来的实验楼，被新奇的实验学习法迷住了。学IT动手才是最高效的，会员功能和课程能节约练习的时间。"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.section-title {
  padding-top: 100px;
  margin-bottom: 60px;
  color: #676767;
}
.section-title span {
  color: #08bf91;
}
.user-item {
  margin-bottom: 15px;
}
.user-evaluation-box {
  padding: 2rem;
  height: 100%;
  border-radius: 15px;
  background: #fff;
}
.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user-avatar-link {
  display: inline-block;
  position: relative;
  width: var(--width);
  height: var(--width);
}
.user-avatar-img {
  width: 100%;
  border-radius: 50%;
}
.vip-icon-container {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>