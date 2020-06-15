import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import About from "../views/About.vue";
import UserIndex from "../views/UserIndex.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user/:id",
    component: User,
    children: [
      //匹配/user/jike,如果去掉，使用上面的User
      {
        path: "",
        component: UserIndex
      },
      {
        path: "home",
        component: Home
      },
      {
        path: "about",
        component: About
      }
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
