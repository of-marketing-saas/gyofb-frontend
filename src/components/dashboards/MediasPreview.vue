<template>
  <v-dialog v-model="model" width="auto">
    <template v-slot:activator="{ props }">
      <v-btn
        :disabled="isEmpty(medias)"
        density="comfortable"
        variant="text"
        color="primary"
        v-bind="props"
        >Preview</v-btn
      >
    </template>
    <v-card width="75vw">
      <v-card-text>
        <media-gallery :medias="medias" />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="dialogModel = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, toRefs, computed } from 'vue';
import type { PropType } from 'vue';
import isEmpty from 'lodash/isEmpty';
import type { Media } from '@/API';
import MediaGallery from '@/components/media/MediaGallery.vue';

const dialogModel = ref(false);

const props = defineProps({
  medias: {
    type: Array as PropType<Media[]>,
    required: true,
  },
});

const { medias } = toRefs(props);

const model = computed({
  get: () => dialogModel.value,
  set: (value) => {
    dialogModel.value = value;
  },
});
</script>

<style scoped></style>
