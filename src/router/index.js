import { createRouter, createWebHistory } from "vue-router";

// Views
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

// Components
import Albums from "@/components/home/Albums.vue";
import AlbumDetails from "@/components/home/AlbumDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: '/albums',
      name: "albums",
      component: HomeView,
      children: [
        {
          path: "/albums",
          component: Albums,
        },
        {
          path: "/albums/:index",
          component: AlbumDetails,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
