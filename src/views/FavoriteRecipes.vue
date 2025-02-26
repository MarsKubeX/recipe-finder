<template>
  <div class="recipe-list-container">
    <h1>Favorite Recipes</h1>
    <div v-if="favoritesRecipes.length" class="grid-container">
      <RecipeCard
        v-for="recipe in favoritesRecipes"
        :id="recipe.id"
        :key="recipe.title"
        :title="recipe.title"
        :imageUrl="recipe.imageUrl"
        :shortDescription="recipe.shortDescription"
        :steps="recipe.steps"
        :ingredients="recipe.ingredients"
        :preparationTime="recipe.preparationTime"
      ></RecipeCard>
    </div>
    <div v-else>You don't have any favorite recipe yet</div>
  </div>
</template>

<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import { useRecipesStore } from '@/stores/recipes.store'
import { storeToRefs } from 'pinia'
import { recipes } from '@/views/recipes.mock'
import { computed } from 'vue'
const store = useRecipesStore()
const { favoriteRecipeIds } = storeToRefs(store)
const favoritesRecipes = computed(() =>
  recipes.filter((recipe) => favoriteRecipeIds.value.includes(recipe.id)),
)
</script>

<style scoped>
.recipe-list-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.grid-container {
  width: 100%;
  max-width: 80rem;
  display: grid;
  grid-template-columns: 1fr; /* Una sola columna */
  gap: 2rem;
}

/* Para pantallas medianas (a partir de 768px) */
@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr); /* Dos columnas */
  }
}

/* Para pantallas grandes (a partir de 1024px) */
@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr); /* Tres columnas */
  }
}
</style>

<!-- <template>
  <div class="recipe-list-container">
    <div v-if="displayedRecipes.length" class="grid-container">
      <RecipeCard
        v-for="recipe in favoriteRecipies"
        :id="recipe.id"
        :key="recipe.title"
        :title="recipe.title"
        :imageUrl="recipe.imageUrl"
        :shortDescription="recipe.shortDescription"
        :steps="recipe.steps"
        :ingredients="recipe.ingredients"
        :preparationTime="recipe.preparationTime"
      ></RecipeCard>
    </div>
    <div v-else>No recipes found</div>
  </div>
</template>

<style>
.recipe-list-container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.grid-container {
  width: 100%;
  max-width: 80rem;
  display: grid;
  grid-template-columns: 1fr; /* Una sola columna */
  gap: 2rem;
}

/* Para pantallas medianas (a partir de 768px) */
@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr); /* Dos columnas */
  }
}

/* Para pantallas grandes (a partir de 1024px) */
@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr); /* Tres columnas */
  }
}
</style> -->
