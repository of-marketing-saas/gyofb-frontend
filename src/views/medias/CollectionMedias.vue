<!-- eslint-disable vue/valid-v-slot -->
<template>
  <media-table title="Collection Medias" :medias="medias"></media-table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCollectionStore } from '@/stores/collections';
import type { Media } from '@/API';
import MediaTable from '@/components/dashboards/MediaTable.vue';

const { currentCollection } = useCollectionStore();

const medias = computed(() => (currentCollection?.medias?.items || []) as Media[]);
</script>
