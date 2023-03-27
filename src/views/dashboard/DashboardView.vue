<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-container class="d-flex flex-column pa-1">
    <v-tabs v-model="tabValue" color="primary" align-tabs="start">
      <v-tab value="post">Posts</v-tab>
      <v-tab value="collection">Collections</v-tab>
      <v-tab value="schedule">Schedules</v-tab>
      <v-tab value="media">Medias</v-tab>
    </v-tabs>
    <v-window v-model="tabValue">
      <v-window-item key="post" value="post">
        <post-table :posts="posts"></post-table>
      </v-window-item>
      <v-window-item key="collection" value="collection">
        <collection-table
          :collections="collections"
          :operate-id="operateId"
          @delete-collection="(id) => onDeleteCollection(id)"
        ></collection-table>
      </v-window-item>
      <v-window-item key="schedule" value="schedule">
        <schedule-table
          :schedules="schedules"
          :operate-id="operateId"
          @delete-schedule="(id) => onDeleteSchedule(id)"
        ></schedule-table>
      </v-window-item>
      <v-window-item key="media" value="media">
        <media-table
          :medias="medias"
          :operate-id="operateId"
          @delete-media="(id, s3Key) => onDeleteMedia(id, s3Key)"
        ></media-table>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import CollectionTable from '@/components/dashboards/CollectionTable.vue';
import ScheduleTable from '@/components/dashboards/ScheduleTable.vue';
import MediaTable from '@/components/dashboards/MediaTable.vue';
import PostTable from '@/components/dashboards/PostTable.vue';
import { useUserStore } from '@/stores/user';
import { useCollectionStore } from '@/stores/collections';
import { useMediaStore } from '@/stores/medias';
import { useScheduleStore } from '@/stores/schedules';
import type { MediaCollection, PostingSchedule, Media, Post } from '@/API';

const { user, reloadUser } = useUserStore();
const { deleteCollection } = useCollectionStore();
const { deleteMedia } = useMediaStore();
const { deleteSchedule } = useScheduleStore();

const operateId = ref<string>('');

const onDeleteCollection = async (id: string) => {
  operateId.value = id;
  await deleteCollection(id);
  await reloadUser();
  operateId.value = '';
};

const onDeleteSchedule = async (id: string) => {
  operateId.value = id;
  await deleteSchedule(id);
  await reloadUser();
  operateId.value = '';
};

const onDeleteMedia = async (id: string, s3Key: string) => {
  operateId.value = id;
  await deleteMedia(id, s3Key);
  await reloadUser();
  operateId.value = '';
};

const collections = computed(() => (user?.collections?.items || []) as MediaCollection[]);
const schedules = computed(() => (user?.schedules?.items || []) as PostingSchedule[]);
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
