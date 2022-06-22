<template>
  <div  class="button-container">
        <button class="button">{{msgButton}}</button>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: "Button",
    props: {
        msgButton: {
            typeof:String,
            default: "Continuar"
        }
    }
}
</script>

<style lang="scss" scooped>
@import './Button.scss'

</style>