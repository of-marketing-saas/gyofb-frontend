<template>
  <v-template>
    <v-row no-gutters>
      <v-text-field
        density="comfortable"
        disabled
        label="Collection Name"
        v-model="collection.name"
      ></v-text-field>
    </v-row>
    <v-row no-gutters>
      <v-text-field
        density="comfortable"
        disabled
        label="Media Count"
        v-model="(collection.medias?.items || []).length"
      ></v-text-field>
      <v-text-field
        density="comfortable"
        disabled
        label="Post Count"
        v-model="(collection.posts?.items || []).length"
      ></v-text-field>
      <v-text-field
        density="comfortable"
        disabled
        label="Scheduler Count"
        v-model="(collection.schedulers?.items || []).length"
      ></v-text-field>
    </v-row>
  </v-template>
</template>

<script setup lang="ts">
import type { Collection } from '@/API';
import { toRefs, type PropType } from 'vue';

const props = defineProps({
  collection: {
    type: Object as PropType<Collection>,
    required: true,
  },
});

const { collection } = toRefs(props);
</script>
