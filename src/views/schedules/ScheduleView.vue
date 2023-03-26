<template>
  <v-card width="100%">
    <v-card-title>Schedule Details</v-card-title>
    <v-card-text>
      {{ JSON.stringify(schedule) }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useScheduleStore } from '@/stores/schedules';
import { useRoute } from 'vue-router';
import type { PostingSchedule } from '@/API';

const { getSchedule } = useScheduleStore();

const schedule = ref<PostingSchedule>({} as PostingSchedule);

const route = useRoute();
const scheduleId = computed(() => route.params.scheduleId as string);

const loadSchedule = async () => {
  const currentSchedule = await getSchedule(scheduleId.value);
  Object.assign(schedule.value, currentSchedule);
};

onMounted(() => loadSchedule());
</script>

<style scoped></style>
