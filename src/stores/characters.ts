import { defineStore } from "pinia";
import axios from "axios";
import type { DataModal } from "@/modal/PeopleModal";

export const usePeopleStore = defineStore("people", {
  state: () => ({
    characters: {} as DataModal,
    page: 1,
    character: "",
  }),
  getters: {
    getCharacters(state) {
      return state.characters.results;
    },
  },
  actions: {
    async fetchPeople(page: number, character: string) {
      try {
        const data = await axios.get(
          `https://swapi.dev/api/people/?search=${character}&page=${page}`
        );
        this.characters = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    nextPage() {
      this.fetchPeople((this.page += 1), this.character);
    },
    prevPage() {
      this.fetchPeople((this.page -= 1), this.character);
    },
    searchCharacter() {
      this.fetchPeople(this.page, this.character);
    },
  },
});
