<template>
  <div class="home">
    <div class="form">
      <Inputs type="text" placeholder="Usuário" idInput="userInput" />
      <Inputs type="password" placeholder="Senha" idInput="pwInput" />

      <Span />
      <Button />
    </div>
    <p id="teste"></p>
  </div>
</template>

<script>
import Inputs from "@/components/Inputs/Inputs.vue";
import Span from "@/components/Span/Span.vue";
import Button from "@/components/Button/Button.vue";

export default {
  // eslint-disable-next-line
  name: "Home",
  components: {
    Inputs,
    Span,
    Button,
  },
  methods: {},
};
</script>

<style lang="scss" scooped>
@import "./Home.scss";
</style>
