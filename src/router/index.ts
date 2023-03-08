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
      path: '/collections',
      name: 'collections',
      component: () => import('../views/collections/CollectionDashboard.vue'),
    },
    {
      path: '/collections/:collectionId',
      name: 'collection-view',
      component: () => import('../views/collections/CollectionView.vue'),
      children: [
        {
          path: 'edit',
          name: 'collection-edit',
          component: () => import('../views/collections/CollectionEdit.vue'),
        },
        {
          path: 'posts',
          name: 'collection-posts',
          component: () => import('../views/collections/CollectionEdit.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

export default router;
