<template>
       <div class="containerInput">
         <input :type="typeInput" :class="input" :placeholder="placeholder">
       </div>
</template>

<script>


export default {
    // eslint-disable-next-line
name: "Inputs",

props: {
    typeInput:String,
    spanMsg:String,
    placeholder:String,
}
}
</script>

<style lang="scss" scooped>
@import "./Inputs.scss"

</style>