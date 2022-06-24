<template>
  <div class="text">
    <p type="text" :class="textClass">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Texts",
  props: {
    type: {
      type: String,
      require: true,
    },
    textClass: {
      type: String,
    },
    msg: {
      type: String,
      default: "null",
    },
  },
};
</script>

<style lang="scss" scooped>
@import './Texts.scss'
</style>
   