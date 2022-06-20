<script setup lang="ts">
import PlanetCard from "@/components/planetcard/PlanetCard.vue";
import router from "@/router";
import { usePlanetsStore } from "@/stores/planets";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const main = usePlanetsStore();

const { getPlanets } = storeToRefs(main);
const { fetchPlanets } = main;

function toSinglePlanet(id: string) {
  const splitUrl = id.split("/");
  const getId = splitUrl[splitUrl.length - 2].toString();
  return router.push(`/planets/${getId}`);
}

onMounted(() => {
  fetchPlanets();
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="planets-container">
          <PlanetCard
            :key="name"
            v-for="{ name, population, terrain, url } in getPlanets"
            :name="name"
            :population="population"
            :terrain="terrain"
            @onClick="toSinglePlanet(url)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./PlanetsView.scss";
</style>
