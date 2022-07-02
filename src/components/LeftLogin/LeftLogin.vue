<template>
  <div class="left-login">
    <div id="logo1">
      <img
        draggable="false"
        src="@/assets/logo.png"
        class="img-1 disable-select"
        alt=""
      />
    </div>
    <div class="welcome disable-select">
      <h1 class="title">Olá,</h1>
      <p class="paragraph">
        Para continuar navegando de forma segura, efetue o login na rede.
      </p>
    </div>
    <div class="form">
      <h2 class="disable-select">Login</h2>
      <Inputs
        type="text"
        placeholder="Usuário"
        idInput="userInput"
        v-model="user"
      />
      <Inputs
        type="password"
        placeholder="Senha"
        idInput="pwInput"
        v-model="pw"
      />
      <Span />
      <Button />
    </div>
  </div>
</template>

<script>
import Inputs from "@/components/Inputs/Inputs.vue";
import Span from "@/components/Span/Span.vue";
import Button from "@/components/Button/Button.vue";

export default {
  name: "LeftLogin",
  components: {
    Inputs,
    Span,
    Button,
  },
  data() {
    return {
      user: "",
      pw: "",
    };
  },
  methods: {
    verify() {
      setTimeout(() => {
        this.$router.push("/Success");
        this.$store.state.isLoaded = true;
      }, 5000);
    },
  },
  created() {
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
      this.verify();
    }
  },
};
</script>

<style lang="scss" scooped>
@import "./LeftLogin.scss";
</style>
