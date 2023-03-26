<template>
  <v-template>
    <v-row no-gutters class="flex-nowrap">
      <control-label label="Collection Name" :title="collection.name" />
      <control-label label="Description" :title="collection.description || ''" />
    </v-row>
    <v-row no-gutters class="flex-nowrap">
      <entity-counter title="Media" :count="(collection.medias?.items || []).length" />
      <entity-counter title="Post" :count="(collection.posts?.items || []).length" />
    </v-row>
  </v-template>
</template>

<script setup lang="ts">
import type { MediaCollection } from '@/API';
import { toRefs, type PropType } from 'vue';
import ControlLabel from '@/components/form/ControlLabel.vue';
import EntityCounter from '@/components/form/EntityCounter.vue';

const props = defineProps({
  collection: {
    type: Object as PropType<MediaCollection>,
    required: true,
  },
});

const { collection } = toRefs(props);
</script>
