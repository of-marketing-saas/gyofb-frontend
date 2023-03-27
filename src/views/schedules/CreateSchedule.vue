<template>
  <v-card width="100%">
    <v-card-title>Create Post Schedule</v-card-title>
    <v-card-text>
      <v-row no-gutters class="flex-nowrap">
        <v-col cols="6" class="pr-2">
          <v-select
            variant="outlined"
            density="comfortable"
            chips
            label="Select a collection"
            :items="collectionOptions"
            v-model="schedule.postingScheduleCollectionId"
          ></v-select>
        </v-col>
      </v-row>
      <v-row no-gutters class="flex-nowrap">
        <v-col cols="6" class="pr-2">
          <v-text-field
            variant="outlined"
            density="comfortable"
            label="Schedule Name"
            v-model="schedule.name"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            variant="outlined"
            density="comfortable"
            label="Schedule status"
            readonly
            :model-value="schedule.status"
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
            v-model="schedule.subreddits"
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
            v-model="schedule.postTarget"
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        class="mr-2"
        variant="flat"
        :loading="loading"
        color="primary"
        @click="onCreateSchedule()"
      >
        Schedule
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import type { MediaCollection, CreatePostingScheduleInput } from '@/API';
import moment from 'moment';
import { useScheduleStore } from '@/stores/schedules';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const router = useRouter();
const { loading, createSchedule } = useScheduleStore();
const { user, reloadUser } = useUserStore();

const collectionOptions = computed(() => {
  const collections = (user?.collections?.items || []) as MediaCollection[];
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
const schedule = reactive<CreatePostingScheduleInput>({
  name: 'Default Schedule',
  status: 'PENDING',
  startAt: tomorrow.unix(),
  endAt: tomorrow.add(7, 'day').unix(),
  postTarget: 10,
  subreddits: [],
  userSchedulesId: user.id,
});

const startDate = computed({
  get: () => moment(schedule.startAt, 'X').format('YYYY-MM-DD'),
  set: (value: string) => {
    const datetime = moment(schedule.startAt).format('YYYY-MM-DD HH:MM').split(' ');
    const newDateTime = `${value} ${datetime[1]}`;
    schedule.startAt = moment(newDateTime).unix();
  },
});
const startTime = computed({
  get: () => moment(schedule.startAt, 'X').format('HH:MM'),
  set: (value: string) => {
    const datetime = moment(schedule.startAt, 'X').format('YYYY-MM-DD HH:MM').split(' ');
    const newDateTime = `${datetime[0]} ${value}`;
    schedule.startAt = moment(newDateTime).unix();
  },
});
const endDate = computed({
  get: () => moment(schedule.endAt, 'X').format('YYYY-MM-DD'),
  set: (value: string) => {
    const datetime = moment(schedule.endAt, 'X').format('YYYY-MM-DD HH:MM').split(' ');
    const newDateTime = `${value} ${datetime[1]}`;
    schedule.endAt = moment(newDateTime).unix();
  },
});
const endTime = computed({
  get: () => moment(schedule.endAt, 'X').format('HH:MM'),
  set: (value: string) => {
    const datetime = moment(schedule.endAt, 'X').format('YYYY-MM-DD HH:MM').split(' ');
    const newDateTime = `${datetime[0]} ${value}`;
    schedule.endAt = moment(newDateTime).unix();
  },
});

const onCreateSchedule = async () => {
  const createdSchedule = await createSchedule(schedule);
  await reloadUser();
  router.push(`/schedules/${createdSchedule?.id}`);
};
</script>

<style scoped></style>
