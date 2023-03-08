<template>
  <media-uploader :collectionId="collectionId"></media-uploader>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MediaUploader from '@/components/media/MediaUploader.vue';

const route = useRoute();
const collectionId = computed(() => route.params.collectionId as string);
</script>

<style lang="scss" scoped></style>
