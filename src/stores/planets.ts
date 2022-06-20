import { defineStore } from "pinia";
import type { PlanetData } from "@/modal/PeopleModal";
import type { PlanetResultData } from "@/modal/PeopleModal";
import axios from "axios";

export const usePlanetsStore = defineStore("planets", {
  state: () => ({
    planets: {} as PlanetData,
    singlePlanet: {} as PlanetResultData,
  }),
  getters: {
    getPlanets(state) {
      return state.planets.results;
    },
    getSinglePlanet(state) {
      return state.singlePlanet;
    },
  },
  actions: {
    async fetchPlanets() {
      try {
        const data = await axios.get("https://swapi.dev/api/planets");
        this.planets = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchSinglePlanet(id: string) {
      try {
        const singleData = await axios.get(
          `https://swapi.dev/api/planets/${id}`
        );
        this.singlePlanet = singleData.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
