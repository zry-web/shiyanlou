import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Paths from "../views/nav/Paths.vue";
import Bootcamp from "../views/nav/Bootcamp.vue";

<<<<<<< HEAD
Vue.use(VueRouter);
=======

Vue.use(VueRouter)
>>>>>>> f6ce71fda3945568ee2711f0fca7ed212555a8c9

const routes = [

  {
<<<<<<< HEAD
    path: "/",
    name: "home",
    component: Home
=======
    path: '/',
    name: 'home',
    component: Home,
    // children: [{

    // }]
>>>>>>> f6ce71fda3945568ee2711f0fca7ed212555a8c9
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
