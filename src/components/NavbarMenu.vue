<template>
  <div class="navbar-container">
    <div class="navbar-menu-container">
      <div class="navbar-button">
        <i @click="openCloseMenu()" class="material-icons">
          <Transition name="fade-icon-menu" mode="out-in">
            <span v-if="isMenuOpen">close</span>
            <span v-else>menu</span></Transition
          ></i
        >
      </div>
      <nav :class="[isMenuOpen ? 'nav-menu-open' : 'nav-menu-close']">
        <RouterLink @click="openCloseMenu()" to="/">Search</RouterLink>
        <RouterLink @click="openCloseMenu()" to="/favorite-recipes">Favorites</RouterLink>
      </nav>
    </div>
    <div>
      <img class="navbar-logo" src="../assets//images/logo.png" alt="logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { type Ref, ref } from 'vue'
const isMenuOpen: Ref<boolean> = ref(false)
const openCloseMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
<style scoped>
.navbar-container {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background-color: var(--color-background);
  color: var(--text-color);
  @media (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
}
.navbar-menu-container {
  @media (min-width: 1024px) {
    padding: 2rem 0;
  }
}
nav {
  font-size: 1rem;
  display: flex;
  @media (max-width: 1024px) {
    width: 90vw;
    background-color: var(--color-background-contrast);
    flex-direction: column;
    padding: 1rem 0;
    position: absolute;
  }
}

.nav-menu-open {
  left: 0px;
  transition: 1s;
}
.nav-menu-close {
  left: -100%;
  transition: 1.5s;
}

.fade-icon-menu-enter-active,
.fade-icon-menu-leave-active {
  transition: opacity 0.3s ease;
}

.fade-icon-menu-enter-from,
.fade-icon-menu-leave-to {
  opacity: 0;
}

nav a.router-link-exact-active {
  color: var(--text-color-contrast);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--vt-c-first);
  @media (max-width: 1024px) {
    border: 0;
    padding: 0.5rem 0 0 2rem;
    font-size: 1.5rem;
    color: var(--vt-c-white);
  }
}
nav a:first-of-type {
  border: 0;
  padding-left: 2rem;
  @media (min-width: 1024px) {
    padding-left: 1rem;
  }
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.navbar-button {
  i {
    font-size: 36px;
    cursor: pointer;
    color: var(--color-background-contrast);
  }
  padding: 1rem 0 0 0;
  @media (min-width: 1024px) {
    display: none;
  }
}
.navbar-logo {
  width: 200px;
  @media (max-width: 1024px) {
    width: 120px;
  }
}
</style>
