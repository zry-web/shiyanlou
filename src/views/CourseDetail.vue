<template>
  <div id="course-detail" class="clean">
    <div class="cd-left fl">
      <p class="course-nav">
        <span>全部课程</span>/
        <span>新手入门</span>/
        <span>新手入门指南之玩转实验楼</span>
      </p>
      <div class="course-info">
        <h3 class="course-tit">
          新手入门指南之玩转实验楼
          <span>免费</span>
        </h3>
        <p class="course-count">
          <span>395512人学过</span>
          <span>1816人关注</span>
          <span>作者:情人草</span>
        </p>
        <p
          class="course-desc"
        >本实验通过一个 C 语言的编程例子学习实验楼的使用方法，面向完全没有编程经验的用户。从中我们将了解到实验楼的实验精神：“从实践切入，依靠交互性、操作性更强的课程，理论学习+动手实践共同激发你的创造力。”</p>
      </div>
      <div class="studed">
        <h3>你将学到</h3>
        <div class="study-course">
          <ul class="clean">
            <li>实验楼的使用方法</li>
            <li>实验楼的使用方法</li>
            <li>实验楼的使用方法</li>
            <li>实验楼的使用方法</li>
            <li>实验楼的使用方法</li>
            <li>实验楼的使用方法</li>
          </ul>
        </div>
      </div>
      <div class="course-con">
        <h3>
          课程内容
          <span>共一个章节</span>
        </h3>
        <ul>
          <li>
            <div class="con-tit clearfix">
              <span class="fl">实验 1</span>
              <p class="fl">Hello，ShiYanLou!</p>
              <button class="startStu">开始学习</button>
              <button class="join">需加入课程后学习，点击加入</button>
            </div>
            <div class="con-desc">
              知识点:
              <span>1.Linux基本命令</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="course-pre">
        <h3>课程介绍</h3>
        <div class="course-task">
          <p>实验任务</p>
          <ul>
            <li>在线完成一个输出 Hello Shiyanlou 的小程序</li>
            <li>在线完成一个输出 Hello Shiyanlou 的小程序</li>
          </ul>
        </div>
        <div class="course-knowedge">
          <h6>先学知识</h6>
          <p>不需要任何先学知识。</p>
        </div>
        <div class="course-dif">
          <h6>课程难度</h6>
          <p>本课程难度为简单。</p>
        </div>
        <div class="users">
          <h6>面向用户</h6>
          <p>本课程为实验楼的使用方法的介绍，面向没有编程经验的新手，如果你希望通过实验楼在线动手实践的方式入门 IT 技术，本课程是你第一个需要完成的课程。</p>
        </div>
      </div>
      <div class="course-tea">
        <h3>课程教师</h3>
        <div class="tea-con clean">
          <a href="#" class="photo fl">
            <img src="" />
          </a>
          <div class="fl tea-info">
            <p>
              <span class="name">Edward</span>
              <span class="course-count">共发布过14门课程</span>
            </p>
            <p class="tea-desc">资深程序员，5年Linux运维、企业级开发经验及数据库实战和教学经验。</p>
            <a class="look-all" href="">查看老师全部课程></a>
          </div>
        </div>
      </div>
    </div>
    <div class="cd-right fr"></div>
  </div>
</template>
<script>
export default {
  name: "CourseDetail",
  data() {
    return {};
  },
  created() {}
};
</script>
<style lang="scss" scoped>
#course-detail {
  width: 1140px;
  margin: 0 auto;
  .studed,
  .course-con,
  .course-pre,
  .course-tea {
    margin-bottom: 10px;
    padding: 30px 30px 20px;
    border: 1px solid #eee;
    background: #fff;
    h3 {
      color: #565656;
      font-weight: 500;
      font-size: 20px;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      padding-bottom: 5px;
      margin-bottom: 20px;
    }
  }
  .cd-left {
    width: 815px;
    .course-nav {
      font-size: 14px;
      color: #6c757d;
      margin: 20px 0 10px;
      span {
        margin-right: 10px;
      }
    }
    .course-info {
      margin-bottom: 10px;
      padding: 30px 30px 20px;
      border: 1px solid #eee;
      background: #fff;
      .course-tit {
        margin-bottom: 10px;
        margin: 0 10px 0 0;
        line-height: 1.6;
        color: #565656;
        font-weight: 500;
        font-size: 22px;
      }
      .course-count {
        font-size: 14px;
        margin-bottom: 15px;
        color: #a4a4a4;
        span {
          &:after {
            content: "";
            width: 1px;
            height: 30px;
            display: inline-block;
            background: #eee;
            margin: 0 10px -9px 10px;
          }
        }
      }
      .course-desc {
        font-size: 15px;
        margin-bottom: 10px;
        word-wrap: break-word;
        letter-spacing: 1px;
        color: #666 !important;
      }
    }
    .studed {
      .study-course {
        ul {
          padding: 20px 0;
          background-color: #f7f7f7;
          color: #565656;
          font-weight: 500;
          font-size: 16px;
          li {
            width: 344px;
            float: left;
            margin-left: 32px;
            &:before {
              content: url("../assets/img/duihao.png");
              margin-right: 15px;
            }
          }
        }
      }
    }
    .course-con {
      h3 {
        span {
          font-size: 16px;
          color: #a4a4a4;
          float: right;
        }
      }
      ul {
        li {
          margin-top: 15px;
          min-height: 58px;
          border: 1px solid #eee;
          background-color: #fff;
          .con-tit {
            padding: 10px;
            min-height: 58px;
            background-color: #f7f7f7;
            line-height: 1.5;
            span {
              margin-left: 12px;
              color: #999;
              font-size: 16px;
              font-weight: 400;
            }
            p {
              margin-left: 20px;
              max-width: 76%;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            button {
              background: none;
              border: none;
            }
            .startStu {
              color: #fff;
              background-color: #08bf91;
              border-color: #08bf91;
              padding: 7px 12px;
              border-radius: 10px;
              &:hover {
                background: #068e6c;
                border-color: #068e6c;
              }
            }
            .join {
              color: #068e6c;
            }
          }
          .con-desc {
            padding: 10px 20px;
            color: #a5a5a5;
            font-size: 14px;
            background: #fff;
          }
        }
      }
    }
    .course-pre {
      .course-task {
        p {
          margin-top: 25px;
          font-size: 16px;
          line-height: normal;
        }
        ul {
          background: #fbfbf8;
          padding-bottom: 10px;
          padding-top: 10px;
          color: #817f74;
          line-height: 2;
          padding-left: 40px;
          box-sizing: border-box;
          li {
            //   margin-left:20px;
            list-style: disc;
          }
        }
      }
      .course-knowedge,
      .course-dif,
      .users {
        h6 {
          margin-top: 25px;
          font-size: 16px;
          line-height: normal;
          margin-bottom: 10px;
        }
        p {
          line-height: 1.4rem;
          letter-spacing: 1px;
          color: #565656;
        }
      }
    }
    .course-tea {
    }
  }
}
</style>