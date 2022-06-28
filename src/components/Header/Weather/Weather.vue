<template>
  <div>
    <Title type="h1" :tMensage="`${local} - RS`"/>
    <img v-if="imageName" draggable="false" :src="require(`@/assets/${imageName}.png`)" alt="Weather status icon" />
    <Title type="h1" :tMensage="`${temp}°`"/>
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
        imageName: "raining",
        local: "",
        region: "",
        lat: "",
        long: "",
        dadosLocal: "",
        addIcon: "",
        temp: ""
      }
    },
    methods: {
    getWeather(){
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((position) => {
              let lat = position.coords.latitude;
              let long = position.coords.longitude;

            fetch(
              `http://api.weatherapi.com/v1/current.json?key=b3972d7c329b490c9c1175956222706&q=${lat},${long}`
            )
            .then((resposta) => resposta.json())
            .then((dados) => {
              this.local = dados.location.name
              this.state = dados.location.region
              this.temp = dados.current.temp_c.toFixed(0)
              console.log(this.temp)
              console.log(this.local)
              console.log(this.state)
              this.imageName = this.getIconWeather(
                    dados.current.condition.text
                  );
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