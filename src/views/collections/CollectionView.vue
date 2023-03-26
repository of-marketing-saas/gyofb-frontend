<template>
  <v-container class="d-flex flex-column pa-1">
    <v-card width="100%" class="mb-2">
      <v-card-title class="d-flex flex-row"> Collection View </v-card-title>
      <v-card-text>
        <collection-details :collection="collection"></collection-details>
      </v-card-text>
    </v-card>

    <v-tabs v-model="subTab" color="primary" align-tabs="start">
      <v-tab value="collection-medias" @click="router.push(`/collections/${collectionId}/medias`)">
        Medias
      </v-tab>
      <v-tab value="collection-posts" @click="router.push(`/collections/${collectionId}/posts`)"
        >Posts</v-tab
      >
      <v-tab value="collection-edit" @click="router.push(`/collections/${collectionId}/edit`)">
        Edit Media
      </v-tab>
    </v-tabs>
    <router-view></router-view>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CollectionDetails from '@/views/collections/CollectionDetails.vue';
import { useCollectionStore } from '@/stores/collections';
import type { MediaCollection } from '@/API';

const collection = ref<MediaCollection>({} as MediaCollection);

const route = useRoute();
const router = useRouter();
const collectionId = computed(() => route.params.collectionId as string);
const { getCollection } = useCollectionStore();

const sanitizeGetCollection = async () => {
  const collectionData = await getCollection(collectionId.value);
  Object.assign(collection.value, collectionData);
};

const tab = ref(route.name);
const subTab = computed({
  get: () => tab.value,
  set: (value) => {
    tab.value = value;
  },
});

onMounted(() => sanitizeGetCollection());
</script>

<style lang="scss" scoped></style>
