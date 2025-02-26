<template>
  <div class="recipe-card-container"></div>
</template>

<script setup lang="ts">
interface IRecipe {
  title: string
  imageUrl: string
  shortDescription: string
}
defineProps<IRecipe>()
</script>

<style scoped></style>
