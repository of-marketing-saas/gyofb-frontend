<template>
  <v-card width="100%">
    <v-card-title>Create Post Scheduler</v-card-title>
    <v-card-text>
      <v-row no-gutters class="flex-nowrap">
        <v-col cols="6" class="pr-2">
          <v-select
            variant="outlined"
            density="comfortable"
            chips
            label="Select a collection"
            :items="collectionOptions"
            v-model="scheduler.collectionSchedulersId"
          ></v-select>
        </v-col>
      </v-row>
      <v-row no-gutters class="flex-nowrap">
        <v-col cols="6" class="pr-2">
          <v-text-field
            variant="outlined"
            density="comfortable"
            label="Scheduler Name"
            v-model="scheduler.name"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            variant="outlined"
            density="comfortable"
            label="Scheduler status"
            readonly
            :model-value="scheduler.status"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters class="flex-nowrap">
        <v-col cols="6" class="pr-2">
          <v-text-field
            variant="outlined"
            v-model="startDate"
            density="comfortable"
            label="Start Date"
            type="date"
            suffix="PST"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            variant="outlined"
            v-model="startTime"
            density="comfortable"
            label="Start Time"
            type="time"
            suffix="PST"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters class="flex-nowrap">
        <v-col cols="6" class="pr-2">
          <v-text-field
            variant="outlined"
            v-model="endDate"
            density="comfortable"
            label="End Date"
            type="date"
            suffix="PST"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            variant="outlined"
            v-model="endTime"
            density="comfortable"
            label="End Time"
            type="time"
            suffix="PST"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters class="flex-nowrap">
        <v-col cols="6" class="pr-2">
          <v-autocomplete
            variant="outlined"
            density="comfortable"
            label="Subreddits"
            v-model="scheduler.subreddits"
            :items="subreddits"
            prepend-inner-icon="mdi-reddit"
            closable-chips
            chips
            item-title="name"
            item-value="name"
            multiple
          >
            <template v-slot:chip="{ props, item }">
              <v-chip v-bind="props" :prepend-avatar="item.raw.url" :text="item.raw.name"></v-chip>
            </template>
            <template v-slot:item="{ props, item }">
              <v-list-item
                density="comfortable"
                v-bind="props"
                :prepend-avatar="item?.raw?.url"
                :title="item?.raw?.name"
                :subtitle="item?.raw?.description"
              ></v-list-item>
            </template>
          </v-autocomplete>
        </v-col>
        <v-col cols="6">
          <v-text-field
            variant="outlined"
            density="comfortable"
            label="Post Count"
            v-model="scheduler.postTarget"
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn variant="flat" :loading="loading" color="primary" @click="onCreateScheduler()">
        Schedule
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import type { Collection, CreateSchedulerInput } from '@/API';
import moment from 'moment';
import { useSchedulerStore } from '@/stores/schedulers';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const router = useRouter();
const { loading, createScheduler } = useSchedulerStore();
const { user } = useUserStore();

const collectionOptions = computed(() => {
  const collections = (user?.collections?.items || []) as Collection[];
  return collections.map(({ id, name }) => ({ title: name, value: id }));
});

console.log(collectionOptions);
// TODO: get it from API
const subreddits = [
  {
    name: 'r/learnprogramming',
    value: 'learnprogramming',
    description: 'A subreddit for all questions related to programming in any language.',
    subscribers: 1_000_000,
    url: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
  },
];

const tomorrow = moment().startOf('day').add(1, 'day');
const scheduler = reactive<CreateSchedulerInput>({
  name: 'Default Scheduler',
  status: 'PENDING',
  startAt: tomorrow.unix(),
  endAt: tomorrow.add(7, 'day').unix(),
  postTarget: 10,
  subreddits: [],
  userSchedulersId: user.id,
} as CreateSchedulerInput);

const startDate = computed({
  get: () => moment(scheduler.startAt, 'X').format('YYYY-MM-DD'),
  set: (value: string) => {
    const datetime = moment(scheduler.startAt).format('YYYY-MM-DD HH:MM').split(' ');
    const newDateTime = `${value} ${datetime[1]}`;
    scheduler.startAt = moment(newDateTime).unix();
  },
});
const startTime = computed({
  get: () => moment(scheduler.startAt, 'X').format('HH:MM'),
  set: (value: string) => {
    const datetime = moment(scheduler.startAt, 'X').format('YYYY-MM-DD HH:MM').split(' ');
    const newDateTime = `${datetime[0]} ${value}`;
    scheduler.startAt = moment(newDateTime).unix();
  },
});
const endDate = computed({
  get: () => moment(scheduler.endAt, 'X').format('YYYY-MM-DD'),
  set: (value: string) => {
    const datetime = moment(scheduler.endAt, 'X').format('YYYY-MM-DD HH:MM').split(' ');
    const newDateTime = `${value} ${datetime[1]}`;
    scheduler.endAt = moment(newDateTime).unix();
  },
});
const endTime = computed({
  get: () => moment(scheduler.endAt, 'X').format('HH:MM'),
  set: (value: string) => {
    const datetime = moment(scheduler.endAt, 'X').format('YYYY-MM-DD HH:MM').split(' ');
    const newDateTime = `${datetime[0]} ${value}`;
    scheduler.endAt = moment(newDateTime).unix();
  },
});

const onCreateScheduler = async () => {
  console.log(scheduler);
  const createdScheduler = await createScheduler(scheduler);
  router.push(`/schedulers/${createdScheduler?.id}`);
};
</script>

<style scoped></style>
