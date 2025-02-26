<template>
  <div class="recipe-card-container">
    <div class="card-header-container">
      <div class="preparation-time-container">
        <i class="material-icons">schedule</i> <span>{{ preparationTime }}</span>
      </div>
      <button @click="toggleFavorite" class="icon add-fav-icon">
        <i class="material-icons" :class="!isFavorite && 'added-fav-icon'">{{
          isFavorite ? 'bookmark_added' : 'bookmark_add'
        }}</i>
      </button>
    </div>
    <img :src="imageUrl" :alt="title" />
    <h2>{{ title }}</h2>
    <p>{{ shortDescription }}</p>
    <Transition name="slide">
      <div v-if="showDetails" class="steps-container">
        <h3>Ingredients</h3>
        <ul>
          <li v-for="ingredient in ingredients" :key="ingredient">{{ ingredient }}</li>
        </ul>
        <h3>Steps</h3>
        <ul>
          <li v-for="step in steps" :key="step">{{ step }}</li>
        </ul>
      </div>
    </Transition>
    <button class="primary" @click="toggleDetails">
      {{ showDetails ? 'Read less' : 'Read more' }}
    </button>
  </div>
  <!-- Toast Notification -->
  <div v-if="showToast" class="toast">
    {{ toastMessage }}
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRecipesStore } from '@/stores/recipes.store'
import { storeToRefs } from 'pinia'

interface IRecipe {
  id: number
  title: string
  imageUrl: string
  shortDescription: string
  ingredients: string[]
  preparationTime: string
  steps: string[]
}
const props = defineProps<IRecipe>()
const store = useRecipesStore()
const { favoriteRecipeIds } = storeToRefs(store)
const showDetails = ref(false)
const showToast = ref(false)
const toastMessage = ref('')

const isFavorite = computed(() => {
  return favoriteRecipeIds.value.includes(props.id)
})

const toggleDetails = () => {
  showDetails.value = !showDetails.value
}
const toggleFavorite = () => {
  store.toggleFavorite(props.id)
  toastMessage.value = store.message || ''
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 2000)
}
</script>

<style scoped>
.recipe-card-container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  padding: 1rem;
  transition: all 0.3s ease-in-out;
  background-image: linear-gradient(
    to bottom right,
    var(--color-background-contrast),
    var(--color-background-gradient)
  );
}
.add-fav-icon {
  display: flex;
  align-self: end;
  color: var(--color-icon);
}

.slide-enter-active,
.slide-leave-active {
  transition:
    max-height 0.7s ease-in-out,
    opacity 1s;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 350px;
  opacity: 1;
}

.recipe-card-container img {
  border-radius: 0.5rem;
  width: 8rem;
  height: 8rem;
}

.steps-container {
  margin: 1rem 0;
}

.card-header-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.preparation-time-container {
  display: flex;
  align-items: center;
}

.added-fav-icon {
  color: var(--vt-c-second);
}

.toast {
  position: fixed;
  bottom: 20px;
  transform: translateX(-50%);
  background: var(--color-background-toast);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  animation: fadeInOut 2s ease-in-out;
}
@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  10% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>
