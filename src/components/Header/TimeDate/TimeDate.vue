<template>
  <div class="timeDate">
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
      day: "",
      month: "",
    };
  },
  methods: {
    getHourDate() {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let clock = `${hours}:${minutes}`;
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
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado",
        "domingo",
      ];

      let day = date.getDay();
      console.log(day);

      let month = date.getMonth();
      console.log(month);

      let year = date.getFullYear();
      console.log(year);

      let actualDate = `${days[day]}, ${day} de ${months[month]} de ${year}`;
      this.actualDate = actualDate
    },
  },
  created() {
    setInterval(() => {
      this.getHourDate();
    }, 1000);
  },
};
</script>
<style lang="scss" scooped>
@import './TimeDate.scss'
</style>
