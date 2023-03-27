<template>
  <v-card width="100%">
    <v-card-title>Schedule Details</v-card-title>
    <v-card-text>
      <v-row no-gutters class="flex-nowrap">
        <control-label label="Collection Name" :title="schedule.collection?.name || ''" />
      </v-row>
      <v-row no-gutters class="flex-nowrap">
        <v-col cols="6" class="pr-2">
          <control-label label="Schedule Name" :title="schedule.name" />
        </v-col>
        <v-col cols="6">
          <control-label label="Schedule Status" :title="schedule.status || ''" />
        </v-col>
      </v-row>
      <v-row no-gutters class="flex-nowrap">
        <v-col cols="6" class="pr-2">
          <control-label label="Start At" :title="dateTimeFromSeconds(schedule.startAt || 0)" />
        </v-col>
        <v-col cols="6">
          <control-label label="End At" :title="dateTimeFromSeconds(schedule.endAt || 0)" />
        </v-col>
      </v-row>
      <v-row no-gutters class="flex-nowrap">
        <v-col cols="6" class="pr-2">
          <control-label label="Subreddits" :title="(schedule.subreddits || []).join(', ')" />
        </v-col>
        <v-col cols="6">
          <control-label label="Post Target" :title="schedule.postTarget?.toLocaleString() || ''" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useScheduleStore } from '@/stores/schedules';
import { useRoute } from 'vue-router';
import type { PostingSchedule } from '@/API';
import ControlLabel from '@/components/form/ControlLabel.vue';
import { dateTimeFromSeconds } from '@/helpers/dateTimeHelper';

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
