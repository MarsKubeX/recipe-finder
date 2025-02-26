<template>
  <div>
    <SearchInput @filterRecipes="findRecipes" />
  </div>
  <div class="recipe-list-container" v-if="!isLoading">
    <div v-if="displayedRecipes.length" class="grid-container">
      <RecipeCard
        v-for="recipe in displayedRecipes"
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
  <div v-else><LoaderSpinner :isLoading="isLoading"></LoaderSpinner></div>
</template>

<script setup lang="ts">
import LoaderSpinner from '@/components/LoaderSpinner.vue'
import SearchInput from '@/components/SearchInput.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import { recipes } from '@/views/recipes.mock.ts'
import type { IRecipe } from '@/models/recipe.models'
import { ref } from 'vue'

const displayedRecipes = ref<IRecipe[]>([...recipes])
const isLoading = ref(false)
const findRecipes = (searchText: string): void => {
  isLoading.value = true
  setTimeout(() => {
    displayedRecipes.value = [...filterRecipes(recipes, searchText)]
    isLoading.value = false
  }, 500)
}

const filterRecipes = (recipes: IRecipe[], searchTerm: string): IRecipe[] => {
  if (!searchTerm) {
    return recipes // Si no hay término de búsqueda, devuelve todas las recetas
  }

  const lowercasedTerm = searchTerm.toLowerCase()

  return recipes.filter((recipe) => {
    // Comprobar en title y shortDescription
    const matchesTitle = recipe.title.toLowerCase().includes(lowercasedTerm)
    const matchesDescription = recipe.shortDescription.toLowerCase().includes(lowercasedTerm)

    // Comprobar en steps
    const matchesSteps = recipe.steps.some((step) => step.toLowerCase().includes(lowercasedTerm))

    // Comprobar en ingredients
    const matchesIngredients = recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(lowercasedTerm),
    )

    // Devolver true si hay coincidencia en alguno de los campos relevantes
    return matchesTitle || matchesDescription || matchesSteps || matchesIngredients
  })
}
</script>

<style scoped>
.recipe-list-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.grid-container {
  width: 100%;
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
