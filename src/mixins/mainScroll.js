export default function (refValue) {
  return {
    mounted() {
      this.$bus.$on("setMainScroll", this.setMainScroll);
      this.$refs[refValue].addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      this.$bus.$emit("mainScroll");
      this.$bus.$off("setMainScroll", this.setMainScroll);
      this.$refs[refValue].removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.$bus.$emit("mainScroll", this.$refs[refValue]);
      },
      setMainScroll(scrollTop) {
        this.$refs[refValue].scrollTop = scrollTop;
      },
    },
  };
}
