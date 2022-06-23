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
      const nameStorage = window.localStorage.getItem("name");
      const pwStorage = window.localStorage.getItem("password");
      if (nameStorage && pwStorage) {
        this.$store.state.access = true;
        window.localStorage.setItem("access", this.$store.state.access);
        document.getElementById('spanId').style.visibility = 'hidden'
        // this.$router.push('/Sucess')
      } else {
        document.getElementById('spanId').style.visibility = 'visible'
        this.$store.state.access = false;
        window.localStorage.setItem("access", this.$store.state.access);
      }
    },
  },
};
</script>

<style lang="scss" scooped>
@import "./Button.scss";
</style>
