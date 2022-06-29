<template>
  <div>
    <Title type="h1" nameClass="cityTitle" :tMensage="`${local} - ${state}`"/>
    <div class="tempContainer">
    <img v-if="imageName" draggable="false" :src="require(`@/assets/${imageName}.png`)" alt="Weather status icon" class="weatherIcon"/>
    <Title type="h1" nameClass="temperatureContent" :tMensage="`${temp}°`"/>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title/Title.vue'

export default {
    // eslint-disable-next-line
    name: "Weather",
    components: {
      Title,
    },
    data(){
      return{
        imageName: "sun",
        local: "",
        region: "",
        lat: "",
        long: "",
        dadosLocal: "",
        addIcon: "",
        temp: "",
        state: "",
        dadosCity: "",
      }
    },
    methods: {
    getWeather(){
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((position) => {
              let lat = position.coords.latitude;
              let long = position.coords.longitude;
              console.log(lat, long)

              fetch(
                "http://ip-api.com/json/?fields=city,region,lat,lon"
              )
              .then((resposta) => resposta.json())
              .then((dadosCity) => {
                this.state = dadosCity.region
             
              

            fetch(
              `http://api.weatherapi.com/v1/current.json?key=b3972d7c329b490c9c1175956222706&q=${lat},${long}`
            )
            .then((resposta) => resposta.json())
            .then((dados) => {
              this.local = dados.location.name
              this.temp = dados.current.temp_c.toFixed(0)
              console.log(this.temp)
              console.log(this.local)
              this.imageName = this.getIconWeather(dados.current.condition.text);
              console.log(dados)
              })
            })
          })
        }     
    },

    getIconWeather(weather){
      let icon

      if (weather.includes("thunder")){
        icon = "storm";
      } 
      else if (weather.includes("Sun") || weather.includes("Clear")){
        icon = "sun";
      } 
      else if (weather.includes("Fog") || weather.includes("Mist")){
        icon = "cloud";
      } 
      else if (weather.includes("Cloudy") || weather.includes("Overcast") || weather.includes("cloudy")){
        icon = "cloudy";
      } 
      else if (weather.includes("rain") || weather.includes("drizzle")){
        icon = "raining";
      }
      return icon
    }

},

mounted() {
    this.getWeather();
  }
}
</script>

<style lang="scss" scoped>
@import "./Weather.scss";
</style>