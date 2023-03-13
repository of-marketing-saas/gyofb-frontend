<template>
  <v-card width="100%">
    <v-card-title class="d-flex flex-row">
      Collection View
      <v-spacer></v-spacer>
      <v-btn
        v-show="route.name !== 'collection-edit'"
        density="comfortable"
        variant="flat"
        color="info"
        exact
        :to="`/collections/${collectionId}/edit`"
      >
        Add Media
      </v-btn>
    </v-card-title>
    <v-card-text>
      <collection-details :collection="collection"></collection-details>
    </v-card-text>
    <router-view></router-view>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import CollectionDetails from '@/views/collections/CollectionDetails.vue';
import { useCollectionStore } from '@/stores/collections';
import type { Collection } from '@/API';

const collection = ref<Collection>({} as Collection);

const route = useRoute();
const collectionId = computed(() => route.params.collectionId as string);
const { getCollection } = useCollectionStore();

const sanitizeGetCollection = async () => {
  const collectionData = await getCollection(collectionId.value);
  Object.assign(collection.value, collectionData);
};

onMounted(() => sanitizeGetCollection());
</script>

<style lang="scss" scoped></style>
