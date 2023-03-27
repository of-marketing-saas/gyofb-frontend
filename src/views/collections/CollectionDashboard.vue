<!-- eslint-disable vue/valid-v-slot -->
<template>
  <collection-table
    title="Collection Dashboard"
    :collections="collections"
    :operateId="operateId"
    @delete-collection="onDeleteCollection"
  ></collection-table>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import CollectionTable from '@/components/dashboards/CollectionTable.vue';
import { useUserStore } from '@/stores/user';
import { useCollectionStore } from '@/stores/collections';
import type { MediaCollection } from '@/API';

const { user } = useUserStore();
const { deleteCollection } = useCollectionStore();

const operateId = ref<string>('');

const onDeleteCollection = async (id: string) => {
  operateId.value = id;
  try {
    const deletedId = await deleteCollection(id);
  } catch (e) {
    // Error handling
  }
  operateId.value = '';
};

const collections = computed(() => (user?.collections?.items || []) as MediaCollection[]);
</script>
