<template>
  <div class="home">
    <div class="form">
    <Inputs typeInput="email" placeholder="Usuário"/>
    <Inputs typeInput= "password" placeholder="Senha"/>
    
    <Span />
    <Button />
    <Title nameClass="smallTitle" tMensage= "Our mission is" type="h4"/>
    <Title nameClass="bigTitle" tMensage= "to transform the world" type="h3"/>
    <Title nameClass="bigTitle" tMensage= "builidng digital experiences " type="h3"/>
    <Title nameClass="bigTitle" tMensage= "that enable our client's growth" type="h3"/>
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
