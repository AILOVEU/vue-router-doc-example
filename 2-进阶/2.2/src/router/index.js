import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    children: [
      {
        path: 'about',
        name: 'About',
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
        meta: { requiresAuth: true }
      }
    ]
  },
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  //数组to.matched匹配条件
  //some方法，有一个返回true，则为true，否则为false
  if (to.matched.some(record => record.meta.requiresAuth)) {
    var isLogin = true;
    if(!isLogin){
      next({
        path: '/home'
      });
    }else{
      next() // 确保一定要调用 next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router;
