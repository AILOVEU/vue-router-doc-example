import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Helper from "../views/Helper.vue";
import QA from "../views/QA.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  }, {
    path: "/user/:id",
    name: "User",
    component: User,
    //?如果 props 是一个对象，它会被按原样设置为组件属性。当 props 是静态的时候有用
    props:  true
  },
  {
    path: "/helper/:id",
    name: "Helper",
    components: {
      default: Helper,
      qa: QA
    },
    props: {
      // props 被设置为 true，route.params == props
      default: true,
      //将它改为true，则会变成QA：123
      qa: false
    }
  },

];

const router = new VueRouter({
  routes
});

export default router;
