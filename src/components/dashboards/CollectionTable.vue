<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-card width="100%">
    <v-card-title class="d-flex flex-row">
      {{ title }}
      <v-spacer></v-spacer>
      <create-collection></create-collection>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="collections"
      item-value="name"
      class="elevation-2"
      fixed-header
    >
      <template v-slot:item.name="{ item }">
        <v-btn variant="plain" color="info" exact :to="`/collections/${item.raw.id}`">
          {{ item.raw.name }}
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import type { PropType } from 'vue';
import type { MediaCollection } from '@/API';
import CreateCollection from './CreateCollection.vue';

const headers = [
  { title: 'Collection Name', align: 'start', key: 'name', sortable: false },
  { title: 'Created At', key: 'createdAt' },
];

const props = defineProps({
  collections: {
    type: Array as PropType<MediaCollection[]>,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
});
const { title, collections } = toRefs(props);
</script>
