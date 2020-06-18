import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    beforeEnter: (to, from, next) => {
      console.log('about-----router-----beforeEach----------');
      console.log('-----to-----');
      console.log(to);
      console.log('-----from-----');
      console.log(from);
      next();
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // 3. 调用router的路由独享的守卫beforeEnter
      beforeEnter: (to, from, next) => {
      console.log('about-----router-----beforeEach----------');
      console.log('-----to-----');
      console.log(to);
      console.log('-----from-----');
      console.log(from);
      next();
    }
  }
];

const router = new VueRouter({
  routes
});

// 2. 调全局beforeEach
router.beforeEach((to, from, next) => {
  console.log('全局----------beforeEach----------');
  console.log('-----to-----');
  console.log(to);
  console.log('-----from-----');
  console.log(from);
  next();
})

// 5. 调全局后置钩子afterEach
router.afterEach((to, from) => {
  console.log('全局----------afterEach----------');
  console.log('-----to-----');
  console.log(to);
  console.log('-----from-----');
  console.log(from);
})

export default router;
