<script setup lang="ts">
import NavbarMenu from './components/NavbarMenu.vue'
</script>

<template>
  <header>
    <NavbarMenu />
  </header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<style scoped>
header {
  max-width: 100vw;
}
</style>
