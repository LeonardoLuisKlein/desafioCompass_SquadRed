<template>
  <footer class="footer">
    <div class="informative">
      <Texts
        textContainer="informative1"
        textClass=""
        msg="Essa janela do navegador é usada para manter sua sessão de autenticação ativa."
      />
      <Texts
        textContainer="informative2"
        textClass=""
        msg="Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar."
      />
    </div>
    <div class="timerContainer">
      <Texts textClass="aplicattion" msg="Aplicattion refresh in" />
      <div class="timerSeconds">
        <Timer />
        <Texts textClass="seconds" msg="seconds" />
      </div>
    </div>
    <div class="buttonsFooter">
      <Buttons msgButton="Continuar Navegando" buttonsContainer="keepNav" :event='resetCountdown'/>
      <Buttons
        msgButton="Logout"
        buttonsContainer="logoutBut"
        :event="logout"
      />
    </div>
  </footer>
</template>

<script>
import { resetCountdown } from "./components/Timer/Timer.vue";
import Timer from "./components/Timer/Timer.vue";
import Texts from "../Texts/Texts.vue";
import Buttons from "./components/Buttons/Buttons.vue";
export default {
  // eslint-disable-next-line
  name: "Footer",
  components: { Timer, Texts, Buttons },
  methods: {
    logout() {
      this.$store.state.loggedUser = false;
      window.localStorage.setItem("loggedUser", this.$store.state.loggedUser);
      window.localStorage.setItem("name", "");
      window.localStorage.setItem("password", "");
      this.$router.push("/");
    },
    resetCountdown,
  },
};
</script>

<style lang="scss" scooped>
@import "./Footer.scss";
</style>
