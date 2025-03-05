import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useRecipesStore = defineStore('recipes', () => {
  // Initial state
  const favoriteRecipeIds: Ref<number[]> = ref([])
  const message = ref<string | null>(null)
  const favoriteRecipes = window.localStorage.getItem('favoriteRecipesIds')
  if (favoriteRecipes) {
    favoriteRecipeIds.value = JSON.parse(favoriteRecipes)
  }
  // Actions
  const toggleFavorite = (recipeId: number) => {
    if (favoriteRecipeIds.value.includes(recipeId)) {
      favoriteRecipeIds.value = favoriteRecipeIds.value.filter((id) => id !== recipeId)
      window.localStorage.setItem('favoriteRecipesIds', JSON.stringify(favoriteRecipeIds.value))
      message.value = 'Deleted from favorites'
    } else {
      favoriteRecipeIds.value.push(recipeId)
      window.localStorage.setItem('favoriteRecipesIds', JSON.stringify(favoriteRecipeIds.value))
      message.value = 'Added to favorites'
    }
    // Hides the message after 2 seconds
    setTimeout(() => {
      message.value = null
    }, 2000)
  }

  return { favoriteRecipeIds, message, toggleFavorite }
})
