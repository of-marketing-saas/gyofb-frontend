<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-container class="d-flex flex-column pa-1">
    <v-tabs v-model="tabValue" color="primary" align-tabs="start">
      <v-tab value="post">Posts</v-tab>
      <v-tab value="collection">Collections</v-tab>
      <v-tab value="scheduler">Schedulers</v-tab>
      <v-tab value="media">Medias</v-tab>
    </v-tabs>
    <v-window v-model="tabValue">
      <v-window-item key="post" value="post">
        <post-table :posts="posts"></post-table>
      </v-window-item>
      <v-window-item key="collection" value="collection">
        <collection-table :collections="collections"></collection-table>
      </v-window-item>
      <v-window-item key="scheduler" value="scheduler">
        <scheduler-table :schedulers="schedulers"></scheduler-table>
      </v-window-item>
      <v-window-item key="media" value="media">
        <media-table :medias="medias"></media-table>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import CollectionTable from '@/components/dashboards/CollectionTable.vue';
import SchedulerTable from '@/components/dashboards/SchedulerTable.vue';
import MediaTable from '@/components/dashboards/MediaTable.vue';
import PostTable from '@/components/dashboards/PostTable.vue';
import { useUserStore } from '@/stores/user';
import type { Collection, Scheduler, Media, Post } from '@/API';

const { user } = useUserStore();

const collections = computed(() => (user?.collections?.items || []) as Collection[]);
const schedulers = computed(() => (user?.schedulers?.items || []) as Scheduler[]);
const medias = computed(() => (user?.medias?.items || []) as Media[]);
const posts = computed(() => (user?.posts?.items || []) as Post[]);

const tab = ref('post');
const tabValue = computed({
  get: () => tab.value,
  set: (value) => {
    tab.value = value;
  },
});
</script>
