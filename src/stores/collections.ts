import { ref } from 'vue';
import { defineStore } from 'pinia';
import { API } from 'aws-amplify';
import type {
  Collection,
  CreateCollectionInput,
  CreateCollectionMutation,
  CreateMediaInput,
  CreateMediaMutation,
  GetCollectionQuery,
  ListCollectionsQuery,
} from '@/API';
import type { GraphQLQuery, GraphQLResult } from '@aws-amplify/api';
import { graphqlOperation } from '@aws-amplify/api';
import { listCollections, getCollection as getCollectionQuery } from '@/graphql/queries';
import {
  createCollection as createCollectionMutation,
  createMedia as createMediaMutation,
} from '@/graphql/mutations';

export const useCollectionStore = defineStore('collections', () => {
  const collections = ref<Collection[]>([]);
  const currentCollection = ref<Collection>({} as Collection);
  const loading = ref(false);

  const loadCollections = async (userCollectionsId: string) => {
    loading.value = true;
    const results = (await API.graphql<GraphQLQuery<ListCollectionsQuery>>(
      graphqlOperation(listCollections, { userCollectionsId }),
    )) as GraphQLResult<ListCollectionsQuery>;
    Object.assign(collections.value, results.data?.listCollections?.items);
    loading.value = false;
  };

  const createCollection = async (input: CreateCollectionInput) => {
    loading.value = true;
    const result = (await API.graphql<GraphQLQuery<CreateCollectionMutation>>(
      graphqlOperation(createCollectionMutation, { input }),
    )) as GraphQLResult<CreateCollectionMutation>;
    const collection = result.data?.createCollection;
    Object.assign(currentCollection.value, collection);
    loading.value = false;
    return collection;
  };

  const getCollection = async (id: String) => {
    loading.value = true;
    const result = (await API.graphql<GraphQLQuery<GetCollectionQuery>>(
      graphqlOperation(getCollectionQuery, { id }),
    )) as GraphQLResult<GetCollectionQuery>;
    const collection = result.data?.getCollection;
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
