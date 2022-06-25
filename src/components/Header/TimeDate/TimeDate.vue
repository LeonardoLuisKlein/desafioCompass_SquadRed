<template>
  <div class="timeDate">
    <p>{{ clock }}</p>
    <p>{{ date }}</p>
  </div>
</template>

<script>
export default {
  name: "TimeDate",
  data() {
    return {
      clock: "",
      date: "",
      hours: "",
      minutes: "",
      day: "",
      month:'',

    };
  },
  methods: {
    getHour() {
      let actualDate = new Date();
      let hours = actualDate.getHours();
      let minutes = actualDate.getMinutes();
      let clock = `${hours} : ${minutes}`;
      this.clock = clock;
    },

    getDate(){
      const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
      const days = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado', 'domingo',]


    }
  },
  created() {
    setInterval(() => {
      this.getHour();
    }, 1000);
  },
};
</script>

<style lang="scss" scooped></style>
