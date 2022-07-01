<template>
  <div class="button-container">
    <button class="button" id="idButton" @click.prevent="register">
      {{ msgButton }}
    </button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Button",
  props: {
    msgButton: {
      typeof: String,
      default: "Continuar",
    },
    idButton: {
      typeof: String,
      default: "idButton",
    },
  },
  methods: {
    register() {
      const usernameStorage = window.localStorage.getItem("username");
      const pwStorage = window.localStorage.getItem("password");
      if (usernameStorage && pwStorage) {
        this.$store.state.loggedUser = true;
        window.localStorage.setItem("loggedUser", this.$store.state.loggedUser);
        document.getElementById('spanId').style.visibility = 'hidden'
        this.$router.push('/Success')
        this.$store.state.isLoaded = true
      } else {
        document.getElementById('spanId').style.visibility = 'visible'
        this.$store.state.loggedUser = false;
        window.localStorage.setItem("loggedUser", this.$store.state.loggedUser);
        document.getElementById('userInput').style.borderColor = '#E9B425'
        document.getElementById('pwInput').style.borderColor = '#E9B425'
      }
    },
  },
};
</script>

<style lang="scss" scooped>
@import "./Button.scss";
</style>
