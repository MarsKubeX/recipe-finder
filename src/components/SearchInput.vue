<template>
  <div class="input-group">
    <i class="material-icons">search</i>
    <input
      @input="search"
      v-model="searchInputText"
      type="search"
      placeholder="Search for a recipe"
    />
  </div>
</template>

<script setup lang="ts">
import { useDebounce } from '@/composables/useDebounce'
import { ref } from 'vue'

const searchInputText = ref('')
const emit = defineEmits(['filterRecipes'])
const search = useDebounce((): void => {
  emit('filterRecipes', searchInputText.value)
}, 300)
</script>

<style scoped>
.input-group {
  display: flex;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
}

.input-group:focus-within {
  border: 2px solid var(--color-border-focus);
  border-radius: 0.5rem;
}

.input-group button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.input-group i {
  align-self: center;
  color: var(--color-icon);
}
</style>
