<script setup lang="ts">
import SinglePlanetCard from "@/components/singleplanetcard/SinglePlanetCard.vue";
import { usePlanetsStore } from "@/stores/planets";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const main = usePlanetsStore();
const props = defineProps<{
  id: string;
}>();

// eslint-disable-next-line vue/no-setup-props-destructure
const { id } = props;
const { getSinglePlanet } = storeToRefs(main);
const { fetchSinglePlanet } = main;

onMounted(() => {
  fetchSinglePlanet(id);
});

// PLANET IMAGE CALCULATIONS
const planetDiameter = (diameter: number) => {
  if (diameter > 25000) {
    return diameter * 0.003;
  } else {
    return diameter * 0.02;
  }
};
const planetWater = (amount: number) => {
  return amount + 3;
};
const planetPopulation = (lives: number) => {
  if (lives >= 1000000000) {
    return lives * 0.000000003;
  } else {
    return lives * 0.00001;
  }
};

const terrainColor = {
  desert: "sandybrown",
  jungle: "green",
  grasslands: "lightgreen",
  trundra: "white",
  swamp: "darkgreen",
  gas: "gray",
  forests: "darkgreen",
  ocean: "blue",
  cityscape: "lightcyan",
};

const getTerrainColor = (terrain: string) => {
  for (let key in terrainColor) {
    if (terrain !== undefined && terrain.indexOf(key) > -1) {
      return terrainColor[key];
    }
  }
};

// if (terrain.indexOf(key) > -1) {
//       return terrainColor[key];
//     }
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="planets-container">
          <SinglePlanetCard
            :terrain="getSinglePlanet.terrain"
            :climate="getSinglePlanet.climate"
            :name="getSinglePlanet.name"
            :orbital_period="getSinglePlanet.orbital_period"
            :population="getSinglePlanet.population"
            :gravity="getSinglePlanet.gravity"
            :rotation_period="getSinglePlanet.rotation_period"
            :planetSize="planetDiameter(+getSinglePlanet.diameter)"
            :water="planetWater(+getSinglePlanet.surface_water)"
            :lives="planetPopulation(+getSinglePlanet.population)"
            :planetColor="getTerrainColor(getSinglePlanet.terrain)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./SinglePlanetView.scss";
</style>
