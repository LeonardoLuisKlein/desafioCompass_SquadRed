<template>
  <div class="home">
    <div class="form">
    <Inputs typeInput="email" placeholder="Usuário"/>
    <Inputs typeInput= "password" placeholder="Senha"/>
    <Span />
  </div>
  </div>
</template>

<script>
import Inputs from '@/components/Inputs/Inputs.vue'
import Span from '@/components/Span/Span.vue'

export default {
  // eslint-disable-next-line
  name: 'Home',
  components: {
    Inputs,
    Span
  }
}
</script>

<style>
</style>
