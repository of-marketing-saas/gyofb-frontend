<template>
  <media-uploader :collectionId="collectionId" @file-uploaded="onFileUploaded()"></media-uploader>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MediaUploader from '@/components/media/uploader/MediaUploader.vue';
import { useCollectionStore } from '@/stores/collections';

const { reloadCollection } = useCollectionStore();

const route = useRoute();
const collectionId = computed(() => route.params.collectionId as string);

const onFileUploaded = async () => {
  await reloadCollection();
};
</script>
