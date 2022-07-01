<template>
  <div class="main">
    <div class="logo-full">
      <img  id="logo" src="@/assets/compass.png" alt="Logo Compass" draggable="false" class="disable-select"/>
    </div>
    <div class="logo-half">
      <img src="@/assets/uol-ball-slash.png"  alt="">
    </div>
    <div class="mainRight disable-select" draggable="false">
      <Title class="sucessTitleSmall" type="h5" tMensage="Our mission is"  />
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
