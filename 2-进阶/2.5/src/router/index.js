import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior (to) {
    //如果是跳转到about页面，会滚动到800的位置，home页面则不会
    if(to.path == "/about"){
      return { x: 0, y: 800 }
    }else{
      return { x: 0, y: 0 }
    }
  }
});

export default router;
