<script setup lang="ts">
defineProps<{
  title: string;
  director: string;
  releaseDate: string;
  producer: string;
  id: number;
}>();
</script>

<template>
  <div class="film__container">
    <div class="film__container--box">
      <h2 class="film__title">{{ title }}</h2>
      <p class="film__info">
        ID: <strong>{{ id }}</strong>
      </p>
      <p class="film__info">
        Director: <strong>{{ director }}</strong>
      </p>
      <p class="film__info">
        Producer: <strong>{{ producer }}</strong>
      </p>
      <p class="film__info">
        Release Date:
        <strong>
          {{ releaseDate }}
        </strong>
      </p>
    </div>
  </div>
</template>

<style scoped>
@import "./MovieCard.scss";
</style>
