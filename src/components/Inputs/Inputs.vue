<template>
  <div class="container">
    <div class="containerInput">
      <input
        :type="type"
        :class="inputClass"
        :placeholder="placeholder"
        :id="idInput"
        @input="getValue"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  // eslint-disable-next-line
  name: "Inputs",

  props: {
    type: String,
    spanMsg: String,
    placeholder: String,
    idInput: String,
    inputClass: String,
  },
  methods: {
    ...mapActions(["setName", "setPassword"]),

    getValue(e) {
      if (this.type === "text") {
        this.setName(e.target.value);
      } else if (this.type === "password") {
        this.setPassword(e.target.value);
      }
    },
  },
};
</script>

<style lang="scss" scooped>
@import "./Inputs.scss";
</style>
