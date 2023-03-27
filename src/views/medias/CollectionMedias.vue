<!-- eslint-disable vue/valid-v-slot -->
<template>
  <media-table
    title="Collection Medias"
    :medias="medias"
    :operate-id="operateId"
    @delete-media="(id, s3Key) => onDeleteMedia(id, s3Key)"
  ></media-table>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCollectionStore } from '@/stores/collections';
import type { Media } from '@/API';
import MediaTable from '@/components/dashboards/MediaTable.vue';
import { useMediaStore } from '@/stores/medias';

const { currentCollection, reloadCollection } = useCollectionStore();
const { deleteMedia } = useMediaStore();
const operateId = ref<string>('');

const medias = computed(() => (currentCollection?.medias?.items || []) as Media[]);

const onDeleteMedia = async (id: string, s3Key: string) => {
  operateId.value = id;
  await deleteMedia(id, s3Key);
  await reloadCollection();
  operateId.value = '';
};
</script>
