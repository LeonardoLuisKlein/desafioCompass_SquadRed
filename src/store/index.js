import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    password: "",
    loggedUser: false,
    showSpan: false,
    timerState: 600,
    isLoaded: true,
  },
  getters: {},
  mutations: {

    setName(state, username) {
      state.username = username;
      if (/^([a-zA-Z]{2,}\.[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}?)/.test(username)) {
        window.localStorage.setItem("username", username);
      } else {
        window.localStorage.setItem("username", "");
      }
    },
    setPassword(state, password) {
      state.password = password;
      if (/^[0-9]{6,9}$/.test(password)) {
        window.localStorage.setItem("password", password);
      } else {
        window.localStorage.setItem("password", "");
      }
    },
  },
  actions: {
    setName({ commit }, username) {
      commit("setName", username);
    },
    setPassword({ commit }, password) {
      commit("setPassword", password);
    },
  },
  modules: {},
});
