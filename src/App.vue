<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <SiteAside />
      </template>
      <template #default>
        <router-view></router-view>
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "./components/Layout/index.vue";
import SiteAside from "./components/SiteAside/index.vue";
import ToTop from "./components/ToTop/index.vue";
export default {
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
}
</style>
