<template>
  <div id="app">
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1"
    />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

html,
body,
#app {
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.disable-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

button {
  cursor: pointer;
}
</style>
