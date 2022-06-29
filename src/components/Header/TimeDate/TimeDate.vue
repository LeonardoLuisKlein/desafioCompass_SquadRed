<template>
  <div draggable="false" class="timeDate disable-select">
    <p id="clock">{{ clock }}</p>
    <p id="date">{{ actualDate }}</p>
  </div>
</template>

<script>
export default {
  name: "TimeDate",
  data() {
    return {
      clock: "",
      actualDate: "",
      hours: "",
      minutes: "",
      dayWeek: "",
      dayMonth: "",
      month: "",
      timerEnabled: true,
    };
  },
  methods: {
    getHourDate() {
      if (this.timerEnabled) {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let clock = `${hours <= 9 ? "0" : ""}${hours}:${
          minutes <= 9 ? "0" : ""
        }${minutes}`;
        this.clock = clock;

        const months = [
          "janeiro",
          "fevereiro",
          "março",
          "abril",
          "maio",
          "junho",
          "julho",
          "agosto",
          "setembro",
          "outubro",
          "novembro",
          "dezembro",
        ];
        const days = [
          "domingo",
          "segunda-feira",
          "terça-feira",
          "quarta-feira",
          "quinta-feira",
          "sexta-feira",
          "sábado",
        ];

        let dayMonth = date.getDate();
        let dayWeek = date.getDay();
        let month = date.getMonth();
        let year = date.getFullYear();

        let actualDate = `${days[dayWeek]}, ${dayMonth} de ${months[month]} de ${year}`;
        this.actualDate = actualDate;
        this.$store.state.isLoaded = false
      }
    },
  },
  created() {
    setInterval(() => {
      this.getHourDate();
    }, 1000);
  },
  destroyed(){
    this.timerEnabled = false
  }
};
</script>
<style lang="scss" scooped>
@import "./TimeDate.scss";
</style>
