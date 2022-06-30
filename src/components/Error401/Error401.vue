<template>
  <div class="erro disable-select">
    <img src="@/assets/errorimage.png" alt="error image" class="errorimg">
    <h1>Error 401</h1>
    <h2>Unauthorized Access</h2>
    <h3>You must be logged in to access this page.</h3>
    <h3>You will be redirect in {{ time }} s...</h3>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line 
  name: "Error401",
  data(){
    return {
      time: 7
    }
  },
  methods: {
    redirect(){
      this.time-- 
      if(this.time==0){
        this.$router.push('/')
      }
    }
  },
  mounted() {
    this.$store.state.loggedUser = false;
    window.localStorage.getItem("loggedUser", this.$store.state.loggedUser);
    window.localStorage.setItem("username", "");
    window.localStorage.setItem("password", "");

    setInterval(() => {
      this.redirect()
    }, 1000);
  },
};
</script>

<style lang="scss" scooped>
@import "./Error401.scss";
</style>
