<template>
  <footer class="footer">
    <div class="timerContainer">
      <Texts textClass="aplicattion" msg="Aplicattion refresh in" />
      <div class="timerSeconds">
        <Timer />
        <p class="seconds">seconds</p>
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
