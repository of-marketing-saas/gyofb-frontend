<template>
  <v-sheet class="pa-6" v-for="({ used, max }, key) in summary" :key="key">
    <v-row>
      <div class="text-body-2 font-weight-medium">{{ startCase(key) }}</div>
      <v-spacer></v-spacer>
      <div class="text-body-2 font-weight-medium">{{ used + '/' + max }}</div>
    </v-row>
    <v-row>
      <v-progress-linear :model-value="(used / max) * 100" :color="quotaColor(key)" />
    </v-row>
  </v-sheet>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { SubscriptionStatus, type UserQuota } from '@/types/user';
import { useUserStore } from '@/stores/user';
import startCase from 'lodash/startCase';

const StatusToQuota: Record<SubscriptionStatus, UserQuota> = {
  [SubscriptionStatus.GUEST]: {
    maxPosts: 10,
    maxMedias: 20,
    maxSchedulers: 10,
  },
  [SubscriptionStatus.LEVEL_ONE]: {
    maxPosts: 100,
    maxMedias: 100,
    maxSchedulers: 50,
  },
  [SubscriptionStatus.LEVEL_TWO]: {
    maxPosts: 200,
    maxMedias: 200,
    maxSchedulers: 100,
  },
};

const { user } = useUserStore();

const summary = computed(() => {
  const status = (user?.subscriptionStatus || SubscriptionStatus.GUEST) as SubscriptionStatus;
  const quota = StatusToQuota[status];
  const posts = user?.posts?.items || [];
  const medias = user?.medias?.items || [];
  const schedulers = user?.schedulers?.items || [];
  return {
    posts: {
      used: posts.length,
      max: quota.maxPosts,
    },
    medias: {
      used: medias.length,
      max: quota.maxMedias,
    },
    schedulers: {
      used: schedulers.length,
      max: quota.maxSchedulers,
    },
  };
});

const quotaColor = (key: string): string => {
  switch (key) {
    case 'posts':
      return 'primary';
    case 'medias':
      return 'secondary';
    case 'schedulers':
      return 'success';
    default:
      return 'primary';
  }
};
</script>
