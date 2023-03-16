<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-card width="100%">
    <v-card-title class="d-flex flex-row">
      {{ title }}
      <v-spacer></v-spacer>
      <medias-preview :medias="medias"></medias-preview>
    </v-card-title>
    <v-data-table :headers="headers" :items="medias" item-value="name" class="elevation-2">
      <template v-slot:item.s3Key="{ item }">
        <media-avatar :media="item.raw" />
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
import MediaAvatar from '@/components/media/MediaAvatar.vue';
import MediasPreview from './MediasPreview.vue';
import type { Media } from '@/API';
import { dateTimeFromISOString } from '@/helpers/dateTimeHelper';

const headers = [
  { title: 'Media Preview', key: 's3Key', sortable: false },
  { title: 'Media Name', align: 'start', key: 'name', sortable: false },
  { title: 'Media Type', key: 'type' },
  { title: 'Created At', key: 'createdAt' },
];

const props = defineProps({
  medias: {
    type: Array as PropType<Media[]>,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
});

const { title, medias } = toRefs(props);
</script>
