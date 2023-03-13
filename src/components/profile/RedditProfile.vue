<template>
  <v-row no-gutters class="flex-nowrap">
    <v-col>
      <v-list-item density="comfortable" :prepend-avatar="redditUser.icon_img">{{
        redditUser.name
      }}</v-list-item>
    </v-col>
    <v-col>
      <v-text-field
        disabled
        density="comfortable"
        label="Reddit ID"
        v-model="redditUser.id"
        class="flex-1"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import type { PropType } from 'vue';
import type { RedditUser } from '@/types/reddit';

const props = defineProps({
  redditUser: {
    type: Object as PropType<RedditUser>,
    required: true,
  },
});
const { redditUser } = toRefs(props);
</script>
