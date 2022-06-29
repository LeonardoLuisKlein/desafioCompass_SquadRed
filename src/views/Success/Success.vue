<template>
  <div class="success">
    <PageLoader v-show="this.$store.state.isLoaded" />
    <div v-show="!this.$store.state.isLoaded">
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
</template>

<script>
import Main from "@/components/Main/Main.vue";
import Footer from "@/components/Footer/Footer.vue";
import Header from "@/components/Header/Header.vue";
import PageLoader from "@/components/PageLoader/PageLoader.vue";
export default {
  // eslint-disable-next-line
  name: "Success",
  components: {
    Main,
    Footer,
    Header,
    PageLoader,
  },
  mounted() {
    if (!this.$store.state.loggedUser) {
      this.$router.push("/ErrorV");
      this.$store.state.loggedUser = false;
      window.localStorage.setItem("loggedUser", false);
    }
    // document.onreadystatechange = () => {
    //   if (document.readyState == "complete") {
    //     this.isLoaded = true;
    //     console.log(this.isLoaded);
    //     console.log(document.readyState);
    //   }
    // };
  },
};
</script>

<style lang="scss" scooped>
@import "./Success.scss";
</style>
