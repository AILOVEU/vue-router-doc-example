import Vue from "vue";
import App from "./App.vue";

import HashRouter from "./router/router-hash";
// import HashHistory from "./router/router-history";

Vue.config.productionTip = false;

new Vue({
  router:HashRouter,
  render: h => h(App)
}).$mount("#app");