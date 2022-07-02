<template>
  <div class="timer">
    {{ this.$store.state.timerState }}
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Timer",
  date() {
    return {
      canCount: false,
    };
  },

  methods: {
    regressive() {
      if (this.canCount) {
        this.$store.state.timerState--;
        if (this.$store.state.timerState == 0) {
          this.$store.state.loggedUser = false;
          window.localStorage.setItem(
            "loggedUser",
            this.$store.state.loggedUser
          );
          window.localStorage.setItem("name", "");
          window.localStorage.setItem("password", "");
          this.$router.push("/");
        }
      }
    },
  },
  mounted() {
    this.canCount = true;
    setInterval(() => {
      this.regressive();
    }, 1000);
  },
  destroyed() {
    this.canCount = false;
    this.$store.state.timerState = 600;
  },
};
</script>

<style lang="scss" scooped>
@import "./Timer.scss";
</style>
