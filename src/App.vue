<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/people">People</RouterLink>
      <RouterLink to="/films">Films</RouterLink>
      <RouterLink to="/planets">Planets</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
/* @import "@/assets/base.css"; */

nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  background-color: #00000034;
  gap: 150px;
}

a {
  color: rgb(255, 255, 255);
  font-size: 20px;
}
a:hover {
  color: #f9a16781;
  transition: 0.3s;
}

nav a {
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #f9a167;
}

#app {
}
</style>
