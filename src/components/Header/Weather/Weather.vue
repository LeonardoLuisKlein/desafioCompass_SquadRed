<template>
  <div>
    <h1>Passo Fundo - RS</h1>
    <img v-if="imageName" draggable="false" :src="require(`@/assets/${imageName}.png`)" alt="Weather status icon" />
    <h1>22°</h1>
  </div>
</template>

<script>

export default {
    // eslint-disable-next-line
    name: "Weather",
    data(){
      return{
        imageName: "sun",
        local: "",
        region: "",
        lat: "",
        long: "",
        dadosLocal: "",
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
            })
          })
 
        }
        
    }

},

mounted() {
    this.getWeather();
  }
}
</script>

<style>
@import "./Weather.scss";
</style>