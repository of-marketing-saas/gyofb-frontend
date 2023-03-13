<template>
  <v-card width="100%">
    <v-card-title>Account Settings</v-card-title>
    <v-container v-if="redditUser">
      <reddit-profile :reddit-user="redditUser" />
    </v-container>
    <v-container v-else>
      <v-row no-gutters class="flex-nowrap">
        <v-btn
          flat
          density="comfortable"
          color="pink"
          prepend-icon="mdi-reddit"
          :href="redditAuthUrl"
          target="_blank"
        >
          Link Reddit Account
        </v-btn>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import RedditProfile from '@/components/profile/RedditProfile.vue';
import { useUserStore } from '@/stores/user';
import type { RedditUser } from '@/types/reddit';

const { user } = useUserStore();

const redditUser = computed(() => {
  const { accountId, accountName, accountAvator } = user;
  if (!accountId || !accountName || !accountAvator) return null;
  return {
    id: accountId,
    name: accountName,
    icon_img: accountAvator,
  } as RedditUser;
});

const redditConfig = {
  clientId: import.meta.env.VITE_REDDIT_CLIENT_ID,
  responseType: 'code',
  redirectUri: import.meta.env.VITE_REDDIT_REDIRECT_URI,
  duration: 'permanent',
  scope: 'identity edit flair history read vote wikiread wikiedit',
  state: 'GYOFB_INITIALTED',
};
const redditAuthUrl = computed(() => {
  const { clientId, state, responseType, redirectUri, duration, scope } = redditConfig;
  return `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&state=${state}&response_type=${responseType}&redirect_uri=${redirectUri}&duration=${duration}&scope=${scope}`;
});
</script>

<style scoped></style>
