<template>
  <div>
    <SearchInput @filterRecipes="findRecipes" />
  </div>
  <div class="recipe-list-container" v-if="!isLoading">
    <div class="width-100" v-if="displayedRecipes.length">
      <div class="grid-container">
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
      <ListPagination
        :page="page"
        :number-of-pages="numberOfPages"
        :go-next-page="goNextPage"
        :go-previous-page="goPreviousPage"
      ></ListPagination>
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
import { computed, ref } from 'vue'
import ListPagination from '@/components/ListPagination.vue'

const RECIPES_PER_PAGE = 4
const FIRST_PAGE = 1

const totalRecipes = ref([...recipes])
const displayedRecipes = computed(() => [
  ...totalRecipes.value.slice((page.value - 1) * RECIPES_PER_PAGE, RECIPES_PER_PAGE * page.value),
])
const isLoading = ref(false)

// Pagination
const page = ref(FIRST_PAGE)
const numberOfPages = computed(() => Math.ceil(totalRecipes.value.length / RECIPES_PER_PAGE))

const findRecipes = (searchText: string): void => {
  isLoading.value = true
  setTimeout(() => {
    totalRecipes.value = [...filterRecipes(recipes, searchText)]
    isLoading.value = false
  }, 500)
}

const goNextPage = () => {
  if (page.value !== numberOfPages.value) {
    page.value++
  }
}
const goPreviousPage = () => {
  if (page.value !== 1) {
    page.value--
  }
}

const filterRecipes = (recipes: IRecipe[], searchTerm: string): IRecipe[] => {
  if (!searchTerm) {
    return recipes // If there is any search text, return all recipes
  }
  const lowercasedTerm = searchTerm.toLowerCase()

  return recipes.filter((recipe) => {
    // Title and shortDescription
    const matchesTitle = recipe.title.toLowerCase().includes(lowercasedTerm)
    const matchesDescription = recipe.shortDescription.toLowerCase().includes(lowercasedTerm)

    // Steps
    const matchesSteps = recipe.steps.some((step) => step.toLowerCase().includes(lowercasedTerm))

    // Ingredients
    const matchesIngredients = recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(lowercasedTerm),
    )

    // Returns true if there is a match
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
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
