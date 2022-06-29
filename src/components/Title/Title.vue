<template>
  <div class="title">
    <h1 :class="nameClassSmall" v-if="type === 'h1'">{{ tMensage }}</h1>
    <h2 :class="nameClassBig" v-else-if="type === 'h2'">{{ tMensage }}</h2>
    <h3 :class="nameClassBig" v-else-if="type === 'h3'">{{ tMensage }}</h3>
    <h4 :class="nameClassBig" v-else-if="type === 'h4'">{{ tMensage }}</h4>
    <h5 v-else-if="type === 'h5'">{{ tMensage }}</h5>
    <h6 v-else-if="type === 'h6'">{{ tMensage }}</h6>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
    name: "Title",
    props:{
      type: {
            type: String,
            require: true,
        },
        nameClass: {
            type: String,
        },
        tMensage:{
            type: String,
            default: 'null',
        },
    },
}
</script>

<style lang="scss" scoped>
    @import "./Title.scss"
</style>