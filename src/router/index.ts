import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'
import BlogView from '@/views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPolicyView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
  ],
})

export default router
