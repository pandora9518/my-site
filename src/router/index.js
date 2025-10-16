import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "@/store";
import { titleController } from "@/utils";
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
});
router.afterEach((to, from) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title);
    if (store.state.setting.data.siteTitle) {
      titleController.setSiteTitle(store.state.setting.data.siteTitle);
    }
  }
});
export default router;
