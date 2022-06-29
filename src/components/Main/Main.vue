<template>
  <div class="main">
    <div class="mainLeft">
      <img src="@/assets/compass.png" alt="Logo Compass" />
    </div>
    <div class="mainRight">
      <Title class="sucessTitleSmall" type="h5" tMensage="Our mission is" />
      <Texts class="sucessText" msg="Nossa missão é" />
      <Title
        class="sucessTitleBig"
        type="h4"
        tMensage="to transform the world"
      />
      <Texts class="sucessText" msg="Transformar o mundo" />
      <Title
        class="sucessTitleBig"
        type="h4"
        tMensage="building digital experiences"
      />
      <Texts class="sucessText" msg="construindo experiências digitais" />
      <Title
        class="sucessTitleBig"
        type="h4"
        tMensage="that enable our client's growth"
      />
      <Texts
        class="sucessText"
        msg="que permitam o crescimento dos nossos clientes"
      />
    </div>
  </div>
</template>

<script>
import Texts from "@/components/Texts/Texts.vue";
import Title from "@/components/Title/Title.vue";

export default {
  // eslint-disable-next-line
  name: "Main",
  components: {
    Texts,
    Title,
  },
};
</script>

<style lang="scss" scooped>
@import "./Main.scss";
</style>
