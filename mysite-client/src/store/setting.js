import { getSetting } from "@/api/setting";
export default {
  namespaced: true,
  state: {
    loading: false,
    data: [],
  },
  mutations: {
    setLoading(state, payLoad) {
      state.loading = payLoad;
    },
    setData(state, payLoad) {
      state.data = payLoad;
    },
  },
  actions: {
    async fetchSetting(ctx) {
      if (ctx.state.data.length > 0) {
        return;
      }
      ctx.commit("setLoading", true);
      const resp = await getSetting();
      ctx.commit("setLoading", false);
      ctx.commit("setData", resp);
    },
  },
};
