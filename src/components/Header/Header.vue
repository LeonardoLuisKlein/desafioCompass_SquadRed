<template>
  <div class="header">
   <div>
    <img src="@/assets/logo.png" alt="">
   </div>
    <TimeDate />

  </div>
</template>

<script>
import TimeDate from './TimeDate/TimeDate.vue'
export default {
    // eslint-disable-next-line
name: 'Header',
components:{
    TimeDate
}
}
</script>

<style lang="scss" scooped>
@import './Header.scss'
</style>