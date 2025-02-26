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
  <footer>
    <div>
      <span>Marcel Bertagnini</span>
      <span>Amazing recipe finder 2025</span>
    </div>
  </footer>
</template>

<style scoped>
header {
  max-width: 100vw;
  margin: 0 0.5rem;
}
main {
  margin: 0 0.5rem;
  flex: 1;
}
footer {
  background-color: var(--color-background-contrast);
  text-align: center;
  padding: 2rem 1rem 2rem 1rem;
  bottom: 0;
  margin-top: 1rem;
  div {
    display: flex;
    justify-content: space-around;
  }
}
</style>
