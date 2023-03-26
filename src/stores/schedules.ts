import { ref } from 'vue';
import { defineStore } from 'pinia';
import { API } from 'aws-amplify';
import type {
  PostingSchedule,
  CreatePostingScheduleInput,
  CreatePostingScheduleMutation,
  GetPostingScheduleQuery,
} from '@/API';
import type { GraphQLQuery, GraphQLResult } from '@aws-amplify/api';
import { graphqlOperation } from '@aws-amplify/api';
import { getPostingSchedule as getScheduleQuery } from '@/graphql/queries';
import { createPostingSchedule as createScheduleMutation } from '@/graphql/mutations';

export const useScheduleStore = defineStore('schedules', () => {
  const currentSchedule = ref<PostingSchedule>({} as PostingSchedule);
  const loading = ref(false);

  const createSchedule = async (input: CreatePostingScheduleInput) => {
    loading.value = true;
    const result = (await API.graphql<GraphQLQuery<CreatePostingScheduleMutation>>(
      graphqlOperation(createScheduleMutation, { input }),
    )) as GraphQLResult<CreatePostingScheduleMutation>;
    const schedule = result.data?.createPostingSchedule;
    Object.assign(currentSchedule.value, schedule);
    loading.value = false;
    return schedule;
  };

  const getSchedule = async (id: string) => {
    loading.value = true;
    const result = (await API.graphql<GraphQLQuery<GetPostingScheduleQuery>>(
      graphqlOperation(getScheduleQuery, { id }),
    )) as GraphQLResult<GetPostingScheduleQuery>;
    const schedule = result.data?.getPostingSchedule;
    Object.assign(currentSchedule.value, schedule);
    loading.value = false;
    return schedule;
  };

  return {
    loading,
    currentSchedule,
    createSchedule,
    getSchedule,
  };
});
