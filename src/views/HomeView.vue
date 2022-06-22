<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Inputs typeInput="email"/>
    <Inputs typeInput= "password"/>
    <Span />
  </div>
</template>

<script>
import Inputs from '@/components/Inputs/Inputs.vue'
import Span from '@/components/Span/Span.vue'

export default {
  name: 'HomeView',
  components: {
    Inputs,
    Span
  }
}
</script>
