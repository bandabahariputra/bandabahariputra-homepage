import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectView from '../views/ProjectView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects/:slug',
      name: 'projects',
      component: ProjectView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
