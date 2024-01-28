import { createRouter, createWebHistory } from 'vue-router'

// Si se importa se puede usar en todo el proyecto
import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import GalleryView from '@/views/GalleryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
      // de esta manera se hace para indicar que solo se hace aquí 
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path:'/gallery',
      name: 'gallery',
      component: GalleryView
    }
  ]
})

export default router
