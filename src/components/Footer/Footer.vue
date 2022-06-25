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
  </footer>
</template>

<script>
import Timer from "./components/Timer/Timer.vue";
import Texts from "../Texts/Texts.vue";
export default {
  // eslint-disable-next-line
  name: "Footer",
  components: { Timer, Texts },
};
</script>

<style lang="scss" scooped>
@import "./Footer.scss";
</style>
