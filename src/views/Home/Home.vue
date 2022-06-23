<template>
  <div class="home">
    <div class="leftHome">
      <div class="welcome">
        <h1 class="title">Olá,</h1>
        <p class="paragraph">
          Para continuar navegando de forma segura, efetue o login na rede.
        </p>
      </div>
      <div class="form">
        <h2>Login</h2>
        <Inputs type="text" placeholder="Usuário" idInput="userInput" />
        <Inputs type="password" placeholder="Senha" idInput="pwInput" />
        <Span />
        <Button />
      </div>
    </div>
    <div class="rightHome">
      <div id="logo">
      <img src="@/assets/logo.png" alt="">
      </div>
    </div>
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
