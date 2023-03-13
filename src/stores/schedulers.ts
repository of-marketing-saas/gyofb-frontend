import { ref } from 'vue';
import { defineStore } from 'pinia';
import { API } from 'aws-amplify';
import type {
  Scheduler,
  CreateSchedulerInput,
  CreateSchedulerMutation,
  GetSchedulerQuery,
} from '@/API';
import type { GraphQLQuery, GraphQLResult } from '@aws-amplify/api';
import { graphqlOperation } from '@aws-amplify/api';
import { getScheduler as getSchedulerQuery } from '@/graphql/queries';
import { createScheduler as createSchedulerMutation } from '@/graphql/mutations';

export const useSchedulerStore = defineStore('schedulers', () => {
  const currentScheduler = ref<Scheduler>({} as Scheduler);
  const loading = ref(false);

  const createScheduler = async (input: CreateSchedulerInput) => {
    loading.value = true;
    const result = (await API.graphql<GraphQLQuery<CreateSchedulerMutation>>(
      graphqlOperation(createSchedulerMutation, { input }),
    )) as GraphQLResult<CreateSchedulerMutation>;
    const scheduler = result.data?.createScheduler;
    Object.assign(currentScheduler.value, scheduler);
    loading.value = false;
    return scheduler;
  };

  const getScheduler = async (id: string) => {
    loading.value = true;
    const result = (await API.graphql<GraphQLQuery<GetSchedulerQuery>>(
      graphqlOperation(getSchedulerQuery, { id }),
    )) as GraphQLResult<GetSchedulerQuery>;
    const scheduler = result.data?.getScheduler;
    Object.assign(currentScheduler.value, scheduler);
    loading.value = false;
    return scheduler;
  };

  return {
    loading,
    currentScheduler,
    createScheduler,
    getScheduler,
  };
});
