<script setup lang="ts">
// import TheWelcome from "@/components/TheWelcome.vue";
import MovieCard from "@/components/moviecard/MovieCard.vue";
import { useFilmStore } from "@/stores/films";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";

const main = useFilmStore();

const { getMovies } = storeToRefs(main);
const { fetchMovies } = main;
const order = ref("");

onMounted(() => {
  fetchMovies();
});

const moviesByOrder = () => {
  switch (order.value) {
    case "ascending":
      return getMovies.value.sort((a, b) => a.episode_id - b.episode_id);
    case "descending":
      return getMovies.value.sort((a, b) => b.episode_id - a.episode_id);
    case "date-ascending":
      return getMovies.value.sort(
        (a, b) => +a.release_date.slice(0, 4) - +b.release_date.slice(0, 4)
      );
    case "date-descending":
      return getMovies.value.sort(
        (a, b) => +b.release_date.slice(0, 4) - +a.release_date.slice(0, 4)
      );
    default:
      return order;
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="films-container">
          <div class="select__order">
            <select class="select" v-model="order" @change="moviesByOrder">
              <option selected disabled value="">Order</option>
              <option value="ascending">Ascending ID</option>
              <option value="descending">Descending ID</option>
              <option value="date-ascending">Ascending Date</option>
              <option value="date-descending">Descending Date</option>
            </select>
          </div>
          <MovieCard
            :key="episode_id"
            v-for="{
              title,
              release_date,
              director,
              producer,
              episode_id,
            } in getMovies"
            :title="title"
            :releaseDate="release_date"
            :director="director"
            :producer="producer"
            :id="episode_id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./FilmsView.scss";
</style>
