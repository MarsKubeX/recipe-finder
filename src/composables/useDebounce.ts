/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from 'vue'

export function useDebounce(fn: (...args: any[]) => void, delay: number) {
  const timeoutId = ref<number | null>(null)

  const debouncedFunction = (...args: any[]) => {
    // Clean timeout if exists
    if (timeoutId.value !== null) {
      clearTimeout(timeoutId.value)
    }

    // New timeout
    timeoutId.value = window.setTimeout(() => {
      fn(...args) // call the function
    }, delay)
  }

  return debouncedFunction
}
