<template>
  <div class="container">
    <div class="cityTitle disable-select">
    <p >{{tMensage=`${local} - ${state}`}}</p>
    </div>
    <div class="tempContainer">
      <div class="condition">
        <img v-if="imageName" draggable="false" :src="require(`@/assets/${imageName}.png`)" alt="Weather status icon" class="weatherIcon disable-select"/>
      </div>
    <div class="temperatureContent disable-select" draggable="false">
    <p draggable="false">{{tMensage=`${temp}°`}}</p > 
        </div>
    </div>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: "Weather",
    data(){
      return{
        imageName: "sun",
        local: "Três Arroios",
        region: "",
        lat: "",
        long: "",
        dadosLocal: "",
        addIcon: "",
        temp: "28",
        state: "RS",
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
                this.local = dadosCity.city
                this.lat = dadosCity.lat
                this.long = dadosCity.lon
                console.log(this.lat, this.long)

            fetch(
              `http://api.weatherapi.com/v1/current.json?key=b3972d7c329b490c9c1175956222706&q=${this.lat},${this.long}`
            )
            .then((resposta) => resposta.json())
            .then((dados) => {
              this.temp = dados.current.temp_c.toFixed(0)
              console.log(this.temp)
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

created() {
    this.getWeather();
  }
}
</script>

<style lang="scss" scoped>
@import "./Weather.scss";
</style>