import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "@/router/index.js";
import { showMessage } from "@/utils";

import "@/mock/index.js";
import "./eventBus";
import Loading from "@/directives/loading.js";
Vue.directive("loading", Loading);
Vue.prototype.$showMessage = showMessage;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
