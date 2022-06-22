<template>
  <div class="container">
    <div :class="containerInput">
      <input :type="typeInput" :class="inputClass" :placeholder="placeholder" :id="idInput" />
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Inputs",

  props: {
    typeInput: String,
    spanMsg: String,
    placeholder: String,
    containerInput: String,
    idInput:String,
    inputClass:String,
  },
};
</script>

<style lang="scss" scooped>
@import "./Inputs.scss";
</style>
