<template>
  <div>
    <h1>Passo Fundo  RS</h1>
    <img v-if="imageName" draggable="false" :src="require(`@/assets/${imageName}.png`)" alt="Weather status icon" />
    <h1>22°</h1>
  </div>
</template>

<script>
import apiLocation from "@/services/api"

export default {
    // eslint-disable-next-line
    name: "Weather",
    data(){
      return{
        imageName: "sun",
        city: "",
        region: "",
        lat: "",
        long: "",
        locationData: ""
      }
    },
    methods: {
      getWeather(){
    apiLocation.get().then((response) => {
        this.locationData = response.data
        console.log(this.locationData)
    })    
    
}

},
mounted(){
    this.getWeather()
}

}
</script>

<style>
@import "./Weather.scss";
</style>