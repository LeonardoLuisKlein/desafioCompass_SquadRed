<template>
  <footer class="footer">
    <div class="timerContainer">
      <Text textClass="aplicattion" msg="Aplicattion refresh in" />
      <div class="timerSeconds">
        <Timer />
        <p class="seconds">seconds</p>
      </div>
    </div>
  </footer>
</template>

<script>
import Timer from "./components/Timer/Timer.vue";
import Text from "../Text/Texts.vue";
export default {
  // eslint-disable-next-line
  name: "Footer",
  components: { Timer, Text },
};
</script>

<style lang="scss" scooped>
@import "./Footer.scss";
</style>
