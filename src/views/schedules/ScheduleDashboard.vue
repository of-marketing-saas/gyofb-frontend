<!-- eslint-disable vue/valid-v-slot -->
<template>
  <schedule-table title="Schedule Dashboard" :schedules="schedules"></schedule-table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '@/stores/user';
import type { PostingSchedule } from '@/API';
import ScheduleTable from '@/components/dashboards/ScheduleTable.vue';

const { user } = useUserStore();

const schedules = computed(() => (user?.schedules?.items || []) as PostingSchedule[]);
</script>

<style scoped></style>
