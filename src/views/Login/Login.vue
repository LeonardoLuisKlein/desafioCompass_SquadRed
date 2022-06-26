<template>
  <div class="login">
    <LeftLogin />
    <RightLogin />
  </div>
</template>
<script>
import LeftLogin from "@/components/LeftLogin/LeftLogin.vue";
import RightLogin from "@/components/RightLogin/RightLogin.vue";

export default {
  // eslint-disable-next-line
  name: "Login",
  components: {
    LeftLogin,
    RightLogin,
  },
  methods: {},
};
</script>

<style lang="scss" scooped>
@import "./Login.scss";
</style>
