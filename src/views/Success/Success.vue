<template>
  <div class="success">
    <PageLoader v-if="isLoaded" />
    <div v-else>
      <Header />
      <Texts msg="Nossa missão é" />
      <Texts msg="Transformar o mundo" />
      <Texts msg="construindo experiências digitais" />
      <Texts msg="que permitam o crescimento dos nossos clientes" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Texts from "@/components/Texts/Texts.vue";
import Footer from "@/components/Footer/Footer.vue";
import Header from "@/components/Header/Header.vue";
import PageLoader from "@/components/PageLoader/PageLoader.vue";
export default {
  // eslint-disable-next-line
  name: "Success",
  data() {
    return {
      isLoaded: false,
    };
  },
  components: {
    Texts,
    Footer,
    Header,
    PageLoader,
  },
  mounted() {
    if (!this.$store.state.loggedUser) {
      this.$router.push("/ErrorV");
      this.$store.state.loggedUser = false  
      window.localStorage.setItem('loggedUser', false)
          
    }
    console.log(document.readyState);
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
