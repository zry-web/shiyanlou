import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Paths from "../views/Paths.vue";
import Bootcamp from "../views/Bootcamp.vue";
import Louplus from "../views/Louplus.vue";
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
    name: "Paths",
    component: Paths
  },
  {
    path: "/bootcamp",
    name: "Bootcamp",
    component: Bootcamp
  },
  {
    path: "/louplus",
    name: "Louplus",
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
