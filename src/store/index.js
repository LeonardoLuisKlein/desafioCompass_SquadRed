import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "admin",
    pw: "1234567",
    name: "",
    password: "",
    access: false,
    showSpan: false,
  },
  getters: {},
  mutations: {
    // register() {
    //   const button = document.getElementById("idButton");
    //   button.addEventListener("click", function () {
    //     if (this.state.username === this.state.name) {
    //       console.log("ok");
    //     }else {
    //       console.log('not ok');
    //     }
    //   });
    //   console.log("alo");
    // },

    setName(state, name) {
      state.name = name;
      if (name === this.state.username) {
        window.localStorage.setItem("name", name);
      } else {
        window.localStorage.setItem("name", "");
      }
    },
    setPassword(state, password) {
      state.password = password;
      if (password === this.state.pw) {
        window.localStorage.setItem("password", password);
      } else {
        window.localStorage.setItem("password", "");
      }
    },
  },
  actions: {
    setName({ commit }, name) {
      commit("setName", name);
    },
    setPassword({ commit }, password) {
      commit("setPassword", password);
    },
  },
  modules: {},
});
