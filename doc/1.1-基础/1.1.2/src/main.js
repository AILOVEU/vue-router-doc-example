import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

//定义一个/user/:id/home和/user/:id/about
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
