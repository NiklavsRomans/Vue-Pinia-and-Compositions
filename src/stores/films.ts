import { defineStore } from "pinia";
import type { MovieData } from "@/modal/PeopleModal";
import axios from "axios";

export const useFilmStore = defineStore("movies", {
  state: () => ({
    films: {} as MovieData,
  }),
  getters: {
    getMovies(state) {
      return state.films.results;
    },
  },
  actions: {
    async fetchMovies() {
      try {
        const data = await axios.get("https://swapi.dev/api/films");
        this.films = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
