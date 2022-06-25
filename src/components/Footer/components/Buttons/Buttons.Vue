<template>
  <div :class="buttonsContainer">
  <button :class="classButton" :id="idButtons">{{ msgButton }}</button>
  </div>
</template>

<script>
export default {
    name: 'Buttons',
    props: {
        buttonsContainer:String,
        
    }

}
</script>

<style lang="sass" scooped>

</style>