<template>
  <v-sheet>
    <v-card-title class="pl-0 text-subtitle-1">Subreddit Submission</v-card-title>
    <v-autocomplete
      density="comfortable"
      label="Subreddit"
      v-model="subreddit"
      :items="subreddits"
      prepend-icon="mdi-reddit"
      chips
      closable-chips
      item-title="name"
      item-value="name"
      outlined
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
    <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="submissionDate"
          density="comfortable"
          label="Submission Date"
          type="date"
          suffix="PST"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="submissionTime"
          density="comfortable"
          label="Submission Time"
          type="time"
          suffix="PST"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import moment from 'moment';

export default defineComponent({
  setup() {
    return {};
  },
  data: () => {
    return {
      submissionDate: moment().format('YYYY-MM-DD'),
      submissionTime: '12:00',
      subreddit: null,
      subreddits: [
        {
          name: 'r/learnprogramming',
          value: 'learnprogramming',
          description: 'A subreddit for all questions related to programming in any language.',
          subscribers: 1_000_000,
          url: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        },
      ],
    };
  },
});
</script>

<style scoped></style>
