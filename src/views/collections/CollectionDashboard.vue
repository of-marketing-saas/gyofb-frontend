<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-card width="100%">
    <v-card-title class="d-flex flex-row">
      Collection Dashboard
      <v-spacer></v-spacer>
      <create-collection></create-collection>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="collections"
      item-value="name"
      :loading="loading"
      class="elevation-2"
    >
      <template v-slot:item.name="{ item }">
        <v-btn variant="plain" color="info" exact :to="`/collections/${item.raw.id}`">
          {{ item.raw.name }}
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import CreateCollection from '@/views/collections/CreateCollection.vue';
import { useUserStore } from '@/stores/user';
import { useCollectionStore } from '@/stores/collections';

const headers = [
  { title: 'Collection Name', align: 'start', key: 'name', sortable: false },
  { title: 'Created At', key: 'createdAt' },
];

const { user } = useUserStore();
const { collections, loading, loadCollections } = useCollectionStore();

onMounted(() => loadCollections(user.id));
</script>

<style lang="scss" scoped></style>
