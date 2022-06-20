<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  name: string;
  terrain: string;
  population: string;
  gravity: string;
  climate: string;
  rotation_period: string;
  orbital_period: string;
  planetSize: number;
  water: number;
  lives: number;
  planetColor: string;
}>();

const visible = ref({
  showImage: false,
});

const setImage = () => {
  return (visible.value.showImage = !visible.value.showImage);
};
</script>

<template>
  <div class="single__planet--container">
    <div class="single__planet--box">
      <h2 class="single__planet--title">{{ name }}</h2>
      <p class="single__planet--info">
        Terrain: <strong>{{ terrain }}</strong>
      </p>
      <p class="single__planet--info">
        Population: <strong>{{ population }}</strong>
      </p>
      <p class="single__planet--info">
        Gravity: <strong>{{ gravity }}</strong>
      </p>
      <p class="single__planet--info">
        Climate: <strong>{{ climate }}</strong>
      </p>
      <p class="single__planet--info">
        Rotation Period: <strong>{{ rotation_period }}</strong>
      </p>
      <p class="single__planet--info">
        Orbital Period: <strong>{{ orbital_period }}</strong>
      </p>
      <div class="back-btn">
        <button class="button" @click="$router.push('/planets')">Back</button>
        <button @click="setImage" class="button">
          {{ visible.showImage ? "Hide Image" : "View Image" }}
        </button>
      </div>
    </div>
    <div v-if="visible.showImage" class="planet-view">
      <div
        class="planet"
        :style="{
          width: planetSize + 'px',
          height: planetSize + 'px',
          border: water + 'px',
          borderColor: 'blue',
          borderStyle: 'inset',
          backgroundColor: planetColor,
        }"
      >
        <div class="population-box">
          <p
            class="population"
            :style="{
              border: lives + 'px',
              borderColor: 'black',
              borderStyle: 'solid',
              width: lives * 30 + 'px',
              height: lives * 30 + 'px',
            }"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./SinglePlanetCard.scss";
</style>
