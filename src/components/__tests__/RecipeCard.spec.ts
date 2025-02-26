import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import RecipeCard from '@/components/RecipeCard.vue'

describe('RecipeCard', () => {
  it('renders properly', () => {
    const wrapper = mount(RecipeCard, {
      props: {
        id: 12,
        imageUrl: 'testUrl',
        title: 'ramen',
        shortDescription: 'this is ramen',
        steps: ['1', '2'],
        ingredients: ['ramen', 'katsu'],
        preparationTime: '30 mitues',
      },
    })
    expect(wrapper.text()).toContain('ramen')
  })
})
