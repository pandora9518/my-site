<template>
  <Pager
    :current="current"
    :total="total"
    @pageChange="handlePageChange"
  ></Pager>
</template>

<script>
import Pager from "./";

export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
      total: 100,
    };
  },
  methods: {
    handlePageChange(pageNum) {
      this.current = pageNum;
    },
  },
};
</script>
