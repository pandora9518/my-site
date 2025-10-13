import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "@/router/index.js";
import "@/mock/index.js";
import "./eventBus";
import { showMessage } from "@/utils";
Vue.prototype.$showMessage = showMessage;

//导入自定义指令
import Loading from "@/directives/loading.js";
import lazy from "@/directives/lazy.js";
Vue.directive("loading", Loading);
Vue.directive("lazy", lazy);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
