<script setup lang="ts">
// import TheWelcome from "@/components/TheWelcome.vue";
import CharacterCards from "@/components/charactercard/CharacterCards.vue";
import { usePeopleStore } from "@/stores/characters";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
const main = usePeopleStore();
const { getCharacters, page, character } = storeToRefs(main);

const { fetchPeople, nextPage, prevPage, searchCharacter } = main;

onMounted(() => {
  fetchPeople(main.page, main.character);
  getCharacters;
});
</script>

<template>
  <div class="page-switch">
    <button class="switch-btn" :disabled="page < 2" @click="prevPage">
      Prev Page
    </button>
    <button class="switch-btn" :disabled="page > 8" @click="nextPage">
      Next Page
    </button>
  </div>
  <div class="search-input">
    <input
      class="input"
      placeholder="Search character..."
      v-model="character"
      v-on:input="searchCharacter"
      type="text"
    />
  </div>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="characters__container">
          <CharacterCards
            :key="name"
            v-for="{
              name,
              gender,
              birth_year,
              eye_color,
              mass,
              height,
            } in getCharacters"
            :name="name"
            :gender="gender"
            :birthyear="birth_year"
            :eyecolor="eye_color"
            :mass="mass"
            :height="height"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./PeopleView.scss";
</style>
