<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-card width="100%">
    <v-card-title class="d-flex flex-row">
      Medias Dashboard
      <v-spacer></v-spacer>
      <medias-preview :medias="medias"></medias-preview>
    </v-card-title>
    <v-data-table :headers="headers" :items="medias" item-value="name" class="elevation-2">
      <template v-slot:item.s3Key="{ item }">
        <media-avatar :media="item.raw" />
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCollectionStore } from '@/stores/collections';
import MediaAvatar from '@/components/media/MediaAvatar.vue';
import MediasPreview from './MediasPreview.vue';
import type { Media } from '@/API';

const headers = [
  { title: 'Media Preview', key: 's3Key', sortable: false },
  { title: 'Media Name', align: 'start', key: 'name', sortable: false },
  { title: 'Media Type', key: 'type' },
  { title: 'Created At', key: 'createdAt' },
];

const { currentCollection } = useCollectionStore();

const medias = computed(() => (currentCollection?.medias?.items || []) as Media[]);
</script>

<style scoped></style>
