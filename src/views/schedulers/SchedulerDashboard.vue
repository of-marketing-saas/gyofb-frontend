<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-card width="100%">
    <v-card-title class="d-flex flex-row"> Scheduler Dashboard </v-card-title>
    <v-data-table :headers="headers" :items="schedulers" item-value="name" class="elevation-2">
      <template v-slot:item.name="{ item }">
        <v-btn color="info" variant="plain" exact :to="`/schedulers/${item.raw.id}`">
          {{ item.raw.name }}
        </v-btn>
      </template>
      <template v-slot:item.subreddits="{ item }">
        <v-chip-group v-for="subreddit in item.raw.subreddits" :key="subreddit">
          <v-chip>{{ subreddit }}</v-chip>
        </v-chip-group>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '@/stores/user';
import type { Scheduler } from '@/API';

const headers = [
  { title: 'Name', key: 'name', sortable: false },
  { title: 'Status', key: 'status', sortable: false },
  { title: 'Subreddits', key: 'subreddits', sortable: false },
  { title: 'Start At', key: 'startAt' },
  { title: 'End At', key: 'endAt' },
  { title: 'Created At', key: 'createdAt' },
];

const { user } = useUserStore();

const schedulers = computed(() => (user?.schedulers?.items || []) as Scheduler[]);
</script>

<style scoped></style>
