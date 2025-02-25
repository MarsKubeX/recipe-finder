import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '@/views/SearchView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'searcher',
      component: SearchView,
    },
    {
      path: '/favorite-recipes',
      name: 'favorite-recipes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/FavoriteRecipes.vue'),
    },
  ],
})

export default router
