import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Paths from "../views/Paths.vue";
import Bootcamp from "../views/Bootcamp.vue";
import Detail from "../views/Detail.vue";
import Louplus from "../views/Louplus.vue";
import Plus from "../views/plus/Plus.vue";
import User from "../views/users/User.vue";
import Vip from "../views/vip/Vip.vue";
import VueCookies from "vue-cookies";
<<<<<<< HEAD
import Course from "../views/Course.vue";
import CourseCard from "../views/Course/Course_card.vue";
import CourseDetail from "../views/CourseDetail.vue";
import Library from "../views/Library.vue";
import Pathdetail from "../views/Pathdetail.vue";
=======
import Course from '../views/Course.vue';
import CourseCard from '../views/Course/Course_card.vue';
import CourseDetail from '../views/CourseDetail.vue';
import Library from '../views/Library.vue';
<<<<<<< HEAD
import Search from '../views/search/search';
=======
import AsAuthor from '../views/AsAuthor.vue';
>>>>>>> 183dca90ce5e49aacfe0173d3fa0b4cd24977e7f
>>>>>>> 281b2af2758a375e99422793928e49ea5ac300d5
$cookies.config("0", "/");
Vue.use(VueCookies);

Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "Home",
  component: Home,
  meta: {
    title: "在线做实验，高效学编程 - 实验楼"
  }
},
{
  path: "/paths",
  name: "Paths",
  component: Paths,
  meta: {
<<<<<<< HEAD
    title: "路径"
  }
},
{
  path: "/pathdetail",
  name: "Pathdetail",
  component: Pathdetail,
  meta: {
    title: "路径详情"
=======
      title: 'IT工程师学习路线_养成路径_实验楼学习路径 - 实验楼'
>>>>>>> 183dca90ce5e49aacfe0173d3fa0b4cd24977e7f
  }
},
{
  path: "/bootcamp",
  name: "Bootcamp",
  component: Bootcamp,
  meta: {
    title: "训练营"
  }
},
{
  path: "/louplus",
  name: "Louplus",
  component: Louplus
},
{
  path: "/plus",
  name: "plus",
  component: Plus,
  meta: {
    title: "实验楼+ 课程"
  }
},
{
  path: "/vip",
  name: "vip",
  component: Vip,
  meta: {
    title: "会员"
  }
},
{
  path: "/course",
  name: "course",
  component: Course,
  meta: {
    title: "精选项目课程_IT热门课程_实验楼课程 - 实验楼"
  },
  children: [{
    path: "card",
    component: CourseCard
  }]
},
{
  path: "/detail",
  name: "Detail",
  component: Detail
},


//   {
//     path: '/courses/reports/:id',
//     name: 'report',
//     component: ,
//     meta: {
//         title: '实验楼'
//     }
// },
{
  path: "/user",
  name: "user",
  component: User,
  meta: {
    title: "用户信息"
  },
  children: [{
    path: "/user/1",
    name: "user_course",
    component: () => import("../views/users/news/user_course.vue")
  },
  {
    path: "/user/2",
    name: "user_path",
    component: () => import("../views/users/news/user_path.vue")
  },
  {
    path: "/user/3",
    name: "user_report",
    component: () => import("../views/users/news/user_report.vue")
  },
  {
    path: "/user/4",
    name: "user_talk",
    component: () => import("../views/users/news/user_talk.vue")
  },
  {
    path: "/user/5",
    name: "user_match",
    component: () => import("../views/users/news/user_match.vue")
  },
  {
    path: "/user/6",
    name: "user_courses",
    component: () => import("../views/users/news/user_courses.vue")
  }
  ]
},
{
  path: "*",
  name: "notfound",
  component: () => import("@/views/404.vue"),
  meta: {
    title: "Sorry，页面走丢了... - 实验楼"
  }
},
{
  path: "/coursedetail",
  name: "coursedetail",
  component: CourseDetail,
  meta: {
    title: "课程详情"
  }
},

//search
{
  path: "/search",
  name: "search",
  component: Search,
  meta: {
    title: '搜索',

  }
},
{
  path: "/library",
  name: "library",
  component: Library,
  meta: {
    title: '教程库-精品编程学习教程库 - 实验楼',
    content: 'disable'
  }
},
{
  path: "/library",
  name: "library",
  component: Library,
  meta: {
    title: '教程库-精品编程学习教程库 - 实验楼',
    content: 'disable'
  }
}, {

  path: "/user/profile",
  name: "user_profile",
  component: () => import("../views/users/userprofile.vue")
},
{
  path: '/asauthor',
  name: 'asauthor',
  component: AsAuthor
}
];

const router = new VueRouter({
  mode: "history",
  routes
});
// router.beforeEach((to, from, next) => {
//   next();
// });
export default router;
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面meta */
  if (to.meta.content) {

    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');
    head[0].appendChild(meta)

    let head = document.getElementsByTagName("head");
    let meta = document.createElement("meta");
    meta.content = to.meta.content;
    head[0].appendChild(meta);

  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = '实验楼'
  }

  next();
});


