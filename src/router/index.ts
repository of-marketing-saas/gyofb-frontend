import { createRouter, createWebHistory } from 'vue-router';
import { useAuthenticator } from '@aws-amplify/ui-vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/user',
      component: () => import('../views/AuthenticatedView.vue'),
      children: [
        {
          path: 'user',
          name: 'landing-view',
          component: () => import('../views/dashboard/DashboardView.vue'),
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('../views/dashboard/DashboardView.vue'),
        },
        {
          path: 'posts/new',
          name: 'create-post',
          component: () => import('../views/posts/CreatePost.vue'),
        },
      ],
    },
    {
      path: '/guest',
      name: 'guest',
      component: () => import('../views/UnAuthenticatedView.vue'),
    },
    {
      path: '/auth',
      name: 'authenticator',
      component: () => import('../views/AuthenticatorView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

router.beforeEach((to, from, next) => {
  const auth = useAuthenticator();
  const isAuthenticated = auth.authState === 'signedIn';
  if (isAuthenticated && to.name === 'guest') {
    next({ name: 'index' });
  }
  if (!isAuthenticated) {
    if (to.name !== 'guest' && to.name !== 'authenticator') {
      next({ name: 'guest' });
      return;
    }
  }
  next();
});

export default router;
