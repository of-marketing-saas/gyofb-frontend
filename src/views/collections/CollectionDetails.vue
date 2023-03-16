<template>
  <v-template>
    <v-row no-gutters class="flex-nowrap">
      <control-label label="Collection Name" :title="collection.name" />
    </v-row>
    <v-row no-gutters class="flex-nowrap">
      <control-label
        label="Scheduler Count"
        :title="(collection.schedulers?.items || []).length.toLocaleString()"
      />
      <control-label
        label="Media Count"
        :title="(collection.medias?.items || []).length.toLocaleString()"
      />
      <control-label
        label="Post Count"
        :title="(collection.posts?.items || []).length.toLocaleString()"
      />
    </v-row>
  </v-template>
</template>

<script setup lang="ts">
import type { Collection } from '@/API';
import { toRefs, type PropType } from 'vue';
import ControlLabel from '@/components/form/ControlLabel.vue';

const props = defineProps({
  collection: {
    type: Object as PropType<Collection>,
    required: true,
  },
});

const { collection } = toRefs(props);
</script>
