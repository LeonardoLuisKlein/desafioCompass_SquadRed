<template>
       <div class="container">
         <input :type="typeInput" class="input">
       </div>
</template>

<script>


export default {
    // eslint-disable-next-line
name: "Inputs",

props: {
    typeInput:String,
    spanMsg:String
}
}
</script>

<style>
@import url('./Inputs.scss');
</style>