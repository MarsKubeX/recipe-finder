import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SearchInput from '@/components/SearchInput.vue'

describe('SearchInput', () => {
  it('renders properly', () => {
    const wrapper = mount(SearchInput, {})
    expect(wrapper.text()).toContain('search')
  })
})
