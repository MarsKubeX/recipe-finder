import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import RecipeCard from '@/components/RecipeCard.vue'
import { createPinia, setActivePinia } from 'pinia'
import { useRecipesStore } from '@/stores/recipes.store'

describe('SearchInput', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('renders properly', () => {
    const store = useRecipesStore()
    store.favoriteRecipeIds = [1]
    const wrapper = mount(RecipeCard, {
      props: {
        id: 1,
        title: 'Test Recipe',
        imageUrl: 'wwww.testImg',
        shortDescription: 'This is a short description',
        ingredients: ['test ingredient', 'test ingredient 2'],
        preparationTime: '1 Hour',
        steps: ['First step', 'Second step'],
      },
    })
    expect(wrapper.text()).toContain('Test Recipe')
  })
})
