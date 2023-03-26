<template>
  <v-container class="elevation-2 pa-2 mr-4 d-flex flex-row align-center">
    <v-avatar color="info" class="text-h6">{{ avatar }}</v-avatar>
    <v-list-item :title="title" :subtitle="count"></v-list-item>
  </v-container>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const { title, count } = toRefs(props);

const avatar = computed(() => {
  return title.value.charAt(0).toUpperCase();
});
</script>
