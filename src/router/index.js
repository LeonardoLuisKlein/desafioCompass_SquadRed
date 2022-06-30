import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login/Login.vue";
import Success from "../views/Success/Success.vue";
import ErrorV from "../views/ErrorV/Error401.vue"

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
    path: "/Error401",
    name: "Error 401",
    component: ErrorV,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = `${process.env.VUE_APP_TITLE} | ${ to.name }`
  next()
})


export default router;
