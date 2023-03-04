<template>
  <v-card width="100%">
    <v-card-title>Account Settings</v-card-title>
    <v-container>
      <v-row no-gutters class="flex-nowrap d-flex align-middle">
        <v-text-field density="comfortable" label="Username" variant="outlined"></v-text-field>
        <v-btn flat> Save </v-btn>
      </v-row>
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

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      redditConfig: {
        clientId: 'MwUgAW99DEm37iz2z4u3uQ',
        responseType: 'code',
        redirectUri: 'http://localhost:5173/reddit/authorized',
        duration: 'permanent',
        scope: 'identity edit flair history read vote wikiread wikiedit',
        state: 'GYOFB_INITIALTED',
      },
    };
  },
  computed: {
    redditAuthUrl() {
      const { clientId, state, responseType, redirectUri, duration, scope } = this.redditConfig;
      return `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&state=${state}&response_type=${responseType}&redirect_uri=${redirectUri}&duration=${duration}&scope=${scope}`;
    },
  },
});
</script>

<style scoped></style>
