import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Paths from "../views/nav/Paths.vue";
import Bootcamp from "../views/nav/Bootcamp.vue";
import Louplus from "../views/nav/Louplus.vue";
import Plus from "../views/plus/Plus.vue";
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
  }
];

const router = new VueRouter({
  routes
});
// router.beforeEach((to, from, next) => {
//   next();
// });
export default router;
