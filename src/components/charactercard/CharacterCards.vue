<script setup lang="ts">
defineProps<{
  name: string;
  gender: string;
  birthyear: string;
  height: string;
  mass: string;
  eyecolor: string;
}>();

const wordToUpperCase = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
</script>

<template>
  <div class="character__container">
    <div class="character__container--box">
      <h2 class="character__name">{{ name }}</h2>
      <p class="character__info">
        Gender:
        <strong>{{ wordToUpperCase(gender) }}</strong>
      </p>
      <p class="character__info">
        BirthYear: <strong>{{ birthyear }}</strong>
      </p>
      <p class="character__info">
        Height:
        <strong>{{ height }}</strong>
      </p>
      <p class="character__info">
        Mass: <strong>{{ mass }}</strong>
      </p>
      <p class="character__info">
        Eye Color: <strong>{{ wordToUpperCase(eyecolor) }}</strong>
      </p>
    </div>
  </div>
</template>

<style scoped>
@import "./CharacterCards.scss";
</style>
