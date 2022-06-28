import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login/Login.vue";
import Success from "../views/Success/Success.vue";
import ErrorV from "../views/ErrorV/ErrorV.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Success",
    name: "Success",
    component: Success,
  },
  {
    path: "/ErrorV",
    name: "ErrorV",
    component: ErrorV,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
