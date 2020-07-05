import Vue from "vue";
import VueRouter from "vue-router";
import C from "../views/C";
import A from "../views/A";
import B from "../views/B";
import Settings from "../views/Settings";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      //第一级路径
      path: '/settings',
      component: Settings,
      children: [{
        //第二级路径：/settings/emails
        path: 'emails',
        //无命名视图
        component: C
      }, {
        //第二级路径：/settings/profile
        path: 'profile',
        components: {
          // 默认显示A
          default: A,
          // 命名视图helper为B
          helper: B
        }
      }]
    }
  ]
})

// router.push('/settings/emails')

export default router;
