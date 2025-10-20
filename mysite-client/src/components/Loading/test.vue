<template>
  <div class="test-container">
    <button @click="isLoading = !isLoading">控制显示/隐藏</button>
    <Loading v-if="isLoading" />
  </div>
</template>

<script>
import Loading from "./";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: true,
    };
  },
};
</script>

<style>
.test-container {
  position: relative;
}
</style>
