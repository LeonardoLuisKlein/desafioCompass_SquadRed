<template>
  <div>
    <Text msg="Nossa missão é" />
    <Text msg="Transformar o mundo" />
    <Text msg="construindo experiências digitais" />
    <Text msg="que permitam o crescimento dos nossos clientes" />
    <Footer />
  </div>
</template>

<script>
import Text from "@/components/Main/Text/Text.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  // eslint-disable-next-line
  name: "Success",
  components: {
    Text,
    Footer,

  },
};
</script>

<style></style>
