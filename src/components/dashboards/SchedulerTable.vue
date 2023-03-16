<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-card width="100%">
    <v-card-title class="d-flex flex-row">
      {{ title }}
      <v-spacer></v-spacer>
      <v-btn density="comfortable" color="primary" exact to="/schedulers/new">
        New Scheduler
      </v-btn>
    </v-card-title>
    <v-data-table :headers="headers" :items="schedulers" item-value="name" class="elevation-2">
      <template v-slot:item.name="{ item }">
        <v-btn size="small" color="info" variant="plain" exact :to="`/schedulers/${item.raw.id}`">
          {{ item.raw.name }}
        </v-btn>
      </template>
      <template v-slot:item.status="{ item }">
        <v-chip density="comfortable" label :color="statusColor(item.raw.status)">
          {{ item.raw.status }}
        </v-chip>
      </template>
      <template v-slot:item.subreddits="{ item }">
        <v-chip-group v-for="subreddit in item.raw.subreddits" :key="subreddit">
          <v-chip density="comfortable" label color="secondary">{{ subreddit }}</v-chip>
        </v-chip-group>
      </template>
      <template v-slot:item.startAt="{ item }">
        {{ dateTimeFromSeconds(item.raw.startAt) }}
      </template>
      <template v-slot:item.endAt="{ item }"> {{ dateTimeFromSeconds(item.raw.endAt) }} </template>
      <template v-slot:item.createdAt="{ item }">
        {{ dateTimeFromISOString(item.raw.createdAt) }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import type { PropType } from 'vue';
import type { Scheduler } from '@/API';
import { dateTimeFromSeconds, dateTimeFromISOString } from '@/helpers/dateTimeHelper';

const headers = [
  { title: 'Name', key: 'name', sortable: false },
  { title: 'Status', key: 'status', sortable: false },
  { title: 'Subreddits', key: 'subreddits', sortable: false },
  { title: 'Start At', key: 'startAt' },
  { title: 'End At', key: 'endAt' },
  { title: 'Created At', key: 'createdAt' },
];

const props = defineProps({
  schedulers: {
    type: Array as PropType<Scheduler[]>,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
});

const statusColor = (status: string): string => {
  switch (status) {
    case 'PENDING':
      return 'secondary';
    case 'ACTIVE':
      return 'info';
    default:
      return 'success';
  }
};

const { title, schedulers } = toRefs(props);
</script>
