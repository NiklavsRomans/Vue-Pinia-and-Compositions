import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/PeopleView.vue";
import FilmsView from "../views/filmsview/FilmsView.vue";
import PlanetsView from "../views/planetsview/PlanetsView.vue";
import SinglePlanetView from "../views/singleplanetview/SinglePlanetView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/people",
      name: "people",
      component: AboutView,
    },
    {
      path: "/films",
      name: "films",
      component: FilmsView,
    },
    {
      path: "/planets",
      name: "planets",
      component: PlanetsView,
    },
    {
      path: "/planets/:id",
      name: "single-planet",
      component: SinglePlanetView,
      props: true,
    },
  ],
});

export default router;
