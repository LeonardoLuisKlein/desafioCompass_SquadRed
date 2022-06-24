<template>
  <div class="container-span">
    <span class="span" :id="spanId">
        <p>Ops, usuário ou senha inválidos.</p>
        <p>Tente novamente!</p>
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
      },
      spanId: {
        type:String,
        default: 'spanId'
      }
    }

};
</script>

<style lang="scss" scooped>
@import "./Span.scss"



</style>
