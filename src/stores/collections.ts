import { ref } from 'vue';
import { defineStore } from 'pinia';
import { API } from 'aws-amplify';
import type {
  MediaCollection,
  CreateMediaCollectionInput,
  CreateMediaCollectionMutation,
  GetMediaCollectionQuery,
  ListMediaCollectionsQuery,
  DeleteMediaCollectionInput,
  DeleteMediaCollectionMutation,
} from '@/API';
import type { GraphQLQuery, GraphQLResult } from '@aws-amplify/api';
import { graphqlOperation } from '@aws-amplify/api';
import { listMediaCollections, getMediaCollection as getCollectionQuery } from '@/graphql/queries';
import {
  createMediaCollection as createCollectionMutation,
  deleteMediaCollection,
} from '@/graphql/mutations';
import { useNotificationStore } from './notification';

export const useCollectionStore = defineStore('collections', () => {
  const { triggerNotification } = useNotificationStore();
  const collections = ref<MediaCollection[]>([]);
  const currentCollection = ref<MediaCollection>({} as MediaCollection);
  const loading = ref(false);

  const loadCollections = async (userCollectionsId: string) => {
    loading.value = true;
    try {
      const results = (await API.graphql<GraphQLQuery<ListMediaCollectionsQuery>>(
        graphqlOperation(listMediaCollections, { userCollectionsId }),
      )) as GraphQLResult<ListMediaCollectionsQuery>;
      Object.assign(collections.value, results.data?.listMediaCollections?.items);
    } catch (e) {
      triggerNotification({
        color: 'error',
        title: 'Failed on loading collections.',
        subtitle: (e as Error).message,
      });
    } finally {
      loading.value = false;
    }
  };

  const createCollection = async (input: CreateMediaCollectionInput) => {
    loading.value = true;
    try {
      const result = (await API.graphql<GraphQLQuery<CreateMediaCollectionMutation>>(
        graphqlOperation(createCollectionMutation, { input }),
      )) as GraphQLResult<CreateMediaCollectionMutation>;
      const collection = result.data?.createMediaCollection;
      Object.assign(currentCollection.value, collection);
      triggerNotification({
        color: 'success',
        title: 'Succeeded on creating collection.',
      });
      return collection;
    } catch (e) {
      triggerNotification({
        color: 'error',
        title: 'Failed on loading creating collection.',
        subtitle: (e as Error).message,
      });
    } finally {
      loading.value = false;
    }
  };

  const getCollection = async (id: String) => {
    loading.value = true;
    try {
      const result = (await API.graphql<GraphQLQuery<GetMediaCollectionQuery>>(
        graphqlOperation(getCollectionQuery, { id }),
      )) as GraphQLResult<GetMediaCollectionQuery>;
      const collection = result.data?.getMediaCollection;
      Object.assign(currentCollection.value, collection);
      return collection;
    } catch (e) {
      triggerNotification({
        color: 'error',
        title: `Failed on getting collection ${id}.`,
        subtitle: (e as Error).message,
      });
    } finally {
      loading.value = false;
    }
  };

  const reloadCollection = async () => {
    await getCollection(currentCollection.value.id);
  };

  const deleteCollection = async (id: String) => {
    loading.value = true;
    try {
      const input = { id } as DeleteMediaCollectionInput;
      const result = (await API.graphql<GraphQLQuery<DeleteMediaCollectionMutation>>(
        graphqlOperation(deleteMediaCollection, { input }),
      )) as GraphQLResult<DeleteMediaCollectionMutation>;
      Object.assign(currentCollection.value, {});
      triggerNotification({
        color: 'success',
        title: `Succeeded on deleting collection ${id}.`,
      });
      return result.data?.deleteMediaCollection?.id;
    } catch (e) {
      triggerNotification({
        color: 'error',
        title: `Failed on deleting collection ${id}.`,
        subtitle: (e as Error).message,
      });
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    collections,
    currentCollection,
    getCollection,
    reloadCollection,
    loadCollections,
    createCollection,
    deleteCollection,
  };
});
