<script setup lang="ts">
import { defineEmits } from "vue";
const emit = defineEmits(["onClick"]);
defineProps<{
  name: string;
  population: string;
  terrain: string;
}>();
</script>

<template>
  <div class="planet__container">
    <div class="planet__container--box">
      <h2 class="planet__title">{{ name }}</h2>
      <p class="planet__info">
        Terrain: <strong>{{ terrain }}</strong>
      </p>
      <p class="planet__info">
        Population: <strong>{{ population }}</strong>
      </p>
      <div class="button">
        <button class="learn-btn" @click="emit('onClick')">Learn More</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./PlanetCard.scss";
</style>
