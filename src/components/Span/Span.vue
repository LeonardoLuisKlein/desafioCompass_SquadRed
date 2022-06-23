<template>
  <div class="container-span">
    <span class="span" v-show="showSpan">
        <p>Ops, usuário ou senha inválidos.</p>
        <p>Tente novamente</p>
        </span>
  </div>
</template>

<script>


export default {
    // eslint-disable-next-line
    name: "Span",
    props: {
      showSpan: {
        type:Boolean,
        default: false
      }
    }

};
</script>

<style lang="scss" scooped>
@import "./Span.scss"



</style>
