<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="toc" @select="handleSelectChange" />
  </div>
</template>

<script>
import RightList from "./RightList";
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
    },
  },
  methods: {
    handleSelectChange(option) {
      location.hash = option.anchor;
    },
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
