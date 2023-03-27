import { ref } from 'vue';
import { defineStore } from 'pinia';
import { API } from 'aws-amplify';
import type {
  PostingSchedule,
  CreatePostingScheduleInput,
  CreatePostingScheduleMutation,
  GetPostingScheduleQuery,
  DeletePostingScheduleMutation,
  DeleteMediaCollectionInput,
} from '@/API';
import type { GraphQLQuery, GraphQLResult } from '@aws-amplify/api';
import { graphqlOperation } from '@aws-amplify/api';
import { getPostingSchedule as getScheduleQuery } from '@/graphql/queries';
import {
  createPostingSchedule as createScheduleMutation,
  deletePostingSchedule,
} from '@/graphql/mutations';
import { useNotificationStore } from './notification';

export const useScheduleStore = defineStore('schedules', () => {
  const { triggerNotification } = useNotificationStore();
  const currentSchedule = ref<PostingSchedule>({} as PostingSchedule);
  const loading = ref(false);

  const createSchedule = async (input: CreatePostingScheduleInput) => {
    loading.value = true;
    try {
      const result = (await API.graphql<GraphQLQuery<CreatePostingScheduleMutation>>(
        graphqlOperation(createScheduleMutation, { input }),
      )) as GraphQLResult<CreatePostingScheduleMutation>;
      const schedule = result.data?.createPostingSchedule;
      Object.assign(currentSchedule.value, schedule);
      triggerNotification({
        color: 'success',
        title: 'Succeeded on creating schedule.',
      });
      return schedule;
    } catch (e) {
      triggerNotification({
        color: 'error',
        title: 'Failed on creating schedule.',
        subtitle: (e as Error).message,
      });
    } finally {
      loading.value = false;
    }
  };

  const getSchedule = async (id: string) => {
    loading.value = true;
    try {
      const result = (await API.graphql<GraphQLQuery<GetPostingScheduleQuery>>(
        graphqlOperation(getScheduleQuery, { id }),
      )) as GraphQLResult<GetPostingScheduleQuery>;
      const schedule = result.data?.getPostingSchedule;
      Object.assign(currentSchedule.value, schedule);
      return schedule;
    } catch (e) {
      triggerNotification({
        color: 'error',
        title: `Failed on getting schedule ${id}`,
        subtitle: (e as Error).message,
      });
    } finally {
      loading.value = false;
    }
  };

  const deleteSchedule = async (id: string) => {
    loading.value = true;
    try {
      const input = { id } as DeleteMediaCollectionInput;
      const result = (await API.graphql<GraphQLQuery<DeletePostingScheduleMutation>>(
        graphqlOperation(deletePostingSchedule, { input }),
      )) as GraphQLResult<DeletePostingScheduleMutation>;
      const schedule = result.data?.deletePostingSchedule;
      Object.assign(currentSchedule.value, {});
      triggerNotification({
        color: 'success',
        title: 'Succeeded on deleting schedule.',
      });
      return schedule;
    } catch (e) {
      triggerNotification({
        color: 'error',
        title: `Failed on getting schedule ${id}`,
        subtitle: (e as Error).message,
      });
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    currentSchedule,
    createSchedule,
    getSchedule,
    deleteSchedule,
  };
});
