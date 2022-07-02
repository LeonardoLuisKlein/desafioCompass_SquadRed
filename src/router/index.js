import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login/Login.vue";
import Success from "../views/Success/Success.vue";
import Error401 from "../components/Error401/Error401.vue";
import Error404 from "../components/Error404/Error404.vue";
const { isNavigationFailure, NavigationFailureType } = VueRouter;
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
    component: Error401,
  },
  {
    path: "*",
    name: "Error 404",
    component: Error404,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`;
  next();
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  originalPush.call(this, location).catch((error) => {
    if (!isNavigationFailure(error, NavigationFailureType.duplicated)) {
      throw Error(error);
    }
  });
};

export default router;
