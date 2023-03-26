import { ref } from 'vue';
import { defineStore } from 'pinia';
import { API } from 'aws-amplify';
import type {
  MediaCollection,
  CreateMediaCollectionInput,
  CreateMediaCollectionMutation,
  CreateMediaInput,
  CreateMediaMutation,
  GetMediaCollectionQuery,
  ListMediaCollectionsQuery,
} from '@/API';
import type { GraphQLQuery, GraphQLResult } from '@aws-amplify/api';
import { graphqlOperation } from '@aws-amplify/api';
import { listMediaCollections, getMediaCollection as getCollectionQuery } from '@/graphql/queries';
import {
  createMediaCollection as createCollectionMutation,
  createMedia as createMediaMutation,
} from '@/graphql/mutations';

export const useCollectionStore = defineStore('collections', () => {
  const collections = ref<MediaCollection[]>([]);
  const currentCollection = ref<MediaCollection>({} as MediaCollection);
  const loading = ref(false);

  const loadCollections = async (userCollectionsId: string) => {
    loading.value = true;
    const results = (await API.graphql<GraphQLQuery<ListMediaCollectionsQuery>>(
      graphqlOperation(listMediaCollections, { userCollectionsId }),
    )) as GraphQLResult<ListMediaCollectionsQuery>;
    Object.assign(collections.value, results.data?.listMediaCollections?.items);
    loading.value = false;
  };

  const createCollection = async (input: CreateMediaCollectionInput) => {
    loading.value = true;
    const result = (await API.graphql<GraphQLQuery<CreateMediaCollectionMutation>>(
      graphqlOperation(createCollectionMutation, { input }),
    )) as GraphQLResult<CreateMediaCollectionMutation>;
    const collection = result.data?.createMediaCollection;
    Object.assign(currentCollection.value, collection);
    loading.value = false;
    return collection;
  };

  const getCollection = async (id: String) => {
    loading.value = true;
    const result = (await API.graphql<GraphQLQuery<GetMediaCollectionQuery>>(
      graphqlOperation(getCollectionQuery, { id }),
    )) as GraphQLResult<GetMediaCollectionQuery>;
    const collection = result.data?.getMediaCollection;
    Object.assign(currentCollection.value, collection);
    loading.value = false;
    return collection;
  };

  const createMedia = async (input: CreateMediaInput) => {
    loading.value = true;
    const result = (await API.graphql<GraphQLQuery<CreateMediaMutation>>(
      graphqlOperation(createMediaMutation, { input }),
    )) as GraphQLResult<CreateMediaMutation>;
    const media = result.data?.createMedia;
    loading.value = false;
    return media;
  };

  return {
    loading,
    collections,
    currentCollection,
    createMedia,
    getCollection,
    loadCollections,
    createCollection,
  };
});
