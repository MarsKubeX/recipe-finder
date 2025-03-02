<template>
  <div>
    <h1>Favorite Recipes</h1>
    <div v-if="favoritesRecipes.length">
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
    <div v-else>You don't have any favorite recipe yet</div>
  </div>
</template>

<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import ListPagination from '@/components/ListPagination.vue'
import { useRecipesStore } from '@/stores/recipes.store'
import { storeToRefs } from 'pinia'
import { recipes } from '@/views/recipes.mock'
import { computed, ref } from 'vue'
const store = useRecipesStore()
const { favoriteRecipeIds } = storeToRefs(store)
const favoritesRecipes = computed(() =>
  recipes.filter((recipe) => favoriteRecipeIds.value.includes(recipe.id)),
)

const RECIPES_PER_PAGE = 4
const FIRST_PAGE = 1

const page = ref(FIRST_PAGE)
const numberOfPages = computed(() => Math.ceil(favoritesRecipes.value.length / RECIPES_PER_PAGE))

const displayedRecipes = computed(() => [
  ...recipes.slice((page.value - 1) * RECIPES_PER_PAGE, RECIPES_PER_PAGE * page.value),
])

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
</script>

<style scoped>
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
