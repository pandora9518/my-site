import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "@/router/index.js";
import showMessage from "@/utils/showMessage";
window.showMessage = showMessage;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
