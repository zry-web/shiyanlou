<template>
  <div id="course-detail" class="clean">
    <div class="cd-left fl">
      <p class="course-nav">
        <span>全部课程</span>/
        <span>{{this.tag}}</span>/
        <span>{{courseDetail.title}}</span>
      </p>
      <div class="course-info">
        <h3 class="course-tit">
          {{courseDetail.title}}
          <span
            :class="{vip: courseDetail.feeType == '会员',xly: courseDetail.feeType == '训练营', mf: courseDetail.feeType == '免费'}"
          >{{courseDetail.feeType}}</span>
        </h3>
        <p class="course-count">
          <span>{{courseDetail.studentCount}}</span>
          <span>{{courseDetail.attentionCount}}</span>
          <span>{{courseDetail.author}}</span>
        </p>
        <p class="course-desc">{{courseDetail.descriptions}}</p>
      </div>
      <div class="studed" v-if="studed">
        <h3>你将学到的</h3>
        <div class="study-course">
          <ul class="clean">
            <li v-for="item in courseDetail.studed" :key="item._id">{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="course-con">
        <h3>
          课程内容
          <span>共{{courseContent}}个章节</span>
        </h3>
        <ul>
          <li v-for="item in courseDetail.courseContent" :key="item._id">
            <div class="ccon-list">
              <div class="con-tit clearfix">
                <span class="fl">{{ item.conType }}</span>
                <p class="fl">{{ item.cName }}</p>
                <button class="startStu">开始学习</button>
                <button class="join">需加入课程后学习，点击加入</button>
              </div>
              <div class="con-desc">{{ item.cDescriptions }}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="course-pre" v-if='taskCount || diff || users'>
        <h3>课程介绍</h3>
        <div class="course-task" v-if="taskCount">
          <p>实验任务</p>
          <ul>
            <li v-for="(item, index) in courseDetail.task" :key="index">{{ item.name }}</li>
          </ul>
        </div>
        <div class="course-knowedge">
          <h6>先学知识</h6>
          <p v-for="(item, index) in courseDetail.knowledge" :key="index">{{ item || '无须提前掌握相关知识' }}</p>
        </div>
        <div class="course-dif" v-if="diff">
          <h6>课程难度</h6>
          <p>{{ courseDetail.difficulty }}</p>
        </div>
        <div class="users" v-if="users">
          <h6>面向用户</h6>
          <p>{{ courseDetail.users }}</p>
        </div>
      </div>
      <div class="course-tea">
        <h3>课程教师</h3>
        <div class="tea-con clean">
          <a href="#" class="photo fl">
            <img :src="courseDetail.teacher.photo" />
          </a>
          <div class="fl tea-info">
            <p class="tea-name">
              <span class="name">{{courseDetail.teacher.name}}</span>
              <span class="course-count">{{courseDetail.teacher.release}}</span>
            </p>
            <p class="tea-desc">{{courseDetail.teacher.desc}}</p>
            <a class="look-all" href>查看老师全部课程></a>
          </div>
        </div>
      </div>
    </div>
    <div class="cd-right fr">
      <a href="#" class="topImg">
        <img :src="courseDetail.courseImg" />
      </a>
      <p class="feeType">免费</p>
      <button class="joinCourse">加入课程</button>
      <div class="taskCount">
        <ul>
          <li>21 个在线动手实验</li>
          <li>4 个实战场景挑战</li>
        </ul>
      </div>
      <p class="gz">
        <i></i>关注
      </p>
      <img />
      <img />
    </div>
  </div>
</template>
<script>
import { getCourseDetail } from "../api/course/course";
export default {
  name: "CourseDetail",
  data() {
    return {
      courseDetail: [],
      tag: "",
      studed: 0,
      courseContent: 0,
      taskCount: 0,
      diff: "",
      users: ""
    };
  },
  created() {
    let tit = this.$route.query.tit;
    this.tag = this.$route.query.tag;
    getCourseDetail(tit).then(res => {
      this.courseDetail = res.data.data;
      this.studed = this.courseDetail.studed.length;
      this.courseContent = this.courseDetail.courseContent.length;
      this.taskCount = this.courseDetail.task.length;
      this.diff = this.courseDetail.difficulty;
      this.users = this.courseDetail.users;
      console.log(this.courseDetail);
    });
  }
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
  .vip,
  .xly,
  .mf {
    width: 42px;
    height: 22px;
    text-align: center;
    line-height: 22px;
    color: #fff;
    font-size: 15px;
    border-radius: 14px;
    padding: 2px 6px;
    margin-left: 15px;
  }
  .vip {
    background: #ffc500;
  }
  .xly {
    background: #f66;
  }
  .mf {
    background: #80c269;
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
            margin-bottom: 15px;
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
          .ccon-list {
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
      .tea-con {
        .photo img {
          width: 70px;
          height: 70px;
          margin-right: 20px;
        }
        .tea-info {
          .tea-name {
            .name {
              color: #3a3a3a;
              font-size: 16px;
            }
            .course-count {
              color: #999;
              margin-left: 5px;
            }
          }
          .tea-desc {
            margin: 10px 0 0;
            color: #565656;
          }
          .look-all {
            display: inline-block;
            margin-top: 10px;
            text-decoration: none;
            color: #999;
          }
        }
      }
    }
  }
  .cd-right {
    width: 315px;
    margin-top: 50px;
    background: #fff;
    padding: 5px 5px 0;
    .topImg {
      img {
        width: 305px;
        height: 172px;
        margin-bottom: 20px;
      }
    }
    .feeType {
      font-weight: 500;
      color: #333;
      font-size: 16px;
      margin-bottom: 15px;
    }
    .joinCourse {
      display: block;
      width: 283px;
      height: 50px;
      border-radius: 10px;
      background: #08bf91;
      color: #fff;
      text-align: center;
      line-height: 50px;
      border: none;
      margin: 0 auto;
      margin-bottom: 20px;
      outline: none;
    }
    .taskCount {
      padding-left: 10px;
      box-sizing: border-box;
      font-size: 14px;
      border-bottom: 1px solid #eee;
      padding-bottom: 20px;
      color: #a4a4a4;
      ul {
        li {
          margin-bottom: 10px;
        }
      }
    }
    .gz {
      text-align: Center;
      line-height: 50px;
      font-size: 16px;
      color: #a4a4a4;
    }
  }
}
</style>