import Vue from "vue";
import VueRouter from "vue-router";
import UserEmailsSubscriptions from "../views/UserEmailsSubscriptions";
import UserProfile from "../views/UserProfile";
import UserProfilePreview from "../views/UserProfilePreview";
import UserSettings from "../views/UserSettings";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/settings',
      // You could also have named views at tho top
      component: UserSettings,
      children: [{
        path: 'emails',
        component: UserEmailsSubscriptions
      }, {
        path: 'profile',
        components: {
          default: UserProfile,
          helper: UserProfilePreview
        }
      }]
    }
  ]
})

router.push('/settings/emails')

export default router;
