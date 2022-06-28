<template>
  <div  class="erro disable-select">
    <h1>Error 401</h1>
    <h2>Unauthorized Access</h2>
    <h3>You must be logged in to access this page.</h3>
  </div>
</template>

<script>
export default {
  name: "ErrorV",
  mounted(){
    this.$store.state.loggedUser = false
    window.localStorage.getItem('loggedUser', this.$store.state.loggedUser)
  }
};

</script>

<style lang="scss" scooped>
@import "./ErrorV.scss";
</style>
