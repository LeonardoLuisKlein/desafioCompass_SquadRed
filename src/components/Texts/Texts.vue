<template>
  <div class="text">
    <p type="text" :class="textClass">{{ msg }}</p>
  </div>
</template>

<script>
<<<<<<< HEAD:src/components/Main/Texts/Texts.vue
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

<style lang="scss" scoped>
@import './Texts.scss'
</style>
   