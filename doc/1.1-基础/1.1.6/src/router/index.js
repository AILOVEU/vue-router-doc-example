import Vue from "vue";
import VueRouter from "vue-router";
import B from '../views/B';

Vue.use(VueRouter);

const routes = [
  {
    path: '/a',
    redirect: '/b'
  },
  {
    path: '/b',
    alias: '/c',
    component: B
  }
];

const router = new VueRouter({
  routes
});

export default router;
