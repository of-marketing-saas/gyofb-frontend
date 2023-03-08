<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-card width="100%">
    <v-card-title class="d-flex flex-row align-center">
      Post Dashboard
      <v-spacer></v-spacer>
      <v-text-field
        density="comfortable"
        v-model="search"
        prepend-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="10"
      item-value="name"
      class="elevation-2"
    >
      <template v-slot:item.status="{ item }">
        <v-chip :color="getStatusColor(item.raw.status)">
          {{ item.raw.status }}
        </v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import moment from 'moment';

export default defineComponent({
  data: () => ({
    search: '',
    headers: [
      {
        title: 'Reddit Account',
        align: 'start',
        key: 'accountName',
        sortable: false,
      },
      { title: 'Post Title', key: 'postTitle' },
      { title: 'Created At', key: 'createdAt' },
      { title: 'Delivery Status', key: 'status' },
      { title: 'Start Time', key: 'startTime' },
      { title: 'Frequency (in days)', key: 'frequency' },
      { title: 'Recursion', key: 'recursion' },
    ],
    items: [
      {
        accountName: 'Frozen Yogurt',
        postTitle: "I'm a title",
        status: 'Scheduled',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        startTime: moment('2024-01-01').format('YYYY-MM-DD hh:mm:ss'),
        frequency: 2,
        recursion: 10,
      },
      {
        accountName: 'Frozen Yogurt',
        postTitle: "I'm a title",
        status: 'Live',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        startTime: moment('2024-01-01').format('YYYY-MM-DD hh:mm:ss'),
        frequency: 2,
        recursion: 10,
      },
      {
        accountName: 'Frozen Yogurt',
        postTitle: "I'm a title",
        status: 'Paused',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        startTime: moment('2024-01-01').format('YYYY-MM-DD hh:mm:ss'),
        frequency: 2,
        recursion: 10,
      },
      {
        accountName: 'Frozen Yogurt',
        postTitle: "I'm a title",
        status: 'Scheduled',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        startTime: moment('2024-01-01').format('YYYY-MM-DD hh:mm:ss'),
        frequency: 2,
        recursion: 10,
      },
      {
        accountName: 'Frozen Yogurt',
        postTitle: "I'm a title",
        status: 'Live',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        startTime: moment('2024-01-01').format('YYYY-MM-DD hh:mm:ss'),
        frequency: 2,
        recursion: 10,
      },
      {
        accountName: 'Frozen Yogurt',
        postTitle: "I'm a title",
        status: 'Live',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        startTime: moment('2024-01-01').format('YYYY-MM-DD hh:mm:ss'),
        frequency: 2,
        recursion: 10,
      },
      {
        accountName: 'Frozen Yogurt',
        postTitle: "I'm a title",
        status: 'Scheduled',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        startTime: moment('2024-01-01').format('YYYY-MM-DD hh:mm:ss'),
        frequency: 2,
        recursion: 10,
      },
      {
        accountName: 'Frozen Yogurt',
        postTitle: "I'm a title",
        status: 'Scheduled',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        startTime: moment('2024-01-01').format('YYYY-MM-DD hh:mm:ss'),
        frequency: 2,
        recursion: 10,
      },
      {
        accountName: 'Frozen Yogurt',
        postTitle: "I'm a title",
        status: 'Scheduled',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        startTime: moment('2024-01-01').format('YYYY-MM-DD hh:mm:ss'),
        frequency: 2,
        recursion: 10,
      },
      {
        accountName: 'Frozen Yogurt',
        postTitle: "I'm a title",
        status: 'Completed',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        startTime: moment('2024-01-01').format('YYYY-MM-DD hh:mm:ss'),
        frequency: 2,
        recursion: 10,
      },
      {
        accountName: 'Frozen Yogurt',
        postTitle: "I'm a title",
        status: 'Completed',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        startTime: moment('2024-01-01').format('YYYY-MM-DD hh:mm:ss'),
        frequency: 2,
        recursion: 10,
      },
      {
        accountName: 'Frozen Yogurt',
        postTitle: "I'm a title",
        status: 'Completed',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        startTime: moment('2024-01-01').format('YYYY-MM-DD hh:mm:ss'),
        frequency: 2,
        recursion: 10,
      },
      {
        accountName: 'Frozen Yogurt',
        postTitle: "I'm a title",
        status: 'Completed',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        startTime: moment('2024-01-01').format('YYYY-MM-DD hh:mm:ss'),
        frequency: 2,
        recursion: 10,
      },
      {
        accountName: 'Frozen Yogurt',
        postTitle: "I'm a title",
        status: 'Completed',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        startTime: moment('2024-01-01').format('YYYY-MM-DD hh:mm:ss'),
        frequency: 2,
        recursion: 10,
      },
    ],
  }),
  methods: {
    getStatusColor(status: string) {
      if (status === 'Scheduled') {
        return 'secondary';
      }
      if (status === 'Live') {
        return 'primary';
      }
      if (status === 'Paused') {
        return 'warning';
      }
      if (status === 'Completed') {
        return 'success';
      }
      return undefined;
    },
  },
});
</script>

<style scoped></style>
