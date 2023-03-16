<template>
  <v-dialog width="75%" v-model="dialogModel">
    <template v-slot:activator="{ props }">
      <v-btn density="comfortable" color="primary" v-bind="props"> New Collection </v-btn>
    </template>
    <v-card>
      <v-card-title>Create New Collection</v-card-title>
      <v-card-text>
        <v-text-field
          clearable
          density="comfortable"
          label="Collection Name"
          v-model="name"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="tonal" color="primary" @click="onCreateCollection()">Create</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useCollectionStore } from '@/stores/collections';
import { useUserStore } from '@/stores/user';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { user } = useUserStore();
const { createCollection } = useCollectionStore();

const dialog = ref(false);
const collectionName = ref('');

const dialogModel = computed({
  get: () => dialog.value,
  set: (value) => {
    dialog.value = value;
  },
});
const name = computed({
  get: () => collectionName.value,
  set: (value) => {
    collectionName.value = value;
  },
});

const onCreateCollection = async () => {
  const collection = await createCollection({
    name: collectionName.value,
    userCollectionsId: user.id,
  });
  router.push(`/collections/${collection?.id}}`);
  dialog.value = false;
};
</script>

<style scoped></style>
