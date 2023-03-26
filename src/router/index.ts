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
      path: '/schedules',
      name: 'schedules',
      component: () => import('../views/schedules/ScheduleDashboard.vue'),
    },
    {
      path: '/schedules/new',
      name: 'create-schedule',
      component: () => import('../views/schedules/CreateSchedule.vue'),
    },
    {
      path: '/schedules/:scheduleId',
      name: 'schedule-view',
      component: () => import('../views/schedules/ScheduleView.vue'),
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
      path: '/collections/:collectionId/schedule/:postId',
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
