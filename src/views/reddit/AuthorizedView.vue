<template>
  <v-card width="100%">
    <v-card-title>Reddit Authorized</v-card-title>
    <v-container>
      <v-row no-gutters>
        <v-text-field
          disabled
          density="comfortable"
          label="Reddit State"
          v-model="state"
        ></v-text-field>
        <v-text-field
          disabled
          density="comfortable"
          label="Reddit Code"
          v-model="code"
        ></v-text-field>
      </v-row>
      <v-row no-gutters>
        <v-sheet v-if="!isEmpty(user)">
          <v-list-item :prepend-avatar="user.icon_img">{{ user.name }}</v-list-item>
        </v-sheet>
        <v-sheet v-else><v-btn flat color="info" @click="loadToken()">Load User</v-btn></v-sheet>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import isEmpty from 'lodash/isEmpty';
import { getRedditToken, getRedditUser } from '@/http/reddit';
import type { RedditUser } from '@/types/reddit';

export default defineComponent({
  setup: () => {
    return { isEmpty };
  },
  data: () => {
    return {
      token: '',
      user: {} as RedditUser,
    };
  },
  computed: {
    code(): string {
      return this.$route.query.code as string;
    },
    state(): string {
      return this.$route.query.state as string;
    },
  },
  methods: {
    async loadToken() {
      const data = await getRedditToken(this.code);
      const { access_token } = data;
      const user = await getRedditUser(access_token);
      this.user = user;
    },
  },
});
</script>
