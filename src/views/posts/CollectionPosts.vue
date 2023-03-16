<template>
  <post-table title="Collection Posts" :posts="posts"></post-table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import PostTable from '@/components/dashboards/PostTable.vue';
import { useCollectionStore } from '@/stores/collections';
import type { Post } from '@/API';

const { currentCollection } = useCollectionStore();

const posts = computed(() => (currentCollection?.posts?.items || []) as Post[]);
</script>
