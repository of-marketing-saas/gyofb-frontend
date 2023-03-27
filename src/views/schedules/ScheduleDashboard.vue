<!-- eslint-disable vue/valid-v-slot -->
<template>
  <schedule-table
    title="Schedule Dashboard"
    :schedules="schedules"
    @delete-schedule="onDeleteSchedule"
  ></schedule-table>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useUserStore } from '@/stores/user';
import type { PostingSchedule } from '@/API';
import ScheduleTable from '@/components/dashboards/ScheduleTable.vue';
import { useScheduleStore } from '@/stores/schedules';

const { user, reloadUser } = useUserStore();
const { deleteSchedule } = useScheduleStore();
const schedules = computed(() => (user?.schedules?.items || []) as PostingSchedule[]);

const operateId = ref<string>('');

const onDeleteSchedule = async (id: string) => {
  operateId.value = id;
  await deleteSchedule(id);
  await reloadUser();
  operateId.value = '';
};
</script>

<style scoped></style>
