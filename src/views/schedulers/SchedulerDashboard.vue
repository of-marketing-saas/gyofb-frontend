<!-- eslint-disable vue/valid-v-slot -->
<template>
  <scheduler-table title="Scheduler Dashboard" :schedulers="schedulers"></scheduler-table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '@/stores/user';
import type { Scheduler } from '@/API';
import SchedulerTable from '@/components/dashboards/SchedulerTable.vue';

const { user } = useUserStore();

const schedulers = computed(() => (user?.schedulers?.items || []) as Scheduler[]);
</script>

<style scoped></style>
