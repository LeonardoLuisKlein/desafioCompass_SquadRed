<template>
  <div :class="buttonsContainer">
    <button :class="classButton" :id="idButtons" @click="event">
      {{ msgButton }}
    </button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Buttons",
  props: {
    buttonsContainer: String,
    classButton: String,
    idButtons: String,
    msgButton: String,
    event: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="sass" scooped></style>
