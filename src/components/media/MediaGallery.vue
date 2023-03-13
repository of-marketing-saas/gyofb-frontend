<template>
  <v-row>
    <v-col v-for="media in medias" :key="media.id" class="d-flex child-flex" cols="4">
      <media-viewer :media="media"></media-viewer>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import type { Media } from '@/API';
import { toRefs } from 'vue';
import type { PropType } from 'vue';
import MediaViewer from './MediaViewer.vue';

const props = defineProps({
  medias: {
    type: Array as PropType<Media[]>,
    required: true,
  },
});
const { medias } = toRefs(props);
</script>

<style scoped></style>
