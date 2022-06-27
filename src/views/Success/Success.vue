<template>
  <div class="success">
    <Header />
    <Texts msg="Nossa missão é" />
    <Texts msg="Transformar o mundo" />
    <Texts msg="construindo experiências digitais" />
    <Texts msg="que permitam o crescimento dos nossos clientes" />
    <Footer />
  </div>
</template>

<script>
import Texts from "@/components/Texts/Texts.vue";
import Footer from "@/components/Footer/Footer.vue";
import Header from "@/components/Header/Header.vue";
export default {
  // eslint-disable-next-line
  name: "Success",
  components: {
    Texts,
    Footer,
    Header,
  },
  mounted() {
    if (!this.$store.state.loggedUser) {
      console.log("não pode acessar deslogado");
      this.$router.push('/')
    }
  },
};
</script>

<style lang="scss" scooped>
@import "./Success.scss";
</style>
