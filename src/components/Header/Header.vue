<template>
  <div class="header">
   <div>
    <img draggable="false" src="@/assets/compassuol-logo-black.png" alt="logo-compass" id="compass-black" class="disable-select">
   </div>
    <TimeDate />
    <div>
    <Weather />
    </div>
  </div>
</template>

<script>
import TimeDate from './TimeDate/TimeDate.vue'
import Weather from './Weather/Weather.vue'
export default {
    // eslint-disable-next-line
name: 'Header',
components:{
    TimeDate,
    Weather
}
}
</script>

<style lang="scss" scooped>
@import './Header.scss'
</style>