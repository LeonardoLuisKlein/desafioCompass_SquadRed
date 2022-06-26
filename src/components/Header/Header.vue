<template>
  <div class="header">
   <div>
    <img draggable="false" src="@/assets/compassuol-logo-black.png" alt="logo-compass" id="compass-black">
   </div>
    <TimeDate />
    <div>

    </div>
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