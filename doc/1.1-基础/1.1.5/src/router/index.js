import Vue from "vue";
import VueRouter from "vue-router";
import Body from "../views/body";
import Footer from "../views/footer";
import Top from "../views/top";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Body,
        a: Top,
        b: Footer
      }
    }
  ]
})

export default router;
