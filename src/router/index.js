import Vue from "vue";
import VueRouter from "vue-router";
import { getTokenFromStorage } from "@/utils";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Root",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Conversion"),
  },
  {
    path: "/history",
    name: "History",
    component: () => import(/* webpackChunkName: "about" */ "../views/History"),
  },
  {
    path: "/auth",
    name: "Login",
    component: () => import(/* webpackChunkName: "about" */ "../views/Auth"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !getTokenFromStorage()) next({ name: "Login" });
  else next();
});

export default router;
