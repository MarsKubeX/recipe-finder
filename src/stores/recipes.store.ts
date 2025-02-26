import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useRecipesStore = defineStore('recipes', () => {
  // Initial state
  const favoriteRecipeIds: Ref<number[]> = ref([])
  const message = ref<string | null>(null)
  // Actions
  const toggleFavorite = (recipeId: number) => {
    if (favoriteRecipeIds.value.includes(recipeId)) {
      favoriteRecipeIds.value = favoriteRecipeIds.value.filter((id) => id !== recipeId)
      message.value = 'Deleted from favorites'
    } else {
      favoriteRecipeIds.value.push(recipeId)
      message.value = 'Added to favorites'
    }
    // Hides the message after 2 seconds
    setTimeout(() => {
      message.value = null
    }, 2000)
  }

  return { favoriteRecipeIds, message, toggleFavorite }
})
