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
      path: '/schedulers',
      name: 'schedulers',
      component: () => import('../views/schedulers/SchedulerDashboard.vue'),
    },
    {
      path: '/schedulers/new',
      name: 'create-scheduler',
      component: () => import('../views/schedulers/CreateScheduler.vue'),
    },
    {
      path: '/schedulers/:schedulerId',
      name: 'scheduler-view',
      component: () => import('../views/schedulers/SchedulerView.vue'),
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
          path: '',
          redirect: { name: 'collection-medias' },
          name: 'collection-home',
        },
        {
          path: 'medias',
          name: 'collection-medias',
          component: () => import('../views/medias/CollectionMedias.vue'),
        },
        {
          path: 'posts',
          name: 'collection-posts',
          component: () => import('../views/posts/CollectionPosts.vue'),
        },
      ],
    },
    {
      path: '/collections/:collectionId/scheduler/:postId',
      name: 'post-view',
      component: () => import('../views/posts/PostView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

export default router;
