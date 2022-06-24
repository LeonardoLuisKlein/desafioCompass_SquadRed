<template>
  <div>
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
export default {
  // eslint-disable-next-line
  name: "Success",
  components: {
    Texts,
    Footer,

  },
};
</script>

<style></style>
