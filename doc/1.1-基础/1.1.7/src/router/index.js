import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
// import Helper from "../views/Helper.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },{
    path: "/user/:id",
    name: "User",
    component: {
      default: User,
      // helper: Helper
    },
    // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项
    props: {
      default: true,
      // helper: false
    }
  },
  {
    path: "/user",
    name: "User",
    component: User
  },
  
];

const router = new VueRouter({
  routes
});

export default router;
