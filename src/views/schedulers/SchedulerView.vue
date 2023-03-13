<template>
  <v-card width="100%">
    <v-card-title>Scheduler Details</v-card-title>
    <v-card-text>
      {{ JSON.stringify(scheduler) }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useSchedulerStore } from '@/stores/schedulers';
import { useRoute } from 'vue-router';
import type { Scheduler } from '@/API';

const { getScheduler } = useSchedulerStore();

const scheduler = ref<Scheduler>({} as Scheduler);

const route = useRoute();
const schedulerId = computed(() => route.params.schedulerId as string);

const loadScheduler = async () => {
  const currentScheduler = await getScheduler(schedulerId.value);
  Object.assign(scheduler.value, currentScheduler);
};

onMounted(() => loadScheduler());
</script>

<style scoped></style>
