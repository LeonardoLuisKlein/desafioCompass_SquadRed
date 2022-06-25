<template>
  <div class="timer">
    {{ countdown }}
  </div>
</template>

<script>
export function resetCountdown() {
  this.countdown = 500;
  console.log('click');
}
export default {
  // eslint-disable-next-line
  name: "Timer",
  data() {
    return {
      countdown: 600,
    };
  },
  methods: {
    regressive() {
      this.countdown--;
      if (this.countdown == 0) {
        this.$store.state.loggedUser = false;
        window.localStorage.setItem("loggedUser", this.$store.state.loggedUser);
        window.localStorage.setItem("name", "");
        window.localStorage.setItem("password", "");
        this.$router.push("/");
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.regressive();
    }, 1000);
  },
};
</script>

<style lang="scss" scooped>
@import "./Timer.scss";
</style>
