<template>
  <div class="blog-comment">
    <MessageArea
      :list="data.rows"
      title="评论列表"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComments } from "@/api/blog.js";
import { postComment } from "@/api/blog.js";
export default {
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  mixins: [fetchData({})],
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      if (resp) {
        this.data.total++;
        this.data.rows.unshift(resp);
        callback("评论成功");
      }
    },
  },
};
</script>

<style></style>
