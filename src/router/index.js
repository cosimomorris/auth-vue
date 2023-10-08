import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import PrivatePage from "../components/PrivatePage.vue";
import NotAuthorized from "../components/NotAuthorized.vue";
import AuthCallback from "../components/AuthCallback.vue";
import AboutPage from "../components/AboutPage.vue";
import { isLogged as isLoggedIn } from "../utils/auth";
//define routes for the rest of the application and what they will be redirected to
const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/private",
    name: "PrivatePage",
    component: PrivatePage,
    beforeEnter: (to, from, next) => {
      if (!isLoggedIn()) {
        next({ path: "/notauthorized" });
      } else {
        next();
      }
    },
  },
  { path: "/callback", name: "AuthCallback", component: AuthCallback },
  { path: "/notauthorized", name: "NotAuthorized", component: NotAuthorized },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
