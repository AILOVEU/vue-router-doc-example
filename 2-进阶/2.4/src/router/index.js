import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
    import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/post",
    name: "PostNav",
    component: () =>
      import(/* webpackChunkName: "postnav" */ "../views/PostNav.vue")
  },
  {
    path: "/post/:id",
    name: "Post",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Post.vue")
  },
  {
    path: "/login/:name",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/login",
    name: "LoginNav",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
