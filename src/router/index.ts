import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/dashboard/DashboardView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/user/UserProfile.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard/DashboardView.vue'),
    },
    {
      path: '/posts/new',
      name: 'create-post',
      component: () => import('../views/posts/CreatePost.vue'),
    },
    {
      path: '/reddit/authorized',
      name: 'reddit-authorized',
      component: () => import('../views/reddit/AuthorizedView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

export default router;
