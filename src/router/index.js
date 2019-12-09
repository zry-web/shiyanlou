import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Paths from "../views/nav/Paths.vue";
import Bootcamp from "../views/nav/Bootcamp.vue";
import Louplus from "../views/nav/Louplus.vue";
import Plus from "../views/plus/Plus.vue";
import User from "../views/users/User.vue";
import VueCookies from "vue-cookies";
$cookies.config("0", "/");
Vue.use(VueCookies);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/paths",
    name: "paths",
    component: Paths
  },
  {
    path: "/bootcamp",
    name: "bootcamp",
    component: Bootcamp
  },
  {
    path: "/louplus",
    name: "louplus",
    component: Louplus
  },
  {
    path: "/plus",
    name: "plus",
    component: Plus
  },
  {
    path: "/user",
    name: "user",
    component: User,
    children: [
      {
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
  }
];

const router = new VueRouter({
  routes
});
// router.beforeEach((to, from, next) => {
//   next();
// });
export default router;
