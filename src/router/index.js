import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Paths from "../views/nav/Paths.vue";
import Bootcamp from "../views/nav/Bootcamp.vue";

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
  }
];

const router = new VueRouter({
  routes
});

export default router;
