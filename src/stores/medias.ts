import { ref } from 'vue';
import { defineStore } from 'pinia';
import { API, Storage } from 'aws-amplify';
import type {
  Media,
  GetMediaQuery,
  DeleteMediaInput,
  DeleteMediaMutation,
  CreateMediaInput,
  CreateMediaMutation,
} from '@/API';
import type { GraphQLQuery, GraphQLResult } from '@aws-amplify/api';
import { graphqlOperation } from '@aws-amplify/api';
import { getMedia as getMediaQuery } from '@/graphql/queries';
import {
  deleteMedia as deleteMediaMutation,
  createMedia as createMediaMutation,
} from '@/graphql/mutations';
import { useNotificationStore } from './notification';

export const useMediaStore = defineStore('medias', () => {
  const { triggerNotification } = useNotificationStore();
  const currentMedia = ref<Media>({} as Media);
  const loading = ref(false);

  const createMedia = async (input: CreateMediaInput) => {
    loading.value = true;
    try {
      const result = (await API.graphql<GraphQLQuery<CreateMediaMutation>>(
        graphqlOperation(createMediaMutation, { input }),
      )) as GraphQLResult<CreateMediaMutation>;
      const media = result.data?.createMedia;
      Object.assign(currentMedia.value, media);
      triggerNotification({
        color: 'success',
        title: 'Media created',
      });
      return media;
    } catch (e) {
      triggerNotification({
        color: 'error',
        title: 'Media creation failed',
        subtitle: (e as Error).message,
      });
    } finally {
      loading.value = false;
    }
  };

  const getMedia = async (id: string) => {
    loading.value = true;
    try {
      const result = (await API.graphql<GraphQLQuery<GetMediaQuery>>(
        graphqlOperation(getMediaQuery, { id }),
      )) as GraphQLResult<GetMediaQuery>;
      const media = result.data?.getMedia;
      Object.assign(currentMedia.value, media);
      return media;
    } catch (e) {
      triggerNotification({
        color: 'error',
        title: `Failed to get media ${id}`,
        subtitle: (e as Error).message,
      });
    } finally {
      loading.value = false;
    }
  };

  const deleteMedia = async (id: string, s3Key: string) => {
    loading.value = true;
    try {
      const input = { id } as DeleteMediaInput;
      await Storage.remove(s3Key);
      const result = (await API.graphql<GraphQLQuery<DeleteMediaMutation>>(
        graphqlOperation(deleteMediaMutation, { input }),
      )) as GraphQLResult<DeleteMediaMutation>;
      const media = result.data?.deleteMedia;
      Object.assign(currentMedia.value, {});
      triggerNotification({
        color: 'success',
        title: `Successfully deleted media ${id}`,
      });
      return media?.id;
    } catch (e) {
      triggerNotification({
        color: 'error',
        title: `Failed to delete media ${id}`,
        subtitle: (e as Error).message,
      });
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    currentMedia,
    createMedia,
    getMedia,
    deleteMedia,
  };
});
