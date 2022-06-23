<template>
  <div class="home">
    <div class="form">
    <Inputs typeInput="email" placeholder="Usuário"/>
    <Inputs typeInput= "password" placeholder="Senha"/>
    
    <Span />
    <Button />
    <Title nameClass="smallTitle" tMensage= "Our mission is"/>
    <Title nameClass="bigTitlle" tMensage= "to transform the world"/>
    <Title nameClass="bigTitlle" tMensage= "builidng digital experiences"/>
    <Title nameClass="bigTitlle" tMensage= "that enable our client's growth"/>
  </div>
  </div>
</template>

<script>
import Inputs from '@/components/Inputs/Inputs.vue'
import Span from '@/components/Span/Span.vue'
import Button from '@/components/Button/Button.vue'
import Title from '@/components/Title/Title.vue'

export default {
  // eslint-disable-next-line
  name: 'Home',
  components: {
    Inputs,
    Span,
    Button,
    Title
}
}
</script>

<style>
</style>
