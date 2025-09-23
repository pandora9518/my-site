<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Avatar
      url="https://ts1.tc.mm.bing.net/th/id/OIP-C.tHAIAaw4ZNlr4v2ldAkvYwHaHa?w=196&h=211&c=8&rs=1&qlt=90&o=6&cb=thwsc5&pid=3.1&rm=2"
      :size="50"
    />
    <Pager :current="5" :total="50" @pageChange="handlePageChange"></Pager>
  </div>
</template>

<script>
import Avatar from "./components/Avatar.vue";
import Icon from "./components/Icon.vue";
import Pager from "./components/Pager.vue";

export default {
  name: "App",
  components: {
    Avatar,
    Icon,
    Pager
  },
  methods:{
    handlePageChange(pageNum) {
      console.log(pageNum,'pageNum改变了');
      
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
