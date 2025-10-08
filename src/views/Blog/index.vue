<template>
  <Layout>
    <BlogList />
    <template #right>
      <div>
        <BlogCategory />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "./components/BlogList";
import BlogCategory from "./components/BlogCategory";
export default {
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },
};
</script>

<style></style>
