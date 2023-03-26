<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-card width="100%">
    <v-card-title class="d-flex flex-row">{{ title }}</v-card-title>
    <v-data-table :headers="headers" :items="posts" item-value="name" class="elevation-2">
      <template v-slot:item.subreddit="{ item }">
        <v-chip color="primary" text-color="white" small>{{ item.raw.subreddit }}</v-chip>
      </template>
      <template v-slot:item.media="{ item }">
        <media-avatar :media="item.raw.media" />
      </template>
      <template v-slot:item.scheduler="{ item }">
        <v-btn variant="plain" color="info" exact :to="`/schedules/${item.raw.scheduler.id}`">
          {{ item.raw.scheduler.name }}
        </v-btn>
      </template>
      <template v-slot:item.createdAt="{ item }">
        {{ dateTimeFromISOString(item.raw.createdAt) }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import type { PropType } from 'vue';
import { dateTimeFromISOString } from '@/helpers/dateTimeHelper';
import type { Post } from '@/API';

const headers = [
  { title: 'Post Title', align: 'start', key: 'title', sortable: false },
  { title: 'Subreddit', key: 'subreddit' },
  { title: 'Reddit URL', key: 'url' },
  { title: 'Created At', key: 'createdAt' },
  { title: 'Media Avatar', key: 'media' },
  { title: 'Scheduler', key: 'scheduler' },
];

const props = defineProps({
  posts: {
    type: Array as PropType<Post[]>,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
});

const { title, posts } = toRefs(props);
</script>
