<template>
  <div class="full-page">
    <div class="container">
      <div class="pic-content">
        <div class="pic-header">
          <span class="header-title">学过本课的同学也学过...</span>
        </div>
        <div class="pic-body">
          <div class="row">
            <div class="col-sm-12 col-md-4">
              <div class="item-shadow">
                <div class="pic-item">
                  <a href target="_blank">
                    <div class="course-item">
                      <div class="item-top">
                        <img
                          src="https://dn-simplecloud.shiyanlou.com/course/1542592561365_【370】-【Python图片转字符画】.png"
                          alt
                        />
                      </div>
                      <div class="item-buttom">
                        <div class="item-info">
                          <h6 class="course-name">Python 图片转字符画</h6>
                          <div class="course-desc">
                            本课程用 50 行 Python 代码完成图片转字符画
                            小工具。通过本实验将学习到 Linux 命令行操作
                            ，Python 基础，pillow 库的使用，argparse
                            库的使用。本课程难度简单，属于 Python
                            中基础课程。
                          </div>
                        </div>
                        <div class="course-data">
                          <span class="course-count">
                            <i></i>
                            <span>86249</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
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
.container {
  padding-right: 30px;
  padding-left: 30px;
  margin-right: auto;
  margin-left: auto;
}
.pic-content {
  width: 71.5%;
  margin-bottom: 10px;
  padding: 30px 30px 20px;
  border: 1px solid #eee;
  background: #fff;
  overflow: hidden;
}
.pics-header {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
  margin-bottom: 20px;
}
.header-title {
  color: #565656;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.pic-item {
  position: relative;
  overflow: hidden;
}
.item-shadow {
  box-shadow: rgb(238, 238, 238) 0px 2px 2px 0px;
}
.course-item {
  margin-bottom: 20px;
}
.item-buttom {
  height: 100px;
  bottom: 0;
  background: #fff;
  -webkit-transition: bottom 0.3s;
  transition: bottom 0.3s;
}
.item-info {
  position: absolute;
  height: 100%;
  padding: 20px 10px 0;
  bottom: -146px;
  background: #fff;
  z-index: 9;
  -webkit-transition: top 0.3s ease-out;
  transition: top 0.3s ease-out;
  display: none;
}
.course-name {
  display: block;
  width: 100%;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
.course-data {
  position: absolute;
  display: block;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 53px;
  padding: 0 10px;
  font-size: 12px;
  color: #9b9da2;
  background: #fff;
  z-index: 10;
}
.pic-item:hover .item-info {
  bottom: -95px;
  display: block;
}
</style>