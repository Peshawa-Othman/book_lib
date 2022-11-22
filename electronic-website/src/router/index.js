import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../Views/Home-View.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../Views/About-View.vue"),
  },
  {
    path: "/login",
    name: "LoginRegister",
    component: () => import("../Views/Login-Register.vue"),
  },
  {
    path: "/prodoct",
    name: "Prodoctr",
    component: () => import("../Views/Prodoct-Deteal.vue"),
  },
  {
    path: "/usersaleaccount",
    name: "UserSaleAccount",
    component: () => import("../Views/User-Sale-Account.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
