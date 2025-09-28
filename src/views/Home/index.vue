<template>
  <div class="home-container">
    <Carouselitem v-for="item in bannerList" :key="item.id"/>
  </div>
</template>

<script>
import { getBanners } from "@/api/banner";
import Carouselitem from "./Carouselitem.vue";
export default {
  components: {
    Carouselitem,
  },
  data() {
    return {
      bannerList: [],
    };
  },
  async created() {
    this.bannerList = await getBanners();
  },
};
</script>

<style></style>
