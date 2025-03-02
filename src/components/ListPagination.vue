<template>
  <div class="recipe-list-pagination">
    <button @click="goPreviousPage" :disabled="page === 1" class="icon">
      <i class="material-icons">arrow_back_ios</i></button
    ><span>{{ `Page ${page} of ${numberOfPages}` }}</span
    ><button @click="goNextPage" :disabled="page === numberOfPages" class="icon">
      <i class="material-icons">arrow_forward_ios</i>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  page: number
  numberOfPages: number
  goPreviousPage: () => void
  goNextPage: () => void
}>()
</script>

<style scoped>
.recipe-list-pagination {
  display: flex;
  justify-content: center;
  padding: 1rem;
  align-items: center;
}
</style>
